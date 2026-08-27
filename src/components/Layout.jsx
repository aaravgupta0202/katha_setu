import { Outlet, useLocation } from 'react-router-dom';
import BottomTabs from './BottomTabs';

export default function Layout() {
  const location = useLocation();
  const hideTabsOn = ['/scan', '/story', '/tag'];
  const showTabs = !hideTabsOn.includes(location.pathname);

  return (
    <div className="min-h-[100dvh] bg-gray-100 flex justify-center overflow-hidden">
      <div className="w-full max-w-[390px] h-[100dvh] bg-parchment relative shadow-2xl flex flex-col overflow-hidden">
        <div className={`flex-1 overflow-y-auto overflow-x-hidden scrollbar-hide ${showTabs ? 'pb-[72px]' : ''}`}>
          <Outlet />
        </div>
        {showTabs && <BottomTabs />}
      </div>
    </div>
  );
}
