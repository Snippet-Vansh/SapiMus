import React, { useState } from 'react';
import { LEARN_ARTICLES } from '../../data/learnData';
import { 
  Clock, 
  Lightbulb, 
  ChevronRight, 
  ArrowLeft, 
  CheckCircle2
} from 'lucide-react';

export const LearnSection = () => {
  const [activeArticleId, setActiveArticleId] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Knowledge' },
    { id: 'Hypertrophy Science', label: 'Hypertrophy Science' },
    { id: 'Training Principles', label: 'Training Principles' },
    { id: 'Recovery & Physiology', label: 'Recovery' },
    { id: 'Programming', label: 'Sets & Reps / Frequency' },
    { id: 'Nutrition', label: 'Protein & Nutrition' },
    { id: 'Biomechanics', label: 'Technique & Mind-Muscle' }
  ];

  const filteredArticles = LEARN_ARTICLES.filter((art) => {
    if (selectedCategory === 'all') return true;
    return art.category === selectedCategory;
  });

  const selectedArticle = LEARN_ARTICLES.find((a) => a.id === activeArticleId);

  // If viewing a specific article
  if (selectedArticle) {
    return (
      <div className="w-full py-12 md:py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto animate-fadeIn relative">
        {/* Glow */}
        <div className="absolute top-10 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-[140px] pointer-events-none" />

        {/* Back Button */}
        <button
          onClick={() => setActiveArticleId(null)}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass-pill hover:bg-white/10 border border-white/10 text-xs font-tech font-bold uppercase text-text-secondary hover:text-white transition-colors mb-8 shadow-glass relative z-10"
        >
          <ArrowLeft className="w-4 h-4 text-accent" />
          <span>Back to All Articles</span>
        </button>

        {/* Article Container */}
        <article className="glass-panel border border-white/[0.08] rounded-3xl p-6 sm:p-12 shadow-glass space-y-8 relative z-10">
          
          {/* Article Header */}
          <div>
            <div className="flex items-center gap-2.5 mb-4 flex-wrap">
              <span className="px-3.5 py-1 rounded-full bg-accent/10 border border-accent/30 text-accent text-xs font-tech font-bold uppercase">
                {selectedArticle.category}
              </span>
              <span className="text-xs font-tech text-text-secondary flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" />
                {selectedArticle.readTime}
              </span>
              <span className="text-xs font-tech text-text-secondary">
                // {selectedArticle.publishedDate}
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-display font-black text-white uppercase tracking-tight leading-tight mb-4">
              {selectedArticle.title}
            </h1>
            <p className="text-lg sm:text-xl text-text-secondary font-tech leading-relaxed font-normal">
              {selectedArticle.subtitle}
            </p>
          </div>

          {/* Key Takeaway Box */}
          <div className="p-6 sm:p-8 rounded-2xl glass-panel border border-orange-athletic/30 bg-gradient-to-br from-white/[0.03] to-orange-athletic/10 shadow-glass">
            <div className="flex items-center gap-2 text-orange-athletic font-tech font-bold text-xs uppercase tracking-wider mb-2">
              <Lightbulb className="w-4 h-4" />
              <span>// Core Scientific Takeaway</span>
            </div>
            <p className="text-sm sm:text-base text-white font-tech font-semibold leading-relaxed">
              "{selectedArticle.keyTakeaway}"
            </p>
          </div>

          {/* Article Body Content */}
          <div className="space-y-8 pt-6 border-t border-white/[0.06]">
            {selectedArticle.content.map((section, idx) => (
              <div key={idx} className="space-y-3">
                <h3 className="text-xl sm:text-2xl font-display font-black uppercase text-white">
                  {section.heading}
                </h3>
                {section.body && (
                  <p className="text-sm sm:text-base text-text-secondary leading-relaxed font-sans font-normal">
                    {section.body}
                  </p>
                )}
                {section.list && (
                  <ul className="space-y-2.5 pt-2">
                    {section.list.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-xs sm:text-sm text-text-primary/90 font-tech">
                        <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>

          {/* Author & Footer */}
          <div className="pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-accent/20 border border-accent/40 text-accent flex items-center justify-center font-bold font-tech text-sm">
                SM
              </div>
              <div>
                <div className="text-sm font-bold text-white font-tech uppercase">{selectedArticle.author}</div>
                <div className="text-xs text-text-secondary font-tech">// Peer-Reviewed Biomechanics</div>
              </div>
            </div>

            <button
              onClick={() => setActiveArticleId(null)}
              className="px-6 py-3 rounded-full bg-accent text-black font-tech font-extrabold text-xs uppercase tracking-wider hover:bg-accent-hover transition-colors shadow-glow"
            >
              Back to Learn Center
            </button>
          </div>

        </article>
      </div>
    );
  }

  // Articles Grid List
  return (
    <div className="w-full py-12 md:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      {/* Background glow */}
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-[140px] pointer-events-none" />

      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-12 relative z-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill border border-white/10 text-accent text-xs font-tech font-semibold uppercase tracking-wider mb-4 shadow-glass">
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
          <span>Evidence-Based Fitness Academy // Studies</span>
        </div>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-black text-white uppercase tracking-tight leading-[1.05] mb-4">
          The Science of <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-white to-orange-warm">Strength</span>
        </h2>
        <p className="text-text-secondary font-tech text-sm sm:text-base leading-relaxed">
          Cut through gym myths. Understand the physiological laws of muscle hypertrophy, 
          motor unit recruitment, and supercompensation backed by modern sports science.
        </p>
      </div>

      {/* Category Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none justify-start md:justify-center relative z-10">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id)}
            className={`px-4 py-2 rounded-full text-xs font-tech font-bold uppercase whitespace-nowrap transition-all border shadow-glass ${
              selectedCategory === cat.id
                ? 'bg-accent text-black border-accent shadow-glow'
                : 'glass-pill border-white/10 text-text-secondary hover:text-white hover:border-white/20'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
        {filteredArticles.map((article) => (
          <div
            key={article.id}
            onClick={() => setActiveArticleId(article.id)}
            className="glass-panel p-7 rounded-3xl border border-white/[0.08] hover:border-accent/40 cursor-pointer group flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 shadow-glass"
          >
            <div>
              {/* Category & Read Time */}
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="text-[10px] font-tech font-bold uppercase px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent">
                  {article.category}
                </span>
                <span className="text-xs font-tech text-text-secondary flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {article.readTime}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-xl font-display font-black uppercase text-white group-hover:text-accent transition-colors leading-snug mb-3">
                {article.title}
              </h3>

              {/* Subtitle */}
              <p className="text-xs sm:text-sm text-text-secondary leading-relaxed mb-6 font-sans line-clamp-3">
                {article.subtitle}
              </p>
            </div>

            {/* Bottom Footer */}
            <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between">
              <span className="text-xs font-tech text-text-muted">// {article.difficulty}</span>
              <span className="text-xs font-tech font-bold text-accent flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                <span>Read Guide</span>
                <ChevronRight className="w-4 h-4" />
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
