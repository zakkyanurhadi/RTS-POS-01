import React from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { Tab, AppRoute } from '../types';
import Dashboard from '../components/Dashboard';
import Products from '../components/Products';
import Transactions from '../components/Transactions';
import Summary from '../components/Summary';
import Profile from '../components/Profile';

const PosLayout: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Map path to active tab
  const getActiveTab = () => {
    const path = location.pathname;
    if (path === AppRoute.POS_HOME || path === AppRoute.POS_HOME + '/') return Tab.Home;
    if (path.startsWith(AppRoute.POS_PRODUCTS)) return Tab.Produk;
    if (path.startsWith(AppRoute.POS_TRANSACTIONS)) return Tab.Kasir;
    if (path.startsWith(AppRoute.POS_SUMMARY)) return Tab.Ringkasan;
    if (path.startsWith(AppRoute.POS_PROFILE)) return Tab.Saya;
    return Tab.Home;
  };

  const activeTab = getActiveTab();

  const handleTabClick = (path: string) => {
    navigate(path);
  };

  return (
    <div className="relative flex flex-col h-[100dvh] overflow-hidden w-full max-w-md mx-auto shadow-2xl bg-background-light dark:bg-background-dark">
      <main className="flex-1 overflow-y-auto pb-40 scroll-smooth">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="products" element={<Products />} />
          <Route path="transactions" element={<Transactions />} />
          <Route path="summary" element={<Summary />} />
          <Route path="profile" element={<Profile />} />
        </Routes>
      </main>

      <nav className="fixed bottom-4 left-0 right-0 z-50 rounded-full glass-nav max-w-[calc(448px-1.5rem)] mx-auto px-4 border border-white/40">
        <div className="flex h-20 w-full items-center justify-around">
          <TabButton 
            icon="home" 
            label="Home" 
            active={activeTab === Tab.Home} 
            onClick={() => handleTabClick(AppRoute.POS_HOME)} 
          />
          <TabButton 
            icon="inventory_2" 
            label="Produk" 
            active={activeTab === Tab.Produk} 
            onClick={() => handleTabClick(AppRoute.POS_PRODUCTS)} 
          />
          
          <div className="flex flex-col items-center justify-center -mt-8">
            <button 
              onClick={() => handleTabClick(AppRoute.POS_TRANSACTIONS)}
              className="flex size-14 items-center justify-center rounded-full bg-primary text-white shadow-lg shadow-primary/40 transition-transform active:scale-95 border-4 border-[#fdfdfe] dark:border-background-dark"
            >
              <span className="material-symbols-outlined text-[32px]">receipt_long</span>
            </button>
            <span className="text-[10px] font-bold text-primary mt-1">Transaksi</span>
          </div>

          <TabButton 
            icon="monitoring" 
            label="Ringkasan" 
            active={activeTab === Tab.Ringkasan} 
            onClick={() => handleTabClick(AppRoute.POS_SUMMARY)} 
          />
          <TabButton 
            icon="person" 
            label="Saya" 
            active={activeTab === Tab.Saya} 
            onClick={() => handleTabClick(AppRoute.POS_PROFILE)} 
          />
        </div>
      </nav>
    </div>
  );
};

interface TabButtonProps {
  icon: string;
  label: string;
  active: boolean;
  onClick: () => void;
}

const TabButton: React.FC<TabButtonProps> = ({ icon, label, active, onClick }) => {
  return (
    <button 
      onClick={onClick}
      className={`flex flex-col items-center justify-center gap-1 p-2 w-14 transition-colors ${active ? 'text-primary' : 'text-gray-400 dark:text-gray-500'}`}
    >
      <span className={`material-symbols-outlined text-[26px] ${active ? 'font-variation-settings-"FILL" 1' : ''}`}>
        {icon}
      </span>
      <span className="text-[10px] font-medium">{label}</span>
    </button>
  );
};

export default PosLayout;
