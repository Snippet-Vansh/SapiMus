import React, { useState, useEffect } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/home/Hero';
import { FeaturedMuscles } from './components/home/FeaturedMuscles';
import { PopularExercises } from './components/home/PopularExercises';
import { WorkoutPlansPreview } from './components/home/WorkoutPlansPreview';
import { ScienceHighlight } from './components/home/ScienceHighlight';
import { AnatomyExplorer } from './components/anatomy/AnatomyExplorer';
import { ExerciseLibrary } from './components/exercises/ExerciseLibrary';
import { ExerciseDetailModal } from './components/exercises/ExerciseDetailModal';
import { WorkoutFinder } from './components/workout-finder/WorkoutFinder';
import { WorkoutPlans } from './components/workout-plans/WorkoutPlans';
import { LearnSection } from './components/learn/LearnSection';
import { QuickToolsModal } from './components/common/QuickToolsModal';
import { Bookmark, CheckCircle2 } from 'lucide-react';

export function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [selectedExerciseForModal, setSelectedExerciseForModal] = useState(null);
  const [selectedMuscleForAnatomy, setSelectedMuscleForAnatomy] = useState(null);
  const [muscleFilterForLibrary, setMuscleFilterForLibrary] = useState(null);
  const [isToolsOpen, setIsToolsOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);

  // Bookmarks persistence in localStorage
  const [bookmarkedIds, setBookmarkedIds] = useState(() => {
    try {
      const saved = localStorage.getItem('sapimus_bookmarked_exercises');
      return saved ? JSON.parse(saved) : ['bench-press', 'barbell-squat'];
    } catch (e) {
      return ['bench-press', 'barbell-squat'];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('sapimus_bookmarked_exercises', JSON.stringify(bookmarkedIds));
    } catch (e) {
      console.error(e);
    }
  }, [bookmarkedIds]);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  const handleToggleBookmark = (exerciseId) => {
    setBookmarkedIds((prev) => {
      if (prev.includes(exerciseId)) {
        showToast('Removed exercise from your saved collection');
        return prev.filter((id) => id !== exerciseId);
      } else {
        showToast('Added exercise to your saved collection');
        return [...prev, exerciseId];
      }
    });
  };

  const handleNavigate = (tab) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectMuscleFromHome = (muscleId) => {
    setSelectedMuscleForAnatomy(muscleId);
    setActiveTab('anatomy');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateToExercisesForMuscle = (muscleId) => {
    setMuscleFilterForLibrary(muscleId);
    setActiveTab('exercises');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#0B0B0D] text-white flex flex-col font-sans selection:bg-accent selection:text-black">
      
      {/* Navigation Header */}
      <Navbar
        activeTab={activeTab}
        onNavigate={handleNavigate}
        onOpenTools={() => setIsToolsOpen(true)}
        bookmarkedCount={bookmarkedIds.length}
      />

      {/* Main Content Area */}
      <main className="flex-1 pt-16">
        {/* TAB 1: HOMEPAGE */}
        {activeTab === 'home' && (
          <div className="animate-fadeIn">
            <Hero 
              onNavigate={handleNavigate} 
              onSelectMuscle={handleSelectMuscleFromHome} 
            />
            <FeaturedMuscles 
              onSelectMuscle={handleSelectMuscleFromHome} 
              onNavigate={handleNavigate} 
            />
            <PopularExercises
              onSelectExercise={(ex) => setSelectedExerciseForModal(ex)}
              onNavigate={handleNavigate}
              bookmarkedIds={bookmarkedIds}
              onToggleBookmark={handleToggleBookmark}
            />
            <WorkoutPlansPreview onNavigate={handleNavigate} />
            <ScienceHighlight onNavigate={handleNavigate} />
          </div>
        )}

        {/* TAB 2: ANATOMY EXPLORER */}
        {activeTab === 'anatomy' && (
          <div className="animate-fadeIn">
            <AnatomyExplorer
              onOpenExerciseModal={(ex) => setSelectedExerciseForModal(ex)}
              onNavigateToExercises={handleNavigateToExercisesForMuscle}
            />
          </div>
        )}

        {/* TAB 3: EXERCISE LIBRARY */}
        {activeTab === 'exercises' && (
          <div className="animate-fadeIn">
            <ExerciseLibrary
              onSelectExercise={(ex) => setSelectedExerciseForModal(ex)}
              bookmarkedIds={bookmarkedIds}
              onToggleBookmark={handleToggleBookmark}
              initialMuscleFilter={muscleFilterForLibrary}
            />
          </div>
        )}

        {/* TAB 4: WORKOUT FINDER */}
        {activeTab === 'finder' && (
          <div className="animate-fadeIn">
            <WorkoutFinder
              onSelectExercise={(ex) => setSelectedExerciseForModal(ex)}
            />
          </div>
        )}

        {/* TAB 5: WORKOUT PLANS */}
        {activeTab === 'plans' && (
          <div className="animate-fadeIn">
            <WorkoutPlans
              onSelectExercise={(ex) => setSelectedExerciseForModal(ex)}
            />
          </div>
        )}

        {/* TAB 6: LEARN SECTION */}
        {activeTab === 'learn' && (
          <div className="animate-fadeIn">
            <LearnSection />
          </div>
        )}
      </main>

      {/* Footer */}
      <Footer
        onNavigate={handleNavigate}
        onSelectMuscle={handleSelectMuscleFromHome}
      />

      {/* Exercise Detail Modal */}
      {selectedExerciseForModal && (
        <ExerciseDetailModal
          exercise={selectedExerciseForModal}
          onClose={() => setSelectedExerciseForModal(null)}
          isBookmarked={bookmarkedIds.includes(selectedExerciseForModal.id)}
          onToggleBookmark={handleToggleBookmark}
          onNavigateToMuscle={(muscleId) => {
            setSelectedExerciseForModal(null);
            handleSelectMuscleFromHome(muscleId);
          }}
        />
      )}

      {/* Quick Gym Tools Modal (1RM, Rest Timer, Plate Math) */}
      <QuickToolsModal
        isOpen={isToolsOpen}
        onClose={() => setIsToolsOpen(false)}
      />

      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#16161D] border border-accent/40 rounded-2xl px-5 py-3 shadow-glow flex items-center gap-2.5 text-xs sm:text-sm text-white font-medium animate-fadeIn">
          <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
          <span>{toastMessage}</span>
        </div>
      )}

    </div>
  );
}

export default App;

