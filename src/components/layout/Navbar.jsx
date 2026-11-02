import React, { useState, useEffect } from 'react';
import { 
  Sparkles, 
  Calculator, 
  Bookmark, 
  Menu, 
  X, 
  ChevronRight
} from 'lucide-react';
import sapimusLogo from '../../assets/sapimus-logo.png';

export const Navbar = ({ activeTab, onNavigate, onOpenTools, bookmarkedCount = 0 }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'anatomy', label: 'Anatomy', badge: '3D' },
    { id: 'exercises', label: 'Exercises' },
    { id: 'plans', label: 'Workout Plans' },
    { id: 'finder', label: 'Workout Finder', isAi: true },
    { id: 'learn', label: 'Learn' }
  ];

  const handleNavClick = (tabId) => {
    onNavigate(tabId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-[#08080A]/85 backdrop-blur-2xl border-b border-white/[0.06] py-3.5 shadow-2xl'
            : 'bg-transparent py-5 sm:py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* SapiMus Logo */}
            <div
              onClick={() => handleNavClick('home')}
              className="flex items-center cursor-pointer group select-none shrink-0"
            >
              <img
                src={sapimusLogo}
                alt="SapiMus – Sapiens • Muscles"
                className="h-20  w-40 transition-transform duration-300 hover:scale-105"
                draggable="false"
              />
            </div>

            {/* Desktop Minimalist Glass Pill Nav (Matching Reference Pill) */}
            <nav className="hidden md:flex items-center gap-1.5 bg-black/45 backdrop-blur-2xl px-3 py-1.5 rounded-full border border-white/[0.08] shadow-glass">
              {navItems.map((item) => {
                const isActive = activeTab === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`px-4 py-1.5 rounded-full text-xs sm:text-[13px] font-tech font-medium transition-all duration-200 relative flex items-center gap-1.5 ${
                      isActive
                        ? 'bg-white/15 text-white font-bold backdrop-blur-md border border-white/10 shadow-sm'
                        : 'text-text-secondary hover:text-white hover:bg-white/[0.06]'
                    }`}
                  >
                    <span>{item.label}</span>
                    {item.badge && !isActive && (
                      <span className="text-[9px] font-mono px-1.5 py-0.2 rounded-full bg-accent/15 text-accent border border-accent/25 uppercase font-semibold">
                        {item.badge}
                      </span>
                    )}
                    {item.isAi && !isActive && (
                      <span className="text-[9px] font-mono px-1.5 py-0.2 rounded-full bg-orange-subtle text-orange-warm border border-orange-athletic/30 uppercase font-semibold">
                        AI
                      </span>
                    )}
                  </button>
                );
              })}
            </nav>

            {/* Right Action Icons & Pill CTAs (Matching Reference "Download App" Pill) */}
            <div className="hidden lg:flex items-center gap-3">
              {/* Gym Tools Modal Button */}
              <button
                onClick={onOpenTools}
                className="px-3.5 py-2 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] hover:border-white/20 text-text-secondary hover:text-white text-xs font-tech font-medium flex items-center gap-1.5 transition-all"
                title="1RM & Rest Timer"
              >
                <Calculator className="w-3.5 h-3.5 text-accent" />
                <span>Tools</span>
              </button>

              {/* Saved Exercises Badge */}
              <button
                onClick={() => handleNavClick('exercises')}
                className="p-2 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] hover:border-white/20 text-text-secondary hover:text-white transition-all relative"
                title="Saved Exercises"
              >
                <Bookmark className="w-4 h-4" />
                {bookmarkedCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-accent text-black text-[10px] font-mono font-bold flex items-center justify-center">
                    {bookmarkedCount}
                  </span>
                )}
              </button>

              {/* Main Quick Action Pill (Matching reference button styling) */}
              <button
                onClick={() => handleNavClick('finder')}
                className="px-5 py-2 rounded-full bg-black hover:bg-[#15151A] text-white font-tech font-bold text-xs uppercase tracking-wider transition-all border border-white/20 hover:border-white/40 shadow-card flex items-center gap-2 group relative overflow-hidden"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-orange-athletic group-hover:bg-accent transition-colors" />
                <span>Find Workout</span>
                <ChevronRight className="w-3.5 h-3.5 text-text-secondary group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>

            {/* Mobile Menu Toggle Button */}
            <div className="flex md:hidden items-center gap-2">
              <button
                onClick={onOpenTools}
                className="p-2 rounded-full bg-white/[0.04] border border-white/[0.08] text-text-secondary"
                title="Tools"
              >
                <Calculator className="w-4 h-4 text-accent" />
              </button>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-full bg-white/[0.04] border border-white/[0.08] text-white"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Mobile Glass Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 bg-[#08080A]/95 backdrop-blur-2xl md:hidden pt-24 pb-8 px-6 flex flex-col justify-between animate-fadeIn">
          <div className="space-y-2">
            <div className="text-xs font-mono uppercase text-text-muted font-semibold mb-3 tracking-widest">
              Navigation Menu
            </div>
            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`w-full p-4 rounded-2xl text-left font-tech font-bold text-base flex items-center justify-between border transition-all ${
                    isActive
                      ? 'bg-white/10 text-white border-white/20 font-extrabold shadow-sm'
                      : 'bg-white/[0.03] border-white/[0.06] text-text-secondary hover:text-white'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span>{item.label}</span>
                    {item.badge && (
                      <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full ${
                        isActive ? 'bg-accent text-black font-bold' : 'bg-accent/15 text-accent'
                      }`}>
                        {item.badge}
                      </span>
                    )}
                  </div>
                  <ChevronRight className="w-5 h-5 text-text-muted" />
                </button>
              );
            })}
          </div>

          <div className="pt-6 border-t border-white/[0.08] space-y-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenTools();
              }}
              className="w-full py-3.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-white text-xs font-tech font-bold flex items-center justify-center gap-2"
            >
              <Calculator className="w-4 h-4 text-accent" />
              <span>1RM Calculator & Rest Timer</span>
            </button>

            <button
              onClick={() => handleNavClick('finder')}
              className="w-full py-3.5 rounded-full bg-black text-white font-tech font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 border border-white/20 shadow-glow-sm"
            >
              <Sparkles className="w-4 h-4 text-accent" />
              <span>Find Your Routine</span>
            </button>
          </div>
        </div>
      )}
    </>
  );
};
