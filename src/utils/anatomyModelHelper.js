/**
 * Anatomy Model Helper:
 * Maps 3D BodyParts3D/Z-Anatomy model mesh groups to SapiMus muscle groups,
 * and formats clinical mesh names into readable subdivisions.
 */

export const MODEL_TO_SAPIMUS_MAP = {
  'chest': 'chest',
  'biceps': 'biceps',
  'triceps': 'triceps',
  'shoulders': 'shoulders',
  'forearms': 'forearms',
  'abdominals': 'abs',
  'lats': 'back',
  'middle back': 'back',
  'lower back': 'back',
  'traps': 'trapezius',
  'neck': 'trapezius',
  'quadriceps': 'quadriceps',
  'adductors': 'quadriceps',
  'hamstrings': 'hamstrings',
  'glutes': 'glutes',
  'abductors': 'glutes',
  'calves': 'calves'
};

export const SAPIMUS_TO_MODEL_GROUPS = {
  'chest': ['chest'],
  'biceps': ['biceps'],
  'triceps': ['triceps'],
  'shoulders': ['shoulders'],
  'forearms': ['forearms'],
  'abs': ['abdominals'],
  'back': ['lats', 'middle back', 'lower back'],
  'trapezius': ['traps', 'neck'],
  'quadriceps': ['quadriceps', 'adductors'],
  'hamstrings': ['hamstrings'],
  'glutes': ['glutes', 'abductors'],
  'calves': ['calves']
};

/**
 * Parses raw 3D mesh names into clinical medical labels and subdivision heads.
 * E.g., "clavicular part of left pectoralis major" ->
 * { title: "Pectoralis Major", subdivision: "Clavicular Head (Upper Chest)", side: "Left" }
 */
