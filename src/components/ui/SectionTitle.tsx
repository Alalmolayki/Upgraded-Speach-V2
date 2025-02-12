import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle }) => {
  return (
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold text-gray-900 mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-xl text-gray-600">{subtitle}</p>
      )}
      <div className="mt-6 flex justify-center">
        <div className="h-1 w-24 bg-blue-600 rounded-full"></div>
      </div>
    </div>
  );
};

export default SectionTitle;