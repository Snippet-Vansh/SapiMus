import React from 'react';
import { WORKOUT_PLANS } from '../../data/workoutPlansData';
import { Calendar, ArrowRight } from 'lucide-react';

export const WorkoutPlansPreview = ({ onNavigate }) => {
  return (
    <section className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/[0.06] relative">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-96 h-96 bg-orange-athletic/5 rounded-full blur-[140px] pointer-events-none" />

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14 relative z-10">
        <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill text-xs font-tech font-semibold uppercase tracking-wider text-accent mb-4 border border-white/10">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            <span>Training Splits // Periodization</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-black text-white uppercase tracking-tight leading-[1.05]">
            Engineered <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-white to-orange-warm">Workout Plans</span>
          </h2>
          <p className="text-text-secondary font-tech text-sm sm:text-base mt-3 max-w-2xl leading-relaxed">
            Eliminate guesswork with evidence-based splits, progression frameworks, 
            and calibrated rest periods built for natural lifters.
          </p>
        </div>

        <button
          onClick={() => onNavigate('plans')}
          className="self-start md:self-end px-6 py-3 rounded-full glass-pill hover:bg-white/[0.08] border border-white/10 text-xs font-tech font-bold uppercase tracking-wider text-accent hover:text-white transition-all flex items-center gap-2 group shadow-glass"
        >
          <span>View All Plans</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      {/* Plans Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
        {WORKOUT_PLANS.slice(0, 3).map((plan, index) => (
          <div
            key={plan.id}
            onClick={() => onNavigate('plans')}
            className="glass-panel p-7 sm:p-8 rounded-3xl border border-white/[0.08] hover:border-accent/40 cursor-pointer group flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 relative"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-5">
                <span className="text-[10px] font-tech font-bold uppercase px-3 py-1 rounded-full bg-accent text-black shadow-glow">
                  {plan.badge}
                </span>
                <span className="text-xs font-tech text-text-secondary">
                  // {plan.frequency}
                </span>
              </div>

              <h3 className="text-2xl font-display font-black text-white group-hover:text-accent transition-colors mb-3 uppercase">
                {plan.name}
              </h3>
              <p className="text-xs sm:text-sm text-text-secondary font-sans leading-relaxed mb-6">
                {plan.summary}
              </p>

              {/* Specs preview */}
              <div className="space-y-2.5 pt-4 border-t border-white/[0.06] text-xs font-tech">
                <div className="flex items-center justify-between">
                  <span className="text-text-muted">// Target Level</span>
                  <span className="font-semibold text-white">{plan.level}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-text-muted">// Duration</span>
                  <span className="font-semibold text-accent">{plan.duration}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-text-muted">// Schedule</span>
                  <span className="font-semibold text-white truncate max-w-[170px]">{plan.schedule}</span>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-white/[0.06] flex items-center justify-between text-xs font-tech font-bold text-accent group-hover:underline">
              <span>Inspect Full Schedule</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
