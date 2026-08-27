import { Lock, CheckCircle2, AlertCircle, Compass, Map, BookOpen } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import PlaceholderImage from '../components/PlaceholderImage';

export default function Profile() {
  const navigate = useNavigate();
  const discoveries = [
    {
      title: 'Yali Guardian',
      desc: 'Vijayanagara-style guardian figure at temple entrance',
      img: '/assets/img/yali-guardian.jpg',
      status: 'Verified (ASI)',
      verified: true
    },
    {
      title: 'Dancing Ganesha',
      desc: 'A rare depiction found in coastal Karnataka temple carvings',
      img: '/assets/img/dancing-ganesha.jpg',
      status: 'Verified (ASI)',
      verified: true
    },
    {
      title: 'Lotus Medallion',
      desc: 'Recurring decorative motif across pillar bases',
      img: '/assets/img/lotus-medallion.jpg',
      status: 'In Progress',
      verified: false
    }
  ];

  return (
    <div className="min-h-screen bg-parchment p-5 pb-8 space-y-6">
      <h1 className="font-serif text-2xl font-bold text-center mt-2 mb-6">My Heritage Passport</h1>

      {/* Progress Card */}
      <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
        <h2 className="text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-2">Aankhi R. · Level 7 Heritage Scholar · 64% to next level</h2>
        <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
          <div className="h-full bg-terracotta rounded-full w-[64%]"></div>
        </div>
      </div>

      {/* Badges */}
      <div className="flex justify-between items-start px-2">
        <div className="flex flex-col items-center gap-2">
          <div className="w-14 h-14 rounded-full bg-orange-100 flex items-center justify-center border-2 border-terracotta shadow-sm">
            <Compass size={28} className="text-terracotta" />
          </div>
          <span className="text-[9px] font-bold uppercase text-center leading-tight">Katha<br/>Explorer</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <div className="w-14 h-14 rounded-full bg-red-100 flex items-center justify-center border-2 border-brick shadow-sm">
            <Map size={28} className="text-brick" />
          </div>
          <span className="text-[9px] font-bold uppercase text-center leading-tight">Site<br/>Discoverer</span>
        </div>
        <div className="flex flex-col items-center gap-2 opacity-50 grayscale">
          <div className="w-14 h-14 rounded-full bg-gray-200 flex items-center justify-center border-2 border-gray-300 relative">
            <Lock size={20} className="text-gray-500" />
          </div>
          <span className="text-[9px] font-bold uppercase text-center leading-tight text-gray-500">Culture<br/>Champion</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <div className="w-14 h-14 rounded-full bg-teal/20 flex items-center justify-center border-2 border-teal shadow-sm">
            <BookOpen size={28} className="text-teal" />
          </div>
          <span className="text-[9px] font-bold uppercase text-center leading-tight">History<br/>Sage</span>
        </div>
      </div>

      {/* Recent Achievements */}
      <div>
        <h3 className="font-serif font-bold text-lg uppercase tracking-wide text-xs mb-3">Recent Achievements</h3>
        <div className="space-y-3">
          <div className="flex items-center gap-3 bg-white p-3 rounded-lg shadow-sm border border-gray-100">
            <div className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden shrink-0">
              <PlaceholderImage src="/assets/img/avatar2.jpg" alt="User" className="w-full h-full" />
            </div>
            <p className="text-xs font-medium"><span className="font-bold">Krishnendu</span> verified a myth · <span className="text-gray-500">23 May 2025</span></p>
          </div>
          <div className="flex items-center gap-3 bg-white p-3 rounded-lg shadow-sm border border-gray-100">
            <div className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden shrink-0">
              <PlaceholderImage src="/assets/img/avatar3.jpg" alt="User" className="w-full h-full" />
            </div>
            <p className="text-xs font-medium"><span className="font-bold">Aarav Gupta</span> flagged 5 new items · <span className="text-gray-500">21 May 2025</span></p>
          </div>
        </div>
      </div>

      {/* Discoveries List */}
      <div>
        <div className="flex items-center justify-between mb-3 border-b border-gray-200 pb-2">
          <h3 className="font-serif font-bold text-lg uppercase tracking-wide text-xs">Discovery</h3>
          <span className="text-[10px] font-bold text-gray-500 uppercase">Discovery Date</span>
        </div>
        
        <div className="space-y-3">
          {discoveries.map((item, i) => (
            <div 
              key={i} 
              onClick={() => navigate('/story')}
              className="flex gap-3 bg-white p-3 rounded-xl shadow-sm border border-gray-100 items-center cursor-pointer hover:bg-gray-50 transition-colors transform hover:scale-[1.02] active:scale-[0.98]"
            >
              <div className="w-16 h-16 rounded-lg overflow-hidden shrink-0">
                <PlaceholderImage src={item.img} alt={item.title} className="w-full h-full object-cover" />
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-sm leading-tight flex items-center gap-1">
                  {item.title} 
                  {item.verified && <span className="text-[9px] font-normal text-gray-500 bg-gray-100 px-1 rounded">(Verif. ASI)</span>}
                </h4>
                <p className="text-[10px] text-gray-500 leading-snug mt-1 mb-1.5 line-clamp-2">{item.desc}</p>
                <div className="flex items-center gap-1 text-[9px] font-bold uppercase">
                  <span className="text-gray-400">Verification Status:</span> 
                  {item.verified ? (
                    <span className="text-green-600 flex items-center gap-0.5"><CheckCircle2 size={10} /> ASI</span>
                  ) : (
                    <span className="text-terracotta flex items-center gap-0.5"><AlertCircle size={10} /> In Progress</span>
                  )}
                </div>
              </div>
              <div className="text-gray-300">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
