import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Play, Pause } from 'lucide-react';
import PlaceholderImage from '../components/PlaceholderImage';

export default function Story() {
  const navigate = useNavigate();
  const [isPlaying, setIsPlaying] = useState(false);
  const [selectedLang, setSelectedLang] = useState('Tamil');

  const langs = ['Kannada', 'Tulu', 'Hindi', 'Tamil', 'English'];

  return (
    <div className="min-h-screen bg-parchment flex flex-col">
      {/* Header */}
      <div className="p-4 pt-6 flex items-center gap-4 bg-parchment/90 backdrop-blur-sm sticky top-0 z-20">
        <button onClick={() => navigate(-1)} className="p-2 -ml-2 text-navy">
          <ArrowLeft size={24} />
        </button>
        <h1 className="font-serif text-xl font-bold">The Yali Guardian</h1>
      </div>

      <div className="px-5 pb-8 space-y-6 flex-1">
        
        {/* Summary */}
        <section>
          <h2 className="text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-2">Summary</h2>
          <p className="text-sm leading-relaxed text-navy font-medium">
            The Yali is a mythical creature combining the strength of a lion with the majesty of an elephant, carved as a guardian figure at temple entrances across South India. Common in Vijayanagara and Hoysala architecture, it symbolizes protective power and cosmic order.
          </p>
        </section>

        {/* Why It Was Made */}
        <section>
          <h2 className="text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-2">Why It Was Made</h2>
          <p className="text-sm leading-relaxed text-navy/80">
            Temple builders placed Yali figures at pillar bases and entrances to ward off evil and mark the threshold between the ordinary world and sacred space, a role similar to guardian lions in other Asian traditions.
          </p>
        </section>

        {/* Language Selection */}
        <div className="flex flex-wrap gap-2 pt-2">
          {langs.map(lang => (
            <button
              key={lang}
              onClick={() => setSelectedLang(lang)}
              className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-colors ${
                selectedLang === lang 
                  ? 'bg-terracotta text-white border-transparent' 
                  : 'bg-transparent text-navy border border-gray-300'
              }`}
            >
              {lang}
            </button>
          ))}
        </div>

        {/* Audio Player (Cosmetic) */}
        <div className="flex flex-col items-center justify-center py-8">
          <button 
            onClick={() => setIsPlaying(!isPlaying)}
            className="w-16 h-16 bg-navy text-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-800 transition-colors"
          >
            {isPlaying ? <Pause size={28} fill="currentColor" /> : <Play size={28} fill="currentColor" className="ml-1" />}
          </button>
          {isPlaying && (
            <span className="text-xs text-terracotta font-semibold mt-3 animate-pulse">
              Now Playing...
            </span>
          )}
        </div>

        {/* Related Stories */}
        <div>
          <h3 className="font-serif font-bold text-lg uppercase tracking-wide text-xs mb-3">Related Stories</h3>
          <div className="flex gap-3 overflow-x-auto pb-4 scrollbar-hide -mx-5 px-5">
            {[
              { title: 'Yali Pillar Types', img: '/assets/img/yali-pillar.jpg' },
              { title: 'Virupaksha Temple Legends', img: '/assets/img/virupaksha.jpg' },
              { title: 'Guardian Motifs Across India', img: '/assets/img/guardian-motifs.jpg' }
            ].map((item, i) => (
              <div key={i} className="min-w-[120px] w-[120px]">
                <div className="h-[90px] rounded-xl overflow-hidden mb-2">
                  <PlaceholderImage src={item.img} alt={item.title} className="w-full h-full" iconSize={24} />
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
