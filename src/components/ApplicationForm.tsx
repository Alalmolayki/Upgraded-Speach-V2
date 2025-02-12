import React from 'react';
import FormField from './ui/FormField';

const ApplicationForm = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="max-w-3xl mx-auto">
      <form onSubmit={handleSubmit} className="space-y-8 bg-white p-8 rounded-lg shadow-lg">
        {/* Yarışmacı Bilgileri */}
        <div className="space-y-6">
          <h3 className="text-xl font-semibold text-blue-600">Yarışmacı Bilgileri</h3>
          <FormField
            id="contestant-name"
            label="Ad Soyad"
            type="text"
            required
          />
          <FormField
            id="contestant-phone"
            label="Telefon Numarası"
            type="tel"
            required
          />
          <FormField
            id="contestant-email"
            label="E-Posta"
            type="email"
            required
          />
          <div>
            <label htmlFor="language" className="block text-sm font-medium text-gray-700 mb-1">
              Yarışma Dili
            </label>
            <select
              id="language"
              name="language"
              required
              className="block w-full rounded-md border-gray-300 shadow-sm 
                       focus:border-blue-500 focus:ring-blue-500
                       text-base px-4 py-2"
            >
              <option value="">Seçiniz</option>
              <option value="turkish">Türkçe</option>
              <option value="english">İngilizce</option>
              <option value="arabic">Arapça</option>
            </select>
          </div>
          <FormField
            id="school"
            label="Okul Adı"
            type="text"
            required
          />
        </div>

        {/* Danışman Bilgileri */}
        <div className="space-y-6 pt-6 border-t">
          <h3 className="text-xl font-semibold text-blue-600">Danışman Bilgileri</h3>
          <FormField
            id="advisor-name"
            label="Ad Soyad"
            type="text"
            required
          />
          <FormField
            id="advisor-phone"
            label="Telefon Numarası"
            type="tel"
            required
          />
          <FormField
            id="advisor-email"
            label="E-Posta"
            type="email"
            required
          />
        </div>
        
        <button
          type="submit"
          className="w-full bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition"
        >
          Başvuru Gönder
        </button>
      </form>
    </div>
  );
};

export default ApplicationForm;