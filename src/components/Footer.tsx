import React from 'react';
import { Instagram, Twitter } from 'lucide-react';
import logo from "/public/image/Speach_logo_beyaz.png";
import school_logo from "/public/image/15tmz.png";


interface FooterLinkProps {
  href: string;
  onClick: (page: string) => void;
  pageName: string;
  children: React.ReactNode;
}

const FooterLink: React.FC<FooterLinkProps> = ({ onClick, pageName, children }) => (
  <li>
    <button
      onClick={() => onClick(pageName)}
      className="text-gray-400 hover:text-white transition w-full text-left"
    >
      {children}
    </button>
  </li>
);

const Footer = ({ onPageChange }: { onPageChange: (page: string) => void }) => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Logo Section */}
          <div className="flex flex-col items-center md:items-start">
            <div className="flex space-x-4 mb-4">
              <div className="w-28 h-20 bg-gray-800 flex items-center justify-center rounded">
                <span className="text-gray-400 text-xs"><img src={school_logo} alt="" /></span>
              </div>
              <div className="w-28 h-20 bg-gray-800 flex items-center justify-center rounded">
                <span className="text-gray-400 text-xs"><img src={logo} alt="" className='w-full h-full object-contain' /></span>
              </div>
            </div>
            <span>SPEACH, 15 Temmuz Şehitleri AİHL'nin bir oluşumudur.</span>
          </div>
          
          {/* Quick Links Section */}
          <div className="text-center md:text-left">
            <h4 className="text-lg font-semibold mb-4">Hızlı Bağlantılar</h4>
            <ul className="space-y-2">
              <FooterLink href="#" onClick={onPageChange} pageName="home">
                Anasayfa
              </FooterLink>
              <FooterLink href="#" onClick={onPageChange} pageName="application">
                Başvuru
              </FooterLink>
              <FooterLink href="#" onClick={onPageChange} pageName="announcements">
                Duyurular
              </FooterLink>
              <FooterLink href="#" onClick={onPageChange} pageName="about">
                Hakkımızda
              </FooterLink>
              <FooterLink href="#" onClick={onPageChange} pageName="contact">
                İletişim
              </FooterLink>
              <FooterLink href="#" onClick={onPageChange} pageName="thanks">
                Teşekkürler
              </FooterLink>
            </ul>
          </div>
          
          {/* Social Media and Contact Section */}
          <div className="text-center md:text-left">
            <h4 className="text-lg font-semibold mb-4">Sosyal Medya ve İletişim</h4>
            <div className="space-y-4">
              <a href="https://www.instagram.com/speach_25?igsh=cTk1dTQzenV5MGI2" target='_blank' className="flex items-center justify-center md:justify-start space-x-3 text-gray-400 hover:text-white transition">
                <Instagram size={20} />
                <span>@speach_25</span>
              </a>
              <a href="https://x.com/SPEACH_25?t=pD9bRtLR5wX77xKGn-g-bw&s=08" target='_blank' className="flex items-center justify-center md:justify-start space-x-3 text-gray-400 hover:text-white transition">
                <Twitter size={20} />
                <span>@SPEACH_25</span>
              </a>
              <a href="mailto:info@aihl15temmuz.k12.tr" 
                 className="flex items-center justify-center md:justify-start text-gray-400 hover:text-white transition">
                info@aihl15temmuz.k12.tr
              </a>
              <a href="mailto:speachsince2025@gmail.com" 
                 className="flex items-center justify-center md:justify-start text-gray-400 hover:text-white transition">
                speachsince2025@gmail.com
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 SPEACH. Tüm hakları saklıdır.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;