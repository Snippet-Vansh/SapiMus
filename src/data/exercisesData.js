export const EXERCISES = [
  {
    id: 'bench-press',
    name: 'Barbell Flat Bench Press',
    targetMuscle: 'Chest',
    targetMuscleId: 'chest',
    secondaryMuscles: ['Triceps Brachii', 'Anterior Deltoids'],
    difficulty: 'Intermediate',
    equipment: 'Barbell',
    type: 'Compound',
    movementPattern: 'Push',
    category: 'chest',
    summary: 'The gold-standard upper body pressing compound movement for chest mass and pushing power.',
    instructions: [
      'Lie flat on the bench with eyes directly under the racked barbell.',
      'Grip the bar slightly wider than shoulder-width, plant feet firmly into the floor.',
      'Retract your scapulae (pull shoulder blades back and down), create a slight arch in the upper back.',
      'Unrack the bar and hold it with arms locked directly over your chest.',
      'Inhale and lower the barbell with control to the mid-sternum, keeping elbows tucked at ~45-70°.',
      'Touch chest lightly without bouncing, then drive through feet and press forcefully back to starting lockout.'
    ],
    tips: [
      'Keep your wrists straight; do not let the barbell bend your wrists backward.',
      'Squeeze the bar as hard as possible to activate forearm stabilizers.'
    ],
    commonMistakes: [
      'Flaring elbows out at 90° which impinges the rotator cuff.',
      'Bouncing the bar off ribs.'
    ]
  },
  {
    id: 'incline-dumbbell-press',
    name: 'Incline Dumbbell Press',
    targetMuscle: 'Chest',
    targetMuscleId: 'chest',
    secondaryMuscles: ['Anterior Deltoids', 'Triceps Brachii'],
    difficulty: 'Beginner',
    equipment: 'Dumbbell',
    type: 'Compound',
    movementPattern: 'Push',
    category: 'chest',
    summary: 'Optimized for building the upper clavicular head of the chest while allowing natural wrist rotation.',
    instructions: [
      'Set an adjustable bench to an incline of 30° to 45°.',
      'Sit back holding dumbbells at chest level with palms facing forward or semi-neutral.',
      'Retract shoulder blades and firmly plant your feet.',
      'Press dumbbells upward along a natural arc until arms are extended above your upper chest.',
      'Lower the dumbbells slowly over 2-3 seconds until you feel a deep comfortable stretch across the chest.'
    ],
    tips: [
      'Avoid setting bench too high (>45° shifts load predominantly onto front shoulders).',
      'Converge the dumbbells slightly at the top without banging them together.'
    ],
    commonMistakes: [
      'Arching lower back excessively to turn the exercise into a flat press.',
      'Cutting the bottom stretch short.'
    ]
  },
  {
    id: 'chest-dips',
    name: 'Chest-Focused Bodyweight Dips',
    targetMuscle: 'Chest',
    targetMuscleId: 'chest',
    secondaryMuscles: ['Triceps Brachii', 'Anterior Deltoids'],
    difficulty: 'Intermediate',
    equipment: 'Bodyweight',
    type: 'Compound',
    movementPattern: 'Push',
    category: 'chest',
    summary: 'An incredible lower chest builder that challenges shoulder stability and functional upper body pressing power.',
    instructions: [
      'Grip the parallel dip bars and push yourself up to the lockout position.',
      'Lean your torso forward at approximately a 30-degree angle and flare elbows slightly outward.',
      'Cross your ankles and bend knees slightly behind you.',
      'Slowly lower your body until shoulders are below your elbows (or at 90° for comfort).',
      'Drive forcefully upward through your palms, focusing on squeezing lower and mid chest.'
    ],
    tips: [
      'Maintaining a forward torso lean is essential: staying upright shifts tension directly to triceps.',
      'If too heavy, use an assistance band or machine.'
    ],
    commonMistakes: [
      'Dropping down too fast without control, straining the AC joint in shoulders.',
      'Shrugging shoulders into the neck.'
    ]
  },
  {
    id: 'cable-flyes',
    name: 'Cable Chest Flyes',
    targetMuscle: 'Chest',
    targetMuscleId: 'chest',
    secondaryMuscles: ['Anterior Deltoids', 'Biceps Short Head'],
    difficulty: 'Beginner',
    equipment: 'Cable',
    type: 'Isolation',
    movementPattern: 'Push',
    category: 'chest',
    summary: 'Provides continuous muscular tension across the entire range of motion, delivering unmatched peak contraction.',
    instructions: [
      'Set cable pulleys at chest height with single handles.',
      'Take a handle in each hand, step forward into a staggered stance, and maintain a slight bend in your elbows.',
      'Open your arms wide in a hugging arc until you feel a deep horizontal stretch in your pecs.',
      'Contract your chest to bring your hands together in front of you, imagining hugging a wide barrel.',
      'Hold the peak squeeze for 1 second before controlling the return.'
    ],
    tips: [
      'Lock the elbow angle throughout the movement; do not turn it into a cable press.',
      'Cross the hands slightly at the peak for an even tighter contraction.'
    ],
    commonMistakes: [
      'Using excessive weight and bending elbows excessively.',
      'Letting shoulders shrug or round forward.'
    ]
  },
  {
    id: 'pushups',
    name: 'Standard Push-Up',
    targetMuscle: 'Chest',
    targetMuscleId: 'chest',
    secondaryMuscles: ['Triceps Brachii', 'Core', 'Anterior Deltoids'],
    difficulty: 'Beginner',
    equipment: 'Bodyweight',
    type: 'Compound',
    movementPattern: 'Push',
    category: 'chest',
    summary: 'The quintessential calisthenics foundation for horizontal pressing strength, core stability, and scapular health.',
    instructions: [
      'Place hands on the floor slightly wider than shoulder width, fingers spread.',
      'Step back into a high plank with glutes squeezed and core engaged in a straight line.',
      'Lower your chest toward the floor, keeping elbows at a 45-degree angle to your ribs.',
      'Descend until chest hovers an inch above the floor.',
      'Push the ground away to return to top position, allowing shoulder blades to protract naturally.'
    ],
    tips: [
      'Keep glutes and abs locked tight to prevent lumbar sagging.',
      'Progress to deficit pushups or elevated feet for increased difficulty.'
    ],
    commonMistakes: [
      'Sagging hips or piking glutes into the air.',
      'Flaring elbows outward like a letter "T".'
    ]
  },
  {
    id: 'pull-ups',
    name: 'Wide-Grip Pull-Up',
    targetMuscle: 'Back',
    targetMuscleId: 'back',
    secondaryMuscles: ['Biceps Brachii', 'Trapezius', 'Forearms', 'Rear Deltoids'],
    difficulty: 'Intermediate',
    equipment: 'Bodyweight',
    type: 'Compound',
    movementPattern: 'Pull',
    category: 'back',
    summary: 'The king of vertical pulling exercises for lat width, upper back thickness, and functional grip.',
    instructions: [
      'Grip an overhead bar with an overhand (pronated) grip, slightly wider than shoulder width.',
      'Hang with arms fully extended (dead hang), engaging your core and legs.',
      'Depress and retract your scapulae to initiate the movement.',
      'Drive your elbows down and back toward your ribs, pulling chest up toward the bar.',
      'Bring chin cleanly over the bar, then lower under control to a full dead hang stretch.'
    ],
    tips: [
      'Think of pulling the bar down to your chest rather than pulling yourself up.',
      'Avoid swinging or kicking legs (kipping) unless doing specialized cross-training.'
    ],
    commonMistakes: [
      'Not going to full lockout at the bottom, cutting lat stretch short.',
      'Reaching forward with the chin instead of elevating the chest.'
    ]
  },
  {
    id: 'barbell-row',
    name: 'Bent-Over Barbell Row',
    targetMuscle: 'Back',
    targetMuscleId: 'back',
    secondaryMuscles: ['Biceps Brachii', 'Rhomboids', 'Erector Spinae', 'Rear Delts'],
    difficulty: 'Intermediate',
    equipment: 'Barbell',
    type: 'Compound',
    movementPattern: 'Pull',
    category: 'back',
    summary: 'Builds massive upper and mid-back density while teaching posterior chain stability.',
    instructions: [
      'Stand hip-width apart with a barbell on the floor over your mid-foot.',
      'Hinge at hips, pushing glutes backward while keeping spine neutral and knees slightly bent (torso at 45°).',
      'Grip the bar just outside knee width with an overhand grip.',
      'Brace core and pull the bar smoothly toward your lower ribcage/navel, driving elbows backward.',
      'Squeeze shoulder blades tightly at the top, then lower with control.'
    ],
    tips: [
      'Keep your neck neutral looking a few feet in front of you, not cranked up toward the ceiling.',
      'Drive through your heels and maintain hip hinge without bobbing up and down.'
    ],
    commonMistakes: [
      'Rounding the lower back under load.',
      'Using excessive hip thrust momentum to yank the weight.'
    ]
  },
  {
    id: 'lat-pulldown',
    name: 'Lat Pulldown (Cable)',
    targetMuscle: 'Back',
    targetMuscleId: 'back',
    secondaryMuscles: ['Biceps Brachii', 'Brachialis', 'Rear Delts'],
    difficulty: 'Beginner',
    equipment: 'Cable',
    type: 'Compound',
    movementPattern: 'Pull',
    category: 'back',
    summary: 'The best machine vertical pull for beginners and advanced lifters to isolate the lats with strict tempo.',
    instructions: [
      'Adjust thigh pad snugly over your thighs and grip the wide bar with an overhand grip.',
      'Sit down, maintain a slight 10-15° torso lean with chest held high.',
      'Drive your elbows down towards your hips, pulling the bar down to your upper clavicle.',
      'Pause for a fraction of a second at peak contraction, feeling the lats contract.',
      'Slowly allow the bar to ascend over 2-3 seconds back to full overhead stretch.'
    ],
    tips: [
      'Use a thumbless (suicide) grip to reduce forearm engagement and increase lat focus.',
      'Never pull behind the neck.'
    ],
    commonMistakes: [
      'Leaning back 45 degrees and turning the pulldown into a messy row.',
      'Yanking with body momentum.'
    ]
  },
  {
    id: 'seated-cable-row',
    name: 'Seated Cable Row',
    targetMuscle: 'Back',
    targetMuscleId: 'back',
    secondaryMuscles: ['Rhomboids', 'Biceps', 'Middle Trapezius'],
    difficulty: 'Beginner',
    equipment: 'Cable',
    type: 'Compound',
    movementPattern: 'Pull',
    category: 'back',
    summary: 'Directly targets rhomboids, middle trapezius, and lats for horizontal back thickness and posture improvement.',
    instructions: [
      'Sit on bench with feet securely on footrests, knees slightly bent.',
      'Reach forward to grab the V-bar attachment, slide hips back, and sit upright with flat back.',
      'Pull the handle into your lower abdomen, driving elbows back and squeezing shoulder blades together.',
      'Hold the peak squeeze for 1 second.',
      'Extend arms forward smoothly, allowing scapulae to protract and stretch the mid-back.'
    ],
    tips: [
      'Keep torso stationary; resist the temptation to sway back and forth excessively.',
      'Keep chest puffed out high as you pull.'
    ],
    commonMistakes: [
      'Rounding shoulders at the front stretch without maintaining spinal bracing.',
      'Using lower back extension to move the weight.'
    ]
  },
  {
    id: 'deadlift',
    name: 'Conventional Barbell Deadlift',
    targetMuscle: 'Back',
    targetMuscleId: 'back',
    secondaryMuscles: ['Hamstrings', 'Glutes', 'Trapezius', 'Forearms', 'Core'],
    difficulty: 'Advanced',
    equipment: 'Barbell',
    type: 'Compound',
    movementPattern: 'Hinge',
    category: 'back',
    summary: 'The ultimate full-body test of raw strength, developing posterior chain power from neck to heels.',
    instructions: [
      'Stand with feet hip-width apart, barbell cutting across mid-foot.',
      'Hinge at hips to grip the bar just outside your shins.',
      'Pull chest up, drop hips slightly, and pull the slack out of the barbell ("click").',
      'Take a deep belly breath, brace core, and push the floor away through your heels.',
      'Keep the barbell in contact with shins and thighs throughout the ascent.',
      'Lock out hips and knees simultaneously; return barbell by hinging at hips.'
    ],
    tips: [
      'Think of leg-pressing the floor away rather than pulling with your lower back.',
      'Keep lats engaged ("protect your armpits") to keep the bar glued close to the body.'
    ],
    commonMistakes: [
      'Rounding the lumbar spine.',
      'Over-hyperextending the lower back backward at lockout.'
    ]
  },
  {
    id: 'barbell-squat',
    name: 'Barbell Back Squat',
    targetMuscle: 'Quadriceps',
    targetMuscleId: 'quadriceps',
    secondaryMuscles: ['Glutes', 'Hamstrings', 'Adductors', 'Core'],
    difficulty: 'Intermediate',
    equipment: 'Barbell',
    type: 'Compound',
    movementPattern: 'Squat',
    category: 'legs',
    summary: 'The premier lower body compound movement for overall leg size, athletic drive, and core fortitude.',
    instructions: [
      'Rest barbell securely across upper traps (high bar) or rear delts (low bar).',
      'Step back, set feet slightly wider than shoulder-width with toes angled outward 15-30°.',
      'Take a deep diaphragmatic breath and brace core 360 degrees.',
      'Break at hips and knees simultaneously, descending until hip crease is below parallel.',
      'Keep chest up, knees tracking in line with toes.',
      'Drive powerfully through mid-foot and heel to return to top lockout.'
    ],
    tips: [
      'Maintain three points of foot contact: heel, base of big toe, base of pinky toe (tripod foot).',
      'Look straight ahead or slightly downward; do not crane neck upwards.'
    ],
    commonMistakes: [
      'Knees collapsing inward (valgus) on the ascent.',
      'Heels lifting off the ground due to poor ankle dorsiflexion.'
    ]
  },
  {
    id: 'leg-press',
    name: '45-Degree Leg Press',
    targetMuscle: 'Quadriceps',
    targetMuscleId: 'quadriceps',
    secondaryMuscles: ['Glutes', 'Calves', 'Adductors'],
    difficulty: 'Beginner',
    equipment: 'Machine',
    type: 'Compound',
    movementPattern: 'Squat',
    category: 'legs',
    summary: 'High-volume quad builder that removes spinal loading, allowing lifters to train legs directly to failure safely.',
    instructions: [
      'Sit comfortably on machine with back and head pressed firmly against pads.',
      'Place feet shoulder-width apart in the center of the sled platform.',
      'Disengage safety locks and slowly lower sled by bending knees until knees reach 90 degrees.',
      'Pause briefly without letting lower back peel off the back pad.',
      'Press sled upward through heels and mid-foot, stopping just short of full hyperextension.'
    ],
    tips: [
      'Vary foot stance: lower on platform targets quads; higher on platform targets glutes and hamstrings.',
      'Never lock knees out violently at the top.'
    ],
    commonMistakes: [
      'Allowing pelvis to lift off seat at bottom (butt wink), compressing lumbar discs.',
      'Using hands on knees to push the weight.'
    ]
  },
  {
    id: 'bulgarian-split-squat',
    name: 'Bulgarian Split Squat',
    targetMuscle: 'Quadriceps',
    targetMuscleId: 'quadriceps',
    secondaryMuscles: ['Glutes', 'Hamstrings', 'Calves', 'Core'],
    difficulty: 'Intermediate',
    equipment: 'Dumbbell',
    type: 'Compound',
    movementPattern: 'Lunge',
    category: 'legs',
    summary: 'The ultimate unilateral leg exercise for correcting imbalances, quad growth, and glute hypertrophy.',
    instructions: [
      'Stand about 2 feet in front of a flat bench holding dumbbells at your sides.',
      'Place the top of your rear foot on the bench behind you.',
      'Keep torso upright (for quads) or slight forward lean (for glutes).',
      'Lower front hip toward the floor until front thigh is parallel to ground and rear knee hovers.',
      'Drive through the front heel to stand back up.'
    ],
    tips: [
      'Find your optimal foot distance so your front knee doesn’t experience sharp patellar discomfort.',
      'Focus on keeping your hips square throughout.'
    ],
    commonMistakes: [
      'Putting too much weight on the rear foot instead of loading the front leg 85-90%.',
      'Losing balance by putting feet in a straight line (keep feet hip-width apart like train tracks).'
    ]
  },
  {
    id: 'leg-extension',
    name: 'Leg Extension Machine',
    targetMuscle: 'Quadriceps',
    targetMuscleId: 'quadriceps',
    secondaryMuscles: ['Vastus Medialis', 'Rectus Femoris'],
    difficulty: 'Beginner',
    equipment: 'Machine',
    type: 'Isolation',
    movementPattern: 'Squat',
    category: 'legs',
    summary: 'Isolates all four quadriceps heads under tension at full knee extension, impossible with standard squats alone.',
    instructions: [
      'Align knee joints directly with the machine pivot point.',
      'Position shin pad comfortably just above the ankles.',
      'Grip the handles at your sides to keep hips anchored firmly into the seat.',
      'Extend knees smoothly until legs are straight, squeezing quadriceps forcefully for 1 second.',
      'Lower weight stack under control over 2-3 seconds to deep knee flexion.'
    ],
    tips: [
      'Lean torso back slightly to put the rectus femoris under greater loaded stretch.',
      'Point toes slightly inward or straight for even quad development.'
    ],
    commonMistakes: [
      'Kicking the weight up quickly with momentum.',
      'Letting hips rise out of the seat during the lift.'
    ]
  },
  {
    id: 'romanian-deadlift',
    name: 'Barbell Romanian Deadlift (RDL)',
    targetMuscle: 'Hamstrings',
    targetMuscleId: 'hamstrings',
    secondaryMuscles: ['Glutes', 'Erector Spinae', 'Forearms'],
    difficulty: 'Intermediate',
    equipment: 'Barbell',
    type: 'Compound',
    movementPattern: 'Hinge',
    category: 'legs',
    summary: 'The premier loaded stretch exercise for hamstrings and glutes, promoting immense tendon strength and hypertrophy.',
    instructions: [
      'Stand tall holding a barbell with overhand grip at hip height, feet hip-width apart.',
      'Unlock knees with a slight soft bend and keep them locked at that angle throughout.',
      'Push your hips backward as if trying to touch a wall behind you with your glutes.',
      'Lower the bar close along thighs and shins until you feel a deep hamstring stretch (usually mid-shin).',
      'Drive hips forward to return to standing, squeezing glutes at the top.'
    ],
    tips: [
      'This is a horizontal hip displacement movement, not a vertical squat.',
      'Keep the bar scraping against your legs to protect your lower back.'
    ],
    commonMistakes: [
      'Bending knees more and turning it into a squat.',
      'Rounding the lower back when hamstring flexibility runs out.'
    ]
  },
  {
    id: 'seated-leg-curl',
    name: 'Seated Hamstring Leg Curl',
    targetMuscle: 'Hamstrings',
    targetMuscleId: 'hamstrings',
    secondaryMuscles: ['Calves (Gastrocnemius)'],
    difficulty: 'Beginner',
    equipment: 'Machine',
    type: 'Isolation',
    movementPattern: 'Hinge',
    category: 'legs',
    summary: 'Biomechanically superior for hamstring hypertrophy because hip flexion puts hamstrings in a lengthened position.',
    instructions: [
      'Adjust back rest so knee joint aligns with the machine rotation axis.',
      'Secure thigh pad tightly over your quads to prevent hips from moving.',
      'Place lower leg pad against your Achilles tendon just below calves.',
      'Curl heels down and back under the seat, squeezing hamstrings at peak flexion.',
      'Return slowly under 3-second eccentric control to full knee extension.'
    ],
    tips: [
      'Keep toes pointed slightly forward or dorsiflexed (toes pulled up towards shins).',
      'The tight thigh clamp is critical for maintaining hamstring tension.'
    ],
    commonMistakes: [
      'Loose thigh pad allowing hips to lift.',
      'Letting the weight plates crash at the top.'
    ]
  },
  {
    id: 'barbell-hip-thrust',
    name: 'Barbell Glute Hip Thrust',
    targetMuscle: 'Glutes',
    targetMuscleId: 'glutes',
    secondaryMuscles: ['Hamstrings', 'Quadriceps', 'Core'],
    difficulty: 'Beginner',
    equipment: 'Barbell',
    type: 'Compound',
    movementPattern: 'Hinge',
    category: 'legs',
    summary: 'The single most effective exercise for maximum gluteus maximus fiber activation and peak tension.',
    instructions: [
      'Sit on floor with upper back against a sturdy bench and a padded barbell across hips.',
      'Place feet flat on floor shoulder-width apart, shins vertical at top of movement.',
      'Tuck chin to chest, brace core, and drive through heels to extend hips upward.',
      'Raise hips until thighs and torso form a straight line parallel to ground.',
      'Squeeze glutes maximally for 2 seconds at the top, then lower under control.'
    ],
    tips: [
      'Maintain posterior pelvic tilt (ribs pulled down, chin tucked) to avoid lower back arching.',
      'Push strictly through the heels.'
    ],
    commonMistakes: [
      'Hyperextending the lumbar spine instead of full hip extension.',
      'Feet placed too far forward (targets hamstrings) or too close (targets quads).'
    ]
  },
  {
    id: 'overhead-press',
    name: 'Standing Overhead Barbell Press (OHP)',
    targetMuscle: 'Shoulders',
    targetMuscleId: 'shoulders',
    secondaryMuscles: ['Triceps Brachii', 'Upper Chest', 'Core', 'Trapezius'],
    difficulty: 'Intermediate',
    equipment: 'Barbell',
    type: 'Compound',
    movementPattern: 'Push',
    category: 'shoulders',
    summary: 'A legendary pure vertical press that demands total body stability, massive shoulder power, and core rigidity.',
    instructions: [
      'Stand tall with feet shoulder-width apart, barbell resting across anterior deltoids and clavicle.',
      'Grip just outside shoulders with forearms vertical and wrists aligned.',
      'Squeeze glutes, quads, and brace abdominal wall.',
      'Tilt head back slightly to clear path, press barbell straight up overhead.',
      'Once bar clears forehead, push head back through the "window" and lock out bar directly over mid-foot.',
      'Lower under control back to clavicle.'
    ],
    tips: [
      'Do not bend knees (that turns it into a push press).',
      'Active shrug at the top lockout stabilizes the shoulder joint in the glenoid fossa.'
    ],
    commonMistakes: [
      'Excessive lower back arching when the weight gets heavy.',
      'Pressing the bar in a wide looping forward arc.'
    ]
  },
  {
    id: 'lateral-raises',
    name: 'Dumbbell Lateral Raise',
    targetMuscle: 'Shoulders',
    targetMuscleId: 'shoulders',
    secondaryMuscles: ['Trapezius', 'Forearms'],
    difficulty: 'Beginner',
    equipment: 'Dumbbell',
    type: 'Isolation',
    movementPattern: 'Push',
    category: 'shoulders',
    summary: 'The quintessential isolation movement for creating wide, boulder lateral deltoids and the classic V-taper.',
    instructions: [
      'Stand with dumbbells at sides or front of thighs, slight bend in knees and hips.',
      'Maintain a soft 10-15° bend in elbows and lean forward slightly.',
      'Raise dumbbells out to the sides leading with your elbows until arms are parallel to floor.',
      'Think of pouring water from a pitcher (slight internal rotation or neutral wrist).',
      'Pause for a fraction of a second, then lower under slow control over 2-3 seconds.'
    ],
    tips: [
      'Keep dumbbells slightly in front of the body in the scapular plane (30° forward), not purely out to the side.',
      'Lower the weight if you find yourself shrugging your neck.'
    ],
    commonMistakes: [
      'Swinging hips and using momentum to launch the dumbbells.',
      'Shrugging traps up to ears.'
    ]
  },
  {
    id: 'face-pulls',
    name: 'Cable Face Pulls',
    targetMuscle: 'Shoulders',
    targetMuscleId: 'shoulders',
    secondaryMuscles: ['Rear Deltoids', 'Trapezius', 'Rhomboids', 'Rotator Cuff'],
    difficulty: 'Beginner',
    equipment: 'Cable',
    type: 'Isolation',
    movementPattern: 'Pull',
    category: 'shoulders',
    summary: 'The supreme posture-correcting movement for bulletproofing rotator cuffs, rear delts, and upper back health.',
    instructions: [
      'Attach a rope to a cable pulley set at eye level.',
      'Grip the rope with thumbs pointing backward or neutral overhand.',
      'Step back, brace core, and pull the rope directly towards your nose and eyes.',
      'As you pull, pull the rope handles apart and externally rotate wrists backwards (biceps flex pose).',
      'Squeeze rear delts and rhomboids for 2 seconds, then return under steady control.'
    ],
    tips: [
      'Focus on external rotation at the finish: hands should finish higher than elbows.',
      'Use moderate weight and high reps (15-20 reps) for optimal joint health.'
    ],
    commonMistakes: [
      'Using way too much weight and yanking torso backward.',
      'Letting elbows drop lower than hands.'
    ]
  },
  {
    id: 'barbell-curl',
    name: 'Standing Barbell / EZ-Bar Curl',
    targetMuscle: 'Biceps',
    targetMuscleId: 'biceps',
    secondaryMuscles: ['Brachialis', 'Forearms'],
    difficulty: 'Beginner',
    equipment: 'Barbell',
    type: 'Isolation',
    movementPattern: 'Pull',
    category: 'arms',
    summary: 'The ultimate mass builder for the bicep brachii, allowing heavy progressive overload on arm flexors.',
    instructions: [
      'Stand tall with feet hip-width apart holding a barbell or EZ-bar with shoulder-width underhand grip.',
      'Pin elbows firmly to your sides and brace glutes and core.',
      'Curl the bar upward toward your shoulders by contracting biceps.',
      'Squeeze biceps at the top for 1 full second without letting elbows drift forward.',
      'Lower bar slowly over 3 seconds until arms are fully extended at the bottom.'
    ],
    tips: [
      'Using an EZ-bar relieves wrist strain on the inner medial epicondyle.',
      'Flex your triceps at the bottom of each rep to ensure a complete, deep stretch.'
    ],
    commonMistakes: [
      'Swinging torso back and forth like a pendulum.',
      'Elbows drifting forward, taking tension off biceps and putting it onto front shoulders.'
    ]
  },
  {
    id: 'incline-dumbbell-curl',
    name: 'Incline Dumbbell Bicep Curl',
    targetMuscle: 'Biceps',
    targetMuscleId: 'biceps',
    secondaryMuscles: ['Brachioradialis', 'Forearms'],
    difficulty: 'Intermediate',
    equipment: 'Dumbbell',
    type: 'Isolation',
    movementPattern: 'Pull',
    category: 'arms',
    summary: 'Places the long head of the bicep under an extreme loaded stretch behind the body, maximizing peak development.',
    instructions: [
      'Set an incline bench to 45-60 degrees and sit back with a dumbbell in each hand.',
      'Allow arms to hang straight down behind your torso, palms facing forward.',
      'Keeping upper arms perpendicular to the floor, curl dumbbells upward.',
      'Supinate wrists (turn pinkies outward) as you approach the top contraction.',
      'Lower smoothly back to the deep stretch position.'
    ],
    tips: [
      'Do not let your shoulders roll forward to "cheat" the lift.',
      'Start lighter than your standing curl weight to respect the deep stretch position.'
    ],
    commonMistakes: [
      'Lifting elbows off the bench alignment.',
      'Short-changing the deep stretch at the bottom.'
    ]
  },
  {
    id: 'hammer-curl',
    name: 'Dumbbell Hammer Curl',
    targetMuscle: 'Biceps',
    targetMuscleId: 'biceps',
    secondaryMuscles: ['Brachialis', 'Brachioradialis', 'Forearms'],
    difficulty: 'Beginner',
    equipment: 'Dumbbell',
    type: 'Isolation',
    movementPattern: 'Pull',
    category: 'arms',
    summary: 'Targets the brachialis and brachioradialis with a neutral grip, pushing the biceps up for thicker arms.',
    instructions: [
      'Stand upright holding dumbbells at sides with a neutral grip (palms facing each other).',
      'Keep elbows pinned by your ribs.',
      'Curl the dumbbells upward toward shoulder height while maintaining the neutral hammer grip.',
      'Squeeze hard at the peak contraction for 1 second.',
      'Lower down under smooth control.'
    ],
    tips: [
      'Can be performed simultaneously or alternating arms.',
      'Cross-body hammer curls are also fantastic for brachialis emphasis.'
    ],
    commonMistakes: [
      'Rotating wrists during the curl (keep them locked in neutral).',
      'Using momentum from shoulders.'
    ]
  },
  {
    id: 'skull-crushers',
    name: 'Lying Tricep Extension (Skull Crushers)',
    targetMuscle: 'Triceps',
    targetMuscleId: 'triceps',
    secondaryMuscles: ['Anconeus', 'Forearms'],
    difficulty: 'Intermediate',
    equipment: 'Barbell',
    type: 'Isolation',
    movementPattern: 'Push',
    category: 'arms',
    summary: 'Hits all three tricep heads, specifically stretching the long head when lowering bar slightly behind the crown.',
    instructions: [
      'Lie flat on a bench holding an EZ-curl bar above chest with arms extended.',
      'Angle upper arms slightly backward toward your head (10-15° off vertical) to keep constant tension.',
      'Hinge at elbows to lower the bar toward your forehead or crown of your head.',
      'Hold the stretch at the bottom for a fraction of a second.',
      'Extend elbows to press the bar back up, squeezing triceps at lockout.'
    ],
    tips: [
      'Lowering the bar slightly behind your head is friendlier on elbow joints than directly to the forehead.',
      'Keep elbows tucked in; do not allow them to flare wide.'
    ],
    commonMistakes: [
      'Flaring elbows out laterally.',
      'Moving the shoulder joint back and forth like a pullover.'
    ]
  },
  {
    id: 'cable-tricep-pushdown',
    name: 'Cable Tricep Pushdown (Rope/Bar)',
    targetMuscle: 'Triceps',
    targetMuscleId: 'triceps',
    secondaryMuscles: ['Lateral Tricep Head'],
    difficulty: 'Beginner',
    equipment: 'Cable',
    type: 'Isolation',
    movementPattern: 'Push',
    category: 'arms',
    summary: 'A staple tricep finisher for isolating the lateral and medial heads with continuous cable tension.',
    instructions: [
      'Attach a rope or straight bar to a high cable pulley.',
      'Stand with feet hip-width, slight forward torso tilt, and elbows pinned against sides.',
      'Push the rope/bar downward by extending elbows until arms are completely straight.',
      'If using rope, spread the rope ends apart at the bottom to maximize peak tricep contraction.',
      'Allow the attachment to rise under control until forearms are just past 90 degrees.'
    ],
    tips: [
      'Keep upper arms glued to your ribcage like statues.',
      'Never use bodyweight momentum to press the stack.'
    ],
    commonMistakes: [
      'Allowing elbows to ride up and down with every rep.',
      'Leaning body over the cable bar.'
    ]
  },
  {
    id: 'hanging-leg-raise',
    name: 'Hanging Leg / Knee Raise',
    targetMuscle: 'Abs',
    targetMuscleId: 'abs',
    secondaryMuscles: ['Hip Flexors', 'Forearms', 'Obliques'],
    difficulty: 'Intermediate',
    equipment: 'Bodyweight',
    type: 'Compound',
    movementPattern: 'Core',
    category: 'core',
    summary: 'Unbeatable for developing lower rectus abdominis and athletic pelvic control.',
    instructions: [
      'Hang from a pull-up bar with overhand grip and dead hang position.',
      'Engage lats and tilt pelvis slightly backward.',
      'Raise straight legs (or bent knees for beginners) upward toward chest.',
      'Crucial: curl your pelvis upward at the top of the rep, bringing knees toward nipples.',
      'Lower slowly over 2-3 seconds without swinging your legs.'
    ],
    tips: [
      'If you do not curl your pelvis upward, you are only working hip flexors, not abs.',
      'Pause at bottom before starting the next rep to prevent swinging momentum.'
    ],
    commonMistakes: [
      'Swinging body back and forth using pendulum momentum.',
      'Only lifting thighs without flexing the lumbar spine.'
    ]
  },
  {
    id: 'cable-crunch',
    name: 'Kneeling Cable Crunch',
    targetMuscle: 'Abs',
    targetMuscleId: 'abs',
    secondaryMuscles: ['Obliques'],
    difficulty: 'Beginner',
    equipment: 'Cable',
    type: 'Isolation',
    movementPattern: 'Core',
    category: 'core',
    summary: 'The gold-standard weighted core exercise that provides progressive overload to build 3D ab brick thickness.',
    instructions: [
      'Attach rope to high pulley, kneel about 2 feet away facing the stack.',
      'Hold rope handles beside your ears or forehead, hips held high and stationary.',
      'Exhale completely and curl your ribs downward toward your pelvis, flexing your spine.',
      'Bring elbows toward your knees, squeezing abs as hard as possible for 2 seconds.',
      'Slowly uncurl and return to starting position, maintaining constant cable tension.'
    ],
    tips: [
      'Do not sit back on your calves (that turns it into a hip hinge). Keep hips locked high.',
      'Focus on spinal flexion: imagine rolling up like a shrimp.'
    ],
    commonMistakes: [
      'Hinging at hips instead of curling the spine.',
      'Pulling with arms rather than crunching with abs.'
    ]
  },
  {
    id: 'standing-calf-raise',
    name: 'Standing Calf Raise',
    targetMuscle: 'Calves',
    targetMuscleId: 'calves',
    secondaryMuscles: ['Gastrocnemius', 'Soleus'],
    difficulty: 'Beginner',
    equipment: 'Machine',
    type: 'Isolation',
    movementPattern: 'Squat',
    category: 'legs',
    summary: 'Directly hits the gastrocnemius (the upper diamond of the calf) with a full loaded stretch and peak contraction.',
    instructions: [
      'Position shoulders under padded levers on calf machine, balls of feet on edge of platform.',
      'Drop heels as low as comfortably possible to achieve a deep calf stretch.',
      'Hold the deep stretch for a full 2-second dead stop to eliminate Achilles tendon spring.',
      'Drive up onto balls of feet as high as possible onto big toes.',
      'Hold peak contraction for 1 second, then lower slowly.'
    ],
    tips: [
      'The 2-second dead stop at the bottom is the key to calf growth.',
      'Push through the big toe knuckle, not outer edges of feet.'
    ],
    commonMistakes: [
      'Bouncing rapidly using tendon bounce with zero muscle fiber recruitment.',
      'Bending knees during the press.'
    ]
  },
  {
    id: 'barbell-shrugs',
    name: 'Barbell Trap Shrugs',
    targetMuscle: 'Trapezius',
    targetMuscleId: 'trapezius',
    secondaryMuscles: ['Forearms', 'Upper Back'],
    difficulty: 'Beginner',
    equipment: 'Barbell',
    type: 'Isolation',
    movementPattern: 'Pull',
    category: 'back',
    summary: 'Heavy elevation movement for thick upper traps that frame the neck and collarbones.',
    instructions: [
      'Hold barbell with shoulder-width overhand grip in front of thighs.',
      'Lean forward slightly at the hips (10 degrees) to align with upper trap muscle fiber angle.',
      'Elevate shoulders straight up toward ears in a clean vertical line.',
      'Hold the peak contraction at top for 2 seconds.',
      'Lower barbell smoothly under control to full scapular depression stretch.'
    ],
    tips: [
      'Never roll your shoulders backward or forward.',
      'Use straps if your grip gives out before your traps fatigue.'
    ],
    commonMistakes: [
      'Circling the shoulders.',
      'Bending elbows to pull the bar with biceps.'
    ]
  },
  {
    id: 'farmer-walk',
    name: 'Heavy Farmer Walk Carry',
    targetMuscle: 'Forearms',
    targetMuscleId: 'forearms',
    secondaryMuscles: ['Trapezius', 'Core', 'Glutes', 'Calves'],
    difficulty: 'Intermediate',
    equipment: 'Dumbbell',
    type: 'Compound',
    movementPattern: 'Carry',
    category: 'arms',
    summary: 'Loaded carry that builds crushing forearm grip, iron upper traps, and unbreakable core stability.',
    instructions: [
      'Deadlift two heavy dumbbells or kettlebells from the floor.',
      'Stand tall with chest proud, shoulders pulled back and down, core tightly braced.',
      'Walk forward with short, deliberate, controlled heel-to-toe steps.',
      'Maintain upright posture with zero side swaying or torso slouching.',
      'Carry for 30 to 60 seconds per set, then carefully lower weights back to floor.'
    ],
    tips: [
      'Keep eyes forward and neck packed.',
      'Breathe rhythmically behind a braced abdominal wall.'
    ],
    commonMistakes: [
      'Letting weights swing against legs.',
      'Leaning sideways or hunching shoulders forward.'
    ]
  }
];

