import React from 'react';
import background from "/public/image/background.png";


interface HeroProps {
  onPageChange?: (page: string) => void;
}

const Hero: React.FC<HeroProps> = ({ onPageChange }) => {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-white">
      <div className="absolute inset-0 z-0">
        <img
          src={background}
          alt="Conference Background"
          className="w-full h-full object-cover opacity-20"
        />
      </div>
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl md:text-7xl font-bold text-blue-900 mb-4">
          SPEACH - 2025
        </h1>
        <p className="text-xl md:text-2xl text-gray-700 mb-8">
          9-13 Haziran | Speak For Change Humanity
        </p>
        <div className="space-y-6">
          <button
            onClick={() => onPageChange?.('application')}
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition transform hover:scale-105"
          >
            Hemen Başvur
          </button>
          <div>
            <p className="text-gray-700 max-w-2xl mx-auto leading-relaxed">
              SPEACH, gençlerin hitabet ve liderlik becerilerini geliştirebilecekleri benzersiz bir hitabet yarışmasıdır.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;