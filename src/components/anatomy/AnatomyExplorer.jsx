import React, { useState } from 'react';
import { MUSCLE_GROUPS } from '../../data/musclesData';
import { EXERCISES } from '../../data/exercisesData';
import { BodyMapSvg } from './BodyMapSvg';
import { ThreeAnatomyViewer } from './ThreeAnatomyViewer';
import { 
  Activity, 
  Layers, 
  Dumbbell, 
  Lightbulb, 
  AlertTriangle, 
  Compass, 
  Sparkles,
  ChevronRight,
  ExternalLink,
  Target,
  Crosshair
} from 'lucide-react';

export const AnatomyExplorer = ({ onOpenExerciseModal, onNavigateToExercises }) => {
  const [selectedMuscleId, setSelectedMuscleId] = useState('chest');
  const [hoveredMuscleId, setHoveredMuscleId] = useState(null);
  const [viewAngle, setViewAngle] = useState('front'); // 'front' | 'back'
  const [renderMode, setRenderMode] = useState('3d'); // Default to 3D Medical Model!
  const [selectedSubdivision, setSelectedSubdivision] = useState(null);

  const activeMuscle = MUSCLE_GROUPS.find((m) => m.id === selectedMuscleId) || MUSCLE_GROUPS[0];

  const handleSelectMuscle = (id) => {
    setSelectedMuscleId(id);
    const target = MUSCLE_GROUPS.find((m) => m.id === id);
    if (target && target.view && renderMode === '2d') {
      setViewAngle(target.view);
    }
  };

  const handleSubdivisionClick = (subdivisionDetails) => {
    setSelectedSubdivision(subdivisionDetails);
  };

  // Find corresponding exercise objects for this muscle
  const relatedExercises = EXERCISES.filter((ex) => 
    ex.targetMuscleId === activeMuscle.id || activeMuscle.primaryExerciseIds.includes(ex.id)
  );

  return (
    <div className="w-full py-12 md:py-20 px-4 sm:px-6 lg:px-8 max-w-[1500px] mx-auto relative">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-orange-athletic/5 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[140px] pointer-events-none" />

      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-12 relative z-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill border border-white/10 text-accent text-xs font-tech font-semibold uppercase tracking-wider mb-4 shadow-glass">
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
          <span>Real Medical Anatomy System // 467 Heads</span>
        </div>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-black text-white uppercase tracking-tight leading-[1.05] mb-4">
          Human Muscular <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-white to-orange-warm">Explorer</span>
        </h2>
        <p className="text-text-secondary font-tech text-sm sm:text-base leading-relaxed">
          Cadaver-derived 3D human muscular architecture with real muscle fibers. 
          Rotate 180° front-to-back, inspect lines of pull, and click individual muscles for biomechanical data.
        </p>
      </div>

      {/* Muscle Selector Quick Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none justify-start md:justify-center relative z-10">
        {MUSCLE_GROUPS.map((muscle) => {
          const isCurrent = muscle.id === selectedMuscleId;
          return (
            <button
              key={muscle.id}
              onClick={() => {
                handleSelectMuscle(muscle.id);
                setSelectedSubdivision(null);
              }}
              className={`px-4 py-2.5 rounded-full text-xs font-tech font-bold uppercase whitespace-nowrap transition-all duration-200 border flex items-center gap-2 shadow-glass ${
                isCurrent
                  ? 'bg-accent text-black border-accent shadow-glow scale-105'
                  : 'glass-pill text-text-secondary border-white/10 hover:border-white/20 hover:text-white'
              }`}
            >
              <span>{muscle.name}</span>
              <span className={`text-[10px] font-tech uppercase px-2 py-0.5 rounded-full ${
                isCurrent ? 'bg-black/20 text-black' : 'bg-white/10 text-text-muted'
              }`}>
                {muscle.view}
              </span>
            </button>
          );
        })}
      </div>

      {/* Main Interactive Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
        
        {/* Visualizer Column (Left / 7 Cols) */}
        <div className="lg:col-span-7 flex flex-col gap-4">
          
          {/* View Mode & Angle Toggles */}
          <div className="flex items-center justify-between glass-panel p-2.5 rounded-2xl border border-white/[0.08] shadow-glass">
            
            {/* 3D vs 2D switch */}
            <div className="flex items-center gap-1 bg-black/40 p-1 rounded-xl border border-white/[0.06]">
              <button
                onClick={() => setRenderMode('3d')}
                className={`px-4 py-1.5 rounded-lg text-xs font-tech uppercase tracking-wider font-bold transition-all flex items-center gap-1.5 ${
                  renderMode === '3d' ? 'bg-accent text-black shadow-glow' : 'text-text-secondary hover:text-white'
                }`}
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>3D Medical Model</span>
              </button>
              <button
                onClick={() => setRenderMode('2d')}
                className={`px-4 py-1.5 rounded-lg text-xs font-tech uppercase tracking-wider font-bold transition-all flex items-center gap-1.5 ${
                  renderMode === '2d' ? 'bg-accent text-black shadow-glow' : 'text-text-secondary hover:text-white'
                }`}
              >
                <span>2D Vector Map</span>
              </button>
            </div>

            {/* Front / Back Toggle (for 2D only) */}
            {renderMode === '2d' ? (
              <div className="flex items-center gap-1 bg-black/40 p-1 rounded-xl border border-white/[0.06]">
                <button
                  onClick={() => setViewAngle('front')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-tech font-bold uppercase transition-colors ${
                    viewAngle === 'front' ? 'bg-white/20 text-white' : 'text-text-secondary hover:text-white'
                  }`}
                >
                  Anterior
                </button>
                <button
                  onClick={() => setViewAngle('back')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-tech font-bold uppercase transition-colors ${
                    viewAngle === 'back' ? 'bg-white/20 text-white' : 'text-text-secondary hover:text-white'
                  }`}
                >
                  Posterior
                </button>
              </div>
            ) : (
              <div className="hidden sm:flex items-center gap-2 text-xs font-tech text-text-secondary pr-2">
                <span className="w-2 h-2 rounded-full bg-accent inline-block animate-ping" />
                <span>180° Orbit // Click to Select</span>
              </div>
            )}
          </div>

          {/* Viewer Container */}
          <div className="w-full relative">
            {renderMode === '3d' ? (
              <ThreeAnatomyViewer
                activeMuscleId={selectedMuscleId}
                onSelectMuscle={handleSelectMuscle}
                onSubdivisionClick={handleSubdivisionClick}
              />
            ) : (
              <div className="relative rounded-3xl glass-panel border border-white/[0.08] p-6 flex flex-col items-center justify-center min-h-[580px] shadow-glass overflow-hidden">
                <div className="absolute inset-0 bg-radial-glow pointer-events-none opacity-40" />
                <div className="w-full relative z-10 flex flex-col items-center">
                  <BodyMapSvg
                    view={viewAngle}
                    activeMuscleId={selectedMuscleId}
                    onSelectMuscle={handleSelectMuscle}
                    hoveredMuscleId={hoveredMuscleId}
                    onHoverMuscle={setHoveredMuscleId}
                  />
                  <div className="mt-4 flex items-center justify-between w-full text-xs text-text-secondary px-2 font-tech">
                    <span>Click any muscle part to isolate</span>
                    <span className="text-accent flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-accent inline-block animate-ping" />
                      Target: {activeMuscle.name}
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Anatomical Details Column (Right / 5 Cols) */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          
          {/* Header Card */}
          <div className="glass-panel rounded-3xl p-7 sm:p-8 border border-white/[0.08] relative overflow-hidden shadow-glass">
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
            
            <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
              <div>
                <span className="text-xs font-tech uppercase tracking-widest text-orange-athletic font-bold">
                  // {activeMuscle.latinName}
                </span>
                <h3 className="text-3xl sm:text-4xl font-display font-black text-white uppercase mt-1">
                  {activeMuscle.name}
                </h3>
              </div>
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-accent/10 border border-accent/30 text-accent text-xs font-tech font-bold uppercase">
                  {activeMuscle.category.replace('-', ' ')}
                </span>
                <span className="px-3 py-1 rounded-full glass-pill border border-white/10 text-text-secondary text-xs font-tech uppercase">
                  {activeMuscle.view} View
                </span>
              </div>
            </div>

            {/* If a specific subdivision / head was clicked on the 3D model */}
            {selectedSubdivision && (
              <div className="mb-5 p-4 rounded-2xl bg-accent/10 border border-accent/40 animate-fadeIn">
                <div className="flex items-center gap-2 text-xs font-tech uppercase text-accent font-bold mb-1">
                  <Crosshair className="w-3.5 h-3.5" />
                  <span>3D Identified Head // Sub-Compartment</span>
                </div>
                <div className="text-sm font-extrabold text-white">
                  {selectedSubdivision.side} {selectedSubdivision.title}
                </div>
                <div className="text-xs text-accent font-medium mt-0.5">
                  {selectedSubdivision.subdivision}
                </div>
              </div>
            )}

            <p className="text-text-primary/90 text-sm sm:text-base leading-relaxed mb-6 font-normal">
              {activeMuscle.summary}
            </p>

            {/* Quick Fact Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-5 border-t border-white/[0.06]">
              <div className="flex items-start gap-3">
                <div className="p-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-accent shrink-0 mt-0.5">
                  <Compass className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-tech uppercase text-text-muted">// Location</div>
                  <div className="text-sm font-semibold text-white mt-0.5">{activeMuscle.location}</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-orange-athletic shrink-0 mt-0.5">
                  <Activity className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-tech uppercase text-text-muted">// Volume Target</div>
                  <div className="text-sm font-semibold text-white mt-0.5">{activeMuscle.growthVolume}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Biomechanical Function */}
          <div className="glass-panel rounded-3xl p-6 sm:p-7 border border-white/[0.08] shadow-glass">
            <div className="flex items-center gap-2 text-white font-display font-black uppercase text-base sm:text-lg mb-3">
              <Layers className="w-5 h-5 text-accent" />
              <h4>Biomechanical Function</h4>
            </div>
            <p className="text-xs sm:text-sm text-text-secondary leading-relaxed font-sans">
              {activeMuscle.function}
            </p>
          </div>

          {/* Muscle Sections / Heads Breakdown */}
          {activeMuscle.sections && activeMuscle.sections.length > 0 && (
            <div className="glass-panel rounded-3xl p-6 sm:p-7 border border-white/[0.08] shadow-glass">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2 text-white font-display font-black uppercase text-base sm:text-lg">
                  <Target className="w-5 h-5 text-accent" />
                  <h4>Heads & Compartments</h4>
                </div>
                <span className="text-xs font-tech text-text-secondary">
                  // {activeMuscle.sections.length} Heads
                </span>
              </div>

              <div className="space-y-3">
                {activeMuscle.sections.map((sec, idx) => {
                  const isMatchingSub = selectedSubdivision && 
                    selectedSubdivision.subdivision.toLowerCase().includes(sec.name.split(' ')[0].toLowerCase());
                  return (
                    <div 
                      key={idx} 
                      className={`p-4 rounded-2xl transition-all ${
                        isMatchingSub 
                          ? 'bg-accent/15 border-2 border-accent shadow-glow' 
                          : 'bg-black/40 border border-white/[0.06] hover:border-white/20'
                      }`}
                    >
                      <div className="flex items-center justify-between gap-2 mb-1.5">
                        <span className="font-bold text-white text-sm sm:text-base">{sec.name}</span>
                        <span className="text-[10px] font-tech uppercase text-accent bg-accent/10 px-2.5 py-0.5 rounded-full border border-accent/20">
                          Active Line of Pull
                        </span>
                      </div>
                      <div className="text-xs text-text-secondary mb-2 leading-relaxed">{sec.function}</div>
                      <div className="text-xs text-text-primary/90 flex items-center gap-1.5 font-tech">
                        <span className="text-orange-athletic font-semibold">// Angle:</span> {sec.bestAngle}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Primary Exercises Showcase */}
          <div className="glass-panel rounded-3xl p-6 sm:p-7 border border-white/[0.08] shadow-glass">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2 text-white font-display font-black uppercase text-base sm:text-lg">
                <Dumbbell className="w-5 h-5 text-accent" />
                <h4>Target Movements</h4>
              </div>
              {onNavigateToExercises && (
                <button
                  onClick={() => onNavigateToExercises(activeMuscle.id)}
                  className="text-xs font-tech font-bold uppercase text-accent hover:underline flex items-center gap-1"
                >
                  <span>View All</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {relatedExercises.slice(0, 4).map((exercise) => (
                <div
                  key={exercise.id}
                  onClick={() => onOpenExerciseModal && onOpenExerciseModal(exercise)}
                  className="p-4 rounded-2xl bg-black/40 border border-white/[0.06] hover:border-accent/40 cursor-pointer transition-all flex items-center justify-between group"
                >
                  <div>
                    <div className="font-bold text-white text-sm group-hover:text-accent transition-colors">
                      {exercise.name}
                    </div>
                    <div className="flex items-center gap-2 mt-1 text-[11px] text-text-secondary font-tech">
                      <span>{exercise.equipment}</span>
                      <span>//</span>
                      <span className={exercise.difficulty === 'Beginner' ? 'text-emerald-400' : 'text-amber-400'}>
                        {exercise.difficulty}
                      </span>
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-text-muted group-hover:text-accent group-hover:translate-x-1 transition-all" />
                </div>
              ))}
            </div>
          </div>

          {/* Coach Tips & Synergists */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="glass-panel rounded-3xl p-5 border border-white/[0.08]">
              <h5 className="text-xs font-tech uppercase text-text-muted font-bold mb-3">
                // Secondary Synergists
              </h5>
              <div className="flex flex-wrap gap-1.5">
                {activeMuscle.secondaryMusclesInvolved.map((muscleName, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs text-text-primary font-tech font-medium"
                  >
                    {muscleName}
                  </span>
                ))}
              </div>
            </div>

            <div className="glass-panel rounded-3xl p-5 border border-orange-athletic/30 bg-gradient-to-br from-white/[0.03] to-orange-athletic/10">
              <div className="flex items-center gap-1.5 text-orange-athletic font-tech font-bold text-xs uppercase mb-2">
                <Lightbulb className="w-4 h-4" />
                <span>Coach Hypertrophy Cue</span>
              </div>
              <p className="text-xs text-text-primary/90 leading-relaxed font-sans">
                "{activeMuscle.proTip}"
              </p>
            </div>
          </div>

          {/* Common Mistakes */}
          {activeMuscle.commonMistakes && activeMuscle.commonMistakes.length > 0 && (
            <div className="rounded-3xl p-5 bg-rose-500/10 border border-rose-500/20">
              <div className="flex items-center gap-2 text-rose-400 font-tech font-bold uppercase text-xs mb-2">
                <AlertTriangle className="w-4 h-4" />
                <span>Common Training Pitfalls</span>
              </div>
              <ul className="space-y-1.5 text-xs text-text-secondary list-disc pl-5">
                {activeMuscle.commonMistakes.map((mistake, idx) => (
                  <li key={idx} className="leading-snug">{mistake}</li>
                ))}
              </ul>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
