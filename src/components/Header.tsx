import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-gray-800 sticky top-0 z-50 shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <div className="w-10 h-10 bg-green-500 rounded mr-3 flex items-center justify-center">
            <span className="text-white font-bold text-xl">T</span>
          </div>
          <h1 className="text-xl font-bold text-green-400">TitaniumSecurity</h1>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            <li><a href="#features" className="hover:text-green-400 transition-colors">Features</a></li>
            <li><a href="#installation" className="hover:text-green-400 transition-colors">Installation</a></li>
            <li><a href="#screenshots" className="hover:text-green-400 transition-colors">Screenshots</a></li>
            <li><a href="#support" className="hover:text-green-400 transition-colors">Support</a></li>
          </ul>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-800 py-4">
          <ul className="flex flex-col items-center space-y-4">
            <li><a href="#features" className="hover:text-green-400 transition-colors" onClick={toggleMenu}>Features</a></li>
            <li><a href="#installation" className="hover:text-green-400 transition-colors" onClick={toggleMenu}>Installation</a></li>
            <li><a href="#screenshots" className="hover:text-green-400 transition-colors" onClick={toggleMenu}>Screenshots</a></li>
            <li><a href="#support" className="hover:text-green-400 transition-colors" onClick={toggleMenu}>Support</a></li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
