import React from 'react';
import { Bookmark, ChevronRight, Zap, Target } from 'lucide-react';

export const ExerciseCard = ({ exercise, onSelect, isBookmarked, onToggleBookmark }) => {
  const getDifficultyColor = (diff) => {
    switch (diff) {
      case 'Beginner':
        return 'text-emerald-400 bg-emerald-400/10 border-emerald-400/20';
      case 'Intermediate':
        return 'text-amber-400 bg-amber-400/10 border-amber-400/20';
      case 'Advanced':
        return 'text-rose-400 bg-rose-400/10 border-rose-400/20';
      default:
        return 'text-accent bg-accent/10 border-accent/20';
    }
  };

  return (
    <div
      onClick={() => onSelect(exercise)}
      className="glass-panel group rounded-3xl p-6 sm:p-7 flex flex-col justify-between cursor-pointer border border-white/[0.08] hover:border-accent/40 relative overflow-hidden transition-all duration-300 hover:-translate-y-1 shadow-glass"
    >
      {/* Top Banner & Category */}
      <div>
        <div className="flex items-center justify-between gap-2 mb-4">
          <div className="flex items-center gap-2">
            <span className={`text-[10px] font-tech font-bold uppercase px-3 py-1 rounded-full border ${getDifficultyColor(exercise.difficulty)}`}>
              {exercise.difficulty}
            </span>
            <span className="text-[10px] font-tech uppercase text-text-secondary glass-pill px-3 py-1 rounded-full border border-white/10">
              {exercise.type}
            </span>
          </div>

          {/* Bookmark Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              onToggleBookmark(exercise.id);
            }}
            className={`p-2 rounded-xl transition-all ${
              isBookmarked
                ? 'bg-accent text-black shadow-glow'
                : 'text-text-muted hover:text-white glass-pill hover:bg-white/10'
            }`}
            title={isBookmarked ? 'Remove from Saved' : 'Save to Favorites'}
          >
            <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-black' : ''}`} />
          </button>
        </div>

        {/* Visual Cue Graphic */}
        <div className="w-full h-36 rounded-2xl bg-black/40 border border-white/[0.06] mb-4 p-4 flex flex-col justify-between relative overflow-hidden group-hover:border-accent/40 transition-colors">
          <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-2xl group-hover:bg-accent/10 transition-colors" />
          
          <div className="flex items-center justify-between z-10">
            <div className="flex items-center gap-1.5 text-xs font-tech text-text-secondary">
              <Target className="w-3.5 h-3.5 text-accent" />
              <span>Target: <strong className="text-white font-tech">{exercise.targetMuscle}</strong></span>
            </div>
            <span className="text-[10px] font-tech text-orange-athletic uppercase px-2.5 py-0.5 rounded-full bg-white/[0.04] border border-white/10">
              {exercise.movementPattern}
            </span>
          </div>

          {/* Kinetic Visual Abstract Lines */}
          <div className="flex items-center justify-center my-auto py-2 z-10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-0.5 rounded-full bg-white/10 group-hover:bg-accent/40 transition-all duration-300" />
              <div className="p-3 rounded-2xl glass-panel border border-white/10 group-hover:border-accent group-hover:scale-110 transition-all duration-300 shadow-glass">
                <Zap className="w-5 h-5 text-accent" />
              </div>
              <div className="w-10 h-0.5 rounded-full bg-white/10 group-hover:bg-accent/40 transition-all duration-300" />
            </div>
          </div>

          <div className="flex items-center justify-between text-xs font-tech text-text-secondary z-10">
            <span>Eq: <span className="text-white">{exercise.equipment}</span></span>
            <span className="text-text-muted text-[11px]">// Inspect Form</span>
          </div>
        </div>

        {/* Title */}
        <h3 className="text-xl font-display font-black uppercase text-white group-hover:text-accent transition-colors leading-snug mb-2">
          {exercise.name}
        </h3>

        {/* Summary */}
        <p className="text-xs sm:text-sm text-text-secondary line-clamp-2 leading-relaxed mb-4 font-sans">
          {exercise.summary}
        </p>
      </div>

      {/* Bottom Synergists & Action */}
      <div className="pt-4 border-t border-white/[0.06] flex flex-col gap-3">
        {exercise.secondaryMuscles && exercise.secondaryMuscles.length > 0 && (
          <div className="flex items-center gap-1.5 overflow-hidden text-xs">
            <span className="text-text-muted text-[11px] font-tech shrink-0">// Synergists:</span>
            <div className="flex gap-1.5 truncate">
              {exercise.secondaryMuscles.map((sm, idx) => (
                <span
                  key={idx}
                  className="px-2 py-0.5 rounded-md bg-white/[0.04] text-[10px] text-text-secondary font-tech shrink-0"
                >
                  {sm}
                </span>
              ))}
            </div>
          </div>
        )}

        <div className="flex items-center justify-between pt-1">
          <span className="text-xs font-tech font-bold text-accent flex items-center gap-1 group-hover:translate-x-1 transition-transform">
            <span>View Full Kinematics</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </span>
          <span className="text-[11px] font-tech text-text-muted">
            {exercise.rating ? `★ ${exercise.rating}` : 'Elite Tier'}
          </span>
        </div>
      </div>
    </div>
  );
};
