import { Search, MapPin, Navigation, ArrowLeft, Coffee, Bed, Bus } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../utils/translations';

export default function MapScreen() {
  const navigate = useNavigate();
  const { lang } = useLanguage();
  const t = translations[lang];

  return (
    <div className="min-h-[100dvh] flex flex-col relative bg-[#EFEFEF] overflow-hidden">
      {/* Background Map (Cosmetic) */}
      <div className="absolute inset-0 z-0 opacity-60 pointer-events-none">
        <iframe width="100%" height="100%" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" src="https://www.openstreetmap.org/export/embed.html?bbox=74.7%2C13.3%2C74.9%2C13.5&amp;layer=mapnik" className="grayscale contrast-125 sepia-[.3]"></iframe>
      </div>

      {/* Floating Amenity Chips */}
      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 w-11/12 max-w-[360px] flex gap-2 overflow-x-auto scrollbar-hide py-2 px-1 z-20">
        <button className="bg-white px-4 py-2.5 rounded-full shadow-md text-[11px] font-bold text-navy flex items-center gap-2 shrink-0 hover:bg-gray-50 border border-gray-100 transition-transform transform hover:scale-105 active:scale-95">
          <Coffee size={14} className="text-terracotta" /> {t.localFood || 'Local Food'}
        </button>
        <button className="bg-white px-4 py-2.5 rounded-full shadow-md text-[11px] font-bold text-navy flex items-center gap-2 shrink-0 hover:bg-gray-50 border border-gray-100 transition-transform transform hover:scale-105 active:scale-95">
          <Bed size={14} className="text-teal" /> {t.heritageStays || 'Heritage Stays'}
        </button>
        <button className="bg-white px-4 py-2.5 rounded-full shadow-md text-[11px] font-bold text-navy flex items-center gap-2 shrink-0 hover:bg-gray-50 border border-gray-100 transition-transform transform hover:scale-105 active:scale-95">
          <Bus size={14} className="text-blue-600" /> {t.transport || 'Transport'}
        </button>
      </div>

      {/* Top Search Bar */}
      <div className="absolute top-0 w-full z-20 p-4 pt-6 flex items-center gap-2">
        <button onClick={() => navigate(-1)} className="p-2 bg-white rounded-full shadow-md text-navy shrink-0 hover:bg-gray-50 transition-colors">
          <ArrowLeft size={20} />
        </button>
        <div className="bg-white rounded-full shadow-md flex items-center px-4 py-3 flex-1">
          <Search size={20} className="text-gray-400 mr-3" />
          <input 
            type="text" 
            defaultValue="Barkur Heritage Trail" 
            className="flex-1 bg-transparent text-sm font-semibold focus:outline-none w-full"
          />
          <div className="bg-gray-100 p-1.5 rounded-full ml-2">
            <MapPin size={16} className="text-navy" />
          </div>
        </div>
      </div>

      {/* Map Background (Stylized CSS illustration) */}
      <div className="absolute inset-0 z-0 bg-[#E8E1D5] overflow-hidden">
        {/* Fake roads / rivers */}
        <div className="absolute top-1/4 -left-10 w-[120%] h-32 bg-[#D1DFD8]/60 transform -rotate-12 rounded-[100%] blur-sm"></div>
        <div className="absolute top-2/3 -left-10 w-[120%] h-16 bg-[#D1DFD8]/50 transform rotate-6 rounded-[100%] blur-sm"></div>
        
        {/* Route Line (Dashed) */}
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <path d="M 120 200 Q 200 300 150 450 T 220 600" fill="transparent" stroke="#142238" strokeWidth="2" strokeDasharray="6,6" opacity="0.6"/>
        </svg>

        {/* Pins */}
        <div className="absolute top-[200px] left-[105px] transform -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col items-center">
          <div className="bg-white px-2 py-1 rounded-md shadow-sm mb-1 text-[10px] font-bold">1</div>
          <MapPin size={24} className="text-terracotta fill-terracotta" />
        </div>

        <div className="absolute top-[320px] left-[175px] transform -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col items-center">
          <div className="bg-white px-2 py-1 rounded-md shadow-sm mb-1 text-[10px] font-bold">2</div>
          <MapPin size={20} className="text-navy fill-navy" />
        </div>

        <div className="absolute top-[450px] left-[150px] transform -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col items-center">
          <div className="bg-white px-2 py-1 rounded-md shadow-sm mb-1 text-[10px] font-bold">3</div>
          <MapPin size={24} className="text-teal fill-teal" />
        </div>
      </div>

      {/* Trail Points Info Card (Floating) */}
      <div className="absolute top-24 left-4 z-10 bg-white/90 backdrop-blur-md p-3 rounded-xl shadow-lg border border-white max-w-[140px]">
        <h4 className="text-[10px] font-bold uppercase text-gray-500 mb-2">Trail Points:</h4>
        <ul className="text-xs font-semibold space-y-1.5">
          <li>1. Virupaksha</li>
          <li>2. Someshwara Matha</li>
          <li>3. Barkur Jain...</li>
          <li className="text-terracotta">4. More...</li>
        </ul>
      </div>

      {/* Floating Action Button */}
      <div className="absolute top-24 right-4 z-10 flex flex-col gap-2">
        <button className="w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center text-navy"><Navigation size={18} /></button>
        <button className="w-10 h-10 bg-white rounded-full shadow-md flex flex-col items-center justify-center text-navy font-bold leading-none"><span className="text-[10px]">+</span><span className="text-[10px] mt-[-2px]">-</span></button>
      </div>

      {/* Bottom Info Cards */}
      <div className="absolute bottom-6 left-0 w-full px-4 z-20 flex gap-3 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-2">
        {/* Card 1 */}
        <div className="bg-white rounded-xl shadow-lg p-4 min-w-[260px] snap-center shrink-0 border border-gray-100">
          <h3 className="font-serif font-bold text-lg leading-tight mb-1">Udupi Sri Krishna<br/>Matha (14th c.)</h3>
          <p className="text-xs text-gray-600 mb-3 line-clamp-2">
            A living temple complex known for its wooden chariot tradition and detailed carvings.
          </p>
          <div className="flex items-center text-[10px] font-semibold text-teal bg-teal/10 px-2 py-1 rounded w-fit">
            12 min walk · local cafés marked
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-xl shadow-lg p-4 min-w-[260px] snap-center shrink-0 border border-gray-100">
          <h3 className="font-serif font-bold text-lg leading-tight mb-1">Barkur Temple Cluster<br/>(Jain/Shiva)</h3>
          <p className="text-xs text-gray-600 mb-3 line-clamp-2">
            A historic town of a thousand temples, spanning Jain and Shaiva traditions.
          </p>
          <div className="flex items-center text-[10px] font-semibold text-terracotta bg-terracotta/10 px-2 py-1 rounded w-fit">
            Route passes a historic well
          </div>
        </div>
      </div>
    </div>
  );
}
