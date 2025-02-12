import React from 'react';
import SectionTitle from '../components/ui/SectionTitle';
import ApplicationInfo from '../components/ApplicationInfo';
import ApplicationForm from '../components/ApplicationForm';

const ApplicationPage = () => {
  return (
    <div className="pt-16 pb-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mt-16">
          <SectionTitle 
            title="Başvuru"
            subtitle="SPEACH 2025 Hitabet Yarışması Başvuru Detayları"
          />
          
          <ApplicationInfo />
          <ApplicationForm />
        </div>
      </div>
    </div>
  );
};

export default ApplicationPage;