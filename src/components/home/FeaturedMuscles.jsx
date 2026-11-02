import React from 'react';
import { MUSCLE_GROUPS } from '../../data/musclesData';
import { ArrowRight, Activity, Flame, ShieldAlert } from 'lucide-react';

export const FeaturedMuscles = ({ onSelectMuscle, onNavigate }) => {
  // Take 6 prominent muscle groups for the homepage showcase
  const featured = MUSCLE_GROUPS.filter((m) => 
    ['chest', 'back', 'quadriceps', 'shoulders', 'biceps', 'abs'].includes(m.id)
  );

  return (
    <section className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/[0.06] relative">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-orange-athletic/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14 relative z-10">
        <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill text-xs font-tech font-semibold uppercase tracking-wider text-accent mb-4 border border-white/10">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            <span>Atlas // Muscular Architecture</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-black text-white uppercase tracking-tight leading-[1.05]">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-white to-orange-warm">Muscles</span>
          </h2>
          <p className="text-text-secondary font-tech text-sm sm:text-base mt-3 max-w-2xl leading-relaxed">
            Every muscle has unique lines of pull and origin-insertion kinematics. 
            Tap any group to discover cadaver-derived 3D anatomy and vetted exercises.
          </p>
        </div>

        <button
          onClick={() => onNavigate('anatomy')}
          className="self-start md:self-end px-6 py-3 rounded-full glass-pill hover:bg-white/[0.08] border border-white/10 text-xs font-tech font-bold uppercase tracking-wider text-accent hover:text-white transition-all flex items-center gap-2 group shadow-glass"
        >
          <span>Explore All 12+ Groups</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      {/* Grid of Featured Muscles */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
        {featured.map((muscle, index) => (
          <div
            key={muscle.id}
            onClick={() => onSelectMuscle(muscle.id)}
            className="glass-panel p-7 sm:p-8 rounded-3xl border border-white/[0.08] hover:border-accent/40 cursor-pointer group flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 relative overflow-hidden"
          >
            {/* Corner telemetry number */}
            <div className="absolute top-6 right-6 font-display font-black text-3xl text-white/[0.06] group-hover:text-accent/20 transition-colors pointer-events-none select-none">
              0{index + 1}
            </div>

            <div>
              <div className="flex items-center gap-2 mb-5">
                <span className="text-[10px] uppercase font-tech font-bold text-accent bg-accent/10 px-3 py-1 rounded-full border border-accent/20">
                  {muscle.view} View
                </span>
                <span className="text-[11px] font-tech text-text-muted">
                  // {muscle.sections.length} Compartments
                </span>
              </div>

              <div className="text-[11px] font-tech text-orange-athletic uppercase tracking-widest font-semibold mb-1">
                {muscle.anatomicalName}
              </div>
              <h3 className="text-2xl sm:text-3xl font-display font-black uppercase text-white group-hover:text-accent transition-colors mb-3">
                {muscle.name}
              </h3>
              <p className="text-xs sm:text-sm text-text-secondary leading-relaxed line-clamp-2 mb-6">
                {muscle.summary}
              </p>
            </div>

            <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between">
              <span className="text-xs font-tech text-text-secondary">
                Weekly: <strong className="text-white font-tech">{muscle.growthVolume.split(' ')[0]} sets</strong>
              </span>
              <span className="text-xs font-tech font-bold text-accent flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                <span>View Anatomy</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
