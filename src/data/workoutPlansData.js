export const WORKOUT_PLANS = [
  {
    id: 'full-body-foundation',
    name: '3-Day Full Body Foundation',
    badge: 'Best For Beginners',
    frequency: '3 Days / Week',
    level: 'Beginner',
    duration: '45 - 60 min',
    summary: 'The science-backed standard for gym beginners. Hits every major muscle group 3x weekly for rapid neuromuscular adaptation, strength, and balanced hypertrophy.',
    schedule: 'Mon / Wed / Fri (or any alternating 3 days)',
    goal: 'Build fundamental lifting mechanics, baseline strength, and full-body symmetry.',
    days: [
      {
        dayName: 'Day A: Full Body Compound Foundation',
        focus: 'Squat & Horizontal Push/Pull',
        exercises: [
          { name: 'Barbell Back Squat', exerciseId: 'barbell-squat', sets: '3', reps: '6 - 8', rest: '2 - 3 min', notes: 'Focus on hitting parallel depth with chest up.' },
          { name: 'Barbell Flat Bench Press', exerciseId: 'bench-press', sets: '3', reps: '8 - 10', rest: '2 min', notes: 'Scapulae retracted, controlled 2-second eccentric.' },
          { name: 'Bent-Over Barbell Row', exerciseId: 'barbell-row', sets: '3', reps: '8 - 10', rest: '2 min', notes: 'Pull to navel, pause and squeeze rhomboids.' },
          { name: 'Dumbbell Lateral Raise', exerciseId: 'lateral-raises', sets: '3', reps: '12 - 15', rest: '90 sec', notes: 'Strict form in scapular plane; no hip swinging.' },
          { name: 'Cable Tricep Pushdown', exerciseId: 'cable-tricep-pushdown', sets: '3', reps: '10 - 12', rest: '60 sec', notes: 'Lock out elbows fully at bottom.' },
          { name: 'Kneeling Cable Crunch', exerciseId: 'cable-crunch', sets: '3', reps: '12 - 15', rest: '60 sec', notes: 'Curl spine like a shrimp, hold contraction 1s.' }
        ]
      },
      {
        dayName: 'Day B: Rest & Active Recovery',
        focus: 'Light mobility, walking, hydration & sleep',
        isRest: true,
        recoveryTips: ['Aim for 8,000-10,000 steps', 'Consume 1.6-2.2g of protein per kg of bodyweight', 'Hydrate with minimum 3L water']
      },
      {
        dayName: 'Day C: Full Body Posterior & Vertical Push/Pull',
        focus: 'Hinge & Vertical Push/Pull',
        exercises: [
          { name: 'Barbell Romanian Deadlift (RDL)', exerciseId: 'romanian-deadlift', sets: '3', reps: '8 - 10', rest: '2 min', notes: 'Hinge at hips until deep hamstring stretch.' },
          { name: 'Standing Overhead Barbell Press', exerciseId: 'overhead-press', sets: '3', reps: '6 - 8', rest: '2 - 3 min', notes: 'Brace core tight, push head through at top.' },
          { name: 'Wide-Grip Pull-Up or Lat Pulldown', exerciseId: 'lat-pulldown', sets: '3', reps: '8 - 10', rest: '2 min', notes: 'Drive elbows down to hips, avoid leaning back excessively.' },
          { name: 'Bulgarian Split Squat', exerciseId: 'bulgarian-split-squat', sets: '3', reps: '10 / leg', rest: '90 sec', notes: 'Unilateral leg strength and hip stability.' },
          { name: 'Standing Barbell / EZ-Bar Curl', exerciseId: 'barbell-curl', sets: '3', reps: '10 - 12', rest: '60 sec', notes: 'Pin elbows to ribs, full range of motion.' },
          { name: 'Standing Calf Raise', exerciseId: 'standing-calf-raise', sets: '3', reps: '12 - 15', rest: '60 sec', notes: '2-second dead stop at the deep bottom stretch.' }
        ]
      },
      {
        dayName: 'Day D: Rest & Muscle Protein Synthesis',
        focus: 'Recovery and nutrition',
        isRest: true,
        recoveryTips: ['Nutrient-dense meals with adequate carbs to restock glycogen', '8 hours quality deep sleep']
      },
      {
        dayName: 'Day E: Full Body Hypertrophy Volume',
        focus: 'Machine & Free-Weight Hypertrophy',
        exercises: [
          { name: '45-Degree Leg Press', exerciseId: 'leg-press', sets: '3', reps: '10 - 12', rest: '2 min', notes: 'Deep knee bend without lower back rounding off seat.' },
          { name: 'Incline Dumbbell Press', exerciseId: 'incline-dumbbell-press', sets: '3', reps: '8 - 12', rest: '90 sec', notes: 'Target upper clavicular chest head.' },
          { name: 'Seated Cable Row', exerciseId: 'seated-cable-row', sets: '3', reps: '10 - 12', rest: '90 sec', notes: 'Chest tall, squeeze shoulder blades together.' },
          { name: 'Cable Face Pulls', exerciseId: 'face-pulls', sets: '3', reps: '15 - 20', rest: '60 sec', notes: 'Externally rotate hands back high for rear delts.' },
          { name: 'Lying Tricep Extension (Skull Crushers)', exerciseId: 'skull-crushers', sets: '3', reps: '10 - 12', rest: '90 sec', notes: 'Lower bar slightly behind crown of head.' },
          { name: 'Hanging Leg / Knee Raise', exerciseId: 'hanging-leg-raise', sets: '3', reps: '10 - 15', rest: '60 sec', notes: 'Curl pelvis up at top, avoid swinging legs.' }
        ]
      }
    ]
  },
  {
    id: 'push-pull-legs',
    name: 'Push Pull Legs (PPL)',
    badge: 'Most Popular Hypertrophy Split',
    frequency: '3 to 6 Days / Week',
    level: 'Intermediate',
    duration: '60 - 75 min',
    summary: 'The gold-standard bodybuilding split. Groups muscles by their biomechanical movement patterns, preventing overlapping fatigue and allowing optimal volume per session.',
    schedule: 'Push (Mon) / Pull (Tue) / Legs (Wed) / Rest (Thu) — repeat or cycle',
    goal: 'Maximum muscle hypertrophy, aesthetic proportions, and balanced joint health.',
    days: [
      {
        dayName: 'Push Day: Chest, Shoulders & Triceps',
        focus: 'Horizontal & Vertical Pressing + Triceps',
        exercises: [
          { name: 'Barbell Flat Bench Press', exerciseId: 'bench-press', sets: '4', reps: '6 - 8', rest: '2 - 3 min', notes: 'Primary horizontal compound press.' },
          { name: 'Standing Overhead Barbell Press', exerciseId: 'overhead-press', sets: '3', reps: '8 - 10', rest: '2 min', notes: 'Vertical push for deltoids and triceps.' },
          { name: 'Incline Dumbbell Press', exerciseId: 'incline-dumbbell-press', sets: '3', reps: '8 - 12', rest: '90 sec', notes: 'Upper chest angle emphasis.' },
          { name: 'Dumbbell Lateral Raise', exerciseId: 'lateral-raises', sets: '4', reps: '12 - 15', rest: '60 sec', notes: 'Side delt cap isolation.' },
          { name: 'Chest-Focused Bodyweight Dips', exerciseId: 'chest-dips', sets: '3', reps: '8 - 12', rest: '90 sec', notes: 'Lean torso forward 30 degrees.' },
          { name: 'Cable Tricep Pushdown', exerciseId: 'cable-tricep-pushdown', sets: '3', reps: '12 - 15', rest: '60 sec', notes: 'Squeeze tricep horseshoe at bottom.' }
        ]
      },
      {
        dayName: 'Pull Day: Back, Biceps & Rear Delts',
        focus: 'Vertical & Horizontal Pulling + Forearms',
        exercises: [
          { name: 'Wide-Grip Pull-Up', exerciseId: 'pull-ups', sets: '4', reps: '6 - 10', rest: '2 min', notes: 'Full hang to chin over bar.' },
          { name: 'Bent-Over Barbell Row', exerciseId: 'barbell-row', sets: '3', reps: '8 - 10', rest: '2 min', notes: 'Drive elbows past ribcage.' },
          { name: 'Seated Cable Row', exerciseId: 'seated-cable-row', sets: '3', reps: '10 - 12', rest: '90 sec', notes: 'Mid-back thickness and scapular retraction.' },
          { name: 'Cable Face Pulls', exerciseId: 'face-pulls', sets: '4', reps: '15 - 20', rest: '60 sec', notes: 'Shoulder longevity and rear delt development.' },
          { name: 'Standing Barbell / EZ-Bar Curl', exerciseId: 'barbell-curl', sets: '3', reps: '8 - 10', rest: '90 sec', notes: 'Heavy bicep overload.' },
          { name: 'Dumbbell Hammer Curl', exerciseId: 'hammer-curl', sets: '3', reps: '10 - 12', rest: '60 sec', notes: 'Brachialis and forearm width.' }
        ]
      },
      {
        dayName: 'Legs Day: Quads, Hamstrings, Glutes & Calves',
        focus: 'Squat, Hinge & Lower Body Power',
        exercises: [
          { name: 'Barbell Back Squat', exerciseId: 'barbell-squat', sets: '4', reps: '6 - 8', rest: '3 min', notes: 'Deep squat below parallel.' },
          { name: 'Barbell Romanian Deadlift (RDL)', exerciseId: 'romanian-deadlift', sets: '3', reps: '8 - 10', rest: '2 min', notes: 'Hamstrings loaded stretch under control.' },
          { name: 'Bulgarian Split Squat', exerciseId: 'bulgarian-split-squat', sets: '3', reps: '10 / leg', rest: '90 sec', notes: 'Unilateral quad & glute pump.' },
          { name: 'Seated Hamstring Leg Curl', exerciseId: 'seated-leg-curl', sets: '3', reps: '12 - 15', rest: '60 sec', notes: '3-second slow eccentric.' },
          { name: 'Standing Calf Raise', exerciseId: 'standing-calf-raise', sets: '4', reps: '12 - 15', rest: '60 sec', notes: 'Pause 2s at bottom stretch.' }
        ]
      }
    ]
  },
  {
    id: 'upper-lower-split',
    name: '4-Day Upper Lower Split',
    badge: 'Optimal Efficiency',
    frequency: '4 Days / Week',
    level: 'Intermediate',
    duration: '50 - 65 min',
    summary: 'The sweet spot for busy lifters who want both size and strength. Provides 2x weekly frequency for all muscles with built-in recovery days.',
    schedule: 'Mon (Upper A) / Tue (Lower A) / Thu (Upper B) / Fri (Lower B)',
    goal: 'Balanced upper-to-lower muscle development with high progressive overload potential.',
    days: [
      {
        dayName: 'Upper A: Strength & Heavy Pressing',
        focus: 'Heavy Upper Body Compounds',
        exercises: [
          { name: 'Barbell Flat Bench Press', exerciseId: 'bench-press', sets: '4', reps: '5 - 8', rest: '2.5 min', notes: 'Heavy chest drive.' },
          { name: 'Bent-Over Barbell Row', exerciseId: 'barbell-row', sets: '4', reps: '6 - 8', rest: '2 min', notes: 'Solid posture, drive elbows back.' },
          { name: 'Standing Overhead Barbell Press', exerciseId: 'overhead-press', sets: '3', reps: '8 - 10', rest: '2 min', notes: 'Shoulder stability and lockout.' },
          { name: 'Lat Pulldown (Cable)', exerciseId: 'lat-pulldown', sets: '3', reps: '10 - 12', rest: '90 sec', notes: 'Controlled tempo, deep stretch at top.' },
          { name: 'Lying Tricep Extension (Skull Crushers)', exerciseId: 'skull-crushers', sets: '3', reps: '10 - 12', rest: '60 sec', notes: 'Triceps long head stretch.' },
          { name: 'Standing Barbell / EZ-Bar Curl', exerciseId: 'barbell-curl', sets: '3', reps: '10 - 12', rest: '60 sec', notes: 'Strict form, no back swinging.' }
        ]
      },
      {
        dayName: 'Lower A: Quad Dominant & Core',
        focus: 'Heavy Squats & Knee Extension',
        exercises: [
          { name: 'Barbell Back Squat', exerciseId: 'barbell-squat', sets: '4', reps: '6 - 8', rest: '3 min', notes: 'Deep range of motion.' },
          { name: 'Barbell Romanian Deadlift (RDL)', exerciseId: 'romanian-deadlift', sets: '3', reps: '8 - 10', rest: '2 min', notes: 'Hinge back, feel the hamstring stretch.' },
          { name: '45-Degree Leg Press', exerciseId: 'leg-press', sets: '3', reps: '10 - 12', rest: '90 sec', notes: 'High mechanical quad burn.' },
          { name: 'Leg Extension Machine', exerciseId: 'leg-extension', sets: '3', reps: '12 - 15', rest: '60 sec', notes: 'Squeeze 1s at top.' },
          { name: 'Standing Calf Raise', exerciseId: 'standing-calf-raise', sets: '4', reps: '12 - 15', rest: '60 sec', notes: '2s pause at bottom.' },
          { name: 'Hanging Leg / Knee Raise', exerciseId: 'hanging-leg-raise', sets: '3', reps: '12 - 15', rest: '60 sec', notes: 'Full abdominal contraction.' }
        ]
      },
      {
        dayName: 'Upper B: Hypertrophy & Volume',
        focus: 'Incline Pressing & Scapular Pulls',
        exercises: [
          { name: 'Incline Dumbbell Press', exerciseId: 'incline-dumbbell-press', sets: '4', reps: '8 - 12', rest: '2 min', notes: 'Upper chest focus.' },
          { name: 'Wide-Grip Pull-Up', exerciseId: 'pull-ups', sets: '3', reps: '8 - 10', rest: '2 min', notes: 'Bodyweight or assisted.' },
          { name: 'Seated Cable Row', exerciseId: 'seated-cable-row', sets: '3', reps: '10 - 12', rest: '90 sec', notes: 'Retract scapulae.' },
          { name: 'Dumbbell Lateral Raise', exerciseId: 'lateral-raises', sets: '4', reps: '12 - 15', rest: '60 sec', notes: 'Constant side delt tension.' },
          { name: 'Incline Dumbbell Bicep Curl', exerciseId: 'incline-dumbbell-curl', sets: '3', reps: '10 - 12', rest: '60 sec', notes: 'Deep stretch on long head of biceps.' },
          { name: 'Cable Tricep Pushdown', exerciseId: 'cable-tricep-pushdown', sets: '3', reps: '12 - 15', rest: '60 sec', notes: 'Rope flare at bottom.' }
        ]
      },
      {
        dayName: 'Lower B: Hip Hinge & Posterior Chain',
        focus: 'Deadlifts, Glutes & Hamstrings',
        exercises: [
          { name: 'Conventional Barbell Deadlift', exerciseId: 'deadlift', sets: '3', reps: '5', rest: '3 min', notes: 'Total posterior chain overload.' },
          { name: 'Barbell Glute Hip Thrust', exerciseId: 'barbell-hip-thrust', sets: '4', reps: '8 - 10', rest: '2 min', notes: '2s glute squeeze at top.' },
          { name: 'Bulgarian Split Squat', exerciseId: 'bulgarian-split-squat', sets: '3', reps: '10 / leg', rest: '90 sec', notes: 'Single leg balance and quad stretch.' },
          { name: 'Seated Hamstring Leg Curl', exerciseId: 'seated-leg-curl', sets: '3', reps: '12 - 15', rest: '60 sec', notes: 'Strict hamstring pump.' },
          { name: 'Kneeling Cable Crunch', exerciseId: 'cable-crunch', sets: '3', reps: '15', rest: '60 sec', notes: 'Direct weighted core resistance.' }
        ]
      }
    ]
  },
  {
    id: 'dumbbell-home-special',
    name: 'Dumbbell & Bodyweight Home Routine',
    badge: 'Zero Gym Required',
    frequency: '3 to 4 Days / Week',
    level: 'Beginner',
    duration: '40 - 50 min',
    summary: 'Designed for lifters working out at home with only a pair of dumbbells and bodyweight. Hits every muscle group with high metabolic stimulus.',
    schedule: 'Monday, Wednesday, Friday, Saturday',
    goal: 'Build muscle, burn fat, and master bodyweight stability at home.',
    days: [
      {
        dayName: 'Session 1: Upper Body Push & Pull',
        focus: 'Chest, Back, Arms',
        exercises: [
          { name: 'Standard Push-Up', exerciseId: 'pushups', sets: '3', reps: '12 - 20', rest: '60 sec', notes: 'Full depth, elbows tucked 45°.' },
          { name: 'Incline Dumbbell Press (or floor press)', exerciseId: 'incline-dumbbell-press', sets: '3', reps: '10 - 12', rest: '90 sec', notes: 'Can use a sturdy bench or floor.' },
          { name: 'Dumbbell Lateral Raise', exerciseId: 'lateral-raises', sets: '3', reps: '12 - 15', rest: '60 sec', notes: 'Light weight, slow tempo.' },
          { name: 'Dumbbell Hammer Curl', exerciseId: 'hammer-curl', sets: '3', reps: '10 - 12', rest: '60 sec', notes: 'Pin elbows to torso.' },
          { name: 'Heavy Farmer Walk Carry', exerciseId: 'farmer-walk', sets: '3', reps: '45 seconds', rest: '60 sec', notes: 'Grip and posture challenge.' }
        ]
      },
      {
        dayName: 'Session 2: Lower Body & Core',
        focus: 'Quads, Hamstrings & Abs',
        exercises: [
          { name: 'Bulgarian Split Squat', exerciseId: 'bulgarian-split-squat', sets: '3', reps: '10 - 12 / leg', rest: '90 sec', notes: 'Elevate rear foot on sofa or chair.' },
          { name: 'Barbell Romanian Deadlift (with Dumbbells)', exerciseId: 'romanian-deadlift', sets: '3', reps: '12 - 15', rest: '90 sec', notes: 'Hinge hips back, feel hamstring stretch.' },
          { name: 'Standing Calf Raise', exerciseId: 'standing-calf-raise', sets: '4', reps: '20', rest: '45 sec', notes: 'Use a stair step for full ankle drop.' },
          { name: 'Hanging Leg / Knee Raise (or floor reverse crunch)', exerciseId: 'hanging-leg-raise', sets: '3', reps: '15', rest: '60 sec', notes: 'Curl pelvis up off the ground.' }
        ]
      }
    ]
  }
];

