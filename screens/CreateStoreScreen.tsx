
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppRoute } from '../types';

const TEMPLATES = [
  {
    id: 'retail',
    title: 'Ritel',
    desc: 'Toko baju, kelontong',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDmv4qZfTeSpmt-x9F6a2fp6NsEyUPLlYMz-W1G3B4lN4zYzNiuqDJh2REqoja0GGU4ZefM3rDBInxqjqufu-TxGp4Ye6JuDce0HJIyi54-rR658p0ZRquJQdmVUY1m_X4t5qIMgK0JEYVIHsrGTM8srU1uEEOkUblDmTpJAH-MVobylKEG-UIdPzYoXB0fLySXK4pL2ixLxzpiGSEG2f75jkmx-CTsOiRNcbJ94gQf1xt1AbrRmOz66rVrl4BWYUOZnt_pyMzi05k'
  },
  {
    id: 'fnb',
    title: 'F&B',
    desc: 'Kafe, restoran, warung',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAMWlWo_aswaRkq7yiROhS0sHVxHq1tI1fSYemT8EyVk5UEkodeUtHm8_qLlatwKu2drWJYsTLAeA5zK3xNNLU5wpt6UPkMp7nPXm_p7hfcJZYietIUsYDjH0FSDaTpZKmVGrD_ksBuNJFYwgf101NJO0cYsTdz07XRVlljPDhQC8vRbqLhOXhyVeB3V5amoeSOzA02NhiizdBDLcH2004lidDEEDzHKNoqSqQnyfGBsFofgc_H9IWlUmNHhonF6SJzHQo95tISnxE'
  },
  {
    id: 'services',
    title: 'Jasa',
    desc: 'Laundry, salon, bengkel',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB_dCQSJuYmuFMeQY0ufzflD-AriZdAM9-l5yQN9Y9ZBpWkLZIQ57Vi8qQ1YOAlIID2urgIKoFRtb3u5lZdAKSmnuPx07uTgapbWFcsOP-2-PzhCFXMfkwyXWt0mBACEeL4x8WHg5kP9U4My6TscOPnqt1lYL_vQE3dYyusLtlb_1K0Pl5ZmC40nirIPtpsXCuai7cY9pvHlKfMmwn_7_R6mvw2bgXgEuNUDL_XjQX8J6aOqqtXGLemfp1137_WbYTr-IORRhq0KUU'
  },
  {
    id: 'other',
    title: 'Lainnya',
    desc: 'Template kustom',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDILSLDhDB3vu5maR-Y3PY_f6GtIBy1USWcKadWBdaJ7LxgMJHFP_3-UNoEvZxN_W3sBK7IbukdAknjqCY68ikYl62bUC8BFuyKcLVvrk-nB3aZpWkrqoNO6q6chgFfFdIT6dxvndgAWkn7Q-Lu-rOwm9YTO1CIG_iBPcB0tz5dsVCPjVhuwv1CooOI6iWeEIU5k0Gl4Z8-TDRI8X3LTTNBmseqSKy1oOJoC4T15v9Mh5v18TmI1cYMi_qQZuYQ3e8XpPr8w6LLd-s'
  }
];

const CreateStoreScreen: React.FC = () => {
  const navigate = useNavigate();
  const [selectedTemplate, setSelectedTemplate] = useState('retail');
  const [termsAccepted, setTermsAccepted] = useState(false);

  return (
    <div className="flex flex-col min-h-screen animate-in slide-in-from-right duration-300">
      <header className="sticky top-0 z-50 bg-background-light/95 backdrop-blur-md border-b border-gray-200/50 px-4 pt-10 pb-4 flex items-center">
        <button 
          onClick={() => navigate(-1)}
          className="size-10 flex items-center justify-center rounded-full hover:bg-black/5 active:scale-95 transition-all text-secondary"
        >
          <span className="material-symbols-outlined font-medium">arrow_back_ios_new</span>
        </button>
        <h1 className="text-lg font-bold tracking-tight text-center flex-1 pr-10 text-secondary">
          Buat Toko Baru
        </h1>
      </header>

      <main className="flex-1 px-4 pb-40">
        <div className="mt-6 flex flex-col gap-6">
          {/* Store Name */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-secondary ml-1">Nama Toko</label>
            <input 
              type="text" 
              placeholder="Contoh: Warung Sejahtera"
              className="w-full h-14 px-4 bg-white rounded-xl border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none shadow-sm"
            />
          </div>

          {/* Description */}
          <div className="flex flex-col gap-2">
            <div className="flex justify-between items-end ml-1">
              <label className="text-sm font-semibold text-secondary">Deskripsi</label>
              <span className="text-xs text-gray-500 font-medium bg-gray-100 px-2 py-0.5 rounded-md">Opsional</span>
            </div>
            <textarea 
              placeholder="Jelaskan bisnis anda secara singkat..."
              className="w-full min-h-[120px] p-4 bg-white rounded-xl border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none resize-none shadow-sm"
            />
          </div>
        </div>

        {/* Templates */}
        <div className="mt-8">
          <div className="flex items-center justify-between mb-4 px-1">
            <h3 className="text-lg font-bold text-secondary">Pilih Template Usaha</h3>
            <button className="text-xs font-semibold text-primary">Lihat Semua</button>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {TEMPLATES.map((item) => (
              <div 
                key={item.id}
                onClick={() => setSelectedTemplate(item.id)}
                className={`group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer transition-all ${
                  selectedTemplate === item.id 
                    ? 'ring-2 ring-primary ring-offset-2 ring-offset-background-light' 
                    : 'border border-transparent hover:border-gray-300'
                }`}
              >
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" 
                  style={{ backgroundImage: `url(${item.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 w-full p-3 flex flex-col">
                  <span className="text-white text-sm font-bold leading-tight">{item.title}</span>
                  <span className="text-white/70 text-[10px] font-medium mt-0.5">{item.desc}</span>
                </div>
                {selectedTemplate === item.id && (
                  <div className="absolute top-2 left-2 bg-primary text-white p-1 rounded-full shadow-sm">
                    <span className="material-symbols-outlined text-[16px] block">check</span>
                  </div>
                )}
                <button className="absolute top-2 right-2 size-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/40 transition-colors">
                  <span className="material-symbols-outlined text-white text-[18px]">favorite</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Footer Actions */}
      <div className="fixed bottom-0 w-full bg-background-light border-t border-gray-200 p-4 pb-8 z-40">
        <div className="flex flex-col gap-4 max-w-md mx-auto">
          <label className="flex items-start gap-3 cursor-pointer group">
            <input 
              type="checkbox" 
              checked={termsAccepted}
              onChange={(e) => setTermsAccepted(e.target.checked)}
              className="h-5 w-5 rounded border-gray-300 text-primary focus:ring-primary transition-all cursor-pointer"
            />
            <p className="text-sm text-gray-600 leading-snug">
              Saya menyetujui <button className="text-primary font-semibold hover:underline">Syarat & Ketentuan</button> Layanan RST POS.
            </p>
          </label>
          <button 
            disabled={!termsAccepted}
            onClick={() => navigate(AppRoute.DASHBOARD)}
            className={`w-full h-14 rounded-full font-bold text-lg shadow-lg flex items-center justify-center gap-2 transition-all active:scale-[0.98] ${
              termsAccepted 
                ? 'bg-primary text-white shadow-primary/20 hover:bg-primary/90' 
                : 'bg-gray-300 text-white cursor-not-allowed'
            }`}
          >
            Simpan & Lanjutkan
            <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateStoreScreen;
