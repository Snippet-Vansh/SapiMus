import React, { useState, useEffect } from 'react';
import { X, Calculator, Timer, Dumbbell, Play, Pause, RotateCcw, Check, Sparkles } from 'lucide-react';

export const QuickToolsModal = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState('1rm'); // '1rm' | 'timer' | 'plates'

  // 1RM Calculator State
  const [weight, setWeight] = useState(225);
  const [reps, setReps] = useState(5);
  const [unit, setUnit] = useState('lbs');

  // Rest Timer State
  const [timerSeconds, setTimerSeconds] = useState(90);
  const [timeLeft, setTimeLeft] = useState(90);
  const [timerRunning, setTimerRunning] = useState(false);

  // Plate Calculator State
  const [targetBarbellWeight, setTargetBarbellWeight] = useState(225);
  const [barWeight, setBarWeight] = useState(45);

  // Timer Tick effect
  useEffect(() => {
    let interval = null;
    if (timerRunning && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setTimerRunning(false);
    }
    return () => clearInterval(interval);
  }, [timerRunning, timeLeft]);

  const handleStartTimer = (sec) => {
    setTimerSeconds(sec);
    setTimeLeft(sec);
    setTimerRunning(true);
  };

  // 1RM Brzycki formula: Weight / (1.0278 - (0.0278 * Reps))
  const calculated1RM = Math.round(weight / (1.0278 - 0.0278 * Math.min(reps, 15)));

  // Plate calculation: available plates [45, 25, 10, 5, 2.5]
  const calculatePlatesPerSide = () => {
    const netWeight = Math.max(0, targetBarbellWeight - barWeight);
    const weightPerSide = netWeight / 2;
    const availablePlates = [45, 25, 10, 5, 2.5];
    const breakdown = [];
    let remainder = weightPerSide;

    availablePlates.forEach((p) => {
      const count = Math.floor(remainder / p);
      if (count > 0) {
        breakdown.push({ plate: p, count });
        remainder -= count * p;
      }
    });

    return { weightPerSide, breakdown, remainder: Math.round(remainder * 10) / 10 };
  };

  const plateResult = calculatePlatesPerSide();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="fixed inset-0" onClick={onClose} />

      <div className="relative w-full max-w-xl bg-surface-card border border-surface-border rounded-3xl shadow-2xl overflow-hidden z-10">
        
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-surface-border bg-surface/80 backdrop-blur-md">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-accent" />
            <h3 className="font-bold text-white text-lg">Gym Tool Suite</h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-text-secondary hover:text-white bg-surface-hover hover:bg-surface-border rounded-xl transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Switcher */}
        <div className="flex border-b border-surface-border bg-background p-2 gap-1">
          <button
            onClick={() => setActiveTab('1rm')}
            className={`flex-1 py-2.5 rounded-xl text-xs font-semibold font-mono flex items-center justify-center gap-1.5 transition-all ${
              activeTab === '1rm' ? 'bg-accent text-black font-bold shadow-glow-sm' : 'text-text-secondary hover:text-white'
            }`}
          >
            <Calculator className="w-4 h-4" />
            <span>1RM Estimator</span>
          </button>

          <button
            onClick={() => setActiveTab('timer')}
            className={`flex-1 py-2.5 rounded-xl text-xs font-semibold font-mono flex items-center justify-center gap-1.5 transition-all ${
              activeTab === 'timer' ? 'bg-accent text-black font-bold shadow-glow-sm' : 'text-text-secondary hover:text-white'
            }`}
          >
            <Timer className="w-4 h-4" />
            <span>Rest Timer</span>
          </button>

          <button
            onClick={() => setActiveTab('plates')}
            className={`flex-1 py-2.5 rounded-xl text-xs font-semibold font-mono flex items-center justify-center gap-1.5 transition-all ${
              activeTab === 'plates' ? 'bg-accent text-black font-bold shadow-glow-sm' : 'text-text-secondary hover:text-white'
            }`}
          >
            <Dumbbell className="w-4 h-4" />
            <span>Plate Math</span>
          </button>
        </div>

        {/* Tab Body */}
        <div className="p-6">
          {/* TAB 1: 1RM CALCULATOR */}
          {activeTab === '1rm' && (
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono uppercase text-text-secondary font-semibold mb-2">
                    Weight Lifted ({unit})
                  </label>
                  <input
                    type="number"
                    value={weight}
                    onChange={(e) => setWeight(Number(e.target.value))}
                    min="1"
                    className="w-full px-4 py-3 bg-background border border-surface-border rounded-xl text-white font-mono text-lg font-bold focus:outline-none focus:border-accent"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono uppercase text-text-secondary font-semibold mb-2">
                    Reps to Technical Failure
                  </label>
                  <input
                    type="number"
                    value={reps}
                    onChange={(e) => setReps(Math.min(15, Math.max(1, Number(e.target.value))))}
                    min="1"
                    max="15"
                    className="w-full px-4 py-3 bg-background border border-surface-border rounded-xl text-white font-mono text-lg font-bold focus:outline-none focus:border-accent"
                  />
                </div>
              </div>

              {/* Unit Toggle */}
              <div className="flex items-center justify-between text-xs font-mono text-text-secondary">
                <span>Unit standard:</span>
                <div className="flex gap-1 bg-background p-1 rounded-lg border border-surface-border">
                  <button
                    onClick={() => setUnit('lbs')}
                    className={`px-3 py-1 rounded text-xs font-bold ${unit === 'lbs' ? 'bg-accent text-black' : 'text-text-secondary'}`}
                  >
                    LBS
                  </button>
                  <button
                    onClick={() => setUnit('kg')}
                    className={`px-3 py-1 rounded text-xs font-bold ${unit === 'kg' ? 'bg-accent text-black' : 'text-text-secondary'}`}
                  >
                    KG
                  </button>
                </div>
              </div>

              {/* Output Display */}
              <div className="p-6 rounded-2xl bg-gradient-to-br from-surface-hover to-surface-card border border-accent/40 text-center shadow-card">
                <div className="text-xs font-mono uppercase text-accent font-semibold tracking-wider">
                  Estimated One-Rep Maximum
                </div>
                <div className="text-4xl sm:text-5xl font-extrabold text-white my-2 font-mono">
                  {calculated1RM} <span className="text-xl text-accent">{unit}</span>
                </div>
                <div className="text-xs text-text-secondary">
                  Based on validated Brzycki biomechanical regression formula.
                </div>
              </div>

              {/* Working Percentages Table */}
              <div className="grid grid-cols-4 gap-2 text-center text-xs font-mono">
                <div className="p-2.5 rounded-xl bg-surface-hover border border-surface-border">
                  <div className="text-text-muted">90% (3 Reps)</div>
                  <div className="font-bold text-white mt-1">{Math.round(calculated1RM * 0.9)} {unit}</div>
                </div>
                <div className="p-2.5 rounded-xl bg-surface-hover border border-surface-border">
                  <div className="text-text-muted">85% (5 Reps)</div>
                  <div className="font-bold text-white mt-1">{Math.round(calculated1RM * 0.85)} {unit}</div>
                </div>
                <div className="p-2.5 rounded-xl bg-surface-hover border border-surface-border">
                  <div className="text-text-muted">80% (8 Reps)</div>
                  <div className="font-bold text-white mt-1">{Math.round(calculated1RM * 0.8)} {unit}</div>
                </div>
                <div className="p-2.5 rounded-xl bg-surface-hover border border-surface-border">
                  <div className="text-text-muted">70% (12 Reps)</div>
                  <div className="font-bold text-white mt-1">{Math.round(calculated1RM * 0.7)} {unit}</div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: REST TIMER */}
          {activeTab === 'timer' && (
            <div className="space-y-6 text-center">
              {/* Preset Buttons */}
              <div className="grid grid-cols-4 gap-2">
                {[60, 90, 120, 180].map((s) => (
                  <button
                    key={s}
                    onClick={() => handleStartTimer(s)}
                    className={`py-2 rounded-xl text-xs font-mono font-bold border transition-colors ${
                      timerSeconds === s ? 'bg-accent text-black border-accent' : 'bg-surface-hover border-surface-border text-white'
                    }`}
                  >
                    {s}s ({s / 60}m)
                  </button>
                ))}
              </div>

              {/* Clock Display */}
              <div className="p-8 rounded-3xl bg-[#111116] border border-surface-border flex flex-col items-center justify-center">
                <div className="text-6xl sm:text-7xl font-extrabold text-white font-mono tracking-tight mb-2">
                  {Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, '0')}
                </div>
                <div className="text-xs font-mono text-accent">
                  {timerRunning ? 'Timer Active • Breathe & Recover' : timeLeft === 0 ? 'Rest Period Over! Time to Lift!' : 'Ready'}
                </div>
              </div>

              {/* Controls */}
              <div className="flex items-center justify-center gap-3">
                <button
                  onClick={() => setTimerRunning(!timerRunning)}
                  className="px-6 py-3 rounded-2xl bg-accent text-black font-extrabold text-xs uppercase tracking-wider flex items-center gap-2 shadow-glow-sm hover:bg-accent-hover transition-colors"
                >
                  {timerRunning ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                  <span>{timerRunning ? 'Pause Timer' : 'Start Timer'}</span>
                </button>
                <button
                  onClick={() => {
                    setTimerRunning(false);
                    setTimeLeft(timerSeconds);
                  }}
                  className="p-3 rounded-2xl bg-surface-hover hover:bg-surface-border border border-surface-border text-text-secondary hover:text-white transition-colors"
                  title="Reset"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* TAB 3: PLATE CALCULATOR */}
          {activeTab === 'plates' && (
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono uppercase text-text-secondary font-semibold mb-2">
                    Target Total Weight (lbs)
                  </label>
                  <input
                    type="number"
                    value={targetBarbellWeight}
                    onChange={(e) => setTargetBarbellWeight(Number(e.target.value))}
                    step="5"
                    min="45"
                    className="w-full px-4 py-3 bg-background border border-surface-border rounded-xl text-white font-mono text-lg font-bold focus:outline-none focus:border-accent"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono uppercase text-text-secondary font-semibold mb-2">
                    Bar Weight
                  </label>
                  <select
                    value={barWeight}
                    onChange={(e) => setBarWeight(Number(e.target.value))}
                    className="w-full px-4 py-3.5 bg-background border border-surface-border rounded-xl text-white font-mono text-sm font-bold focus:outline-none focus:border-accent"
                  >
                    <option value={45}>Standard Olympic (45 lbs)</option>
                    <option value={35}>Women's Olympic (35 lbs)</option>
                    <option value={15}>Technique Bar (15 lbs)</option>
                  </select>
                </div>
              </div>

              {/* Plates Breakdown Result */}
              <div className="p-6 rounded-2xl bg-surface-hover/80 border border-surface-border">
                <div className="text-xs font-mono uppercase text-text-muted mb-2">
                  Load On Each Side: <strong className="text-accent">{plateResult.weightPerSide} lbs</strong>
                </div>

                {plateResult.breakdown.length > 0 ? (
                  <div className="flex flex-wrap items-center gap-3 pt-2">
                    {plateResult.breakdown.map((item, idx) => (
                      <div key={idx} className="p-3 rounded-xl bg-background border border-surface-border text-center min-w-[75px]">
                        <div className="text-lg font-extrabold text-white font-mono">{item.count}×</div>
                        <div className="text-xs font-bold text-accent font-mono">{item.plate} lb</div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-xs text-text-secondary font-mono">Just the barbell, no extra plates needed!</div>
                )}

                {plateResult.remainder > 0 && (
                  <div className="text-xs text-amber-400 font-mono mt-3">
                    Note: Remaining {plateResult.remainder} lbs per side cannot be loaded with standard 2.5lb plates.
                  </div>
                )}
              </div>
            </div>
          )}

        </div>

      </div>
    </div>
  );
};

