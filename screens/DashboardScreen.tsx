
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppRoute, Store } from '../types';

const INITIAL_STORES: Store[] = [
  {
    id: '1',
    name: 'Toko Sembako Jaya',
    address: 'Jl. Merdeka No. 45, Jakarta Pusat',
    category: 'Cabang Utama',
    status: 'Buka',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDKFljgoeEfoLWW-kYfj1WjMg4bG-ZH3o6MnVY3G1m2epwn1J9alTNRHK8I2MJRBgpg-oDSgj5r7xH4JcPzkrw7-bZ09NwZSRlFmXEWnoDkEhAPrmLkeJzczlvI7-r_v_gxWXZ0vu2mk17JpZ0fwv8t9VatlNlUWUd33d9o_N0MjXGuvD8pmkejSUPRN6_Gyb6nTSnFtFpSuaNE8Lt6pRfcfEb9R-myAi3eHAA67CtFZRIRyxxxECSdRPjVZmcAdpZ4zwZwOw5XxaU'
  },
  {
    id: '2',
    name: 'Warung Kopi Kenangan',
    address: 'Jl. Sudirman Kav 5, Jakarta Selatan',
    category: 'F&B',
    status: 'Tutup',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDJaYeg-KK4a6dyaiteGHr6fmjKsFPE5khLEX9q9Akpfsu4tDcivF34g3X4md58nqhpiiOSFeFw6EQgTLH4C-xE83oS1qrCfMQaqEDwVFAlYp_8ZHM9I2RCHbQBSBlBrqP2EC17AKImNdQV77zviNGuJ5f4vmWIOlkMHSw-ZVcUAjbHDg-IEC-eZDZeYHdR6onv2OAePW0I6L2P1POqIeyw1QmmvtYWY1plcgLLEY70ASP2-iL76m2Jk38Cf6uzkU9LY0H7hnabuzU'
  },
  {
    id: '3',
    name: 'RST Fashion Store',
    address: 'Pasar Tanah Abang Blok A',
    category: 'Retail',
    status: 'Buka',
    icon: 'checkroom'
  }
];

const DashboardScreen: React.FC = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState('');
  const [stores] = useState<Store[]>(INITIAL_STORES);

  const filteredStores = stores.filter(s => 
    s.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="flex flex-col min-h-screen animate-in fade-in duration-300">
      {/* Top App Bar */}
      <header className="sticky top-0 z-50 bg-background-light/90 backdrop-blur-md border-b border-gray-200/50">
        <div className="flex items-center justify-between px-4 py-3">
          <h1 className="text-2xl font-bold tracking-tight text-secondary">Daftar Toko</h1>
          <button 
            onClick={() => navigate(AppRoute.ACCOUNT)}
            className="p-2 rounded-full hover:bg-gray-200/50 transition-colors text-primary"
          >
            <span className="material-symbols-outlined text-[26px]">settings</span>
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 px-4 pb-32 pt-2">
        {/* Search Bar */}
        <div className="mb-6 sticky top-[60px] z-40 py-2 bg-background-light">
          <div className="relative group">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <span className="material-symbols-outlined text-gray-400 group-focus-within:text-primary transition-colors">search</span>
            </div>
            <input 
              type="text"
              placeholder="Cari nama toko..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="block w-full pl-10 pr-3 py-2.5 border-none rounded-xl bg-gray-200/60 text-secondary placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:bg-white transition-all text-[15px] shadow-sm"
            />
          </div>
        </div>

        {/* Store List */}
        <div className="flex flex-col gap-4">
          {filteredStores.length > 0 ? (
            filteredStores.map(store => (
              <div 
                key={store.id}
                className="group flex items-center bg-white p-4 rounded-xl shadow-sm border border-transparent hover:border-primary/10 active:scale-[0.98] transition-all cursor-pointer"
              >
                <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-lg bg-gray-100 flex items-center justify-center">
                  {store.image ? (
                    <img src={store.image} alt={store.name} className="h-full w-full object-cover" />
                  ) : (
                    <span className="material-symbols-outlined text-[32px] text-primary">{store.icon || 'store'}</span>
                  )}
                </div>
                
                <div className="ml-4 flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-secondary truncate text-[16px]">{store.name}</h3>
                    <span className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ${
                      store.status === 'Buka' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-600'
                    }`}>
                      {store.status}
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-text-secondary truncate">{store.address}</p>
                  <div className="mt-1.5 flex items-center gap-1">
                    <span className="material-symbols-outlined text-[14px] text-primary">storefront</span>
                    <span className="text-xs text-text-secondary">{store.category}</span>
                  </div>
                </div>

                <div className="ml-2 shrink-0 text-gray-400">
                  <span className="material-symbols-outlined">chevron_right</span>
                </div>
              </div>
            ))
          ) : (
            <div className="flex flex-col items-center justify-center py-20 px-4">
              <div className="relative w-32 h-32 mb-6 rounded-full bg-primary/5 flex items-center justify-center">
                <span className="material-symbols-outlined text-[48px] text-primary/40">storefront</span>
                <div className="absolute bottom-0 right-0 p-2 bg-white rounded-full shadow-lg">
                  <span className="material-symbols-outlined text-[20px] text-primary">add</span>
                </div>
              </div>
              <h3 className="text-lg font-bold text-secondary text-center mb-2">Belum ada toko</h3>
              <p className="text-text-secondary text-sm text-center max-w-[260px]">
                Mulai kelola bisnis Anda dengan menambahkan toko pertama Anda di RST POS.
              </p>
            </div>
          )}
        </div>
      </main>

      {/* Floating Action Button */}
      <div className="fixed bottom-0 left-0 right-0 z-50 w-full pointer-events-none">
        <div className="max-w-md mx-auto w-full relative">
          <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-background-light via-background-light/90 to-transparent pointer-events-none"></div>
          <div className="absolute bottom-0 inset-x-0 p-4 pb-6 pointer-events-auto flex justify-center">
            <button 
              onClick={() => navigate(AppRoute.CREATE_STORE)}
              className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-primary-hover text-white font-semibold text-[15px] h-14 rounded-2xl shadow-xl transition-all active:scale-[0.98]"
            >
              <span className="material-symbols-outlined">add_business</span>
              <span>Tambah Toko Baru</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardScreen;
