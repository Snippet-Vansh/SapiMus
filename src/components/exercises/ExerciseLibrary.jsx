import React, { useState, useMemo } from 'react';
import { EXERCISES } from '../../data/exercisesData';
import { ExerciseCard } from './ExerciseCard';
import { 
  Search, 
  Filter, 
  Dumbbell, 
  RotateCcw, 
  Bookmark, 
  X
} from 'lucide-react';

export const ExerciseLibrary = ({ 
  onSelectExercise, 
  bookmarkedIds = [], 
  onToggleBookmark,
  initialMuscleFilter = null 
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedMuscle, setSelectedMuscle] = useState(initialMuscleFilter || 'all');
  const [selectedDifficulty, setSelectedDifficulty] = useState('all');
  const [selectedEquipment, setSelectedEquipment] = useState('all');
  const [selectedType, setSelectedType] = useState('all');
  const [showSavedOnly, setShowSavedOnly] = useState(false);

  // Muscle categories list
  const muscleCategories = [
    { label: 'All Muscles', value: 'all' },
    { label: 'Chest', value: 'chest' },
    { label: 'Back', value: 'back' },
    { label: 'Quadriceps', value: 'quadriceps' },
    { label: 'Hamstrings', value: 'hamstrings' },
    { label: 'Glutes', value: 'glutes' },
    { label: 'Shoulders', value: 'shoulders' },
    { label: 'Biceps', value: 'biceps' },
    { label: 'Triceps', value: 'triceps' },
    { label: 'Abs & Core', value: 'abs' },
    { label: 'Calves', value: 'calves' },
    { label: 'Forearms', value: 'forearms' },
    { label: 'Traps', value: 'trapezius' }
  ];

  const difficulties = ['all', 'Beginner', 'Intermediate', 'Advanced'];
  const equipments = ['all', 'Barbell', 'Dumbbell', 'Cable', 'Machine', 'Bodyweight'];
  const types = ['all', 'Compound', 'Isolation'];

  // Filtering Logic
  const filteredExercises = useMemo(() => {
    return EXERCISES.filter((ex) => {
      // Search
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesName = ex.name.toLowerCase().includes(q);
        const matchesMuscle = ex.targetMuscle.toLowerCase().includes(q);
        const matchesEquipment = ex.equipment.toLowerCase().includes(q);
        const matchesSummary = ex.summary.toLowerCase().includes(q);
        if (!matchesName && !matchesMuscle && !matchesEquipment && !matchesSummary) {
          return false;
        }
      }

      // Muscle
      if (selectedMuscle !== 'all' && ex.targetMuscleId !== selectedMuscle) {
        return false;
      }

      // Difficulty
      if (selectedDifficulty !== 'all' && ex.difficulty !== selectedDifficulty) {
        return false;
      }

      // Equipment
      if (selectedEquipment !== 'all' && ex.equipment !== selectedEquipment) {
        return false;
      }

      // Type
      if (selectedType !== 'all' && ex.type !== selectedType) {
        return false;
      }

      // Saved only
      if (showSavedOnly && !bookmarkedIds.includes(ex.id)) {
        return false;
      }

      return true;
    });
  }, [searchQuery, selectedMuscle, selectedDifficulty, selectedEquipment, selectedType, showSavedOnly, bookmarkedIds]);

  const hasActiveFilters = 
    selectedMuscle !== 'all' || 
    selectedDifficulty !== 'all' || 
    selectedEquipment !== 'all' || 
    selectedType !== 'all' || 
    showSavedOnly ||
    searchQuery.trim().length > 0;

  const handleClearAll = () => {
    setSearchQuery('');
    setSelectedMuscle('all');
    setSelectedDifficulty('all');
    setSelectedEquipment('all');
    setSelectedType('all');
    setShowSavedOnly(false);
  };

  return (
    <div className="w-full py-12 md:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      {/* Background glow */}
      <div className="absolute top-20 right-1/4 w-96 h-96 bg-orange-athletic/5 rounded-full blur-[140px] pointer-events-none" />

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-12 relative z-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill border border-white/10 text-accent text-xs font-tech font-semibold uppercase tracking-wider mb-4 shadow-glass">
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
          <span>Biomechanical Movement Vault // 30+ Lifts</span>
        </div>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-black text-white uppercase tracking-tight leading-[1.05] mb-4">
          Movement <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-white to-orange-warm">Library</span>
        </h2>
        <p className="text-text-secondary font-tech text-sm sm:text-base leading-relaxed">
          Master every compound lift and isolation exercise with anatomically accurate lines of pull, 
          step-by-step cues, and target muscle breakdowns.
        </p>
      </div>

      {/* Search & Main Filter Controls Bar */}
      <div className="glass-panel border border-white/[0.08] rounded-3xl p-6 sm:p-8 mb-10 shadow-glass relative z-10">
        
        {/* Search Input & Saved Toggle */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mb-6">
          <div className="relative w-full">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-text-muted" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search exercise by name, muscle (e.g. 'chest', 'biceps'), or equipment..."
              className="w-full pl-12 pr-10 py-3.5 bg-black/40 border border-white/10 rounded-2xl text-white placeholder-text-muted text-sm sm:text-base font-tech focus:outline-none focus:border-accent transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-text-muted hover:text-white p-1"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          <button
            onClick={() => setShowSavedOnly(!showSavedOnly)}
            className={`w-full sm:w-auto px-6 py-3.5 rounded-2xl border text-sm font-tech font-bold uppercase transition-all flex items-center justify-center gap-2 whitespace-nowrap shadow-glass ${
              showSavedOnly
                ? 'bg-accent text-black border-accent shadow-glow'
                : 'glass-pill border-white/10 text-text-secondary hover:text-white hover:border-white/20'
            }`}
          >
            <Bookmark className={`w-4 h-4 ${showSavedOnly ? 'fill-black' : ''}`} />
            <span>Saved ({bookmarkedIds.length})</span>
          </button>
        </div>

        {/* Muscle Selector Pills */}
        <div className="mb-6">
          <div className="text-xs font-tech uppercase text-text-muted font-bold mb-3">
            // Target Muscle Group
          </div>
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {muscleCategories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setSelectedMuscle(cat.value)}
                className={`px-4 py-2 rounded-full text-xs font-tech font-bold uppercase whitespace-nowrap transition-all border ${
                  selectedMuscle === cat.value
                    ? 'bg-accent text-black border-accent shadow-glow'
                    : 'glass-pill border-white/10 text-text-secondary hover:text-white hover:border-white/20'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Secondary Filter Dropdowns */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-5 border-t border-white/[0.06]">
          {/* Difficulty */}
          <div>
            <label className="block text-xs font-tech uppercase text-text-muted font-bold mb-2">
              // Difficulty
            </label>
            <select
              value={selectedDifficulty}
              onChange={(e) => setSelectedDifficulty(e.target.value)}
              className="w-full px-4 py-2.5 bg-black/40 border border-white/10 rounded-xl text-sm font-tech text-white focus:outline-none focus:border-accent transition-colors"
            >
              {difficulties.map((d) => (
                <option key={d} value={d} className="bg-[#121217] text-white">
                  {d === 'all' ? 'All Difficulty Levels' : d}
                </option>
              ))}
            </select>
          </div>

          {/* Equipment */}
          <div>
            <label className="block text-xs font-tech uppercase text-text-muted font-bold mb-2">
              // Equipment
            </label>
            <select
              value={selectedEquipment}
              onChange={(e) => setSelectedEquipment(e.target.value)}
              className="w-full px-4 py-2.5 bg-black/40 border border-white/10 rounded-xl text-sm font-tech text-white focus:outline-none focus:border-accent transition-colors"
            >
              {equipments.map((eq) => (
                <option key={eq} value={eq} className="bg-[#121217] text-white">
                  {eq === 'all' ? 'All Equipment' : eq}
                </option>
              ))}
            </select>
          </div>

          {/* Exercise Type */}
          <div>
            <label className="block text-xs font-tech uppercase text-text-muted font-bold mb-2">
              // Kinematics
            </label>
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="w-full px-4 py-2.5 bg-black/40 border border-white/10 rounded-xl text-sm font-tech text-white focus:outline-none focus:border-accent transition-colors"
            >
              {types.map((t) => (
                <option key={t} value={t} className="bg-[#121217] text-white">
                  {t === 'all' ? 'All Movement Types' : `${t} Exercises`}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Active Filters Clear Row */}
        {hasActiveFilters && (
          <div className="flex items-center justify-between pt-4 mt-4 border-t border-white/[0.06] text-xs">
            <span className="text-text-secondary font-tech">
              Found <strong className="text-accent">{filteredExercises.length}</strong> matching exercises
            </span>
            <button
              onClick={handleClearAll}
              className="flex items-center gap-1.5 text-accent hover:underline font-tech font-bold"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset Filters</span>
            </button>
          </div>
        )}
      </div>

      {/* Exercise Grid */}
      {filteredExercises.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
          {filteredExercises.map((exercise) => (
            <ExerciseCard
              key={exercise.id}
              exercise={exercise}
              onSelect={onSelectExercise}
              isBookmarked={bookmarkedIds.includes(exercise.id)}
              onToggleBookmark={onToggleBookmark}
            />
          ))}
        </div>
      ) : (
        /* Empty State */
        <div className="text-center py-20 px-4 glass-panel rounded-3xl border border-white/[0.08] max-w-lg mx-auto relative z-10">
          <div className="w-14 h-14 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-center mx-auto mb-4 text-text-muted">
            <Filter className="w-7 h-7" />
          </div>
          <h3 className="text-xl font-display font-black uppercase text-white mb-2">No Matching Exercises</h3>
          <p className="text-text-secondary text-sm mb-6 font-tech">
            We couldn't find any exercises matching your exact search and filter criteria. Try adjusting your parameters.
          </p>
          <button
            onClick={handleClearAll}
            className="px-6 py-2.5 rounded-full bg-accent text-black font-tech font-bold text-xs uppercase tracking-wider shadow-glow hover:bg-accent-hover transition-colors"
          >
            Reset All Filters
          </button>
        </div>
      )}
    </div>
  );
};
