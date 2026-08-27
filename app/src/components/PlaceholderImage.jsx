import { ImageIcon } from 'lucide-react';
import { useState } from 'react';

export default function PlaceholderImage({ src, alt, className = '', iconSize = 32 }) {
  const [error, setError] = useState(false);

  if (error || !src) {
    return (
      <div className={`bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center ${className}`}>
        <ImageIcon size={iconSize} className="text-gray-400 opacity-50" />
      </div>
    );
  }

  return (
    <img 
      src={src} 
      alt={alt} 
      className={`object-cover ${className}`} 
      onError={() => setError(true)} 
    />
  );
}
