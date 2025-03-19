import { Github, User } from 'lucide-react';
import { IMAGES } from '../assets';
import ImageComponent from './ImageComponent';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 border-t border-gray-800 relative">
      {/* Stone pattern background */}
      <div className="absolute inset-0 opacity-5">
        <ImageComponent 
          src={IMAGES.STONE_PATTERN}
          alt="Stone pattern background"
          style={{
            backgroundSize: '128px',
            backgroundRepeat: 'repeat',
          }}
        />
      </div>
      
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-green-500 rounded mr-3 flex items-center justify-center">
                <span className="text-white font-bold text-xl">T</span>
              </div>
              <h3 className="text-xl font-bold text-green-400">TitaniumSecurity</h3>
            </div>
            <p className="text-gray-400 mt-2">
              Ultimate Authentication Plugin for Minecraft
            </p>
          </div>
          
          <div className="mb-6 md:mb-0">
            <div className="flex space-x-6">
              <a 
                href="https://github.com/ParthOP69/TitaniumSecurity" 
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="GitHub"
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Github size={24} />
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Discord"
              >
                <User size={24} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {currentYear} TitaniumSecurity. All rights reserved.
          </p>
          
          <ul className="flex flex-wrap justify-center gap-x-8 gap-y-2">
            <li><a href="#features" className="text-gray-400 hover:text-white text-sm transition-colors">Features</a></li>
            <li><a href="#installation" className="text-gray-400 hover:text-white text-sm transition-colors">Installation</a></li>
            <li><a href="#screenshots" className="text-gray-400 hover:text-white text-sm transition-colors">Screenshots</a></li>
            <li><a href="#support" className="text-gray-400 hover:text-white text-sm transition-colors">Support</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
