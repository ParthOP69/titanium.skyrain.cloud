import { useState } from 'react';
import { ImageOff } from 'lucide-react';
import { IMAGES, SCREENSHOTS } from '../assets';

const ImageWithFallback = ({ src, alt, className, fallback }: { 
  src: string; 
  alt: string; 
  className?: string; 
  fallback?: string; 
}) => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  return (
    <div className="relative w-full h-full">
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-800 animate-pulse">
          <span className="sr-only">Loading...</span>
        </div>
      )}
      
      {error ? (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-800 p-4">
          <ImageOff size={32} className="text-gray-500 mb-2" />
          <p className="text-gray-500 text-sm text-center">{alt}</p>
        </div>
      ) : (
        <img 
          src={src} 
          alt={alt} 
          className={className}
          onError={(e) => {
            if (fallback) {
              // Try the fallback image first
              (e.target as HTMLImageElement).src = fallback;
            } else {
              // If no fallback or fallback fails, show error state
              setError(true);
            }
            setLoading(false);
          }}
          onLoad={() => setLoading(false)}
        />
      )}
    </div>
  );
};

const Screenshots = () => {
  return (
    <section id="screenshots" className="py-20 relative">
      {/* Obsidian background pattern */}
      <div 
        className="absolute inset-0 bg-gray-900"
        style={{
          backgroundImage: `url(${IMAGES.OBSIDIAN})`,
          backgroundSize: '128px',
          backgroundRepeat: 'repeat',
          opacity: 0.07
        }}
      ></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Screenshots</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            See TitaniumSecurity in Action
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SCREENSHOTS.map((screenshot, index) => (
            <div key={index} className="bg-gray-800 rounded-lg overflow-hidden border border-gray-700 hover:border-green-500 transition-colors relative">
              {/* Diamond block pattern in the card */}
              <div 
                className="absolute inset-0 opacity-5"
                style={{
                  backgroundImage: `url(${IMAGES.DIAMOND_ORE})`,
                  backgroundSize: '64px',
                  backgroundRepeat: 'repeat',
                }}
              ></div>
              <div className="relative z-10">
                <div className="relative aspect-video overflow-hidden">
                  <ImageWithFallback 
                    src={screenshot.image} 
                    alt={screenshot.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform"
                    fallback={screenshot.fallback || IMAGES.FALLBACK_SCREENSHOT}
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold mb-2">{screenshot.title}</h3>
                  <p className="text-gray-400 text-sm">{screenshot.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Screenshots;
