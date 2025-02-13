import React from 'react';
import SectionTitle from '../components/ui/SectionTitle';

const About = () => {
  return (
    <section className="relative pt-20 pb-16 bg-gradient-to-br from-blue-50 via-white to-blue-50">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80"
          alt="Background"
          className="w-full h-full object-cover opacity-5"
        />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <SectionTitle
          title="SPEACH Nedir?"
          subtitle="Geleceğin Liderlerini Yetiştiren Hitabet Yarışması"
        />
        
        <div className="mt-12 space-y-12">
          <div className="bg-white/80 backdrop-blur-sm p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-blue-600 mb-4">SPEACH Nedir?</h3>
            <p className="text-gray-700 leading-relaxed">
            SPEACH, gençlerin hitabet ve liderlik becerilerini geliştirip üç farklı dilde yarışmalarına imkân sunan benzersiz bir platformdur.

            </p>
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-blue-600 mb-4">Misyonumuz</h3>
            <p className="text-gray-700 leading-relaxed">
            Platform, ortaöğretim kademesindeki öğrencilerimizin küresel konular bağlamında hem akademik ürünler ortaya koyma hem de hitabet yeteneklerine katkıda bulunup geliştirme amacı gütmektir.

            </p>
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-blue-600 mb-4">Vizyonumuz</h3>
            <p className="text-gray-700 leading-relaxed">
              Genç liderlerin eğitimlerini ve gelişimlerini destekleyerek, profesyonel gelişim imkanı ve networking fırsatı sunmaktır.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;