import { useState } from 'react';
import { ImageOff } from 'lucide-react';
import { IMAGES } from '../assets';

type ImageComponentProps = {
  src: string;
  alt: string;
  className?: string;
  fallback?: string;
  style?: React.CSSProperties;
};

const ImageComponent = ({ 
  src, 
  alt, 
  className = "", 
  fallback = IMAGES.FALLBACK_TEXTURE,
  style 
}: ImageComponentProps) => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  return (
    <div className={`relative ${className}`} style={style}>
      {loading && (
        <div className="absolute inset-0 bg-gray-800 animate-pulse flex items-center justify-center">
          <span className="sr-only">Loading image...</span>
        </div>
      )}
      
      {error ? (
        <div 
          className="w-full h-full bg-gray-800 flex items-center justify-center"
          style={{ minHeight: '40px' }}
        >
          <ImageOff className="text-gray-600" size={20} />
        </div>
      ) : (
        <img 
          src={src} 
          alt={alt}
          className={`w-full h-full ${loading ? 'invisible' : 'visible'}`}
          onError={() => {
            // Try the fallback image
            const img = new Image();
            img.onload = () => {
              // Fallback loaded successfully
              setLoading(false);
            };
            img.onerror = () => {
              // Fallback also failed, show error state
              setError(true);
              setLoading(false);
            };
            img.src = fallback;
          }}
          onLoad={() => setLoading(false)} 
        />
      )}
    </div>
  );
};

export default ImageComponent;
