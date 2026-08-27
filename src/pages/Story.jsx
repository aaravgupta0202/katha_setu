import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Play, Pause, Globe, Sparkles, Mic } from 'lucide-react';
import PlaceholderImage from '../components/PlaceholderImage';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../utils/translations';

export default function Story() {
  const navigate = useNavigate();
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);
  const { lang, setSpecificLang } = useLanguage();
  const t = translations[lang];

  const langs = ['EN', 'HI', 'KN', 'TA', 'TU'];

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(e => console.log('Audio playback failed', e));
      }
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="min-h-screen bg-parchment flex flex-col">
      {/* Hidden Audio Element */}
      <audio 
        ref={audioRef} 
        src="/assets/audio/yali-story.mp3" 
        onEnded={() => setIsPlaying(false)} 
        className="hidden"
      />

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

        {/* Audio/Video Player */}
        <div className="relative w-full h-48 rounded-2xl overflow-hidden shadow-md my-4 border border-gray-200">
          <PlaceholderImage src="/assets/img/yali-guardian.jpg" alt="Video Thumbnail" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center">
            <button 
              onClick={togglePlay}
              className="w-16 h-16 bg-terracotta/90 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-terracotta transition-colors transform hover:scale-105 active:scale-95 backdrop-blur-sm"
            >
              {isPlaying ? <Pause size={28} fill="currentColor" /> : <Play size={28} fill="currentColor" className="ml-1" />}
            </button>
            {isPlaying && (
              <span className="text-xs text-white font-semibold mt-3 animate-pulse bg-black/60 px-3 py-1 rounded-full">
                {t.nowPlaying}
              </span>
            )}
          </div>
        </div>

        {/* AI Chat Area */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 mb-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-2 opacity-10">
            <Sparkles size={48} />
          </div>
          <div className="flex gap-3 mb-4 relative z-10">
            <div className="w-8 h-8 rounded-full bg-teal text-white flex items-center justify-center shrink-0">
              <Sparkles size={16} />
            </div>
            <div className="bg-gray-50 rounded-2xl rounded-tl-none p-3 text-sm text-navy font-medium border border-gray-100">
              {t.aiGuide}
            </div>
          </div>
          <div className="flex items-center gap-2 relative z-10">
            <input type="text" placeholder={t.askQuestion} className="flex-1 bg-gray-100 rounded-full px-4 py-2.5 text-sm font-medium focus:outline-none focus:ring-1 focus:ring-terracotta" />
            <button className="w-10 h-10 rounded-full bg-navy text-white flex items-center justify-center shrink-0 hover:bg-gray-800 transition-colors shadow-sm">
              <Mic size={18} />
            </button>
          </div>
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
