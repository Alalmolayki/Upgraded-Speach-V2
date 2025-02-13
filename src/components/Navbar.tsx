import React, { useState } from 'react';
import { Instagram, Twitter, Menu, X } from 'lucide-react';
import logo from "/public/image/Speach_logo.png";


interface NavbarProps {
  onPageChange: (page: string) => void;
  currentPage: string;
}

const NavLinks = ({ onPageChange, currentPage }: { onPageChange: (page: string) => void, currentPage: string }) => (
  <>
    <button 
      onClick={() => onPageChange('home')} 
      className={`${currentPage === 'home' ? 'text-blue-600' : 'text-gray-700'} hover:text-blue-600 transition`}
    >
      Anasayfa
    </button>
    <button 
      onClick={() => onPageChange('application')} 
      className={`${currentPage === 'application' ? 'text-blue-600' : 'text-gray-700'} hover:text-blue-600 transition`}
    >
      Başvuru
    </button>
    <button 
      onClick={() => onPageChange('announcements')} 
      className={`${currentPage === 'announcements' ? 'text-blue-600' : 'text-gray-700'} hover:text-blue-600 transition`}
    >
      Duyurular
    </button>
    <button 
      onClick={() => onPageChange('about')} 
      className={`${currentPage === 'about' ? 'text-blue-600' : 'text-gray-700'} hover:text-blue-600 transition`}
    >
      Hakkımızda
    </button>
    <button 
      onClick={() => onPageChange('contact')} 
      className={`${currentPage === 'contact' ? 'text-blue-600' : 'text-gray-700'} hover:text-blue-600 transition`}
    >
      İletişim
    </button>
    <button 
      onClick={() => onPageChange('thanks')} 
      className={`${currentPage === 'thanks' ? 'text-blue-600' : 'text-gray-700'} hover:text-blue-600 transition`}
    >
      Teşekkürler
    </button>
  </>
);

const SocialIcons = () => (
  <>
    <a href="https://www.instagram.com/speach_25?igsh=cTk1dTQzenV5MGI2" target='_blank' className="text-gray-600 hover:text-blue-600 transition">
      <Instagram size={20} />
    </a>
    <a href="https://x.com/SPEACH_25?t=pD9bRtLR5wX77xKGn-g-bw&s=08" target='_blank' className="text-gray-600 hover:text-blue-600 transition">
      <Twitter size={20} />
    </a>
  </>
);

const Navbar: React.FC<NavbarProps> = ({ onPageChange, currentPage }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 flex items-center">
            <div className="w-40 h-12 flex items-center justify-center rounded">
              {/* Logo placeholder - will be replaced with actual logo */}
              <span><img className="w-45 h-15" src={logo} alt="" /></span>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <NavLinks onPageChange={onPageChange} currentPage={currentPage} />
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <SocialIcons />
          </div>

          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-600 p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
            <div className="flex flex-col space-y-4 px-4 py-2">
              <NavLinks onPageChange={onPageChange} currentPage={currentPage} />
            </div>
            <div className="flex justify-center space-x-4 pt-4 border-t border-gray-200">
              <SocialIcons />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;