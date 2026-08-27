import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Coffee, Bed, Bus, Star, MapPin } from 'lucide-react';
import PlaceholderImage from '../components/PlaceholderImage';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../utils/translations';

export default function Amenities() {
  const { type } = useParams();
  const navigate = useNavigate();
  const { lang } = useLanguage();
  const t = translations[lang];

  const getData = () => {
    switch(type) {
      case 'food':
        return {
          title: t.localFood || 'Local Food',
          icon: <Coffee size={24} className="text-terracotta" />,
          items: [
            { name: 'Udupi Krishna Bhavan', desc: 'Authentic South Indian thali and filter coffee', rating: '4.8', dist: '0.2 km', img: '/assets/img/food1.jpg' },
            { name: 'Heritage Café', desc: 'Quick bites and snacks near the temple complex', rating: '4.5', dist: '0.5 km', img: '/assets/img/food2.jpg' },
            { name: 'Temple Street Vendors', desc: 'Fresh local sweets, churmuri, and juices', rating: '4.9', dist: '0.1 km', img: '/assets/img/food3.jpg' },
          ]
        };
      case 'stay':
        return {
          title: t.heritageStays || 'Heritage Stays',
          icon: <Bed size={24} className="text-teal" />,
          items: [
            { name: 'Royal Hoysala Residency', desc: 'Traditional architecture with modern amenities', rating: '4.7', dist: '1.2 km', img: '/assets/img/stay1.jpg' },
            { name: 'Temple View Inn', desc: 'Budget-friendly stay with a direct view of the gopuram', rating: '4.2', dist: '0.3 km', img: '/assets/img/stay2.jpg' },
            { name: 'Agraharam Homestay', desc: 'Experience local culture and home-cooked meals', rating: '4.9', dist: '0.8 km', img: '/assets/img/stay3.jpg' },
          ]
        };
      case 'transport':
        return {
          title: t.transport || 'Transport',
          icon: <Bus size={24} className="text-blue-600" />,
          items: [
            { name: 'Central Bus Stand', desc: 'Buses to major cities every 30 mins', rating: '-', dist: '1.5 km', img: '/assets/img/trans1.jpg' },
            { name: 'Auto Stand (East Gate)', desc: 'Pre-paid autos for local sightseeing', rating: '-', dist: '0.1 km', img: '/assets/img/trans2.jpg' },
            { name: 'Railway Station', desc: 'Connecting trains to Bangalore and Mysore', rating: '-', dist: '3.0 km', img: '/assets/img/trans3.jpg' },
          ]
        };
      default:
        return { title: 'Amenities', icon: null, items: [] };
    }
  };

  const data = getData();

  return (
    <div className="min-h-[100dvh] bg-parchment flex flex-col pb-6">
      {/* Header */}
      <div className="p-4 pt-6 flex items-center gap-4 bg-white shadow-sm sticky top-0 z-20">
        <button onClick={() => navigate(-1)} className="p-2 -ml-2 text-navy hover:bg-gray-100 rounded-full transition-colors">
          <ArrowLeft size={24} />
        </button>
        <div className="flex items-center gap-2">
          {data.icon}
          <h1 className="font-serif text-xl font-bold">{data.title}</h1>
        </div>
      </div>

      {/* List */}
      <div className="p-4 space-y-4">
        {data.items.map((item, i) => (
          <div key={i} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden flex flex-col hover:shadow-md transition-shadow">
            <div className="h-32 w-full">
              <PlaceholderImage src={item.img} alt={item.name} className="w-full h-full object-cover" />
            </div>
            <div className="p-4">
              <div className="flex justify-between items-start mb-1">
                <h3 className="font-bold text-navy text-base leading-tight">{item.name}</h3>
                {item.rating !== '-' && (
                  <div className="flex items-center gap-1 bg-orange-50 px-2 py-1 rounded text-[10px] font-bold text-terracotta">
                    <Star size={10} fill="currentColor" /> {item.rating}
                  </div>
                )}
              </div>
              <p className="text-xs text-gray-500 mb-3">{item.desc}</p>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1 text-[10px] font-bold text-teal">
                  <MapPin size={12} /> {item.dist}
                </div>
                <button className="bg-navy text-white px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider hover:bg-gray-800 transition-colors">
                  Directions
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
