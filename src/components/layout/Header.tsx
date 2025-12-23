import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

interface HeaderProps {
  currentPath?: string;
}

export function Header({ currentPath }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const activePath = currentPath || location.pathname;
  
  // Determine if we're on pages with hero sections (home or about)
  const isHomePage = activePath === '/';
  const isAboutPage = activePath === '/about';
  const hasHeroSection = isHomePage || isAboutPage;
  const textColorClass = hasHeroSection ? 'text-white' : 'text-gray-900';
  const hoverColorClass = hasHeroSection ? 'hover:text-white/90' : 'hover:text-gray-900';
  const borderClass = hasHeroSection ? 'border-white' : 'border-gray-900';

  const isActive = (path: string) => {
    if (path === '/' && activePath === '/') return true;
    if (path !== '/' && activePath.startsWith(path)) return true;
    return false;
  };

  return (
    <header className="absolute top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img 
                src="/logo.png" 
                alt="WEDA Logo" 
                className="h-10 w-10 object-contain mr-2"
              />
              <h1 className={`text-2xl font-bold ${textColorClass}`}>WEDA</h1>
            </Link>
          </div>

          <nav className="hidden md:flex space-x-8">
            <Link 
              to="/" 
              className={`${textColorClass} ${hoverColorClass} px-3 py-2 text-base font-medium border-b-2 transition-all ${
                isActive('/') ? borderClass : 'border-transparent'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className={`${textColorClass} ${hoverColorClass} px-3 py-2 text-base font-medium border-b-2 transition-all ${
                isActive('/about') ? borderClass : 'border-transparent'
              }`}
            >
              About
            </Link>
            <Link 
              to="/gallery" 
              className={`${textColorClass} ${hoverColorClass} px-3 py-2 text-base font-medium border-b-2 transition-all ${
                isActive('/gallery') ? borderClass : 'border-transparent'
              }`}
            >
              Gallery
            </Link>
            <Link 
              to="/contact" 
              className={`${textColorClass} ${hoverColorClass} px-3 py-2 text-base font-medium border-b-2 transition-all ${
                isActive('/contact') ? borderClass : 'border-transparent'
              }`}
            >
              Contact
            </Link>
          </nav>

          <div className="hidden md:flex">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-lg bg-[#2E4A9F] text-white px-5 py-2 text-base font-semibold hover:bg-[#1E3A7F] transition-colors duration-300"
            >
              Register
            </Link>
          </div>

          <button
            type="button"
            className={`md:hidden inline-flex items-center justify-center p-2 ${textColorClass} ${hoverColorClass}`}
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen((v) => !v)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden fixed inset-0 z-50 bg-gradient-to-br from-purple-600 via-blue-600 to-cyan-600">
            {/* Overlay Background */}
            <div className="absolute inset-0 bg-black bg-opacity-30"></div>
            
            {/* Menu Content */}
            <div className="relative h-full flex flex-col">
              {/* Header */}
              <div className="flex justify-between items-center p-4 border-b border-white/20">
                <Link to="/" className="flex items-center" onClick={() => setIsMobileMenuOpen(false)}>
                  <img 
                    src="/logo.png" 
                    alt="WEDA Logo" 
                    className="h-10 w-10 object-contain mr-2"
                  />
                  <h1 className="text-2xl font-bold text-white">WEDA</h1>
                </Link>
                <button
                  type="button"
                  className="inline-flex items-center justify-center p-2 text-white hover:text-white/90"
                  aria-label="Close menu"
                  aria-expanded="true"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
              
              {/* Navigation Links */}
              <div className="flex-1 flex flex-col justify-center items-center space-y-8 px-4">
                <Link
                  to="/"
                  className={`block text-2xl font-medium text-white hover:text-white/90 transition-all transform hover:scale-105 ${
                    isActive('/') ? 'text-white drop-shadow-lg' : ''
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Home
                </Link>
                <Link
                  to="/about"
                  className={`block text-2xl font-medium text-white hover:text-white/90 transition-all transform hover:scale-105 ${
                    isActive('/about') ? 'text-white drop-shadow-lg' : ''
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  About
                </Link>
                <Link
                  to="/gallery"
                  className={`block text-2xl font-medium text-white hover:text-white/90 transition-all transform hover:scale-105 ${
                    isActive('/gallery') ? 'text-white drop-shadow-lg' : ''
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Gallery
                </Link>
                <Link
                  to="/contact"
                  className={`block text-2xl font-medium text-white hover:text-white/90 transition-all transform hover:scale-105 ${
                    isActive('/contact') ? 'text-white drop-shadow-lg' : ''
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center rounded-lg bg-[#2E4A9F] text-white px-6 py-2.5 text-lg font-semibold mt-8 hover:bg-[#1E3A7F] transition-colors duration-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Register
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
