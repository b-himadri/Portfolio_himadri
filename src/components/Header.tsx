import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-md py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <a href="#hero" className="text-xl font-bold text-yellow-200 transition-colors hover:text-yellow-400">
            Portfolio
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#hero" className="text-gray-800 hover:text-yellow-400 transition-colors">Home</a>
            <a href="#skills" className="text-gray-800 hover:text-yellow-400 transition-colors">Skills</a>
            <a href="#experience" className="text-gray-800 hover:text-yellow-400 transition-colors">Experience</a>
            <a href="#projects" className="text-gray-800 hover:text-yellow-400 transition-colors">Projects</a>
            <a href="#certificates" className="text-gray-800 hover:text-yellow-400 transition-colors">Certificates</a>
            <a href="#competitions" className="text-gray-800 hover:text-yellow-400 transition-colors">Competitions</a>
            <a href="#hobbies" className="text-gray-800 hover:text-yellow-400 transition-colors">Hobbies</a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-800 focus:outline-none" 
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white absolute top-full left-0 right-0 shadow-md">
            <nav className="flex flex-col py-4">
              <a 
                href="#hero" 
                className="px-4 py-2 text-gray-800 hover:bg-yellow-50 hover:text-yellow-400"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </a>
              <a 
                href="#skills" 
                className="px-4 py-2 text-gray-800 hover:bg-yellow-50 hover:text-yellow-400"
                onClick={() => setIsMenuOpen(false)}
              >
                Skills
              </a>
              <a 
                href="#experience" 
                className="px-4 py-2 text-gray-800 hover:bg-yellow-50 hover:text-yellow-400"
                onClick={() => setIsMenuOpen(false)}
              >
                Experience
              </a>
              <a 
                href="#projects" 
                className="px-4 py-2 text-gray-800 hover:bg-yellow-50 hover:text-yellow-400"
                onClick={() => setIsMenuOpen(false)}
              >
                Projects
              </a>
              <a 
                href="#certificates" 
                className="px-4 py-2 text-gray-800 hover:bg-yellow-50 hover:text-yellow-400"
                onClick={() => setIsMenuOpen(false)}
              >
                Certificates
              </a>
              <a 
                href="#competitions" 
                className="px-4 py-2 text-gray-800 hover:bg-yellow-50 hover:text-yellow-400"
                onClick={() => setIsMenuOpen(false)}
              >
                Competitions
              </a>
              <a 
                href="#hobbies" 
                className="px-4 py-2 text-gray-800 hover:bg-yellow-50 hover:text-yellow-400"
                onClick={() => setIsMenuOpen(false)}
              >
                Hobbies
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;