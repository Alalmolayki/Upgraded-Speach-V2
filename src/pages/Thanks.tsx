import React from 'react';
import SectionTitle from '../components/ui/SectionTitle';

interface SponsorCardProps {
  name: string;
  description: string;
}

const SponsorCard: React.FC<SponsorCardProps> = ({ name, description }) => {
  return (
    <div className="group relative bg-white rounded-lg shadow-md overflow-hidden">
      <div className="aspect-video flex items-center justify-center p-6">
        <span className="text-gray-400">{name}</span>
      </div>
      
      {/* Hover content */}
      <div className="absolute inset-x-0 bottom-0 bg-white transform translate-y-full transition-transform duration-300 ease-in-out group-hover:translate-y-0 p-4 shadow-lg">
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </div>
  );
};

const Thanks = () => {
  const sponsors = [
    {
      name: 'Sponsor Logo 1',
      description: 'Sponsorun hakkında bilgisi buraya yazılacaktır. Katkıları ve destekleri için teşekkür ederiz.'
    },
    {
      name: 'Sponsor Logo 2',
      description: 'Sponsorun hakkında bilgisi buraya yazılacaktır. Katkıları ve destekleri için teşekkür ederiz.'
    },
    {
      name: 'Sponsor Logo 3',
      description: 'Sponsorun hakkında bilgisi buraya yazılacaktır. Katkıları ve destekleri için teşekkür ederiz.'
    }
  ];

  return (
    <div className="pt-24 pb-16 bg-gradient-to-br from-blue-50 via-white to-blue-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="Teşekkürler"
          subtitle="Destekçilerimiz ve İş Birliklerimiz"
        />
        
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {sponsors.map((sponsor, index) => (
            <SponsorCard
              key={index}
              name={sponsor.name}
              description={sponsor.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Thanks;