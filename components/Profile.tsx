
import React from 'react';
import { PROFILE_IMAGE } from '../constants';

const Profile: React.FC = () => {
  const sections = [
    {
      title: 'BANTUAN & DUKUNGAN',
      items: [
        { icon: 'mail', label: 'Hubungi via Email', color: 'bg-primary/10 text-primary' },
        { icon: 'chat', label: 'Hubungi via WhatsApp', color: 'bg-green-100 text-[#25D366]' },
        { icon: 'forum', label: 'Forum Komunitas', color: 'bg-blue-100 text-blue-600' },
      ]
    },
    {
      title: 'INFO LEGAL',
      items: [
        { icon: 'shield', label: 'Kebijakan Privasi', color: 'bg-gray-100 dark:bg-gray-800 text-gray-600' },
        { icon: 'description', label: 'Syarat & Ketentuan', color: 'bg-gray-100 dark:bg-gray-800 text-gray-600' },
      ]
    }
  ];

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 pb-32">
      <header className="sticky top-0 z-50 bg-[#fdfdfe] border-b border-gray-200 dark:border-gray-800">
        <div className="flex items-center justify-center h-[52px] px-4">
          <h2 className="text-gray-900 dark:text-white text-[17px] font-semibold tracking-tight">Akun</h2>
        </div>
      </header>

      <main className="px-4">
        <div className="flex flex-col items-center py-8">
          <div className="relative mb-4">
            <div 
              className="bg-center bg-no-repeat bg-cover rounded-full h-24 w-24 border-4 border-white dark:border-gray-800 shadow-md"
              style={{ backgroundImage: `url("${PROFILE_IMAGE}")` }}
            />
            <div className="absolute bottom-0 right-0 bg-primary rounded-full p-1.5 border-2 border-background-light dark:border-background-dark text-white flex items-center justify-center">
              <span className="material-symbols-outlined text-[16px]">edit</span>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center gap-1 mb-6">
            <h1 className="text-gray-900 dark:text-white text-xl font-bold">Budi Santoso</h1>
            <p className="text-gray-500 dark:text-gray-400 text-sm font-medium">Warung Berkah</p>
          </div>
          <button className="flex w-full items-center justify-center rounded-xl h-11 px-6 bg-primary text-white text-[15px] font-semibold active:scale-[0.98] transition-transform">
            Edit Profil
          </button>
        </div>

        {sections.map(section => (
          <div key={section.title} className="mb-6">
            <h3 className="text-gray-500 dark:text-gray-400 text-xs font-semibold uppercase tracking-wider ml-4 mb-2">{section.title}</h3>
            <div className="bg-white dark:bg-card-dark rounded-xl overflow-hidden shadow-sm border border-gray-200 dark:border-gray-800">
              {section.items.map((item, idx) => (
                <div key={item.label} className={`flex items-center gap-3 px-4 py-3.5 active:bg-gray-50 dark:active:bg-gray-800 transition-colors cursor-pointer ${idx !== section.items.length - 1 ? 'border-b border-gray-100 dark:border-gray-800' : ''}`}>
                  <div className={`flex items-center justify-center rounded-lg shrink-0 w-8 h-8 ${item.color}`}>
                    <span className="material-symbols-outlined text-[20px]">{item.icon}</span>
                  </div>
                  <p className="text-gray-900 dark:text-white text-[15px] font-medium flex-1">{item.label}</p>
                  <span className="material-symbols-outlined text-gray-400 text-[20px]">chevron_right</span>
                </div>
              ))}
            </div>
          </div>
        ))}

        <div className="mb-8">
          <div className="bg-white dark:bg-card-dark rounded-xl overflow-hidden shadow-sm border border-gray-200 dark:border-gray-800">
            <div className="flex items-center gap-3 px-4 py-3.5 active:bg-gray-50 dark:active:bg-gray-800 transition-colors cursor-pointer border-b border-gray-100 dark:border-gray-800">
              <div className="flex items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 shrink-0 w-8 h-8">
                <span className="material-symbols-outlined text-[20px]">logout</span>
              </div>
              <p className="text-gray-900 dark:text-white text-[15px] font-medium flex-1">Keluar</p>
              <span className="material-symbols-outlined text-gray-400 text-[20px]">chevron_right</span>
            </div>
            <div className="flex items-center gap-3 px-4 py-3.5 active:bg-red-50 dark:active:bg-red-900/10 transition-colors cursor-pointer">
              <div className="flex items-center justify-center rounded-lg bg-red-100 dark:bg-red-900/30 text-red-600 shrink-0 w-8 h-8">
                <span className="material-symbols-outlined text-[20px]">delete_forever</span>
              </div>
              <p className="text-red-600 text-[15px] font-medium flex-1">Hapus Akun</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center mt-2 mb-10">
          <p className="text-gray-400 text-xs">RST POS v1.2.0 (Build 204)</p>
        </div>
      </main>
    </div>
  );
};

export default Profile;