export function parseMuscleMeshName(rawName) {
  if (!rawName) return { title: 'Skeletal Muscle', subdivision: '', side: '' };

  const norm = rawName.toLowerCase().replace(/_/g, ' ').replace(/\s+/g, ' ').trim();
  const side = norm.includes('left') ? 'Left' : norm.includes('right') ? 'Right' : '';

  let title = 'Skeletal Muscle';
  let subdivision = '';

  // Chest
  if (norm.includes('pectoralis major')) {
    title = 'Pectoralis Major';
    if (norm.includes('clavicular')) subdivision = 'Clavicular Head (Upper Chest)';
    else if (norm.includes('sternocostal')) subdivision = 'Sternal Head (Mid Chest)';
    else if (norm.includes('abdominal')) subdivision = 'Abdominal Head (Lower Chest)';
    else subdivision = 'Pectoralis Muscle Tissue';
  } else if (norm.includes('pectoralis minor')) {
    title = 'Pectoralis Minor';
    subdivision = 'Deep Anterior Thoracic Stabilizer';
  }

  // Biceps
  else if (norm.includes('biceps brachii')) {
    title = 'Biceps Brachii';
    if (norm.includes('long head')) subdivision = 'Long Head (Outer Peak)';
    else if (norm.includes('short head')) subdivision = 'Short Head (Inner Thickness)';
    else subdivision = 'Elbow Flexor & Supinator';
  } else if (norm.includes('brachialis')) {
    title = 'Brachialis';
    subdivision = 'Deep Upper Arm Flexor';
  }

  // Triceps
  else if (norm.includes('triceps brachii')) {
    title = 'Triceps Brachii';
    if (norm.includes('long head')) subdivision = 'Long Head (Overhead Extensor)';
    else if (norm.includes('lateral head')) subdivision = 'Lateral Head (Horseshoe Sweep)';
    else if (norm.includes('medial head')) subdivision = 'Medial Head (Elbow Stabilizer)';
    else subdivision = 'Elbow Extensor';
  } else if (norm.includes('anconeus')) {
    title = 'Anconeus';
    subdivision = 'Posterior Elbow Joint Stabilizer';
  }

  // Shoulders / Deltoids
  else if (norm.includes('deltoid')) {
    title = 'Deltoid';
    if (norm.includes('clavicular') || norm.includes('anterior')) subdivision = 'Anterior Head (Front Deltoid)';
    else if (norm.includes('acromial') || norm.includes('lateral')) subdivision = 'Lateral Head (Middle/Side Cap)';
    else if (norm.includes('spinal') || norm.includes('posterior')) subdivision = 'Posterior Head (Rear Deltoid)';
    else subdivision = 'Shoulder Girdle Abductor';
  }

  // Abdominals
  else if (norm.includes('rectus abdominis')) {
    title = 'Rectus Abdominis';
    subdivision = 'Anterior Core (Six-Pack)';
  } else if (norm.includes('external oblique')) {
    title = 'External Oblique';
    subdivision = 'Lateral Torso Rotator';
  } else if (norm.includes('internal oblique')) {
    title = 'Internal Oblique';
    subdivision = 'Deep Abdominal Stabilizer';
  } else if (norm.includes('transversus abdominis')) {
    title = 'Transversus Abdominis';
    subdivision = 'Inner Core Corset';
  }

  // Back / Lats / Traps
  else if (norm.includes('latissimus dorsi')) {
    title = 'Latissimus Dorsi';
    subdivision = 'Major Back Extensor & Adductor (V-Taper)';
  } else if (norm.includes('trapezius')) {
    title = 'Trapezius';
    if (norm.includes('descending') || norm.includes('superior')) subdivision = 'Upper Trapezius (Scapular Elevator)';
    else if (norm.includes('transverse') || norm.includes('middle')) subdivision = 'Middle Trapezius (Scapular Retractor)';
    else if (norm.includes('ascending') || norm.includes('inferior')) subdivision = 'Lower Trapezius (Scapular Depressor)';
    else subdivision = 'Shoulder Girdle Stabilizer';
  } else if (norm.includes('rhomboid')) {
    title = norm.includes('major') ? 'Rhomboid Major' : 'Rhomboid Minor';
    subdivision = 'Mid-Back Retractor';
  } else if (norm.includes('iliocostalis') || norm.includes('longissimus') || norm.includes('spinalis')) {
    title = 'Erector Spinae';
    subdivision = 'Posterior Spinal Column Extensor';
  }

  // Quadriceps
  else if (norm.includes('rectus femoris')) {
    title = 'Rectus Femoris';
    subdivision = 'Anterior Thigh (Bi-Articular Hip Flexor & Knee Extensor)';
  } else if (norm.includes('vastus lateralis')) {
    title = 'Vastus Lateralis';
    subdivision = 'Outer Quad Sweep';
  } else if (norm.includes('vastus medialis')) {
    title = 'Vastus Medialis (VMO)';
    subdivision = 'Teardrop (Patellar Stabilizer)';
  } else if (norm.includes('vastus intermedius')) {
    title = 'Vastus Intermedius';
    subdivision = 'Deep Central Knee Extensor';
  }

  // Hamstrings
  else if (norm.includes('biceps femoris')) {
    title = 'Biceps Femoris';
    subdivision = norm.includes('long') ? 'Long Head (Outer Hamstring)' : 'Short Head (Outer Hamstring)';
  } else if (norm.includes('semitendinosus')) {
    title = 'Semitendinosus';
    subdivision = 'Medial Hamstring (Hip Hinge & Knee Flexion)';
  } else if (norm.includes('semimembranosus')) {
    title = 'Semimembranosus';
    subdivision = 'Deep Medial Hamstring';
  }

  // Glutes
  else if (norm.includes('gluteus maximus')) {
    title = 'Gluteus Maximus';
    subdivision = 'Primary Hip Powerhouse Extensor';
  } else if (norm.includes('gluteus medius')) {
    title = 'Gluteus Medius';
    subdivision = 'Lateral Pelvic Stabilizer (Hip Abductor)';
  } else if (norm.includes('gluteus minimus')) {
    title = 'Gluteus Minimus';
    subdivision = 'Deep Pelvic Rotator';
  } else if (norm.includes('tensor fasciae latae')) {
    title = 'Tensor Fasciae Latae (TFL)';
    subdivision = 'Anterolateral Hip Stabilizer';
  }

  // Calves
  else if (norm.includes('gastrocnemius')) {
    title = 'Gastrocnemius';
    subdivision = norm.includes('lateral') ? 'Lateral Head (Outer Diamond)' : 'Medial Head (Inner Diamond)';
  } else if (norm.includes('soleus')) {
    title = 'Soleus';
    subdivision = 'Deep Ankle Plantarflexor';
  } else if (norm.includes('tibialis anterior')) {
    title = 'Tibialis Anterior';
    subdivision = 'Anterior Shin (Ankle Dorsiflexor)';
  }

  // Forearms
  else if (norm.includes('brachioradialis')) {
    title = 'Brachioradialis';
    subdivision = 'Radial Forearm Ridge (Neutral Flexor)';
  } else if (norm.includes('flexor carpi') || norm.includes('pronator')) {
    title = 'Forearm Flexor Group';
    subdivision = 'Inner Forearm & Grip Power';
  } else if (norm.includes('extensor carpi')) {
    title = 'Forearm Extensor Group';
    subdivision = 'Posterior Forearm & Wrist Stability';
  }

  // Default fallback cleaner
  else {
    const words = norm.replace(/left|right/g, '').trim().split(' ');
    title = words.map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
    subdivision = 'Skeletal Muscular Tissue';
  }

  return { title, subdivision, side };
}

