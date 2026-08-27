import { useNavigate } from 'react-router-dom';
import { Camera, MapPin, Bookmark, Users, ChevronRight, Globe } from 'lucide-react';
import PlaceholderImage from '../components/PlaceholderImage';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../utils/translations';

export default function Home() {
  const navigate = useNavigate();
  const { lang, toggleLang } = useLanguage();
  const t = translations[lang];

  return (
    <div className="p-4 space-y-6">
      {/* Top bar */}
      <div className="flex items-center justify-between mt-2">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-200">
            <PlaceholderImage src="/assets/img/avatar.jpg" alt="Aankhi R." className="w-full h-full" iconSize={20} />
          </div>
          <div>
            <h2 className="font-sans font-semibold text-sm">Aankhi R. · Level 7 Scholar</h2>
          </div>
        </div>
        <button 
          onClick={toggleLang}
          className="flex items-center gap-1.5 px-3 py-1 bg-white border border-gray-200 rounded-full text-xs font-semibold shadow-sm transition-colors hover:bg-gray-50"
        >
          <Globe size={14} className="text-gray-500" />
          {lang}
        </button>
      </div>

      {/* Hero */}
      <div className="bg-navy text-white rounded-2xl p-6 relative overflow-hidden shadow-lg border border-gray-800">
        <div className="absolute inset-0 opacity-20 bg-[url('/assets/img/stone-texture.jpg')] bg-cover mix-blend-overlay"></div>
        <div className="relative z-10">
          <h1 className="font-serif text-3xl mb-2 leading-tight max-w-[280px]" dangerouslySetInnerHTML={{__html: t.journey.replace('into', 'into<br/>')}}></h1>
          <p className="text-gray-300 text-sm mb-6 max-w-[240px]">
            {t.subtext}
          </p>
          <button 
            onClick={() => navigate('/scan')}
            className="w-full bg-terracotta hover:bg-orange-600 text-white font-semibold py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition-colors"
          >
            <Camera size={20} />
            {t.startScanning}
          </button>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-3 gap-3">
        <button onClick={() => navigate('/map')} className="bg-white rounded-xl p-3 flex flex-col items-center justify-center gap-2 shadow-sm border border-gray-100 hover:bg-gray-50 transition-colors">
          <div className="p-2 bg-parchment rounded-full text-navy"><MapPin size={20} /></div>
          <span className="text-[10px] font-semibold text-center leading-tight" dangerouslySetInnerHTML={{__html: t.nearbySites.replace(' ', '<br/>')}}></span>
        </button>
        <button onClick={() => navigate('/profile')} className="bg-white rounded-xl p-3 flex flex-col items-center justify-center gap-2 shadow-sm border border-gray-100 hover:bg-gray-50 transition-colors">
          <div className="p-2 bg-parchment rounded-full text-navy"><Bookmark size={20} /></div>
          <span className="text-[10px] font-semibold text-center leading-tight" dangerouslySetInnerHTML={{__html: t.myDiscoveries.replace(' ', '<br/>')}}></span>
        </button>
        <button onClick={() => navigate('/tag')} className="bg-white rounded-xl p-3 flex flex-col items-center justify-center gap-2 shadow-sm border border-gray-100 hover:bg-gray-50 transition-colors">
          <div className="p-2 bg-parchment rounded-full text-navy"><Users size={20} /></div>
          <span className="text-[10px] font-semibold text-center leading-tight" dangerouslySetInnerHTML={{__html: t.communityTags.replace(' ', '<br/>')}}></span>
        </button>
      </div>

      {/* Featured Discoveries */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-serif font-bold text-lg tracking-wide">{t.featured}</h3>
          <ChevronRight size={16} className="text-gray-400" />
        </div>
        <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide -mx-4 px-4 snap-x">
          {[
            { title: 'Hoysala Capital Friezes', img: '/assets/img/hoysala-friezes.jpg' },
            { title: 'Vedic Chariots', img: '/assets/img/vedic-chariots.jpg' },
            { title: 'Jain Tirthankara Icons', img: '/assets/img/jain-tirthankara.jpg' }
          ].map((item, i) => (
            <div key={i} className="min-w-[140px] w-[140px] snap-start cursor-pointer transform transition-transform hover:scale-95" onClick={() => navigate('/story')}>
              <div className="h-[140px] rounded-xl overflow-hidden mb-2 shadow-sm">
                <PlaceholderImage src={item.img} alt={item.title} className="w-full h-full object-cover" iconSize={24} />
              </div>
              <p className="text-xs font-semibold leading-tight">{item.title}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Region Stories */}
      <div className="pb-4">
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-serif font-bold text-lg tracking-wide">{t.regionStories}</h3>
        </div>
        <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide -mx-4 px-4 snap-x">
          {[
            { title: 'Karnataka', img: '/assets/img/karnataka.jpg' },
            { title: 'Tamil Nadu', img: '/assets/img/tamilnadu.jpg' },
            { title: 'Odisha', img: '/assets/img/odisha.jpg' }
          ].map((item, i) => (
            <div key={i} className="min-w-[160px] w-[160px] relative rounded-xl overflow-hidden h-[90px] snap-start shadow-sm cursor-pointer transform transition-transform hover:scale-95" onClick={() => navigate('/story')}>
              <PlaceholderImage src={item.img} alt={item.title} className="w-full h-full object-cover" iconSize={24} />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <span className="text-white font-serif font-semibold text-lg">{item.title}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
