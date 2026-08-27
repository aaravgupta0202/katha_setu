import { Outlet, useLocation } from 'react-router-dom';
import BottomTabs from './BottomTabs';

export default function Layout() {
  const location = useLocation();
  const hideTabsOn = ['/scan', '/story', '/tag'];
  const showTabs = !hideTabsOn.includes(location.pathname);

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center">
      <div className="w-full max-w-[390px] min-h-screen bg-parchment relative shadow-2xl flex flex-col">
        <div className="flex-1 overflow-y-auto overflow-x-hidden pb-20 scrollbar-hide">
          <Outlet />
        </div>
        {showTabs && <BottomTabs />}
      </div>
    </div>
  );
}
