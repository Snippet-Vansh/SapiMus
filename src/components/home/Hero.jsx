import React from 'react';
import { 
  ArrowRight, 
  Activity, 
  Dumbbell, 
  ShieldCheck, 
  Zap, 
  Sparkles, 
  Layers, 
  Flame, 
  ChevronRight,
  TrendingUp,
  Award
} from 'lucide-react';

export const Hero = ({ onNavigate, onSelectMuscle }) => {
  return (
    <div className="relative overflow-hidden pt-8 pb-20 md:pt-14 md:pb-28">
      
      {/* Cinematic High-Speed Athletic Background Photograph (Matching Reference Atmosphere) */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=85&w=2600&auto=format&fit=crop" 
          alt="Cinematic Athletic Muscular Motion"
          className="w-full h-full object-cover object-center scale-105 filter brightness-[0.78] contrast-[1.12]"
        />

        {/* Multi-Layer Cinematic Vignettes & Gradients */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#08080A]/95 via-[#08080A]/60 to-[#08080A]/95" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#08080A]/90 via-transparent to-[#08080A]" />
        <div className="absolute inset-0 cinematic-orange-radial pointer-events-none" />
        <div className="absolute inset-0 cinematic-lime-radial pointer-events-none" />
        <div className="absolute inset-0 bg-tech-grid opacity-15 pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Eyebrow Tag */}
        <div className="flex items-center justify-between mb-4 sm:mb-8">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-black/50 border border-white/10 backdrop-blur-xl shadow-glass">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-[11px] font-tech font-bold uppercase tracking-widest text-white/90">
              SapiMus Intelligence
            </span>
            <span className="text-white/20">•</span>
            <span className="text-[11px] font-tech text-text-secondary hidden sm:inline">
              Evidence-Based Muscular Anatomy & Biomechanics
            </span>
          </div>

          <div className="hidden md:flex items-center gap-2 text-xs font-tech text-text-secondary">
            <span className="text-orange-warm font-bold">// 2026 EDITION</span>
          </div>
        </div>

        {/* Oversized Cinematic Typography (Inspired Directly by the Reference Image) */}
        <div className="my-6 sm:my-10 space-y-2 sm:space-y-4">
          <h1 className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-white tracking-tighter uppercase leading-[0.9] select-none drop-shadow-2xl">
            SAPIMUS
          </h1>

          <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4">
            <h2 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter uppercase leading-[0.95] flex items-center">
              <span className="text-orange-athletic italic mr-2 sm:mr-3">//</span>
              <span>YOUR STRENGTH</span>
            </h2>
          </div>

          <p className="font-tech text-base sm:text-xl text-text-secondary max-w-2xl pt-2 leading-relaxed font-normal">
            Understand your human anatomy, discover precision exercises engineered for each muscle fiber, 
            and learn how to train correctly with pure sports science.
          </p>
        </div>

        {/* Floating Telemetry Glass Cards (Matching Reference Left & Right Floating HUD) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 my-10 items-stretch">
          
          {/* Left Glass Card: Anatomy Mapped Telemetry (Matches Left Map Card in Reference) */}
          <div className="lg:col-span-5 glass-pill rounded-3xl p-6 border border-white/10 flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-48 h-48 bg-orange-athletic/10 rounded-full blur-3xl pointer-events-none" />
            
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] font-mono tracking-widest uppercase text-text-muted font-bold">
                  ANATOMY MAPPED
                </span>
                <span className="px-2 py-0.5 rounded-full bg-accent/15 border border-accent/30 text-[10px] font-mono text-accent font-bold">
                  VERIFIED
                </span>
              </div>

              <div className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight mb-4">
                12+ <span className="text-lg font-tech text-text-secondary font-normal">REGIONS</span>
              </div>

              {/* Kinetic Anatomy Trace Line (Inspired by Route Graphic in Reference Image) */}
              <div className="w-full h-24 rounded-2xl bg-black/40 border border-white/[0.06] p-3 relative overflow-hidden flex items-center justify-center mb-4">
                <svg viewBox="0 0 320 80" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path 
                    d="M10 65 Q 60 15, 110 45 T 210 25 T 310 50" 
                    stroke="rgba(255, 255, 255, 0.2)" 
                    strokeWidth="2" 
                    strokeDasharray="4 4"
                  />
                  <path 
                    d="M10 65 Q 60 15, 110 45 T 195 28" 
                    stroke="#FF5E1E" 
                    strokeWidth="3.5" 
                    strokeLinecap="round"
                  />
                  <circle cx="195" cy="28" r="6" fill="#C7FF3D" className="animate-pulse" />
                  <circle cx="195" cy="28" r="12" stroke="#C7FF3D" strokeWidth="1.5" opacity="0.4" />
                  
                  {/* Waypoint Cues */}
                  <circle cx="110" cy="45" r="3" fill="#FFFFFF" />
                  <circle cx="10" cy="65" r="4" fill="#FF5E1E" />
                </svg>
                <div className="absolute bottom-2 left-3 text-[10px] font-mono text-text-muted">
                  Full Kinetic Chain Active
                </div>
              </div>
            </div>

            {/* Bottom Metrics Pill Row (Matches Pace, Time, Energy in Reference) */}
            <div className="grid grid-cols-3 gap-2 pt-3 border-t border-white/[0.08] text-center font-mono">
              <div className="p-2 rounded-xl bg-white/[0.03]">
                <div className="text-[9px] uppercase text-text-muted">Muscles</div>
                <div className="text-xs sm:text-sm font-bold text-white mt-0.5">467 HEADS</div>
              </div>
              <div className="p-2 rounded-xl bg-white/[0.03]">
                <div className="text-[9px] uppercase text-text-muted">Exercises</div>
                <div className="text-xs sm:text-sm font-bold text-accent mt-0.5">30+ VETTED</div>
              </div>
              <div className="p-2 rounded-xl bg-white/[0.03]">
                <div className="text-[9px] uppercase text-text-muted">Evidence</div>
                <div className="text-xs sm:text-sm font-bold text-orange-warm mt-0.5">100% PURE</div>
              </div>
            </div>
          </div>

          {/* Right Glass Card: Guidelines & Science Telemetry (Matches Right Table in Reference) */}
          <div className="lg:col-span-7 glass-pill rounded-3xl p-6 sm:p-7 border border-white/10 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 left-0 w-48 h-48 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

            <div>
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="font-tech font-bold text-base sm:text-lg text-white">
                    Shape your ideal body with science-backed guidelines
                  </h3>
                  <p className="text-xs text-text-secondary mt-0.5 font-tech">
                    Peer-reviewed biomechanical thresholds for natural lifters
                  </p>
                </div>
                <span className="hidden sm:inline-flex px-3 py-1 rounded-full bg-white/[0.05] border border-white/10 text-xs font-mono text-text-secondary">
                  Standards
                </span>
              </div>

              {/* Data Rows (Matching the Tabular Layout in the Reference Image) */}
              <div className="space-y-2 mb-6 font-mono text-xs">
                <div className="flex items-center justify-between p-3 rounded-2xl bg-white/[0.04] border border-white/[0.06] hover:bg-white/[0.07] transition-colors">
                  <span className="text-white font-bold">Hypertrophy</span>
                  <span className="text-accent font-semibold">8 - 12 Reps</span>
                  <span className="text-text-secondary hidden sm:inline">2-3s Eccentric</span>
                  <span className="text-text-primary">Max Mechanical Tension</span>
                </div>

                <div className="flex items-center justify-between p-3 rounded-2xl bg-white/[0.04] border border-white/[0.06] hover:bg-white/[0.07] transition-colors">
                  <span className="text-white font-bold">Frequency</span>
                  <span className="text-orange-warm font-semibold">2x / Week</span>
                  <span className="text-text-secondary hidden sm:inline">48h Recovery</span>
                  <span className="text-text-primary">2x Muscle Protein Window</span>
                </div>

                <div className="flex items-center justify-between p-3 rounded-2xl bg-white/[0.04] border border-white/[0.06] hover:bg-white/[0.07] transition-colors">
                  <span className="text-white font-bold">Overload</span>
                  <span className="text-white font-semibold">+2.5% Load</span>
                  <span className="text-text-secondary hidden sm:inline">1 - 2 RIR</span>
                  <span className="text-text-primary">Double Progression</span>
                </div>
              </div>
            </div>

            {/* CTAs Bar inside Hero */}
            <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
              <button
                onClick={() => onNavigate('anatomy')}
                className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-black hover:bg-[#14141A] text-white font-tech font-bold text-xs uppercase tracking-wider transition-all border border-white/20 hover:border-accent shadow-card flex items-center justify-center gap-2 group"
              >
                <Activity className="w-4 h-4 text-accent" />
                <span>Explore 3D Muscular Anatomy</span>
                <ArrowRight className="w-4 h-4 text-accent group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => onNavigate('finder')}
                className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-white/[0.05] hover:bg-white/[0.1] text-white font-tech font-bold text-xs uppercase tracking-wider transition-all border border-white/10 hover:border-white/20 flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4 text-orange-warm" />
                <span>Find Your Workout</span>
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Social Proof & Trust Strip (Matches Trusted By & 45,000+ Members in Reference) */}
        <div className="pt-6 border-t border-white/[0.08] flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Trusted By Monochrome Brands */}
          <div className="flex items-center gap-6 text-xs font-tech text-text-muted">
            <span className="text-text-secondary font-semibold">Trusted by:</span>
            <div className="flex items-center gap-6 opacity-60 grayscale hover:opacity-100 transition-opacity">
              <span className="font-display font-black text-sm tracking-widest text-white">NIKE</span>
              <span className="font-display font-black text-sm tracking-widest text-white">PUMA</span>
              <span className="font-display font-black text-sm tracking-widest text-white">ADIDAS</span>
              <span className="font-display font-black text-sm tracking-widest text-white">REEBOK</span>
            </div>
          </div>

          {/* Member Social Proof Badges */}
          <div className="flex items-center gap-3">
            <div className="flex -space-x-2.5 overflow-hidden">
              <img 
                className="inline-block h-8 w-8 rounded-full ring-2 ring-[#08080A] object-cover" 
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=120&auto=format&fit=crop" 
                alt="Member"
              />
              <img 
                className="inline-block h-8 w-8 rounded-full ring-2 ring-[#08080A] object-cover" 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=120&auto=format&fit=crop" 
                alt="Member"
              />
              <img 
                className="inline-block h-8 w-8 rounded-full ring-2 ring-[#08080A] object-cover" 
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=120&auto=format&fit=crop" 
                alt="Member"
              />
            </div>
            <div>
              <div className="text-sm font-tech font-extrabold text-white">45,000+</div>
              <div className="text-[11px] font-tech text-text-secondary">Happy athletes & lifters</div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
