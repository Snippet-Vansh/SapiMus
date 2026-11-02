import React, { useState } from 'react';
import { EXERCISES } from '../../data/exercisesData';
import { 
  Sparkles, 
  Target, 
  Clock, 
  Flame, 
  RotateCcw, 
  Copy, 
  Check, 
  ArrowRight,
  ShieldCheck,
  Zap
} from 'lucide-react';

export const WorkoutFinder = ({ onSelectExercise }) => {
  // Config state
  const [targetMuscle, setTargetMuscle] = useState('chest');
  const [experienceLevel, setExperienceLevel] = useState('Beginner');
  const [equipment, setEquipment] = useState('Full Gym');
  const [goal, setGoal] = useState('hypertrophy');
  const [generatedWorkout, setGeneratedWorkout] = useState(null);
  const [copied, setCopied] = useState(false);

  const muscleOptions = [
    { id: 'chest', name: 'Chest' },
    { id: 'back', name: 'Back & Lats' },
    { id: 'quadriceps', name: 'Quadriceps' },
    { id: 'hamstrings', name: 'Hamstrings' },
    { id: 'glutes', name: 'Glutes' },
    { id: 'shoulders', name: 'Deltoids & Shoulders' },
    { id: 'biceps', name: 'Biceps' },
    { id: 'triceps', name: 'Triceps' },
    { id: 'abs', name: 'Abs & Core' }
  ];

  const experienceLevels = [
    { id: 'Beginner', label: 'Beginner', desc: '0 - 1 years consistent training' },
    { id: 'Intermediate', label: 'Intermediate', desc: '1 - 3 years training' },
    { id: 'Advanced', label: 'Advanced', desc: '3+ years intense lifting' }
  ];

  const equipmentOptions = [
    { id: 'Full Gym', label: 'Commercial Gym', desc: 'Barbells, dumbbells, cables & machines' },
    { id: 'Dumbbells', label: 'Dumbbells Only', desc: 'Free weights and adjustable bench at home' },
    { id: 'Bodyweight', label: 'Bodyweight / Calisthenics', desc: 'No equipment or pull-up bar only' }
  ];

  const goalOptions = [
    { id: 'hypertrophy', label: 'Muscle Hypertrophy', desc: 'Target 8-12 reps with controlled eccentrics for maximum muscle size' },
    { id: 'strength', label: 'Raw Strength Power', desc: 'Target 4-6 reps with heavy mechanical tension and long rest intervals' },
    { id: 'endurance', label: 'Toning & Metabolic Burn', desc: 'Target 12-18 reps with short rest periods for muscular endurance' }
  ];

  const handleGenerate = () => {
    // Filter matching exercises
    let candidatePool = EXERCISES.filter((ex) => {
      // Muscle match
      const matchesMuscle = ex.targetMuscleId === targetMuscle || 
        (targetMuscle === 'chest' && ex.targetMuscleId === 'chest') ||
        (targetMuscle === 'back' && ex.targetMuscleId === 'back');

      // Equipment match
      let matchesEq = true;
      if (equipment === 'Dumbbells') {
        matchesEq = ex.equipment === 'Dumbbell' || ex.equipment === 'Bodyweight';
      } else if (equipment === 'Bodyweight') {
        matchesEq = ex.equipment === 'Bodyweight';
      }

      return matchesMuscle && matchesEq;
    });

    // If pool is too small due to strict equipment, add synergist exercises
    if (candidatePool.length < 3) {
      const backupPool = EXERCISES.filter((ex) => {
        let matchesEq = true;
        if (equipment === 'Dumbbells') matchesEq = ex.equipment === 'Dumbbell' || ex.equipment === 'Bodyweight';
        if (equipment === 'Bodyweight') matchesEq = ex.equipment === 'Bodyweight';
        return matchesEq;
      });
      candidatePool = [...candidatePool, ...backupPool.slice(0, 4 - candidatePool.length)];
    }

    // Sort compounds first, then isolations
    candidatePool.sort((a, b) => {
      if (a.type === 'Compound' && b.type === 'Isolation') return -1;
      if (a.type === 'Isolation' && b.type === 'Compound') return 1;
      return 0;
    });

    // Take top 4 exercises
    const selectedExercises = candidatePool.slice(0, 4);

    let repsDesc = '8 - 12 reps';
    let restDesc = '90 - 120 seconds';

    if (goal === 'strength') {
      repsDesc = '4 - 6 reps';
      restDesc = '2 - 3 minutes';
    } else if (goal === 'endurance') {
      repsDesc = '12 - 15 reps';
      restDesc = '45 - 60 seconds';
    }

    const prescription = selectedExercises.map((ex, index) => ({
      ...ex,
      assignedSets: index === 0 ? '4 sets' : '3 sets',
      assignedReps: index === 0 && goal === 'strength' ? '5 reps' : repsDesc,
      assignedRest: index === 0 ? '2 - 3 min' : restDesc,
      focusCue: ex.tips && ex.tips[0] ? ex.tips[0] : 'Maintain strict form and full range of motion.'
    }));

    setGeneratedWorkout({
      targetMuscleName: muscleOptions.find(m => m.id === targetMuscle)?.name || targetMuscle,
      level: experienceLevel,
      equipment,
      goalName: goalOptions.find(g => g.id === goal)?.label || goal,
      estimatedTime: '45 - 55 min',
      exercises: prescription,
      warmupProtocol: '5 min light cardio + dynamic joint mobility rotations + 2 progressive light warm-up sets.'
    });
  };

  const handleCopy = () => {
    if (!generatedWorkout) return;
    const text = `SapiMus Generated Routine - ${generatedWorkout.targetMuscleName} (${generatedWorkout.goalName})
Level: ${generatedWorkout.level} | Equipment: ${generatedWorkout.equipment}
Est. Time: ${generatedWorkout.estimatedTime}

Exercises:
${generatedWorkout.exercises.map((ex, i) => `${i + 1}. ${ex.name} - ${ex.assignedSets} x ${ex.assignedReps} (Rest: ${ex.assignedRest})`).join('\n')}

Warmup: ${generatedWorkout.warmupProtocol}
Built with SapiMus: Understand Your Muscles. Build Your Strength.`;

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="w-full py-12 md:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      {/* Background glow */}
      <div className="absolute top-20 left-1/3 w-96 h-96 bg-accent/5 rounded-full blur-[140px] pointer-events-none" />

      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-12 relative z-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill border border-white/10 text-accent text-xs font-tech font-semibold uppercase tracking-wider mb-4 shadow-glass">
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
          <span>Algorithmic Engine // Custom Protocols</span>
        </div>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-black text-white uppercase tracking-tight leading-[1.05] mb-4">
          Workout <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-white to-orange-warm">Finder</span>
        </h2>
        <p className="text-text-secondary font-tech text-sm sm:text-base leading-relaxed">
          Configure your target muscle, experience level, equipment, and training goal 
          to generate an optimal, biomechanically calibrated session.
        </p>
      </div>

      {/* Generator Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
        
        {/* Configuration Form (5 Cols) */}
        <div className="lg:col-span-5 glass-panel border border-white/[0.08] rounded-3xl p-6 sm:p-8 space-y-6 shadow-glass">
          <div className="flex items-center justify-between pb-4 border-b border-white/[0.06]">
            <h3 className="text-lg font-display font-black uppercase text-white flex items-center gap-2">
              <Zap className="w-5 h-5 text-accent" />
              <span>Routine Parameters</span>
            </h3>
            <span className="text-xs font-tech text-text-muted">// Step 01 to 04</span>
          </div>

          {/* 1. Target Muscle */}
          <div>
            <label className="block text-xs font-tech uppercase text-text-muted font-bold mb-3">
              // 01. Primary Target Muscle
            </label>
            <div className="grid grid-cols-3 gap-2">
              {muscleOptions.map((m) => (
                <button
                  key={m.id}
                  onClick={() => setTargetMuscle(m.id)}
                  className={`p-2.5 rounded-xl text-xs font-tech uppercase font-bold text-center border transition-all shadow-glass ${
                    targetMuscle === m.id
                      ? 'bg-accent text-black border-accent shadow-glow'
                      : 'bg-black/40 border-white/[0.06] text-text-secondary hover:text-white hover:border-white/20'
                  }`}
                >
                  {m.name}
                </button>
              ))}
            </div>
          </div>

          {/* 2. Experience Level */}
          <div>
            <label className="block text-xs font-tech uppercase text-text-muted font-bold mb-3">
              // 02. Training Experience
            </label>
            <div className="space-y-2">
              {experienceLevels.map((lvl) => (
                <div
                  key={lvl.id}
                  onClick={() => setExperienceLevel(lvl.id)}
                  className={`p-3.5 rounded-2xl border cursor-pointer transition-all flex items-center justify-between ${
                    experienceLevel === lvl.id
                      ? 'bg-accent/10 border-accent text-white shadow-glass'
                      : 'bg-black/40 border-white/[0.06] text-text-secondary hover:border-white/20 hover:text-white'
                  }`}
                >
                  <div>
                    <div className="text-sm font-tech font-bold uppercase">{lvl.label}</div>
                    <div className="text-[11px] text-text-muted font-tech">{lvl.desc}</div>
                  </div>
                  <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                    experienceLevel === lvl.id ? 'border-accent bg-accent' : 'border-white/20'
                  }`}>
                    {experienceLevel === lvl.id && <div className="w-1.5 h-1.5 rounded-full bg-black" />}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 3. Available Equipment */}
          <div>
            <label className="block text-xs font-tech uppercase text-text-muted font-bold mb-3">
              // 03. Available Equipment
            </label>
            <div className="space-y-2">
              {equipmentOptions.map((eq) => (
                <div
                  key={eq.id}
                  onClick={() => setEquipment(eq.id)}
                  className={`p-3.5 rounded-2xl border cursor-pointer transition-all flex items-center justify-between ${
                    equipment === eq.id
                      ? 'bg-accent/10 border-accent text-white shadow-glass'
                      : 'bg-black/40 border-white/[0.06] text-text-secondary hover:border-white/20 hover:text-white'
                  }`}
                >
                  <div>
                    <div className="text-sm font-tech font-bold uppercase">{eq.label}</div>
                    <div className="text-[11px] text-text-muted font-tech">{eq.desc}</div>
                  </div>
                  <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                    equipment === eq.id ? 'border-accent bg-accent' : 'border-white/20'
                  }`}>
                    {equipment === eq.id && <div className="w-1.5 h-1.5 rounded-full bg-black" />}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 4. Fitness Goal */}
          <div>
            <label className="block text-xs font-tech uppercase text-text-muted font-bold mb-3">
              // 04. Primary Goal
            </label>
            <div className="space-y-2">
              {goalOptions.map((g) => (
                <div
                  key={g.id}
                  onClick={() => setGoal(g.id)}
                  className={`p-3.5 rounded-2xl border cursor-pointer transition-all flex items-center justify-between ${
                    goal === g.id
                      ? 'bg-accent/10 border-accent text-white shadow-glass'
                      : 'bg-black/40 border-white/[0.06] text-text-secondary hover:border-white/20 hover:text-white'
                  }`}
                >
                  <div>
                    <div className="text-sm font-tech font-bold uppercase">{g.label}</div>
                    <div className="text-[11px] text-text-muted font-tech">{g.desc}</div>
                  </div>
                  <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                    goal === g.id ? 'border-accent bg-accent' : 'border-white/20'
                  }`}>
                    {goal === g.id && <div className="w-1.5 h-1.5 rounded-full bg-black" />}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Generate CTA Button */}
          <button
            onClick={handleGenerate}
            className="w-full py-4 rounded-full bg-accent hover:bg-accent-hover text-black font-tech font-extrabold text-xs uppercase tracking-wider transition-all shadow-glow flex items-center justify-center gap-2 group hover:scale-[1.01]"
          >
            <Sparkles className="w-4 h-4" />
            <span>Generate Prescription</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Results Column (7 Cols) */}
        <div className="lg:col-span-7">
          {generatedWorkout ? (
            <div className="glass-panel border border-white/[0.08] rounded-3xl p-6 sm:p-8 space-y-6 shadow-glass animate-fadeIn">
              
              {/* Routine Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/[0.06]">
                <div>
                  <div className="text-xs font-tech text-orange-athletic uppercase tracking-wider font-bold mb-1">
                    // Custom Prescription
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-display font-black uppercase text-white">
                    {generatedWorkout.targetMuscleName} Session
                  </h3>
                  <div className="flex items-center gap-2 mt-2 text-xs font-tech text-text-secondary flex-wrap">
                    <span className="px-3 py-1 rounded-full glass-pill border border-white/10 text-text-primary">
                      {generatedWorkout.level}
                    </span>
                    <span className="text-white/20">//</span>
                    <span className="px-3 py-1 rounded-full glass-pill border border-white/10 text-text-primary">
                      {generatedWorkout.equipment}
                    </span>
                    <span className="text-white/20">//</span>
                    <span className="text-accent flex items-center gap-1 font-bold">
                      <Clock className="w-3.5 h-3.5" />
                      {generatedWorkout.estimatedTime}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={handleCopy}
                    className="px-4 py-2.5 rounded-full glass-pill hover:bg-white/10 border border-white/10 text-xs font-tech font-bold uppercase text-white flex items-center gap-1.5 transition-colors shadow-glass"
                  >
                    {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-text-secondary" />}
                    <span>{copied ? 'Copied' : 'Copy'}</span>
                  </button>
                  <button
                    onClick={() => setGeneratedWorkout(null)}
                    className="p-2.5 rounded-full glass-pill hover:bg-white/10 border border-white/10 text-text-secondary hover:text-white transition-colors"
                    title="Reset"
                  >
                    <RotateCcw className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Warm-Up Advice */}
              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-tech uppercase text-accent font-bold">// Warm-Up Protocol</div>
                  <div className="text-xs sm:text-sm text-text-primary/90 mt-0.5 font-normal">
                    {generatedWorkout.warmupProtocol}
                  </div>
                </div>
              </div>

              {/* Exercise Prescription List */}
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs font-tech uppercase text-text-muted font-bold">
                  <span>// Exercise Sequence</span>
                  <span>Click for Kinematics</span>
                </div>

                {generatedWorkout.exercises.map((ex, idx) => (
                  <div
                    key={ex.id}
                    onClick={() => onSelectExercise && onSelectExercise(ex)}
                    className="p-4 sm:p-5 rounded-2xl bg-black/40 border border-white/[0.06] hover:border-accent/40 cursor-pointer group flex flex-col sm:flex-row sm:items-center justify-between gap-4 transition-all"
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-xl bg-white/[0.04] border border-white/10 text-accent font-tech font-bold text-sm flex items-center justify-center shrink-0 mt-0.5">
                        0{idx + 1}
                      </div>
                      <div>
                        <div className="font-display font-black text-white uppercase text-base group-hover:text-accent transition-colors">
                          {ex.name}
                        </div>
                        <div className="text-xs text-text-secondary mt-1 font-tech">
                          <span className="text-orange-athletic font-bold">// Cue:</span> {ex.focusCue}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 shrink-0 self-end sm:self-center font-tech">
                      <div className="text-right">
                        <div className="text-xs font-bold text-white">{ex.assignedSets} × {ex.assignedReps}</div>
                        <div className="text-[11px] text-text-muted">Rest: {ex.assignedRest}</div>
                      </div>
                      <div className="p-2 rounded-xl bg-white/[0.04] border border-white/10 text-text-muted group-hover:text-accent group-hover:border-accent/40 transition-colors">
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pro Tips Footer */}
              <div className="p-5 rounded-2xl bg-black/40 border border-white/[0.06] text-xs text-text-secondary space-y-1.5 font-normal">
                <div className="text-white font-tech font-bold uppercase mb-1 flex items-center gap-1.5">
                  <Flame className="w-4 h-4 text-orange-athletic" />
                  <span>// Progression Directive</span>
                </div>
                <p className="font-sans leading-relaxed">
                  Perform each set with 1 to 2 Reps in Reserve (RIR). When you can comfortably complete the top 
                  rep target on all sets with pristine technique, increase resistance by 2.5% to 5% next week.
                </p>
              </div>

            </div>
          ) : (
            /* Placeholder State before generation */
            <div className="glass-panel border border-dashed border-white/15 rounded-3xl p-10 sm:p-16 text-center flex flex-col items-center justify-center min-h-[500px]">
              <div className="w-16 h-16 rounded-3xl bg-accent/10 border border-accent/20 text-accent flex items-center justify-center mb-6 shadow-glow">
                <Target className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-display font-black uppercase text-white mb-3">Ready To Configure?</h3>
              <p className="text-text-secondary text-sm sm:text-base max-w-md leading-relaxed mb-8 font-tech">
                Select your parameters on the left and click 
                <strong className="text-white"> "Generate Prescription"</strong> to synthesize a calibrated hypertrophy session.
              </p>
              <button
                onClick={handleGenerate}
                className="px-6 py-3 rounded-full glass-pill hover:bg-white/10 border border-white/15 text-white text-xs font-tech font-bold uppercase tracking-wider transition-colors flex items-center gap-2 shadow-glass"
              >
                <Sparkles className="w-4 h-4 text-accent" />
                <span>Quick Generate Chest Workout</span>
              </button>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
