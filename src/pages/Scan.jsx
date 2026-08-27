import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Flashlight } from 'lucide-react';
import PlaceholderImage from '../components/PlaceholderImage';

export default function Scan() {
  const navigate = useNavigate();
  const [showBox, setShowBox] = useState(false);
  const [progress, setProgress] = useState(0);
  const [showStory, setShowStory] = useState(false);

  useEffect(() => {
    // Show bounding box after 1.2s
    const boxTimer = setTimeout(() => setShowBox(true), 1200);
    
    // Start progress bar animation after box appears
    const progressTimer = setTimeout(() => {
      let currentProgress = 0;
      const interval = setInterval(() => {
        currentProgress += 5;
        setProgress(currentProgress);
        if (currentProgress >= 100) {
          clearInterval(interval);
          setShowStory(true);
        }
      }, 75); // 1.5s total (1500 / 20 = 75)
    }, 1200);

    return () => {
      clearTimeout(boxTimer);
      clearTimeout(progressTimer);
    };
  }, []);

  return (
    <div className="relative h-full bg-black overflow-hidden flex flex-col">
      {/* Background Camera Image */}
      <div className="absolute inset-0 z-0">
        <PlaceholderImage src="/assets/img/scan-live.jpg" alt="Live Camera" className="w-full h-full object-cover" iconSize={64} />
      </div>

      {/* Top Bar */}
      <div className="relative z-10 p-4 pt-6 flex items-center justify-between">
        <button onClick={() => navigate(-1)} className="p-2 bg-black/40 rounded-full text-white backdrop-blur-sm">
          <ArrowLeft size={24} />
        </button>
      </div>

      {/* Center AR Overlay */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center p-6">
        <div className={`transition-all duration-500 ease-out flex flex-col items-center ${showBox ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <div className="bg-teal text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-2 shadow-lg">
            Sub-feature: Dwarapala (Guardian Demon)
          </div>
          {/* Bounding Box */}
          <div className="w-[280px] h-[340px] border-4 border-teal rounded-2xl relative shadow-[0_0_15px_rgba(14,140,127,0.5)]">
            <div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-md rounded-lg p-2 text-white text-[10px] leading-tight">
              <div>Scan accuracy: <span className="font-semibold text-green-400">94%</span></div>
              <div>Feature size: 1.2m</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Area */}
      <div className="relative z-10 p-6 pb-8 flex gap-3 items-end">
        <div className="flex-1 bg-navy/90 backdrop-blur-md rounded-xl p-4 shadow-xl border border-gray-700 min-h-[72px] flex flex-col justify-center">
          {!showStory ? (
            <div>
              <p className="text-white text-[10px] font-semibold uppercase tracking-wide mb-3">
                Matching feature with 14,000+ records…
              </p>
              <div className="h-1 bg-gray-700 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-teal transition-all duration-75 ease-linear"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
            </div>
          ) : (
            <button 
              onClick={() => navigate('/story')}
              className="w-full bg-terracotta hover:bg-orange-600 text-white text-sm font-semibold py-2.5 rounded-lg transition-colors shadow-lg"
            >
              View Story
            </button>
          )}
        </div>
        
        {/* Flashlight button */}
        <button className="h-[72px] w-[56px] flex items-center justify-center bg-black/50 text-white rounded-xl backdrop-blur-md border border-gray-600 shrink-0">
          <Flashlight size={20} />
        </button>
      </div>
    </div>
  );
}
