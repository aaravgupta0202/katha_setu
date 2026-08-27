import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Upload, MapPin, Info } from 'lucide-react';
import PlaceholderImage from '../components/PlaceholderImage';

export default function TagFeature() {
  const navigate = useNavigate();
  const [showToast, setShowToast] = useState(false);
  const fileInputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowToast(true);
    setTimeout(() => {
      navigate('/');
    }, 2000);
  };

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="min-h-screen bg-parchment flex flex-col relative">
      {/* Toast */}
      <div className={`absolute top-20 left-1/2 -translate-x-1/2 z-50 w-11/12 max-w-[340px] bg-teal text-white px-4 py-3 rounded-lg shadow-lg flex items-center gap-3 transition-all duration-300 ${showToast ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}`}>
        <Info size={20} />
        <span className="text-sm font-medium">Submitted! You'll be notified once it's verified.</span>
      </div>

      {/* Header */}
      <div className="p-4 pt-6 flex items-center gap-4 bg-parchment/90 backdrop-blur-sm sticky top-0 z-20">
        <button onClick={() => navigate(-1)} className="p-2 -ml-2 text-navy hover:bg-gray-200/50 rounded-full transition-colors">
          <ArrowLeft size={24} />
        </button>
        <h1 className="font-serif text-xl font-bold">Tagging New Feature</h1>
      </div>

      <div className="px-5 pb-8 flex-1">
        
        {/* Thumbnails Row */}
        <div className="flex gap-2 mb-4">
          {[1, 2, 3].map(i => (
            <div key={i} className="w-16 h-16 rounded-lg overflow-hidden shrink-0">
              <PlaceholderImage src={`/assets/img/thumb-${i}.jpg`} alt="Thumbnail" className="w-full h-full object-cover" iconSize={16} />
            </div>
          ))}
          <input 
            type="file" 
            multiple 
            accept="image/*" 
            className="hidden" 
            ref={fileInputRef} 
          />
          <button 
            type="button"
            onClick={handleUploadClick}
            className="w-16 h-16 rounded-lg border-2 border-dashed border-gray-300 flex flex-col items-center justify-center text-gray-500 shrink-0 hover:border-terracotta hover:text-terracotta hover:bg-orange-50 transition-colors"
          >
            <Upload size={16} className="mb-1" />
            <span className="text-[9px] font-semibold text-center leading-tight">Multi-<br/>upload</span>
          </button>
        </div>

        {/* Large Preview */}
        <div className="w-full h-48 rounded-xl overflow-hidden mb-6 shadow-sm border border-gray-200">
          <PlaceholderImage src="/assets/img/scan-live.jpg" alt="Preview" className="w-full h-full object-cover" iconSize={40} />
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-2">What do you see?</label>
            <input 
              type="text" 
              placeholder="e.g. Broken pillar with floral patterns" 
              className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-terracotta transition-all"
            />
          </div>

          <div>
            <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-2">Known name or story (optional)</label>
            <textarea 
              rows="3" 
              placeholder="Any specific details you know..." 
              className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-terracotta transition-all resize-none"
            ></textarea>
          </div>

          <div>
            <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-2">Verification priority</label>
            <select className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-terracotta appearance-none transition-all">
              <option>Standard</option>
              <option>Urgent</option>
              <option>Low</option>
            </select>
          </div>

          <div>
            <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-2">Location (GPS verified: 13.34°N, 74.75°E)</label>
            <div className="w-full bg-gray-100 border border-gray-200 rounded-lg px-4 py-3 flex items-center justify-between opacity-80">
              <span className="text-sm font-medium text-gray-600">Barkur cluster (Shiva temples)</span>
              <MapPin size={16} className="text-gray-500" />
            </div>
          </div>

          <div className="pt-2 pb-6">
            <div className="flex items-start gap-2 mb-4">
              <Info size={14} className="text-teal mt-0.5 shrink-0" />
              <p className="text-xs text-gray-500 font-medium leading-tight">
                A local moderator typically verifies new tags within 48 hours.
              </p>
            </div>
            <button 
              type="submit"
              className="w-full bg-terracotta hover:bg-orange-600 text-white font-semibold py-3 rounded-xl transition-colors shadow-lg"
            >
              Submit for Expert Verification
            </button>
          </div>
        </form>

      </div>
    </div>
  );
}
