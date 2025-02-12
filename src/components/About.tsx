import React from 'react';
import SectionTitle from './ui/SectionTitle';

const About = () => {
  return (
    <section id="hakkimizda" className="relative py-20 bg-gradient-to-br from-blue-50 via-white to-blue-50">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80"
          alt="Background"
          className="w-full h-full object-cover opacity-5"
        />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="SPEACH Nedir?"
          subtitle="Geleceğin Liderlerini Yetiştiren Global Platform"
        />
        
        <p className="mt-8 mb-16 text-lg text-gray-600 text-center max-w-3xl mx-auto leading-relaxed">
          SPEACH, gençlerin global platformlarda seslerini duyurabilecekleri, 
          liderlik becerilerini geliştirebilecekleri ve dünya sorunlarına 
          yenilikçi çözümler üretebilecekleri benzersiz bir konferans deneyimi sunmaktadır.
        </p>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6 bg-white/80 backdrop-blur-sm p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-blue-600">Vizyonumuz</h3>
            <p className="text-gray-600 leading-relaxed">
              Gençlerin sesini global platformlarda duyurmak ve değişimin öncüsü olmalarını sağlamak. 
              SPEACH, geleceğin liderlerini bir araya getirerek sürdürülebilir bir dünya için 
              çözümler üretmeyi hedeflemektedir.
            </p>
          </div>
          
          <div className="space-y-6 bg-white/80 backdrop-blur-sm p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-blue-600">Misyonumuz</h3>
            <p className="text-gray-600 leading-relaxed">
              Genç liderleri eğitmek, geliştirmek ve global sorunlara yenilikçi çözümler üretmeleri 
              için desteklemek. Konferansımız, katılımcılara benzersiz networking fırsatları ve 
              profesyonel gelişim imkanları sunmaktadır.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;