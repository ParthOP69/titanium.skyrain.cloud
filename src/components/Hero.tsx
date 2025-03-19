import { Download, Lock, Shield } from 'lucide-react';
import { IMAGES } from '../assets';
import ImageComponent from './ImageComponent';

const Hero = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Minecraft-themed background */}
      <div className="absolute inset-0 opacity-15 filter blur-[2px]">
        <ImageComponent 
          src={IMAGES.MINECRAFT_LANDSCAPE}
          alt="Minecraft landscape"
          style={{ 
            backgroundAttachment: 'fixed',
            objectFit: 'cover',
            width: '100%',
            height: '100%'
          }}
        />
      </div>
      
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-900/95 to-gray-800"></div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <div className="flex items-center space-x-2 mb-4">
              <Shield className="text-green-400" size={28} />
              <Lock className="text-green-400" size={24} />
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
              <span className="text-white">Titanium</span>
              <span className="text-green-400">Security</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Ultimate Authentication Plugin for Your Minecraft Server
            </p>
            <a
              href="https://modrinth.com/plugin/titaniumsecurity"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
            >
              <Download className="mr-2" size={20} />
              Download Now
            </a>
          </div>
          
          <div className="md:w-1/2 flex justify-center">
            <div className="w-64 h-64 relative">
              <div className="absolute inset-0 bg-green-500 rounded-lg transform rotate-3 opacity-20"></div>
              <div className="absolute inset-0 bg-green-500 rounded-lg transform -rotate-3 opacity-20"></div>
              <div className="absolute inset-0 bg-gray-800 rounded-lg border-2 border-green-500 flex items-center justify-center p-6">
                <div className="absolute inset-0 opacity-30">
                  <ImageComponent 
                    src={IMAGES.DIAMOND_ORE}
                    alt="Diamond ore pattern"
                    style={{ 
                      backgroundSize: '64px',
                      backgroundRepeat: 'repeat',
                      backgroundBlendMode: 'overlay',
                      backgroundColor: 'rgba(17, 24, 39, 0.95)'
                    }}
                  />
                </div>
                <div className="text-center relative z-10">
                  <Shield className="mx-auto text-green-400 mb-4" size={60} />
                  <h3 className="text-xl font-bold mb-2">Secure Your Server</h3>
                  <p className="text-gray-300 text-sm">
                    Advanced authentication for Minecraft servers
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
