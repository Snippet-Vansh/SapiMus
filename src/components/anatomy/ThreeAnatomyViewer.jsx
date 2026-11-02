import React, { useEffect, useRef, useState, useCallback } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js';
import { 
  RotateCw, 
  ZoomIn, 
  ZoomOut, 
  Sparkles, 
  Crosshair, 
  RotateCcw,
  Compass
} from 'lucide-react';
import { 
  MODEL_TO_SAPIMUS_MAP, 
  SAPIMUS_TO_MODEL_GROUPS, 
  parseMuscleMeshName 
} from '../../utils/anatomyModelHelper';

export const ThreeAnatomyViewer = ({ 
  activeMuscleId = 'chest', 
  onSelectMuscle,
  onSubdivisionClick 
}) => {
  const mountRef = useRef(null);
  const [loading, setLoading] = useState(true);
  const [loadProgress, setLoadProgress] = useState(0);
  const [loadingStage, setLoadingStage] = useState('Initializing anatomy pipeline...');
  const [isAutoRotating, setIsAutoRotating] = useState(false);
  const [hoveredDetails, setHoveredDetails] = useState(null);
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });
  const [activeSubdivision, setActiveSubdivision] = useState(null);
  const [currentDegree, setCurrentDegree] = useState(0);
  const [activeViewKey, setActiveViewKey] = useState('front');

  // Three.js internal references
  const sceneRef = useRef(null);
  const cameraRef = useRef(null);
  const rendererRef = useRef(null);
  const controlsRef = useRef(null);
  const animationFrameRef = useRef(null);
  const modelRootRef = useRef(null);
  const muscleGroupsRef = useRef({}); // groupName -> { mat, baseColor, meshes: [] }
  const pickMeshesRef = useRef([]);
  const raycasterRef = useRef(new THREE.Raycaster());
  const mouseRef = useRef(new THREE.Vector2(-999, -999));
  const pointerDownPosRef = useRef({ x: 0, y: 0 });
  const pointerDownTimeRef = useRef(0);
  const modelHeightRef = useRef(1.8);
  const sphericalAnimRef = useRef(null); // Smooth spherical animation state

  // Natural Medical Anatomy Material Palette
  const C = {
    baseMuscle: new THREE.Color('#9E4437'), // Rich natural muscle red-brown
    deepTissue: new THREE.Color('#783830'), // Deep fascia / tendons
    activeNeon: new THREE.Color('#C7FF3D'), // SapiMus signature neon lime
    activeEmissive: new THREE.Color('#558800'),
    headScan: new THREE.Color('#98826D')    // Anatomical head bust
  };

  /* -------------------------------------------------------------
     Scene Initialization & GLTF Loading
     ------------------------------------------------------------- */
  useEffect(() => {
    const currentMount = mountRef.current;
    if (!currentMount) return;

    const width = currentMount.clientWidth || 500;
    const height = currentMount.clientHeight || 560;

    // 1. Scene
    const scene = new THREE.Scene();
    sceneRef.current = scene;
    scene.background = new THREE.Color('#0B0B0D');

    // 2. Camera: Starting position precisely at Front View (0°)
    const camera = new THREE.PerspectiveCamera(34, width / height, 0.1, 80);
    camera.position.set(0, 0.95, 3.4);
    cameraRef.current = camera;

    // 3. Renderer
    const renderer = new THREE.WebGLRenderer({ 
      antialias: true, 
      alpha: true, 
      powerPreference: 'high-performance' 
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;
    rendererRef.current = renderer;
    currentMount.appendChild(renderer.domElement);

    // 4. OrbitControls with 180° front-to-back rotation limits & natural damping
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.target.set(0, 0.95, 0);
    controls.enableDamping = true;
    controls.dampingFactor = 0.06;
    controls.minDistance = 1.1;
    controls.maxDistance = 4.8;

    // Center lock: disable panning so model remains strictly centered during rotation
    controls.enablePan = false;

    // Horizontal 180-degree rotation bounds:
    // Front view is 0°. Rotating right reaches +180° (Back). Rotating left reaches -180° (Back).
    // Rotation is stopped at 180° and cannot rotate beyond these limits.
    controls.minAzimuthAngle = -Math.PI; // -180°
    controls.maxAzimuthAngle = Math.PI;  // +180°

    // Vertical angle adjustments within sensible limits (prevents disorienting flip)
    controls.minPolarAngle = Math.PI * 0.28; // ~50° looking down at torso
    controls.maxPolarAngle = Math.PI * 0.62; // ~111° looking up at calves

    // Touch support for mobile: single finger rotates horizontally, two fingers zoom
    controls.touches = {
      ONE: THREE.TOUCH.ROTATE,
      TWO: THREE.TOUCH.DOLLY_PAN
    };

    controlsRef.current = controls;

    // 5. Studio Directional & Rim Lighting Setup
    const hemiLight = new THREE.HemisphereLight(0xDFE6EA, 0x221A15, 0.55);
    scene.add(hemiLight);

    const keyLight = new THREE.DirectionalLight(0xFFF2E2, 2.4);
    keyLight.position.set(2.0, 3.5, 2.5);
    keyLight.castShadow = true;
    keyLight.shadow.mapSize.set(2048, 2048);
    keyLight.shadow.bias = -0.0004;
    keyLight.shadow.radius = 4;
    scene.add(keyLight);

    const fillLight = new THREE.DirectionalLight(0x9EB3CC, 0.7);
    fillLight.position.set(-2.5, 1.8, 1.5);
    scene.add(fillLight);

    const rimLight = new THREE.DirectionalLight(0xC7FF3D, 1.2);
    rimLight.position.set(-1.8, 2.5, -3.0);
    scene.add(rimLight);

    // Anatomical Turntable Pedestal
    const pedestal = new THREE.Mesh(
      new THREE.CylinderGeometry(0.65, 0.72, 0.08, 64),
      new THREE.MeshStandardMaterial({ 
        color: 0x16161D, 
        roughness: 0.9, 
        metalness: 0.1 
      })
    );
    pedestal.position.y = -0.04;
    pedestal.receiveShadow = true;
    scene.add(pedestal);

    // Neon Accent Ring
    const ringGeo = new THREE.RingGeometry(0.68, 0.71, 64);
    const ringMat = new THREE.MeshBasicMaterial({ 
      color: 0xC7FF3D, 
      side: THREE.DoubleSide, 
      transparent: true, 
      opacity: 0.35 
    });
    const ring = new THREE.Mesh(ringGeo, ringMat);
    ring.rotation.x = Math.PI / 2;
    ring.position.y = 0.005;
    scene.add(ring);

    // 6. Configure DRACOLoader and GLTFLoader
    const dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath('/draco/');

    const gltfLoader = new GLTFLoader();
    gltfLoader.setDRACOLoader(dracoLoader);

    const bodyGroup = new THREE.Group();
    scene.add(bodyGroup);
    modelRootRef.current = bodyGroup;

    const tissueMaterial = new THREE.MeshStandardMaterial({
      color: C.deepTissue,
      roughness: 0.88,
      metalness: 0.05,
      side: THREE.DoubleSide
    });

    // 7. Load Model Data
    const loadModel = async () => {
      try {
        setLoadingStage('Fetching muscle mapping atlas...');
        const mapRes = await fetch('/models/muscle_group_map.json');
        const mapData = await mapRes.json();

        const norm = (s) => (s || '').toLowerCase().replace(/_/g, ' ').replace(/\s+/g, ' ').trim();
        const nameToGroup = new Map();
        const groupsObj = {};

        const allGroupNames = Object.keys(mapData);
        allGroupNames.forEach((groupName, i) => {
          const jitter = ((i * 37) % 11) / 11 - 0.5;
          const baseColor = C.baseMuscle.clone().offsetHSL(jitter * 0.015, jitter * 0.04, jitter * 0.03);

          const mat = new THREE.MeshStandardMaterial({
            color: baseColor.clone(),
            roughness: 0.84,
            metalness: 0.05,
            side: THREE.DoubleSide,
            emissive: new THREE.Color(0x000000),
            emissiveIntensity: 0
          });

          groupsObj[groupName] = {
            mat,
            baseColor,
            meshes: [],
            isHighlighted: false
          };

          mapData[groupName].forEach(meshName => {
            nameToGroup.set(norm(meshName), groupName);
          });
        });

        muscleGroupsRef.current = groupsObj;

        // Load Anatomy GLB
        setLoadingStage('Loading full-body muscular system (Z-Anatomy)...');
        gltfLoader.load(
          '/models/anatomy.glb',
          (gltf) => {
            const root = gltf.scene;

            root.rotation.x = -Math.PI / 2;
            root.scale.setScalar(0.001);
            root.updateMatrixWorld(true);

            const pickables = [];
            root.traverse((o) => {
              if (!o.isMesh) return;
              const group = nameToGroup.get(norm(o.name));
              if (group && groupsObj[group]) {
                o.material = groupsObj[group].mat;
                o.userData.muscleGroup = group;
                o.userData.sapimusId = MODEL_TO_SAPIMUS_MAP[group] || 'chest';
                o.userData.rawName = o.name;
                groupsObj[group].meshes.push(o);
                pickables.push(o);
              } else {
                o.material = tissueMaterial;
                o.userData.rawName = o.name;
              }
              o.castShadow = true;
              o.receiveShadow = true;
            });

            // Filter cadaver facial tissue to prepare for scanned bust
            const facialMeshes = [];
            const fullBox = new THREE.Box3().setFromObject(root);
            const totalH = fullBox.max.y - fullBox.min.y;
            const chinLevel = fullBox.max.y - 0.145 * totalH;
            const tempBox = new THREE.Box3();

            root.traverse((o) => {
              if (!o.isMesh) return;
              tempBox.setFromObject(o);
              const span = tempBox.max.y - tempBox.min.y;
              const isHeadPart = tempBox.min.y > chinLevel || 
                ((tempBox.min.y + tempBox.max.y) / 2 > chinLevel && span < 0.05 * totalH);
              if (isHeadPart) {
                o.visible = false;
                facialMeshes.push(o);
              }
            });

            pickMeshesRef.current = pickables.filter(m => m.visible);

            // Center figure and rest on pedestal
            const boundBox = new THREE.Box3().setFromObject(root);
            const center = boundBox.getCenter(new THREE.Vector3());
            root.position.x -= center.x;
            root.position.z -= center.z;
            root.position.y -= boundBox.min.y;
            bodyGroup.add(root);
            root.updateMatrixWorld(true);

            const finalHeight = boundBox.max.y - boundBox.min.y;
            modelHeightRef.current = finalHeight;

            // Frame camera centered at Front View (0°)
            controls.target.set(0, finalHeight * 0.52, 0);
            camera.position.set(0, finalHeight * 0.52, finalHeight * 1.85);

            // Fit scanned anatomical head bust
            setLoadingStage('Adding anatomical cranial scan...');
            gltfLoader.load('/models/head.glb', (headGltf) => {
              let headMesh = null;
              headGltf.scene.traverse(o => {
                if (o.isMesh && !headMesh) headMesh = o;
              });

              if (headMesh) {
                const cutPlane = new THREE.Plane(new THREE.Vector3(0, 1, 0), 0);
                const headMat = new THREE.MeshStandardMaterial({
                  color: C.headScan,
                  roughness: 0.76,
                  metalness: 0.0,
                  clippingPlanes: [cutPlane],
                  clipShadows: true,
                  side: THREE.DoubleSide
                });

                const head = new THREE.Mesh(headMesh.geometry, headMat);
                head.castShadow = true;
                head.receiveShadow = true;

                head.geometry.computeBoundingBox();
                const hb = head.geometry.boundingBox;
                const hSize = hb.getSize(new THREE.Vector3());
                const hMid = hb.getCenter(new THREE.Vector3());

                const headScale = (totalH * 0.17) / hSize.y;
                head.scale.setScalar(headScale);
                head.position.set(
                  -hMid.x * headScale,
                  finalHeight - (hb.max.y * headScale) + (totalH * 0.015),
                  -hMid.z * headScale
                );
                cutPlane.constant = -(finalHeight - totalH * 0.14);
                bodyGroup.add(head);
              }

              setLoading(false);
            }, undefined, () => {
              setLoading(false);
            });

          },
          (xhr) => {
            if (xhr.total > 0) {
              const pct = Math.round((xhr.loaded / xhr.total) * 100);
              setLoadProgress(pct);
            }
          },
          (err) => {
            console.error('Anatomy GLB load error:', err);
            setLoading(false);
          }
        );

      } catch (err) {
        console.error('Failed to init anatomy model:', err);
        setLoading(false);
      }
    };

    loadModel();

    // 8. Animation & Render Loop with Spherical Interpolation
    let lastDegreeUpdate = 0;

    const animate = () => {
      animationFrameRef.current = requestAnimationFrame(animate);

      // Smooth Spherical Easing for Preset Buttons
      if (sphericalAnimRef.current && controlsRef.current) {
        const anim = sphericalAnimRef.current;
        const now = performance.now();
        const elapsed = (now - anim.startTime) / anim.duration;

        if (elapsed >= 1) {
          // Completed animation
          const finalTheta = anim.endTheta;
          const finalPhi = anim.endPhi;
          const finalR = anim.endRadius;
          const target = controlsRef.current.target;

          camera.position.set(
            target.x + finalR * Math.sin(finalPhi) * Math.sin(finalTheta),
            target.y + finalR * Math.cos(finalPhi),
            target.z + finalR * Math.sin(finalPhi) * Math.cos(finalTheta)
          );
          sphericalAnimRef.current = null;
        } else {
          // Natural cubic ease-in-out
          const t = elapsed;
          const ease = t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

          const curTheta = anim.startTheta + (anim.endTheta - anim.startTheta) * ease;
          const curPhi = anim.startPhi + (anim.endPhi - anim.startPhi) * ease;
          const curR = anim.startRadius + (anim.endRadius - anim.startRadius) * ease;
          const target = controlsRef.current.target;

          camera.position.set(
            target.x + curR * Math.sin(curPhi) * Math.sin(curTheta),
            target.y + curR * Math.cos(curPhi),
            target.z + curR * Math.sin(curPhi) * Math.cos(curTheta)
          );
        }
      }

      controls.update();

      // Update current degree readout every ~80ms
      const now = performance.now();
      if (now - lastDegreeUpdate > 80 && controlsRef.current) {
        const az = controlsRef.current.getAzimuthalAngle();
        const deg = Math.round((az * 180) / Math.PI);
        setCurrentDegree(deg);
        lastDegreeUpdate = now;
      }

      renderer.render(scene, camera);
    };
    animate();

    // 9. Resize Handling
    const handleResize = () => {
      if (!currentMount || !renderer || !camera) return;
      const newW = currentMount.clientWidth;
      const newH = currentMount.clientHeight;
      camera.aspect = newW / newH;
      camera.updateProjectionMatrix();
      renderer.setSize(newW, newH);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
      window.removeEventListener('resize', handleResize);
      dracoLoader.dispose();
      renderer.dispose();
      if (currentMount.contains(renderer.domElement)) {
        currentMount.removeChild(renderer.domElement);
      }
    };
  }, []);

  /* -------------------------------------------------------------
     Update Active Highlight on Selected Muscle Group
     ------------------------------------------------------------- */
  useEffect(() => {
    if (!muscleGroupsRef.current) return;
    const groups = muscleGroupsRef.current;
    const targetGroups = SAPIMUS_TO_MODEL_GROUPS[activeMuscleId] || [];

    Object.keys(groups).forEach((grpName) => {
      const g = groups[grpName];
      if (!g || !g.mat) return;

      const isCurrentActive = targetGroups.includes(grpName);

      if (isCurrentActive) {
        g.mat.color.copy(C.activeNeon);
        g.mat.emissive.copy(C.activeEmissive);
        g.mat.emissiveIntensity = 0.65;
        g.isHighlighted = true;
      } else {
        g.mat.color.copy(g.baseColor);
        g.mat.emissive.setHex(0x000000);
        g.mat.emissiveIntensity = 0;
        g.isHighlighted = false;
      }
    });
  }, [activeMuscleId]);

  /* -------------------------------------------------------------
     Raycasting for Hover & Click Selection (Preserves drag vs click)
     ------------------------------------------------------------- */
  const handlePointerMove = useCallback((e) => {
    const mount = mountRef.current;
    if (!mount || !cameraRef.current || !rendererRef.current) return;

    const rect = mount.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    const y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
    mouseRef.current.set(x, y);

    raycasterRef.current.setFromCamera(mouseRef.current, cameraRef.current);
    const intersects = raycasterRef.current.intersectObjects(pickMeshesRef.current, false);

    if (intersects.length > 0) {
      const hit = intersects[0].object;
      const parsed = parseMuscleMeshName(hit.userData.rawName);
      const sapimusId = hit.userData.sapimusId || 'chest';

      setHoveredDetails({
        title: parsed.title,
        subdivision: parsed.subdivision,
        side: parsed.side,
        sapimusId: sapimusId
      });
      setTooltipPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
      mount.style.cursor = 'pointer';
    } else {
      setHoveredDetails(null);
      mount.style.cursor = 'grab';
    }
  }, []);

  const handlePointerDown = (e) => {
    pointerDownPosRef.current = { x: e.clientX, y: e.clientY };
    pointerDownTimeRef.current = performance.now();
    // Stop any active scripted camera animation if user grabs the model
    sphericalAnimRef.current = null;
  };

  const handlePointerUp = (e) => {
    const dx = Math.abs(e.clientX - pointerDownPosRef.current.x);
    const dy = Math.abs(e.clientY - pointerDownPosRef.current.y);
    const dt = performance.now() - pointerDownTimeRef.current;

    // If moved more than 6px or held longer than 350ms, it was a rotation drag, NOT a muscle click
    if (dx > 6 || dy > 6 || dt > 350) return;

    const mount = mountRef.current;
    if (!mount || !cameraRef.current) return;

    const rect = mount.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    const y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
    mouseRef.current.set(x, y);

    raycasterRef.current.setFromCamera(mouseRef.current, cameraRef.current);
    const intersects = raycasterRef.current.intersectObjects(pickMeshesRef.current, false);

    if (intersects.length > 0) {
      const hit = intersects[0].object;
      const sapimusId = hit.userData.sapimusId;
      const parsed = parseMuscleMeshName(hit.userData.rawName);

      setActiveSubdivision({
        title: parsed.title,
        subdivision: parsed.subdivision,
        side: parsed.side
      });

      if (sapimusId && onSelectMuscle) {
        onSelectMuscle(sapimusId);
      }
      if (onSubdivisionClick) {
        onSubdivisionClick(parsed);
      }
    }
  };

  /* -------------------------------------------------------------
     Spherical View Presets: Front (0°), Back (180°), Left (-90°), Right (+90°), Reset
     ------------------------------------------------------------- */
  const animateToView = (viewKey) => {
    if (!cameraRef.current || !controlsRef.current) return;
    const controls = controlsRef.current;
    const camera = cameraRef.current;
    const target = controls.target;

    // Calculate current spherical coordinates around target
    const offset = camera.position.clone().sub(target);
    const currentRadius = offset.length();
    const currentPhi = Math.acos(Math.max(-1, Math.min(1, offset.y / currentRadius)));
    const currentTheta = Math.atan2(offset.x, offset.z);

    const defaultRadius = (modelHeightRef.current || 1.8) * 1.85;
    const standardPhi = Math.PI * 0.5; // Level eye height

    let targetTheta = 0;
    let targetPhi = currentPhi;
    let targetRadius = currentRadius;

    switch (viewKey) {
      case 'front':
        targetTheta = 0; // Front = 0°
        setActiveViewKey('front');
        break;

      case 'back':
        // Navigate via the shortest/nearest rotation direction to 180°
        targetTheta = currentTheta >= 0 ? Math.PI : -Math.PI; // Back = 180°
        setActiveViewKey('back');
        break;

      case 'left':
        targetTheta = -Math.PI * 0.5; // Left = -90°
        setActiveViewKey('left');
        break;

      case 'right':
        targetTheta = Math.PI * 0.5; // Right = +90°
        setActiveViewKey('right');
        break;

      case 'reset':
      default:
        targetTheta = 0; // Return to Front (0°)
        targetPhi = standardPhi;
        targetRadius = defaultRadius;
        setActiveViewKey('front');
        break;
    }

    // Launch smooth spherical interpolation
    sphericalAnimRef.current = {
      startTime: performance.now(),
      duration: 650, // 650ms smooth easing
      startTheta: currentTheta,
      endTheta: targetTheta,
      startPhi: currentPhi,
      endPhi: targetPhi,
      startRadius: currentRadius,
      endRadius: targetRadius
    };
  };

  const handleZoom = (direction) => {
    if (!cameraRef.current || !controlsRef.current) return;
    const factor = direction === 'in' ? 0.82 : 1.22;
    const offset = cameraRef.current.position.clone().sub(controlsRef.current.target).multiplyScalar(factor);
    cameraRef.current.position.copy(controlsRef.current.target).add(offset);
  };

  const toggleAutoRotate = () => {
    setIsAutoRotating(prev => {
      const next = !prev;
      if (controlsRef.current) controlsRef.current.autoRotate = next;
      return next;
    });
  };

  // Helper label for the current angle
  const getAngleLabel = (deg) => {
    if (Math.abs(deg) <= 15) return 'Front View (0°)';
    if (Math.abs(deg) >= 165) return 'Back View (180°)';
    if (deg >= 75 && deg <= 105) return 'Right Lateral (+90°)';
    if (deg <= -75 && deg >= -105) return 'Left Lateral (-90°)';
    return deg > 0 ? `Right ${deg}°` : `Left ${Math.abs(deg)}°`;
  };

  return (
    <div className="relative w-full h-[580px] sm:h-[640px] rounded-3xl overflow-hidden bg-[#0A0A0D] border border-surface-border shadow-2xl select-none">
      
      {/* 3D WebGL Canvas */}
      <div 
        ref={mountRef}
        onPointerMove={handlePointerMove}
        onPointerDown={handlePointerDown}
        onPointerUp={handlePointerUp}
        style={{ touchAction: 'none' }}
        className="w-full h-full cursor-grab active:cursor-grabbing"
      />

      {/* Loading Overlay */}
      {loading && (
        <div className="absolute inset-0 z-30 bg-[#0B0B0D]/95 backdrop-blur-md flex flex-col items-center justify-center p-6 text-center">
          <div className="relative mb-6">
            <div className="w-16 h-16 rounded-full border-2 border-surface-border border-t-accent animate-spin" />
            <Sparkles className="w-6 h-6 text-accent absolute inset-0 m-auto animate-pulse" />
          </div>

          <div className="text-white font-extrabold text-lg sm:text-xl tracking-tight mb-2">
            Loading Real 3D Muscular Anatomy
          </div>

          <p className="text-xs sm:text-sm text-text-secondary max-w-sm mb-6 font-mono">
            {loadingStage}
          </p>

          <div className="w-64 h-2 bg-surface-card rounded-full overflow-hidden border border-surface-border">
            <div 
              className="h-full bg-gradient-to-r from-accent to-[#E0FF88] transition-all duration-300 rounded-full"
              style={{ width: `${Math.max(15, loadProgress)}%` }}
            />
          </div>

          <div className="text-[11px] font-mono text-accent mt-3">
            BodyParts3D & Z-Anatomy • 467 Separated Muscle Meshes
          </div>
        </div>
      )}

      {/* Floating Header Badges */}
      <div className="absolute top-4 left-4 z-10 flex flex-col gap-2 pointer-events-none">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/75 backdrop-blur-md border border-white/10 text-xs font-mono text-accent">
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          <span className="font-bold">180° Muscular Explorer</span>
        </div>
        
        {/* Real-time Angle Readout */}
        <div className="text-[11px] font-mono text-text-secondary bg-black/60 px-3 py-1.5 rounded-xl backdrop-blur-sm border border-white/10 flex items-center gap-2">
          <Compass className="w-3.5 h-3.5 text-accent" />
          <span>Rotation: <strong className="text-white font-bold">{getAngleLabel(currentDegree)}</strong></span>
          <span className="text-[10px] text-accent/80 font-mono">[{currentDegree}°]</span>
        </div>
      </div>

      {/* View Presets Bar (Top Right) */}
      <div className="absolute top-4 right-4 z-10 flex items-center gap-1.5 bg-black/85 backdrop-blur-md p-1.5 rounded-2xl border border-white/10 shadow-card">
        
        {/* Front Button (0°) */}
        <button
          onClick={() => animateToView('front')}
          className={`px-3 py-1.5 rounded-xl text-xs font-mono font-semibold transition-all ${
            activeViewKey === 'front' && Math.abs(currentDegree) <= 15
              ? 'bg-accent text-black font-bold shadow-glow-sm'
              : 'text-text-secondary hover:text-white hover:bg-white/10'
          }`}
          title="Return to Front View (0°)"
        >
          Front (0°)
        </button>

        {/* Left Button (-90°) */}
        <button
          onClick={() => animateToView('left')}
          className={`px-2.5 py-1.5 rounded-xl text-xs font-mono font-semibold transition-all ${
            activeViewKey === 'left' && currentDegree <= -75 && currentDegree >= -105
              ? 'bg-accent text-black font-bold shadow-glow-sm'
              : 'text-text-secondary hover:text-white hover:bg-white/10'
          }`}
          title="Rotate to Left View (-90°)"
        >
          Left (-90°)
        </button>

        {/* Right Button (+90°) */}
        <button
          onClick={() => animateToView('right')}
          className={`px-2.5 py-1.5 rounded-xl text-xs font-mono font-semibold transition-all ${
            activeViewKey === 'right' && currentDegree >= 75 && currentDegree <= 105
              ? 'bg-accent text-black font-bold shadow-glow-sm'
              : 'text-text-secondary hover:text-white hover:bg-white/10'
          }`}
          title="Rotate to Right View (+90°)"
        >
          Right (+90°)
        </button>

        {/* Back Button (180°) */}
        <button
          onClick={() => animateToView('back')}
          className={`px-3 py-1.5 rounded-xl text-xs font-mono font-semibold transition-all ${
            activeViewKey === 'back' && Math.abs(currentDegree) >= 165
              ? 'bg-accent text-black font-bold shadow-glow-sm'
              : 'text-text-secondary hover:text-white hover:bg-white/10'
          }`}
          title="Rotate to Back View (180°)"
        >
          Back (180°)
        </button>

        <div className="w-[1px] h-5 bg-white/10 mx-0.5 hidden sm:block" />

        {/* Reset Button */}
        <button
          onClick={() => animateToView('reset')}
          className="px-2.5 py-1.5 rounded-xl text-xs font-mono text-text-secondary hover:text-white hover:bg-white/10 transition-colors flex items-center gap-1"
          title="Reset to Original Front View (0°)"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">Reset</span>
        </button>

        {/* Zoom In */}
        <button
          onClick={() => handleZoom('in')}
          className="p-2 rounded-xl text-text-secondary hover:text-white hover:bg-white/10 transition-colors hidden sm:block"
          title="Zoom In"
        >
          <ZoomIn className="w-3.5 h-3.5" />
        </button>

        {/* Zoom Out */}
        <button
          onClick={() => handleZoom('out')}
          className="p-2 rounded-xl text-text-secondary hover:text-white hover:bg-white/10 transition-colors hidden sm:block"
          title="Zoom Out"
        >
          <ZoomOut className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Floating Hover Raycaster HUD Tooltip */}
      {hoveredDetails && (
        <div 
          className="absolute z-20 pointer-events-none transform -translate-x-1/2 -translate-y-full mb-3 animate-fadeIn"
          style={{ 
            left: `${Math.min(Math.max(tooltipPos.x, 140), 400)}px`, 
            top: `${Math.max(tooltipPos.y - 12, 60)}px` 
          }}
        >
          <div className="bg-[#121217]/95 border border-accent/60 backdrop-blur-md rounded-2xl p-3 shadow-glow-sm min-w-[200px] max-w-[280px]">
            <div className="flex items-center gap-1.5 text-[10px] font-mono uppercase text-accent font-bold mb-0.5">
              <Crosshair className="w-3 h-3" />
              <span>{hoveredDetails.side} {hoveredDetails.title}</span>
            </div>
            <div className="text-xs font-extrabold text-white leading-tight">
              {hoveredDetails.subdivision}
            </div>
            <div className="text-[10px] text-text-secondary mt-1 font-mono">
              Click to isolate & inspect exercises
            </div>
          </div>
        </div>
      )}

      {/* Active Selected Muscle & Subdivision Badge (Bottom Left) */}
      <div className="absolute bottom-4 left-4 z-10 flex flex-col gap-2 max-w-[90%] sm:max-w-md">
        <div className="bg-black/85 backdrop-blur-md border border-accent/50 rounded-2xl p-3.5 shadow-glow-sm flex items-start gap-3">
          <div className="w-3.5 h-3.5 rounded-full bg-accent mt-0.5 animate-pulse shrink-0" />
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] uppercase tracking-wider text-text-secondary font-mono">
                Active 3D Muscle
              </span>
              <span className="text-[10px] font-mono text-accent bg-accent/15 px-2 py-0.2 rounded-md font-bold uppercase">
                {activeMuscleId}
              </span>
            </div>

            {activeSubdivision ? (
              <div className="mt-1">
                <div className="text-sm font-extrabold text-white">
                  {activeSubdivision.title}
                </div>
                <div className="text-xs text-accent font-semibold">
                  {activeSubdivision.subdivision}
                </div>
              </div>
            ) : (
              <div className="text-sm font-bold text-white capitalize mt-0.5">
                {activeMuscleId} (All Heads & Fiber Compartments)
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Bottom Center Drag Helper Tip */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 hidden sm:flex items-center gap-2 text-[11px] font-mono text-text-secondary bg-black/60 px-3 py-1.5 rounded-full backdrop-blur-sm border border-white/5 pointer-events-none">
        <span>↔ Drag horizontally to rotate 180°</span>
        <span>•</span>
        <span>Front (0°) to Back (180°)</span>
      </div>

      {/* Attribution Watermark (Bottom Right) */}
      <div className="absolute bottom-4 right-4 z-10 text-[10px] font-mono text-text-muted bg-black/60 px-2.5 py-1 rounded-lg backdrop-blur-sm border border-white/5 pointer-events-none">
        BodyParts3D & Z-Anatomy • CC BY-SA 4.0
      </div>

    </div>
  );
};
