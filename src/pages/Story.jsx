import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Play, Pause, Globe } from 'lucide-react';
import PlaceholderImage from '../components/PlaceholderImage';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../utils/translations';

export default function Story() {
  const navigate = useNavigate();
  const [isPlaying, setIsPlaying] = useState(false);
  const { lang, setSpecificLang } = useLanguage();
  const t = translations[lang];

  const langs = ['EN', 'HI', 'KN', 'TA', 'TU'];

  return (
    <div className="min-h-screen bg-parchment flex flex-col">
      {/* Header */}
      <div className="p-4 pt-6 flex items-center gap-4 bg-parchment/90 backdrop-blur-sm sticky top-0 z-20">
        <button onClick={() => navigate(-1)} className="p-2 -ml-2 text-navy hover:bg-gray-200/50 rounded-full transition-colors">
          <ArrowLeft size={24} />
        </button>
        <h1 className="font-serif text-xl font-bold">The Yali Guardian</h1>
      </div>

      <div className="px-5 pb-8 space-y-6 flex-1">
        
        {/* Summary */}
        <section>
          <h2 className="text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-2">{t.summary}</h2>
          <p className="text-sm leading-relaxed text-navy font-medium">
            {t.summaryText}
          </p>
        </section>

        {/* Why It Was Made */}
        <section>
          <h2 className="text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-2">{t.whyMade}</h2>
          <p className="text-sm leading-relaxed text-navy/80">
            {t.whyMadeText}
          </p>
        </section>

        {/* Language Selection */}
        <div className="flex flex-wrap gap-2 pt-2">
          {langs.map(l => (
            <button
              key={l}
              onClick={() => setSpecificLang(l)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold transition-all ${
                lang === l 
                  ? 'bg-terracotta text-white border-transparent shadow-md transform scale-105' 
                  : 'bg-transparent text-navy border border-gray-300 hover:bg-gray-100'
              }`}
            >
              {lang === l && <Globe size={12} className="opacity-80" />}
              {translations[l].langName}
            </button>
          ))}
        </div>

        {/* Audio Player (Cosmetic) */}
        <div className="flex flex-col items-center justify-center py-8">
          <button 
            onClick={() => setIsPlaying(!isPlaying)}
            className="w-16 h-16 bg-navy text-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-800 transition-colors transform hover:scale-105 active:scale-95"
          >
            {isPlaying ? <Pause size={28} fill="currentColor" /> : <Play size={28} fill="currentColor" className="ml-1" />}
          </button>
          {isPlaying && (
            <span className="text-xs text-terracotta font-semibold mt-3 animate-pulse">
              {t.nowPlaying}
            </span>
          )}
        </div>

        {/* Related Stories */}
        <div>
          <h3 className="font-serif font-bold text-lg tracking-wide mb-3">{t.relatedStories}</h3>
          <div className="flex gap-3 overflow-x-auto pb-4 scrollbar-hide -mx-5 px-5 snap-x">
            {[
              { title: 'Yali Pillar Types', img: '/assets/img/yali-pillar.jpg' },
              { title: 'Virupaksha Temple Legends', img: '/assets/img/virupaksha.jpg' },
              { title: 'Guardian Motifs Across India', img: '/assets/img/guardian-motifs.jpg' }
            ].map((item, i) => (
              <div key={i} className="min-w-[140px] w-[140px] snap-start cursor-pointer transform transition-transform hover:scale-95" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                <div className="h-[100px] rounded-xl overflow-hidden mb-2 shadow-sm">
                  <PlaceholderImage src={item.img} alt={item.title} className="w-full h-full object-cover" iconSize={24} />
                </div>
                <p className="text-xs font-semibold leading-tight">{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
