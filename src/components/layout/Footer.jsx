import React, { useState } from 'react';
import { Send, Check, ShieldAlert } from 'lucide-react';

export const Footer = ({ onNavigate, onSelectMuscle }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;
    setSubscribed(true);
    setTimeout(() => {
      setEmail('');
      setSubscribed(false);
    }, 4000);
  };

  return (
    <footer className="bg-[#08080A] border-t border-white/[0.08] text-text-secondary relative overflow-hidden">
      {/* Glow elements */}
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[250px] bg-orange-athletic/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[250px] bg-accent/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 relative z-10">
        
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-14 border-b border-white/[0.06]">
          
          {/* Brand Info (2 Cols) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl glass-panel border border-white/10 flex items-center justify-center shadow-glass">
                <svg width="22" height="22" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M25 75 L50 20 L75 75 M35 55 L65 55" stroke="#C7FF3D" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round" />
                  <circle cx="50" cy="20" r="5" fill="#FFFFFF" />
                </svg>
              </div>
              <div className="font-display font-black text-2xl uppercase tracking-tight text-white">
                <span>Sapi</span>
                <span className="text-accent">Mus</span>
              </div>
            </div>

            <p className="text-sm text-white font-tech font-bold uppercase tracking-wider">
              "Understand Your Muscles. Build Your Strength."
            </p>

            <p className="text-xs sm:text-sm text-text-secondary leading-relaxed max-w-sm font-sans">
              SapiMus (Sapiens + Muscles) is an evidence-based fitness education platform 
              dedicated to decoding human muscular anatomy and biomechanics for natural lifters worldwide.
            </p>

            {/* Newsletter input */}
            <div className="pt-2">
              <form onSubmit={handleSubscribe} className="flex items-center gap-2 max-w-sm">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter email for weekly science brief..."
                  className="w-full px-4 py-3 bg-black/40 border border-white/10 rounded-full text-xs sm:text-sm text-white font-tech placeholder-text-muted focus:outline-none focus:border-accent"
                />
                <button
                  type="submit"
                  className="px-5 py-3 rounded-full bg-accent text-black font-tech font-extrabold text-xs uppercase tracking-wider hover:bg-accent-hover transition-colors shrink-0 shadow-glow flex items-center gap-1.5"
                >
                  {subscribed ? <Check className="w-4 h-4" /> : <Send className="w-3.5 h-3.5" />}
                  <span>{subscribed ? 'Joined' : 'Join'}</span>
                </button>
              </form>
              {subscribed && (
                <div className="text-[11px] text-accent font-tech mt-2 flex items-center gap-1">
                  <Check className="w-3.5 h-3.5" />
                  <span>Welcome to the SapiMus evidence-based newsletter!</span>
                </div>
              )}
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4 className="text-xs font-tech uppercase tracking-widest text-white font-bold mb-5">
              // Platform
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm font-tech">
              <li>
                <button onClick={() => onNavigate('home')} className="hover:text-accent transition-colors">
                  Home Landing
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('anatomy')} className="hover:text-accent transition-colors">
                  Interactive Anatomy Explorer
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('exercises')} className="hover:text-accent transition-colors">
                  Exercise Movement Vault
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('plans')} className="hover:text-accent transition-colors">
                  Beginner Workout Plans
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('finder')} className="hover:text-accent transition-colors">
                  Algorithmic Routine Finder
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('learn')} className="hover:text-accent transition-colors">
                  Sports Science Academy
                </button>
              </li>
            </ul>
          </div>

          {/* Anatomy Index Column */}
          <div>
            <h4 className="text-xs font-tech uppercase tracking-widest text-white font-bold mb-5">
              // Anatomy Index
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm font-tech">
              <li>
                <button onClick={() => onSelectMuscle('chest')} className="hover:text-accent transition-colors">
                  Pectoralis (Chest)
                </button>
              </li>
              <li>
                <button onClick={() => onSelectMuscle('back')} className="hover:text-accent transition-colors">
                  Latissimus Dorsi (Back)
                </button>
              </li>
              <li>
                <button onClick={() => onSelectMuscle('quadriceps')} className="hover:text-accent transition-colors">
                  Quadriceps (Thigh)
                </button>
              </li>
              <li>
                <button onClick={() => onSelectMuscle('hamstrings')} className="hover:text-accent transition-colors">
                  Hamstrings (Posterior)
                </button>
              </li>
              <li>
                <button onClick={() => onSelectMuscle('shoulders')} className="hover:text-accent transition-colors">
                  Deltoids (Shoulders)
                </button>
              </li>
              <li>
                <button onClick={() => onSelectMuscle('biceps')} className="hover:text-accent transition-colors">
                  Biceps Brachii
                </button>
              </li>
            </ul>
          </div>

          {/* Core Science Topics */}
          <div>
            <h4 className="text-xs font-tech uppercase tracking-widest text-white font-bold mb-5">
              // Science Topics
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm font-tech">
              <li>
                <button onClick={() => onNavigate('learn')} className="hover:text-accent transition-colors">
                  Mechanical Tension
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('learn')} className="hover:text-accent transition-colors">
                  Progressive Overload
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('learn')} className="hover:text-accent transition-colors">
                  Anabolic Sleep Phases
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('learn')} className="hover:text-accent transition-colors">
                  RIR & Muscle Failure
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('learn')} className="hover:text-accent transition-colors">
                  Protein Timing Kinetics
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('learn')} className="hover:text-accent transition-colors">
                  Lines of Pull & Angles
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Safety Disclaimer Banner */}
        <div className="py-6 border-b border-white/[0.06] flex items-start sm:items-center gap-3 text-xs text-text-muted font-tech">
          <ShieldAlert className="w-4 h-4 text-orange-athletic shrink-0 mt-0.5 sm:mt-0" />
          <p>
            <strong className="text-white">Medical Disclaimer:</strong> SapiMus is an educational and biomechanical resource designed to assist healthy individuals. 
            Always consult a qualified healthcare provider or certified sports medicine specialist before initiating any vigorous resistance training program.
          </p>
        </div>

        {/* Bottom Credits & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-tech text-text-muted">
          <div>
            © {new Date().getFullYear()} SapiMus Technologies Inc. All rights reserved.
          </div>
          <div className="flex items-center gap-2">
            <span className="text-orange-athletic font-bold">//</span>
            <span>Built with scientific precision for natural lifters</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
