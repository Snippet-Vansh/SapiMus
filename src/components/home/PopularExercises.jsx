import React from 'react';
import { EXERCISES } from '../../data/exercisesData';
import { Dumbbell, ArrowRight, Bookmark, Zap } from 'lucide-react';

export const PopularExercises = ({ onSelectExercise, onNavigate, bookmarkedIds = [], onToggleBookmark }) => {
  // Take 4 iconic compound exercises
  const popular = EXERCISES.filter((ex) => 
    ['bench-press', 'barbell-squat', 'pull-ups', 'deadlift'].includes(ex.id)
  );

  return (
    <section className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/[0.06] relative">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-accent/5 rounded-full blur-[130px] pointer-events-none" />

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14 relative z-10">
        <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill text-xs font-tech font-semibold uppercase tracking-wider text-orange-athletic mb-4 border border-white/10">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-athletic animate-pulse" />
            <span>Kinematics // Compound Mastery</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-black text-white uppercase tracking-tight leading-[1.05]">
            Foundation <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-athletic via-white to-accent">Compounds</span>
          </h2>
          <p className="text-text-secondary font-tech text-sm sm:text-base mt-3 max-w-2xl leading-relaxed">
            Multi-joint movements recruit maximum motor units and drive hormonal output. 
            Learn exact execution lines and biomechanical cues.
          </p>
        </div>

        <button
          onClick={() => onNavigate('exercises')}
          className="self-start md:self-end px-6 py-3 rounded-full glass-pill hover:bg-white/[0.08] border border-white/10 text-xs font-tech font-bold uppercase tracking-wider text-accent hover:text-white transition-all flex items-center gap-2 group shadow-glass"
        >
          <span>Explore All 30+ Exercises</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
        {popular.map((exercise, index) => {
          const isSaved = bookmarkedIds.includes(exercise.id);
          return (
            <div
              key={exercise.id}
              onClick={() => onSelectExercise(exercise)}
              className="glass-panel p-6 sm:p-7 rounded-3xl border border-white/[0.08] hover:border-accent/40 cursor-pointer group flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 relative"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-[10px] font-tech font-bold px-2.5 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent uppercase">
                    {exercise.type}
                  </span>
                  <span className="text-[11px] font-tech text-text-secondary">
                    // {exercise.equipment}
                  </span>
                </div>

                {/* Minimalist Graphic Container */}
                <div className="w-full h-32 rounded-2xl bg-black/40 border border-white/[0.06] mb-4 p-3.5 flex flex-col justify-between relative overflow-hidden group-hover:border-accent/30 transition-colors">
                  <div className="flex items-center justify-between z-10 text-[11px] font-tech">
                    <span className="text-text-muted">{exercise.movementPattern}</span>
                    <span className="text-accent font-semibold">{exercise.targetMuscle}</span>
                  </div>
                  <div className="flex items-center justify-center my-auto z-10">
                    <div className="w-10 h-10 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-center group-hover:scale-110 group-hover:border-accent/40 transition-all duration-300">
                      <Zap className="w-5 h-5 text-accent" />
                    </div>
                  </div>
                  <div className="text-[10px] text-text-muted font-tech z-10 flex items-center justify-between">
                    <span>INDEX // 0{index + 1}</span>
                    <span className="text-orange-athletic font-medium">Verified Cues</span>
                  </div>
                </div>

                <h3 className="font-display font-black text-xl text-white group-hover:text-accent transition-colors leading-snug mb-2 uppercase">
                  {exercise.name}
                </h3>
                <p className="text-xs text-text-secondary font-sans line-clamp-2 leading-relaxed">
                  {exercise.summary}
                </p>
              </div>

              <div className="pt-4 mt-5 border-t border-white/[0.06] flex items-center justify-between text-xs">
                <span className="text-accent font-tech font-bold flex items-center gap-1.5 group-hover:translate-x-0.5 transition-transform">
                  <span>View Form Guide</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onToggleBookmark(exercise.id);
                  }}
                  className={`p-2 rounded-xl transition-all ${
                    isSaved ? 'text-accent bg-accent/15' : 'text-text-muted hover:text-white hover:bg-white/[0.06]'
                  }`}
                  title="Bookmark"
                >
                  <Bookmark className={`w-4 h-4 ${isSaved ? 'fill-accent' : ''}`} />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
