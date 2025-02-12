import React from 'react';
import { Instagram, Twitter } from 'lucide-react';

interface FooterLinkProps {
  href: string;
  onClick: (page: string) => void;
  pageName: string;
  children: React.ReactNode;
}

const FooterLink: React.FC<FooterLinkProps> = ({ href, onClick, pageName, children }) => (
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
              <div className="w-24 h-16 bg-gray-800 flex items-center justify-center rounded">
                <span className="text-gray-400 text-xs">Okul Logo</span>
              </div>
              <div className="w-24 h-16 bg-gray-800 flex items-center justify-center rounded">
                <span className="text-gray-400 text-xs">SPEACH Logo</span>
              </div>
            </div>
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
              <a href="#" className="flex items-center justify-center md:justify-start space-x-3 text-gray-400 hover:text-white transition">
                <Instagram size={20} />
                <span>@speach2025</span>
              </a>
              <a href="#" className="flex items-center justify-center md:justify-start space-x-3 text-gray-400 hover:text-white transition">
                <Twitter size={20} />
                <span>@speach2025</span>
              </a>
              <a href="mailto:school@example.com" 
                 className="flex items-center justify-center md:justify-start text-gray-400 hover:text-white transition">
                school@example.com
              </a>
              <a href="mailto:speachsince2024@gmail.com" 
                 className="flex items-center justify-center md:justify-start text-gray-400 hover:text-white transition">
                speachsince2024@gmail.com
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