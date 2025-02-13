import React from 'react';

const ApplicationInfo = () => {
  return (
    <div className="max-w-4xl mx-auto mb-16 space-y-8">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold text-blue-600 mb-6">Başvuru Detayları</h3>
        
        <div className="space-y-6">
          <div>
            <h4 className="font-medium text-gray-900 mb-2">Başvuru ve Ön Yazı Gönderim Tarihi</h4>
            <p className="text-gray-600">24 Şubat - 9 Mart</p>
          </div>

          <div>
            <h4 className="font-medium text-gray-900 mb-2">Ön Yazı</h4>
            <p className="text-gray-600">
              Yarışmacılar "Savaş ve İnsan Hakları" ana konusunu açıklayan en az 800 kelimelik bir metin hazırlamalıdır.
            </p>
          </div>

          <div>
            <h4 className="font-medium text-gray-900 mb-2">Yarışma Dili</h4>
            <p className="text-gray-600">
              Yarışmacı Türkçe, Arapça veya İngilizce olarak yarışacağı dili seçmelidir.
            </p>
          </div>

          <div>
            <h4 className="font-medium text-gray-900 mb-2">Yarışma Konusu</h4>
            <p className="text-gray-600 mb-2">
              "Savaş ve İnsan Hakları" ana konusuna bağlı dört alt başlıkta yarışma düzenlenecektir:
            </p>
            <ul className="list-disc list-inside space-y-1 text-gray-600 ml-4">
              <li>Konu - 1: Doğu Türkistan</li>
              <li>Konu - 2: Filistin</li>
              <li>Konu - 3: Ukrayna</li>
              <li>Konu - 4: Suriye</li>
            </ul>
          </div>

          <div className="bg-blue-50 p-4 rounded-md">
            <h4 className="font-medium text-gray-900 mb-2">Önemli Not</h4>
            <p className="text-gray-600">
              Yarışmacılar hazırladıkları ön yazıyı{' '}
              <a 
                href="mailto:speachsince2024@gmail.com" 
                className="font-medium text-blue-600 hover:text-blue-800 transition"
              >
                speachsince2025@gmail.com
              </a>{' '}
              adresine <span className="font-medium">24 Şubat - 9 Mart</span> tarihleri arasında gönderebilir. 
              Sonuçlar <span className="font-medium">17 Mart</span> tarihinde web sitesi üzerinden yayınlanacak 
              ve yarışmacıların e-posta adresine bilgi gönderilecektir.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplicationInfo;