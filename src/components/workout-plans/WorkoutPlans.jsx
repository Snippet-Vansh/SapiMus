import React, { useState } from 'react';
import { WORKOUT_PLANS } from '../../data/workoutPlansData';
import { EXERCISES } from '../../data/exercisesData';
import { 
  Calendar, 
  Dumbbell, 
  ChevronRight, 
  CheckCircle2, 
  Moon, 
  Printer, 
  Sparkles 
} from 'lucide-react';

export const WorkoutPlans = ({ onSelectExercise }) => {
  const [selectedPlanId, setSelectedPlanId] = useState(WORKOUT_PLANS[0].id);
  const activePlan = WORKOUT_PLANS.find((p) => p.id === selectedPlanId) || WORKOUT_PLANS[0];
  const [selectedDayIndex, setSelectedDayIndex] = useState(0);

  const activeDay = activePlan.days[selectedDayIndex] || activePlan.days[0];

  const handlePlanChange = (planId) => {
    setSelectedPlanId(planId);
    setSelectedDayIndex(0);
  };

  const handlePrint = () => {
    window.print();
  };

  const handleOpenExercise = (exerciseId) => {
    const found = EXERCISES.find((e) => e.id === exerciseId);
    if (found && onSelectExercise) {
      onSelectExercise(found);
    }
  };

  return (
    <div className="w-full py-12 md:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      {/* Background glow */}
      <div className="absolute top-20 right-1/4 w-96 h-96 bg-orange-athletic/5 rounded-full blur-[140px] pointer-events-none" />

      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-12 relative z-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill border border-white/10 text-accent text-xs font-tech font-semibold uppercase tracking-wider mb-4 shadow-glass">
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
          <span>Curated Periodized Programs // Splits</span>
        </div>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-black text-white uppercase tracking-tight leading-[1.05] mb-4">
          Training <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-white to-orange-warm">Splits</span>
        </h2>
        <p className="text-text-secondary font-tech text-sm sm:text-base leading-relaxed">
          Tested, progressive splits designed for natural lifters. 
          Complete with periodized sets, reps, rest intervals, and supercompensation days.
        </p>
      </div>

      {/* Plan Selection Carousel / Tabs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10 relative z-10">
        {WORKOUT_PLANS.map((plan) => {
          const isSelected = plan.id === selectedPlanId;
          return (
            <div
              key={plan.id}
              onClick={() => handlePlanChange(plan.id)}
              className={`p-6 rounded-3xl border cursor-pointer transition-all duration-300 flex flex-col justify-between shadow-glass ${
                isSelected
                  ? 'glass-panel border-accent shadow-glow'
                  : 'glass-panel border-white/[0.08] hover:border-white/20'
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className={`text-[10px] uppercase font-tech font-bold px-2.5 py-1 rounded-full ${
                    isSelected ? 'bg-accent text-black' : 'bg-white/[0.04] text-accent border border-accent/20'
                  }`}>
                    {plan.badge}
                  </span>
                  <span className="text-[11px] font-tech text-text-secondary">
                    // {plan.frequency}
                  </span>
                </div>
                <h3 className="font-display font-black text-white text-lg mb-2 uppercase">{plan.name}</h3>
                <p className="text-xs text-text-secondary line-clamp-2 leading-relaxed font-sans">
                  {plan.summary}
                </p>
              </div>

              <div className="flex items-center justify-between mt-5 pt-4 border-t border-white/[0.06] text-xs font-tech text-text-muted">
                <span>{plan.level}</span>
                <span className="text-accent flex items-center gap-1 font-bold">
                  <span>Inspect</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Active Plan Detail Card */}
      <div className="glass-panel border border-white/[0.08] rounded-3xl p-6 sm:p-10 shadow-glass relative z-10">
        
        {/* Plan Header Info */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b border-white/[0.06]">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="px-3 py-1 rounded-full bg-accent/10 border border-accent/30 text-accent text-xs font-tech font-bold uppercase">
                {activePlan.badge}
              </span>
              <span className="text-xs font-tech text-text-secondary glass-pill px-3 py-1 rounded-full border border-white/10">
                // {activePlan.frequency}
              </span>
              <span className="text-xs font-tech text-text-secondary glass-pill px-3 py-1 rounded-full border border-white/10">
                // {activePlan.level}
              </span>
            </div>
            <h3 className="text-3xl sm:text-4xl font-display font-black text-white uppercase mb-2">
              {activePlan.name}
            </h3>
            <p className="text-text-secondary font-tech text-sm sm:text-base max-w-3xl leading-relaxed">
              {activePlan.summary}
            </p>
          </div>

          {/* Quick Stats & Print */}
          <div className="flex sm:items-center gap-4 flex-wrap lg:flex-nowrap">
            <div className="p-4 rounded-2xl bg-black/40 border border-white/[0.06] text-center min-w-[110px]">
              <div className="text-[10px] uppercase font-tech text-text-muted mb-0.5">// Duration</div>
              <div className="text-sm font-tech font-bold text-accent">{activePlan.duration}</div>
            </div>

            <div className="p-4 rounded-2xl bg-black/40 border border-white/[0.06] text-center min-w-[120px]">
              <div className="text-[10px] uppercase font-tech text-text-muted mb-0.5">// Schedule</div>
              <div className="text-xs font-tech font-bold text-white leading-tight mt-0.5">{activePlan.schedule}</div>
            </div>

            <button
              onClick={handlePrint}
              className="p-4 rounded-2xl glass-pill hover:bg-white/10 border border-white/10 text-text-secondary hover:text-white transition-colors shadow-glass"
              title="Print Routine"
            >
              <Printer className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Days Tab Strip */}
        <div className="py-6 border-b border-white/[0.06]">
          <div className="text-xs font-tech uppercase text-text-muted font-bold mb-3">
            // Select Training Day
          </div>
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {activePlan.days.map((day, idx) => {
              const isActive = selectedDayIndex === idx;
              return (
                <button
                  key={idx}
                  onClick={() => setSelectedDayIndex(idx)}
                  className={`px-5 py-3 rounded-2xl text-xs sm:text-sm font-tech font-bold uppercase whitespace-nowrap transition-all border flex items-center gap-2.5 shadow-glass ${
                    isActive
                      ? 'bg-accent text-black border-accent shadow-glow'
                      : 'bg-black/40 border-white/[0.06] text-text-secondary hover:text-white hover:border-white/20'
                  }`}
                >
                  {day.isRest ? (
                    <Moon className="w-4 h-4" />
                  ) : (
                    <Dumbbell className="w-4 h-4" />
                  )}
                  <span>{day.dayName.split(':')[0]}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Day Content */}
        <div className="pt-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
            <div>
              <h4 className="text-2xl font-display font-black uppercase text-white">
                {activeDay.dayName}
              </h4>
              <p className="text-xs sm:text-sm text-text-secondary font-tech mt-1">
                // Focus: <span className="text-accent font-bold">{activeDay.focus}</span>
              </p>
            </div>
            {!activeDay.isRest && (
              <span className="text-xs font-tech text-text-muted">
                // {activeDay.exercises?.length || 0} Movements Prescribed
              </span>
            )}
          </div>

          {activeDay.isRest ? (
            /* Rest Day Showcase */
            <div className="p-8 sm:p-12 rounded-3xl bg-black/40 border border-white/[0.06] text-center max-w-2xl mx-auto space-y-6">
              <div className="w-14 h-14 rounded-2xl bg-white/[0.04] border border-white/10 text-accent flex items-center justify-center mx-auto shadow-glass">
                <Moon className="w-7 h-7" />
              </div>
              <div>
                <h5 className="text-xl font-display font-black uppercase text-white mb-2">Supercompensation & Tissue Synthesis</h5>
                <p className="text-sm text-text-secondary leading-relaxed font-sans">
                  Muscles do not grow under the barbell; they adapt when synthesizing new myofibrillar proteins during deep rest. 
                  Treat rest days with the same physiological discipline as training sessions.
                </p>
              </div>
              <div className="text-left space-y-2.5 pt-5 border-t border-white/[0.06]">
                {activeDay.recoveryTips?.map((tip, i) => (
                  <div key={i} className="flex items-center gap-3 text-xs sm:text-sm text-text-primary/90 font-tech">
                    <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
                    <span>{tip}</span>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            /* Workout Exercises Table / List */
            <div className="space-y-3">
              {activeDay.exercises?.map((ex, idx) => (
                <div
                  key={idx}
                  onClick={() => handleOpenExercise(ex.exerciseId)}
                  className="p-4 sm:p-6 rounded-2xl bg-black/40 border border-white/[0.06] hover:border-accent/40 cursor-pointer group flex flex-col md:flex-row md:items-center justify-between gap-4 transition-all"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-xl bg-white/[0.04] border border-white/10 text-accent font-tech font-bold text-sm flex items-center justify-center shrink-0 mt-0.5">
                      0{idx + 1}
                    </div>
                    <div>
                      <div className="font-display font-black uppercase text-white text-base group-hover:text-accent transition-colors flex items-center gap-2">
                        <span>{ex.name}</span>
                        <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all text-accent" />
                      </div>
                      <div className="text-xs sm:text-sm text-text-secondary mt-1 font-tech">
                        // {ex.notes}
                      </div>
                    </div>
                  </div>

                  {/* Sets / Reps / Rest Badges */}
                  <div className="flex items-center gap-4 sm:gap-6 shrink-0 self-end md:self-center font-tech text-xs">
                    <div className="text-center p-2.5 rounded-xl bg-white/[0.04] border border-white/10 min-w-[70px]">
                      <div className="text-[10px] text-text-muted uppercase">// Sets</div>
                      <div className="font-bold text-accent text-sm">{ex.sets}</div>
                    </div>

                    <div className="text-center p-2.5 rounded-xl bg-white/[0.04] border border-white/10 min-w-[80px]">
                      <div className="text-[10px] text-text-muted uppercase">// Reps</div>
                      <div className="font-bold text-white text-sm">{ex.reps}</div>
                    </div>

                    <div className="text-center p-2.5 rounded-xl bg-white/[0.04] border border-white/10 min-w-[90px]">
                      <div className="text-[10px] text-text-muted uppercase">// Rest</div>
                      <div className="font-bold text-white text-sm">{ex.rest}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Goal & Philosophy Footer */}
          <div className="mt-8 p-5 rounded-2xl bg-white/[0.03] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-tech">
            <div className="flex items-center gap-2 text-text-secondary">
              <Sparkles className="w-4 h-4 text-accent" />
              <span>Program Objective: <strong className="text-white">{activePlan.goal}</strong></span>
            </div>
            <span className="text-accent underline cursor-pointer font-bold" onClick={handlePrint}>
              Export / Print This Split
            </span>
          </div>

        </div>

      </div>
    </div>
  );
};
