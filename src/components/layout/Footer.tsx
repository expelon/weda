import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Organization Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="/logo.png" 
                alt="WEDA Logo" 
                className="h-12 w-12 object-contain"
              />
              <h3 className="text-2xl font-bold">WEDA</h3>
            </div>
            <p className="text-gray-300 mb-4 text-sm leading-relaxed">
              North Karnataka Women Entrepreneur's Development Association (WEDA) is a non-profit organization dedicated to empowering women through entrepreneurship and economic self-reliance.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-gray-300 hover:text-white transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-gray-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300 text-sm">North Karnataka, India</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-gray-400 flex-shrink-0" />
                <a 
                  href="tel:+919448377717" 
                  className="text-gray-300 text-sm hover:text-white transition-colors"
                >
                  +91 9448377717
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MessageCircle className="h-5 w-5 text-gray-400 flex-shrink-0" />
                <a 
                  href="https://wa.me/919448377717" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 text-sm hover:text-white transition-colors"
                >
                  +91 94483 77717
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-gray-400 flex-shrink-0" />
                <a 
                  href="mailto:wedank2009@gmail.com" 
                  className="text-gray-300 text-sm break-words hover:text-white transition-colors"
                >
                  wedank2009@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-gray-400 flex-shrink-0" />
                <a 
                  href="mailto:rathi.creations.24@gmail.com" 
                  className="text-gray-300 text-sm break-words hover:text-white transition-colors"
                >
                  rathi.creations.24@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-gray-400 text-sm text-center sm:text-left">
              &copy; {new Date().getFullYear()} WEDA. All rights reserved.
            </p>
            <div className="text-center sm:text-right">
              <a
                href="https://www.cheersdigitalmarketing.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 text-sm"
              >
                Developed by www.cheersdigitalmarketing.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
