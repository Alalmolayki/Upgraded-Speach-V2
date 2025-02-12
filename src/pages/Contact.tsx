import React from 'react';
import SectionTitle from '../components/ui/SectionTitle';
import { Instagram, Twitter, Mail, Globe, MapPin, Phone } from 'lucide-react';

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
                <span>Okul Adresi</span>
              </div>
              
              <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-3 text-gray-600">
                <Phone className="flex-shrink-0" size={20} />
                <span>Okul Telefon Numarası</span>
              </div>
              
              <a href="mailto:school@example.com" 
                 className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-3 text-gray-600 hover:text-blue-600 transition">
                <Mail className="flex-shrink-0" size={20} />
                <span>school@example.com</span>
              </a>
              
              <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-3 text-gray-600">
                <Globe className="flex-shrink-0" size={20} />
                <a href="#" className="text-gray-600 hover:text-blue-600 transition">
                  www.example.com
                </a>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6 sm:p-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">SPEACH İletişim</h3>
            
            <div className="space-y-4">
              <a href="mailto:speachsince2024@gmail.com" 
                 className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-3 text-gray-600 hover:text-blue-600 transition">
                <Mail className="flex-shrink-0" size={20} />
                <span>speachsince2024@gmail.com</span>
              </a>
              
              <a href="#" className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-3 text-gray-600 hover:text-blue-600 transition">
                <Instagram className="flex-shrink-0" size={20} />
                <span>@speach2025</span>
              </a>
              
              <a href="#" className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-3 text-gray-600 hover:text-blue-600 transition">
                <Twitter className="flex-shrink-0" size={20} />
                <span>@speach2025</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;