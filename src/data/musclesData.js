export const MUSCLE_GROUPS = [
  {
    id: 'chest',
    name: 'Chest',
    anatomicalName: 'Pectoralis Major & Minor',
    latinName: 'Musculus pectoralis major',
    view: 'front',
    category: 'upper-push',
    location: 'Anterior thorax (front of chest wall)',
    summary: 'The powerhouse of upper body pushing movements, crucial for pressing, hugging, and arm adduction.',
    function: 'Adduction, horizontal adduction, and internal rotation of the humerus (arm bone), plus elevation of the thorax during deep inhalation.',
    sections: [
      {
        name: 'Clavicular Head (Upper Chest)',
        origin: 'Medial half of the clavicle',
        function: 'Flexion and upward diagonal adduction of the arm',
        bestAngle: 'Incline press at 30° to 45° angle'
      },
      {
        name: 'Sternocostal Head (Mid Chest)',
        origin: 'Sternum and true rib cartilages',
        function: 'Horizontal adduction and direct forward pressing',
        bestAngle: 'Flat bench press, dumbbell flyes'
      },
      {
        name: 'Abdominal Head (Lower Chest)',
        origin: 'Aponeurosis of the external oblique',
        function: 'Depression and downward adduction of the arm',
        bestAngle: 'Decline bench press, chest dips, high-to-low cable crossovers'
      }
    ],
    primaryExerciseIds: ['bench-press', 'incline-dumbbell-press', 'chest-dips', 'cable-flyes', 'pushups'],
    secondaryMusclesInvolved: ['Triceps Brachii', 'Anterior Deltoids', 'Serratus Anterior'],
    proTip: 'Retract and depress your scapulae (shoulder blades together and down) before pressing to maximize chest activation and protect rotator cuffs.',
    commonMistakes: [
      'Flaring elbows out at 90 degrees (strains the anterior capsule of the shoulder).',
      'Bouncing the barbell off the sternum instead of controlling the eccentric phase.',
      'Allowing shoulders to roll forward at the peak contraction of a fly or press.'
    ],
    growthVolume: '10 - 20 direct sets per week split across 2 sessions.'
  },
  {
    id: 'biceps',
    name: 'Biceps',
    anatomicalName: 'Biceps Brachii & Brachialis',
    latinName: 'Musculus biceps brachii',
    view: 'front',
    category: 'upper-pull',
    location: 'Anterior compartment of the upper arm',
    summary: 'Two-headed arm flexor responsible for elbow flexion and forearm supination (turning palm up).',
    function: 'Primary flexor of the elbow joint and the strongest supinator of the forearm; assists in anterior shoulder flexion.',
    sections: [
      {
        name: 'Long Head (Outer Bicep)',
        origin: 'Supraglenoid tubercle of scapula',
        function: 'Forms the iconic "bicep peak" when flexed; activated most with narrow grip or arms behind torso',
        bestAngle: 'Incline dumbbell curls, drag curls'
      },
      {
        name: 'Short Head (Inner Bicep)',
        origin: 'Coracoid process of scapula',
        function: 'Contributes to overall arm thickness and width from front view',
        bestAngle: 'Preacher curls, spider curls, wide-grip barbell curls'
      },
      {
        name: 'Brachialis (Deep Under Muscle)',
        origin: 'Lower half of humerus to ulna',
        function: 'Pushes the biceps upward, adding immense visual width and upper arm density',
        bestAngle: 'Neutral-grip hammer curls, reverse EZ-bar curls'
      }
    ],
    primaryExerciseIds: ['barbell-curl', 'incline-dumbbell-curl', 'hammer-curl', 'preacher-curl', 'chin-ups'],
    secondaryMusclesInvolved: ['Brachioradialis', 'Forearm Flexors', 'Anterior Deltoid'],
    proTip: 'Supinate your wrists (turn pinky knuckles outward at the top of the curl) to achieve full contraction of the biceps brachii.',
    commonMistakes: [
      'Using hip momentum / swinging the lower back to heave heavy weights.',
      'Allowing elbows to drift forward excessively, shifting tension to the front deltoids.',
      'Cutting the bottom range of motion short and missing the deep loaded stretch.'
    ],
    growthVolume: '8 - 14 direct sets per week.'
  },
  {
    id: 'triceps',
    name: 'Triceps',
    anatomicalName: 'Triceps Brachii',
    latinName: 'Musculus triceps brachii',
    view: 'back',
    category: 'upper-push',
    location: 'Posterior compartment of the upper arm (makes up 60% of upper arm mass)',
    summary: 'The primary elbow extensor, giving the arms fullness, lockout strength, and athletic shape.',
    function: 'Extension of the forearm at the elbow joint; long head assists in extension and adduction of the shoulder joint.',
    sections: [
      {
        name: 'Long Head',
        origin: 'Infraglenoid tubercle of scapula',
        function: 'Largest head; crosses the shoulder joint, requiring overhead stretch for peak stimulation',
        bestAngle: 'Overhead cable triceps extension, skull crushers'
      },
      {
        name: 'Lateral Head',
        origin: 'Posterior surface of humerus',
        function: 'Creates the dramatic "horseshoe" shape visible from the side profile',
        bestAngle: 'Cable rope pressdowns, straight bar pushdowns'
      },
      {
        name: 'Medial Head',
        origin: 'Posterior humerus below radial groove',
        function: 'Active in all elbow extension movements and stabilizes the elbow joint',
        bestAngle: 'Close-grip bench press, reverse grip pushdowns'
      }
    ],
    primaryExerciseIds: ['skull-crushers', 'cable-tricep-pushdown', 'close-grip-bench', 'overhead-tricep-extension', 'dips'],
    secondaryMusclesInvolved: ['Anconeus', 'Pectoralis Major', 'Anterior Deltoids'],
    proTip: 'Keep your elbows pinned in place during extensions; moving elbows transforms a tricep isolation exercise into a shoulder/lat movement.',
    commonMistakes: [
      'Leaning forward over the cable stack and turning pushdowns into a chest press.',
      'Failing to lock out cleanly at full contraction.',
      'Neglecting overhead tricep exercises, leaving the long head underdeveloped.'
    ],
    growthVolume: '10 - 16 sets per week.'
  },
  {
    id: 'shoulders',
    name: 'Shoulders',
    anatomicalName: 'Deltoids',
    latinName: 'Musculus deltoideus',
    view: 'front',
    category: 'upper-push',
    location: 'Surrounds the glenohumeral (shoulder) joint on all three sides',
    summary: 'Creates the coveted V-taper physique and provides spherical 3D shoulder stability.',
    function: 'Arm abduction, flexion, extension, horizontal abduction and stabilization of the humeral head.',
    sections: [
      {
        name: 'Anterior Deltoid (Front)',
        origin: 'Lateral third of clavicle',
        function: 'Shoulder flexion and internal rotation (heavily worked in all bench presses)',
        bestAngle: 'Overhead shoulder press, seated dumbbell press'
      },
      {
        name: 'Lateral Deltoid (Side)',
        origin: 'Acromion process of scapula',
        function: 'Pure arm abduction; creates lateral width and visual frame breadth',
        bestAngle: 'Dumbbell lateral raises, cable lateral raises at hip height'
      },
      {
        name: 'Posterior Deltoid (Rear)',
        origin: 'Spine of the scapula',
        function: 'Horizontal abduction and external rotation; vital for posture and shoulder health',
        bestAngle: 'Rear delt face pulls, reverse pec deck flyes'
      }
    ],
    primaryExerciseIds: ['overhead-press', 'lateral-raises', 'face-pulls', 'dumbbell-shoulder-press', 'cable-lateral-raise'],
    secondaryMusclesInvolved: ['Trapezius', 'Triceps Brachii', 'Rotator Cuff', 'Serratus Anterior'],
    proTip: 'For 3D shoulders, prioritize side lateral raises and rear delt face pulls; front delts already receive massive indirect volume from chest pressing.',
    commonMistakes: [
      'Using heavy weights on lateral raises and shrugging with upper traps.',
      'Excessive lower back arching during heavy overhead presses.',
      'Completely ignoring the rear delts, leading to internal rotation and postural imbalance.'
    ],
    growthVolume: '12 - 20 sets per week (especially high volume tolerance for lateral delts).'
  },
  {
    id: 'back',
    name: 'Back',
    anatomicalName: 'Latissimus Dorsi & Rhomboids',
    latinName: 'Musculus latissimus dorsi',
    view: 'back',
    category: 'upper-pull',
    location: 'Posterior trunk spanning mid to lower spine and lateral ribs',
    summary: 'The largest muscle in the upper body, producing back width, the dramatic V-taper, and pulling power.',
    function: 'Adduction, extension, and internal rotation of the arm; pulls the upper arm downwards and backwards.',
    sections: [
      {
        name: 'Latissimus Dorsi (Lats)',
        origin: 'Spines of lower 6 thoracic vertebrae, lumbar fascia, and iliac crest',
        function: 'Vertical and horizontal pulling power; spreads outward like wings',
        bestAngle: 'Lat pulldowns, wide-grip pull-ups, single-arm dumbbell rows'
      },
      {
        name: 'Rhomboids (Major & Minor)',
        origin: 'Spinous processes of C7-T5',
        function: 'Scapular retraction (pinching shoulder blades) and back thickness',
        bestAngle: 'Chest-supported t-bar rows, seated cable rows'
      },
      {
        name: 'Erector Spinae (Lower Back)',
        origin: 'Sacrum and lumbar spines extending up vertebral column',
        function: 'Spinal extension, posture maintenance, and core anti-flexion',
        bestAngle: 'Conventional deadlifts, back hyperextensions, rack pulls'
      }
    ],
    primaryExerciseIds: ['pull-ups', 'barbell-row', 'lat-pulldown', 'seated-cable-row', 'deadlift'],
    secondaryMusclesInvolved: ['Biceps Brachii', 'Posterior Deltoids', 'Trapezius', 'Brachialis'],
    proTip: 'Initiate all pulling movements by driving your elbows down toward your hips rather than pulling with your hands or biceps.',
    commonMistakes: [
      'Rounding the lumbar spine during heavy barbell rows and deadlifts.',
      'Pulling too much with the arms without full scapular retraction.',
      'Using momentum to yank the lat pulldown bar behind the neck (dangerous for cervical spine).'
    ],
    growthVolume: '12 - 22 sets per week.'
  },
  {
    id: 'trapezius',
    name: 'Trapezius',
    anatomicalName: 'Trapezius (Upper, Middle, Lower)',
    latinName: 'Musculus trapezius',
    view: 'back',
    category: 'upper-pull',
    location: 'Diamond-shaped muscle spanning base of skull down to lower thoracic vertebrae',
    summary: 'Crucial for neck support, shoulder blade control, heavy carry capacity, and an imposing upper torso.',
    function: 'Scapular elevation (upper), retraction (middle), and depression (lower); stabilizes the neck and shoulder girdle.',
    sections: [
      {
        name: 'Upper Trapezius',
        origin: 'Occipital bone and nuchal ligament',
        function: 'Elevates shoulder blades upwards towards ears',
        bestAngle: 'Dumbbell shrugs, barbell shrugs, farmer walks'
      },
      {
        name: 'Middle Trapezius',
        origin: 'Spinous processes of C7 to T3',
        function: 'Scapular adduction/retraction (pulls shoulder blades together)',
        bestAngle: 'Prone Y-raises, wide grip chest-supported rows'
      },
      {
        name: 'Lower Trapezius',
        origin: 'Spinous processes of T4 to T12',
        function: 'Scapular depression and upward rotation; key for overhead stability',
        bestAngle: 'Overhead shrugs, prone trap-3 raises'
      }
    ],
    primaryExerciseIds: ['barbell-shrugs', 'face-pulls', 'farmer-walk', 'deadlift'],
    secondaryMusclesInvolved: ['Levator Scapulae', 'Rhomboids', 'Forearm Flexors'],
    proTip: 'Do not roll your shoulders during shrugs! Move straight up and hold the peak contraction for 1-2 seconds with slight forward lean.',
    commonMistakes: [
      'Rolling shoulders in circles (provides zero extra benefit and grinds the rotator cuff).',
      'Over-relying on upper traps while ignoring weak lower traps, causing forward head posture.'
    ],
    growthVolume: '6 - 12 direct sets per week (often trained indirectly during deadlifts and rows).'
  },
  {
    id: 'abs',
    name: 'Abs & Core',
    anatomicalName: 'Rectus Abdominis & Obliques',
    latinName: 'Musculus rectus abdominis',
    view: 'front',
    category: 'core',
    location: 'Anterior and lateral abdominal wall',
    summary: 'The central kinetic link for transferring power between lower and upper body, spinal protection, and the iconic "six-pack".',
    function: 'Spinal flexion, lateral flexion, trunk rotation, intra-abdominal pressure, and pelvic tilt stabilization.',
    sections: [
      {
        name: 'Rectus Abdominis (Six-Pack)',
        origin: 'Pubic crest to xiphoid process and costal cartilages',
        function: 'Flexes vertebral column, pulling ribs toward pelvis',
        bestAngle: 'Hanging leg raises, cable crunches, ab-wheel rollouts'
      },
      {
        name: 'External & Internal Obliques',
        origin: 'Lower 8 ribs to iliac crest',
        function: 'Rotates torso and creates diagonal athletic core stability',
        bestAngle: 'Woodchoppers, Russian twists, side planks'
      },
      {
        name: 'Transverse Abdominis (Inner Corset)',
        origin: 'Iliac crest and inguinal ligament',
        function: 'Compresses abdominal contents, stabilizes spine and draws navel inward',
        bestAngle: 'Stomach vacuums, hollow body holds, heavy compound bracing'
      }
    ],
    primaryExerciseIds: ['hanging-leg-raise', 'cable-crunch', 'ab-wheel-rollout', 'plank', 'woodchoppers'],
    secondaryMusclesInvolved: ['Hip Flexors (Psoas)', 'Erector Spinae', 'Serratus Anterior'],
    proTip: 'To actually build blocky ab muscles, treat them like any other muscle: train with progressive overload and weighted resistance, not just endless 100-rep bodyweight crunches.',
    commonMistakes: [
      'Using hip flexors to swing legs during hanging leg raises without curling pelvis upwards.',
      'Arching lower back under fatigue during planks, straining the lumbar spine.',
      'Expecting ab exercises alone to burn belly fat (spot reduction is a myth; caloric deficit reveals abs).'
    ],
    growthVolume: '8 - 15 sets per week.'
  },
  {
    id: 'forearms',
    name: 'Forearms',
    anatomicalName: 'Brachioradialis, Flexors & Extensors',
    latinName: 'Musculi antebrachii',
    view: 'front',
    category: 'upper-pull',
    location: 'Between elbow and wrist joints',
    summary: 'Determines grip strength, wrist integrity, forearm thickness, and lifting longevity.',
    function: 'Elbow flexion in neutral position, wrist flexion, wrist extension, and finger gripping (crush, pinch, and support grip).',
    sections: [
      {
        name: 'Brachioradialis',
        origin: 'Lateral supracondylar ridge of humerus',
        function: 'Elbow flexion with pronated or neutral forearm; prominent top ridge of forearm',
        bestAngle: 'Reverse curls, hammer curls'
      },
      {
        name: 'Wrist Flexor Compartment (Inner Forearm)',
        origin: 'Medial epicondyle of humerus',
        function: 'Flexes wrist and curls fingers; powers heavy grip holds',
        bestAngle: 'Behind-the-back wrist curls, dead hangs, heavy barbell holds'
      },
      {
        name: 'Wrist Extensor Compartment (Outer Forearm)',
        origin: 'Lateral epicondyle of humerus',
        function: 'Extends wrist; balances wrist joint and prevents tennis elbow',
        bestAngle: 'Dumbbell reverse wrist curls, wrist roller'
      }
    ],
    primaryExerciseIds: ['hammer-curl', 'farmer-walk', 'dead-hang', 'wrist-curl'],
    secondaryMusclesInvolved: ['Biceps Brachii', 'Hand Intrinsics'],
    proTip: 'Perform heavy dead hangs and farmer carries at the end of pull workouts to build crushing grip and dense forearms naturally.',
    commonMistakes: [
      'Using lifting straps on every single warm-up set, preventing grip muscles from adapting.',
      'Jerking heavy weights during wrist curls, risking carpal tunnel or wrist strain.'
    ],
    growthVolume: '6 - 10 sets per week (plus indirect deadlift/pulling work).'
  },
  {
    id: 'quadriceps',
    name: 'Quadriceps',
    anatomicalName: 'Quadriceps Femoris',
    latinName: 'Musculus quadriceps femoris',
    view: 'front',
    category: 'lower',
    location: 'Anterior thigh compartment',
    summary: 'The primary knee extensors responsible for squatting, sprinting, jumping, and leg power.',
    function: 'Powerful extension of the leg at the knee joint; rectus femoris also assists in hip flexion.',
    sections: [
      {
        name: 'Rectus Femoris (Middle Top)',
        origin: 'Anterior inferior iliac spine',
        function: 'The only two-joint quad muscle; flexes hip and extends knee',
        bestAngle: 'Sissy squats, leg extensions with torso leaned back'
      },
      {
        name: 'Vastus Lateralis (Outer Quad Sweep)',
        origin: 'Greater trochanter and linea aspera of femur',
        function: 'Creates the dramatic side "sweep" of the thigh',
        bestAngle: 'Narrow-stance leg press, hack squats'
      },
      {
        name: 'Vastus Medialis (Teardrop / VMO)',
        origin: 'Intertrochanteric line of femur',
        function: 'Terminal knee extension and stabilizes patellar tracking inside knee joint',
        bestAngle: 'Deep barbell squats, cyclist squats with heels elevated'
      },
      {
        name: 'Vastus Intermedius (Deep Quad)',
        origin: 'Antero-lateral surface of femur',
        function: 'Deep knee extension under the rectus femoris',
        bestAngle: 'Front squats, Bulgarian split squats'
      }
    ],
    primaryExerciseIds: ['barbell-squat', 'leg-press', 'bulgarian-split-squat', 'leg-extension', 'hack-squat'],
    secondaryMusclesInvolved: ['Gluteus Maximus', 'Adductors', 'Calves (Gastrocnemius)', 'Soleus'],
    proTip: 'Elevate your heels slightly (using weight plates or lifting shoes) to achieve deeper knee flexion and superior quad isolation without hip impingement.',
    commonMistakes: [
      'Cutting squat depth short above parallel, losing up to 50% of quad and glute activation.',
      'Allowing knees to cave inwards (valgus collapse) during the upward drive of a squat.',
      'Locking out knees with hyperextension violently at top of heavy leg press.'
    ],
    growthVolume: '10 - 20 sets per week.'
  },
  {
    id: 'hamstrings',
    name: 'Hamstrings',
    anatomicalName: 'Biceps Femoris, Semitendinosus & Semimembranosus',
    latinName: 'Musculi ischiocrurales',
    view: 'back',
    category: 'lower',
    location: 'Posterior thigh between hips and knees',
    summary: 'Crucial for sprinting speed, knee deceleration, hip hinge power, and balancing the quadriceps.',
    function: 'Knee flexion, hip extension, and rotational stabilization of the knee joint.',
    sections: [
      {
        name: 'Biceps Femoris (Outer Hamstring)',
        origin: 'Ischial tuberosity (long head) and linea aspera (short head)',
        function: 'Knee flexion and external rotation of the lower leg',
        bestAngle: 'Seated leg curls, lying leg curls'
      },
      {
        name: 'Semitendinosus & Semimembranosus (Inner Hamstrings)',
        origin: 'Ischial tuberosity to medial tibia',
        function: 'Knee flexion and internal rotation; massive stretch under hip hinge',
        bestAngle: 'Romanian deadlifts (RDLs), good mornings'
      }
    ],
    primaryExerciseIds: ['romanian-deadlift', 'seated-leg-curl', 'lying-leg-curl', 'nordic-hamstring-curl'],
    secondaryMusclesInvolved: ['Gluteus Maximus', 'Erector Spinae', 'Gastrocnemius', 'Adductor Magnus'],
    proTip: 'You need BOTH a hip hinge (e.g. Romanian Deadlift) and a knee flexion exercise (e.g. Seated Leg Curl) to stimulate all heads of the hamstrings completely.',
    commonMistakes: [
      'Bending at the spine instead of hinging backwards at the hips during Romanian deadlifts.',
      'Letting the weight slam down on leg curls rather than emphasizing a controlled 3-second lowering eccentric.'
    ],
    growthVolume: '10 - 16 sets per week.'
  },
  {
    id: 'glutes',
    name: 'Glutes',
    anatomicalName: 'Gluteus Maximus, Medius & Minimus',
    latinName: 'Musculus gluteus maximus',
    view: 'back',
    category: 'lower',
    location: 'Posterior pelvis (buttocks)',
    summary: 'The single most powerful muscle group in the human body, vital for athletic drive, posture, and pelvic health.',
    function: 'Hip extension, hip hyperextension, hip abduction, and external rotation of the femur.',
    sections: [
      {
        name: 'Gluteus Maximus',
        origin: 'Ilium, sacrum, and coccyx',
        function: 'The main powerhouse; drives hip extension against heavy resistance',
        bestAngle: 'Barbell hip thrusts, deep squats, sumo deadlifts'
      },
      {
        name: 'Gluteus Medius & Minimus (Side Glutes)',
        origin: 'Outer surface of ilium',
        function: 'Hip abduction and pelvic level stabilization when standing on one leg',
        bestAngle: 'Cable hip abductions, Bulgarian split squats, curtsy lunges'
      }
    ],
    primaryExerciseIds: ['barbell-hip-thrust', 'barbell-squat', 'bulgarian-split-squat', 'cable-glute-kickback'],
    secondaryMusclesInvolved: ['Hamstrings', 'Adductors', 'Core / Erector Spinae'],
    proTip: 'Tuck your chin and maintain a neutral pelvic tilt at the top of a hip thrust to maximize glute contraction without overarching the lumbar spine.',
    commonMistakes: [
      'Over-arching the lower back instead of driving purely through hip extension.',
      'Failing to push through the heels during thrusts and lunges, over-activating quads instead.'
    ],
    growthVolume: '10 - 18 sets per week.'
  },
  {
    id: 'calves',
    name: 'Calves',
    anatomicalName: 'Gastrocnemius & Soleus',
    latinName: 'Musculus triceps surae',
    view: 'back',
    category: 'lower',
    location: 'Posterior lower leg',
    summary: 'Provides ankle plantarflexion for walking, running, jumping, and stabilizing ground force.',
    function: 'Plantarflexion of the foot (pointing toes down) and flexion of the knee (gastrocnemius only).',
    sections: [
      {
        name: 'Gastrocnemius (Two-Headed Diamond)',
        origin: 'Medial and lateral condyles of femur',
        function: 'Crosses the knee joint; best stimulated when knees are straight',
        bestAngle: 'Standing calf raises, donkey calf raises, leg press calf presses'
      },
      {
        name: 'Soleus (Deep Flat Muscle)',
        origin: 'Posterior surface of tibia and fibula',
        function: 'Does NOT cross knee; heavily endurance-oriented, stimulated when knees are bent 90°',
        bestAngle: 'Seated calf raises'
      }
    ],
    primaryExerciseIds: ['standing-calf-raise', 'seated-calf-raise', 'leg-press-calf-raise', 'jump-rope'],
    secondaryMusclesInvolved: ['Tibialis Posterior', 'Peroneus Longus', 'Plantaris'],
    proTip: 'Pause for a full 2-second dead stop at the bottom stretch of each rep to eliminate the Achilles tendon bounce and force pure muscle fiber recruitment.',
    commonMistakes: [
      'Bouncing rapidly up and down using elastic tendon rebound without muscle work.',
      'Cutting the bottom heel-drop stretch short.'
    ],
    growthVolume: '10 - 18 high-frequency sets per week.'
  }
];

