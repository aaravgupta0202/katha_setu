import { Link, useLocation } from 'react-router-dom';
import { Home, Camera, MapPin, User } from 'lucide-react';

export default function BottomTabs() {
  const location = useLocation();

  const tabs = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'Scan', path: '/scan', icon: Camera },
    { name: 'Map', path: '/map', icon: MapPin },
    { name: 'Profile', path: '/profile', icon: User },
  ];

  return (
    <div className="absolute bottom-0 w-full bg-white border-t border-gray-200 px-6 py-3 flex justify-between items-center rounded-t-xl z-50">
      {tabs.map((tab) => {
        const isActive = location.pathname === tab.path;
        const Icon = tab.icon;
        return (
          <Link
            key={tab.name}
            to={tab.path}
            className={`flex flex-col items-center gap-1 ${
              isActive ? 'text-terracotta' : 'text-gray-400'
            }`}
          >
            <Icon size={24} className={isActive ? 'stroke-2' : 'stroke-1'} />
            <span className="text-[10px] font-medium">{tab.name}</span>
          </Link>
        );
      })}
    </div>
  );
}
