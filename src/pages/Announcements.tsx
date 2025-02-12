import React from 'react';
import SectionTitle from '../components/ui/SectionTitle';

const Announcements = () => {
  return (
    <div className="pt-24 pb-16 bg-gradient-to-br from-blue-50 via-white to-blue-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="Duyurular"
          subtitle="En Güncel Haberler ve Duyurular"
        />
        
        <div className="mt-12 space-y-8">
          {/* Placeholder for announcements - will be populated with actual content */}
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
            <div className="text-sm text-gray-500 mb-2">12 Şubat 2025</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Başvurular Başladı</h3>
            <p className="text-gray-600">
              SPEACH 2025 başvuruları başlamıştır. Son başvuru tarihi 2 Mart 2025'tir.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Announcements;