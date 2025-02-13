import SectionTitle from '../components/ui/SectionTitle';
import { Instagram, Twitter, Mail, Globe, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <div className="pt-24 pb-16 bg-gradient-to-br from-blue-50 via-white to-blue-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="İletişim"
          subtitle="Bizimle İletişime Geçin"
        />
        
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <div className="bg-white rounded-lg shadow-md p-6 sm:p-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Okul Bilgileri</h3>
            
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-3 text-gray-600">
                <MapPin className="flex-shrink-0" size={20} />
                <span><a href="https://maps.app.goo.gl/exrtt3uk2Sif2trt6" target='_blank'>Yenibosna Merkez, Çobançeşme Kavşağı 1. Asena Sokak No:21, 34197 Bahçelievler/İstanbul</a></span>
              </div>
              
              
              
              <a href="mailto:info@aihl15temmuz.k12.tr" 
                 className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-3 text-gray-600 hover:text-blue-600 transition">
                <Mail className="flex-shrink-0" size={20} />
                <span>info@aihl15temmuz.k12.tr</span>
              </a>
              
              <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-3 text-gray-600">
                <Globe className="flex-shrink-0" size={20} />
                <a href="https://aihl15temmuz.k12.tr/" target='_blank' className="text-gray-600 hover:text-blue-600 transition">
                  https://aihl15temmuz.k12.tr/
                </a>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6 sm:p-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">SPEACH İletişim</h3>
            
            <div className="space-y-4">
              <a href="mailto:speachsince2025@gmail.com" 
                 className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-3 text-gray-600 hover:text-blue-600 transition">
                <Mail className="flex-shrink-0" size={20} />
                <span>speachsince2025@gmail.com</span>
              </a>
              
              <a href="https://www.instagram.com/speach_25?igsh=cTk1dTQzenV5MGI2" target='_blank' className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-3 text-gray-600 hover:text-blue-600 transition">
                <Instagram className="flex-shrink-0" size={20} />
                <span>@speach_25</span>
              </a>
              
              <a href="https://x.com/SPEACH_25?t=pD9bRtLR5wX77xKGn-g-bw&s=08" target='_blank' className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-3 text-gray-600 hover:text-blue-600 transition">
                <Twitter className="flex-shrink-0" size={20} />
                <span>@SPEACH_25</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;