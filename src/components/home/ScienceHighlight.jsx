import React from 'react';
import { BookOpen, ArrowRight, Zap, ShieldCheck, HeartPulse } from 'lucide-react';

export const ScienceHighlight = ({ onNavigate }) => {
  const pillars = [
    {
      icon: <Zap className="w-5 h-5 text-accent" />,
      title: 'Mechanical Tension',
      tag: '// SIGNAL',
      desc: 'The primary physiological trigger for myofibrillar protein synthesis. Loaded stretch through full active range induces real fiber hypertrophy.'
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-orange-athletic" />,
      title: 'Progressive Overload',
      tag: '// SYSTEM',
      desc: 'Double progression protocols to ensure your motor units face systematically increased mechanical demands without tendon breakdown.'
    },
    {
      icon: <HeartPulse className="w-5 h-5 text-accent" />,
      title: 'Anabolic Recovery',
      tag: '// SYNTHESIS',
      desc: 'Deep sleep phases, leucine spikes, and the 48-hour supercompensation curve that repairs micro-tears into denser muscle tissue.'
    }
  ];

  return (
    <section className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/[0.06] relative">
      <div className="glass-panel border border-white/[0.08] rounded-3xl p-8 sm:p-14 relative overflow-hidden shadow-glass">
        {/* Cinematic gradient corner glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-orange-athletic/15 via-accent/10 to-transparent rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-3xl mb-14 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill border border-white/10 text-accent text-xs font-tech font-semibold uppercase tracking-wider mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            <span>Biomechanics & Physiology // Science</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-black text-white uppercase tracking-tight leading-[1.05] mb-4">
            The Three Laws Of <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-white to-orange-warm">Hypertrophy</span>
          </h2>
          <p className="text-text-secondary font-tech text-sm sm:text-base leading-relaxed">
            Building muscle is an exact biological response to tension vectors, 
            hormonal regulation, and nervous system signaling — not guesswork.
          </p>
        </div>

        {/* 3 Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 relative z-10">
          {pillars.map((pillar, idx) => (
            <div key={idx} className="p-7 rounded-2xl bg-black/40 border border-white/[0.06] hover:border-white/20 transition-all duration-300">
              <div className="flex items-center justify-between mb-5">
                <div className="w-11 h-11 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center">
                  {pillar.icon}
                </div>
                <span className="text-[11px] font-tech text-text-muted font-bold tracking-wider">
                  {pillar.tag}
                </span>
              </div>
              <h3 className="text-lg font-display font-black text-white uppercase tracking-tight mb-2.5">
                {pillar.title}
              </h3>
              <p className="text-xs sm:text-sm text-text-secondary font-sans leading-relaxed">
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-8 border-t border-white/[0.06] relative z-10">
          <div className="text-xs sm:text-sm text-text-secondary font-tech font-medium flex items-center gap-2">
            <span className="text-orange-athletic font-bold">//</span>
            <span>Explore peer-reviewed scientific studies, RPE scales, and nutritional timing guides.</span>
          </div>
          <button
            onClick={() => onNavigate('learn')}
            className="px-7 py-3.5 rounded-full bg-accent hover:bg-accent-hover text-black font-tech font-extrabold text-xs uppercase tracking-wider transition-all duration-300 shadow-glow flex items-center gap-2 self-start sm:self-auto hover:scale-[1.02]"
          >
            <span>Read Science Academy</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
