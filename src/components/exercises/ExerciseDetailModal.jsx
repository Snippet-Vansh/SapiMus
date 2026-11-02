import React, { useEffect } from 'react';
import { 
  X, 
  Target, 
  CheckCircle2, 
  AlertTriangle, 
  Lightbulb, 
  Bookmark, 
  ArrowRight
} from 'lucide-react';

export const ExerciseDetailModal = ({ exercise, onClose, isBookmarked, onToggleBookmark, onNavigateToMuscle }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!exercise) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8 bg-black/85 backdrop-blur-xl overflow-y-auto animate-fadeIn">
      {/* Click outside backdrop */}
      <div className="fixed inset-0" onClick={onClose} />

      {/* Modal Card */}
      <div className="relative w-full max-w-3xl glass-panel border border-white/10 rounded-3xl shadow-glass overflow-hidden z-10 max-h-[90vh] flex flex-col">
        
        {/* Header Bar */}
        <div className="flex items-center justify-between p-6 border-b border-white/[0.08] bg-black/40 backdrop-blur-xl sticky top-0 z-20">
          <div className="flex items-center gap-3">
            <span className="px-3.5 py-1 rounded-full bg-accent/10 border border-accent/30 text-accent text-xs font-tech font-bold uppercase tracking-wider">
              {exercise.category}
            </span>
            <span className="text-xs font-tech text-text-secondary glass-pill px-3 py-1 rounded-full border border-white/10">
              // {exercise.equipment}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => onToggleBookmark(exercise.id)}
              className={`p-2.5 rounded-xl transition-all ${
                isBookmarked
                  ? 'bg-accent text-black shadow-glow'
                  : 'text-text-secondary hover:text-white glass-pill hover:bg-white/10'
              }`}
              title={isBookmarked ? 'Saved to Favorites' : 'Bookmark Exercise'}
            >
              <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-black' : ''}`} />
            </button>
            <button
              onClick={onClose}
              className="p-2.5 text-text-secondary hover:text-white glass-pill hover:bg-white/10 rounded-xl transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          
          {/* Title & Metadata */}
          <div>
            <span className="text-xs font-tech uppercase tracking-widest text-orange-athletic font-bold">
              // Movement Specification
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-black text-white uppercase tracking-tight mt-1 mb-3">
              {exercise.name}
            </h2>
            <p className="text-text-secondary font-tech text-sm sm:text-base leading-relaxed">
              {exercise.summary}
            </p>
          </div>

          {/* Quick Specs Badges */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="p-4 rounded-2xl bg-black/40 border border-white/[0.06]">
              <div className="text-[10px] uppercase font-tech text-text-muted mb-1">// Target</div>
              <div className="text-sm font-tech font-bold text-accent">{exercise.targetMuscle}</div>
            </div>
            <div className="p-4 rounded-2xl bg-black/40 border border-white/[0.06]">
              <div className="text-[10px] uppercase font-tech text-text-muted mb-1">// Difficulty</div>
              <div className="text-sm font-tech font-bold text-white">{exercise.difficulty}</div>
            </div>
            <div className="p-4 rounded-2xl bg-black/40 border border-white/[0.06]">
              <div className="text-[10px] uppercase font-tech text-text-muted mb-1">// Kinematics</div>
              <div className="text-sm font-tech font-bold text-white">{exercise.type}</div>
            </div>
            <div className="p-4 rounded-2xl bg-black/40 border border-white/[0.06]">
              <div className="text-[10px] uppercase font-tech text-text-muted mb-1">// Pattern</div>
              <div className="text-sm font-tech font-bold text-white">{exercise.movementPattern}</div>
            </div>
          </div>

          {/* Target & Synergist Muscles pill box */}
          <div className="p-5 rounded-2xl bg-black/40 border border-white/[0.06]">
            <div className="text-xs font-tech uppercase text-text-muted font-bold mb-3 flex items-center gap-2">
              <Target className="w-4 h-4 text-accent" />
              <span>// Anatomical Involvement</span>
            </div>
            <div className="flex flex-wrap gap-2 items-center">
              <span className="px-3.5 py-1.5 rounded-full bg-accent text-black font-tech font-bold text-xs shadow-glow">
                Primary: {exercise.targetMuscle}
              </span>
              {exercise.secondaryMuscles.map((sec, i) => (
                <span key={i} className="px-3 py-1.5 rounded-full glass-pill border border-white/10 text-xs font-tech text-text-secondary">
                  Secondary: {sec}
                </span>
              ))}
            </div>
          </div>

          {/* Step-by-Step Execution Guide */}
          <div>
            <div className="flex items-center gap-2 text-white font-display font-black uppercase text-lg mb-4">
              <CheckCircle2 className="w-5 h-5 text-accent" />
              <h3>Execution Protocol</h3>
            </div>
            <div className="space-y-3">
              {exercise.instructions.map((step, idx) => (
                <div key={idx} className="flex items-start gap-4 p-4 rounded-2xl bg-black/40 border border-white/[0.06]">
                  <div className="w-7 h-7 rounded-xl bg-white/[0.04] border border-white/10 text-accent font-tech font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                    0{idx + 1}
                  </div>
                  <p className="text-xs sm:text-sm text-text-primary/90 leading-relaxed font-normal">
                    {step}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Coach Tips */}
          {exercise.tips && exercise.tips.length > 0 && (
            <div className="p-5 rounded-2xl glass-panel border border-orange-athletic/30 bg-gradient-to-br from-white/[0.03] to-orange-athletic/10">
              <div className="flex items-center gap-2 text-orange-athletic font-tech font-bold text-sm mb-3 uppercase">
                <Lightbulb className="w-4 h-4" />
                <span>Coach & Hypertrophy Cues</span>
              </div>
              <ul className="space-y-2 text-xs sm:text-sm text-text-primary/90 font-sans">
                {exercise.tips.map((tip, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-orange-athletic font-tech font-bold">//</span>
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Common Mistakes */}
          {exercise.commonMistakes && exercise.commonMistakes.length > 0 && (
            <div className="p-5 rounded-2xl bg-rose-500/10 border border-rose-500/20">
              <div className="flex items-center gap-2 text-rose-400 font-tech font-bold text-xs uppercase mb-3">
                <AlertTriangle className="w-4 h-4" />
                <span>Common Form Mistakes to Avoid</span>
              </div>
              <ul className="space-y-2 text-xs sm:text-sm text-text-secondary">
                {exercise.commonMistakes.map((mistake, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-rose-400 font-bold">•</span>
                    <span>{mistake}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Action Footer */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/[0.06]">
            {onNavigateToMuscle && (
              <button
                onClick={() => {
                  onClose();
                  onNavigateToMuscle(exercise.targetMuscleId);
                }}
                className="w-full sm:w-auto px-5 py-3 rounded-full glass-pill hover:bg-white/10 border border-white/10 text-xs font-tech font-bold uppercase text-white flex items-center justify-center gap-2 transition-colors shadow-glass"
              >
                <span>Inspect {exercise.targetMuscle} Anatomy</span>
                <ArrowRight className="w-3.5 h-3.5 text-accent" />
              </button>
            )}

            <button
              onClick={onClose}
              className="w-full sm:w-auto px-7 py-3 rounded-full bg-accent hover:bg-accent-hover text-black font-tech font-extrabold text-xs uppercase tracking-wider transition-all shadow-glow"
            >
              Close Guide
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};
