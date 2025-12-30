import React from 'react';
import { useNavigate } from 'react-router-dom';
import { STORE_LOGO } from '../constants';
import { AppRoute } from '../types';

const Dashboard: React.FC = () => {
    const navigate = useNavigate();
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      <header className="sticky top-0 z-30 bg-[#fdfdfe] px-4 pt-12 pb-4 border-b border-gray-100 dark:border-gray-800/50">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div 
              className="bg-center bg-no-repeat bg-cover rounded-full size-12 shadow-sm border-2 border-white dark:border-gray-700"
              style={{ backgroundImage: `url("${STORE_LOGO}")` }}
            />
            <div className="flex flex-col">
              <span className="text-sm font-medium text-gray-500 dark:text-gray-400">Selamat Datang,</span>
              <h2 className="text-brand dark:text-red-400 text-xl font-bold leading-tight tracking-tight">Warung Berkah</h2>
            </div>
          </div>
          <button className="relative flex size-10 items-center justify-center rounded-full bg-white dark:bg-gray-800 shadow-sm active:scale-95 transition-transform">
            <span className="material-symbols-outlined text-brand dark:text-white">notifications</span>
            <span className="absolute top-2 right-2.5 size-2 rounded-full bg-primary border-2 border-white dark:border-gray-800"></span>
          </button>
        </div>
      </header>

      <section className="px-4 pt-6 space-y-4">
        <div className="relative w-full overflow-hidden rounded-2xl bg-gradient-to-br from-brand to-primary shadow-lg shadow-red-900/20 text-white p-6">
          <div className="absolute -top-12 -right-12 size-40 rounded-full bg-white/10 blur-2xl"></div>
          <div className="relative z-10 flex flex-col gap-1">
            <div className="flex items-center gap-2 opacity-90">
              <span className="material-symbols-outlined text-[20px]">account_balance_wallet</span>
              <span className="text-sm font-medium">Pendapatan Hari Ini</span>
            </div>
            <div className="mt-2 flex items-baseline gap-2">
              <h3 className="text-3xl font-bold tracking-tight">Rp 1.500.000</h3>
            </div>
            <div className="mt-2 inline-flex items-center gap-1 rounded-full bg-white/20 px-2 py-0.5 text-xs font-medium w-fit backdrop-blur-sm">
              <span className="material-symbols-outlined text-[14px]">trending_up</span>
              <span>+12% dari kemarin</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col justify-between rounded-2xl bg-white dark:bg-card-dark p-5 shadow-sm border border-gray-100 dark:border-gray-800">
            <div className="flex size-10 items-center justify-center rounded-full bg-orange-50 dark:bg-orange-900/20 text-orange-600 mb-3">
              <span className="material-symbols-outlined">receipt_long</span>
            </div>
            <div>
              <p className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Transaksi</p>
              <div className="flex items-end justify-between mt-1">
                <p className="text-xl font-bold text-gray-900 dark:text-white">24</p>
                <span className="text-xs font-medium text-green-600 bg-green-50 dark:bg-green-900/20 px-1.5 py-0.5 rounded">+5%</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-between rounded-2xl bg-white dark:bg-card-dark p-5 shadow-sm border border-gray-100 dark:border-gray-800">
            <div className="flex size-10 items-center justify-center rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-600 mb-3">
              <span className="material-symbols-outlined">inventory_2</span>
            </div>
            <div>
              <p className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Terjual</p>
              <div className="flex items-end justify-between mt-1">
                <p className="text-xl font-bold text-gray-900 dark:text-white">56 <span className="text-sm font-normal text-gray-500">Item</span></p>
                <span className="text-xs font-medium text-green-600 bg-green-50 dark:bg-green-900/20 px-1.5 py-0.5 rounded">+8%</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-8 px-4">
        <h3 className="mb-4 text-lg font-bold text-gray-900 dark:text-white tracking-tight">Aksi Cepat</h3>
        <div className="grid grid-cols-2 gap-3">
          <button 
            onClick={() => navigate(AppRoute.POS_PRODUCTS)}
            className="col-span-2 group relative flex items-center justify-between overflow-hidden rounded-xl bg-primary p-4 shadow-md transition-all active:scale-[0.98]"
          >
            <div className="relative z-10 flex flex-col items-start text-left">
              <span className="text-base font-bold text-white">Buat Transaksi</span>
              <span className="text-xs text-red-100 opacity-90">Kasir Baru</span>
            </div>
            <div className="relative z-10 flex size-10 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-sm group-hover:bg-white group-hover:text-primary transition-colors">
              <span className="material-symbols-outlined">point_of_sale</span>
            </div>
            <div className="absolute -right-4 -bottom-4 size-24 rounded-full bg-white/10 blur-xl"></div>
          </button>
          <button className="flex flex-col items-center justify-center gap-2 rounded-xl bg-white dark:bg-card-dark p-4 shadow-sm border border-gray-100 dark:border-gray-800 active:bg-gray-50 dark:active:bg-gray-700 transition-colors">
            <div className="flex size-10 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300">
              <span className="material-symbols-outlined">add_box</span>
            </div>
            <span className="text-sm font-semibold text-gray-700 dark:text-gray-200">Tambah Produk</span>
          </button>
          <button className="flex flex-col items-center justify-center gap-2 rounded-xl bg-white dark:bg-card-dark p-4 shadow-sm border border-gray-100 dark:border-gray-800 active:bg-gray-50 dark:active:bg-gray-700 transition-colors">
            <div className="flex size-10 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300">
              <span className="material-symbols-outlined">lock_clock</span>
            </div>
            <span className="text-sm font-semibold text-gray-700 dark:text-gray-200">Tutup Shift</span>
          </button>
        </div>
      </section>

      <section className="mt-8 px-4 pb-8">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white tracking-tight">Aktivitas Terakhir</h3>
          <button className="text-sm font-medium text-primary">Lihat Semua</button>
        </div>
        <div className="flex flex-col items-center justify-center rounded-2xl bg-white dark:bg-card-dark p-8 text-center border border-dashed border-gray-200 dark:border-gray-700">
          <div className="mb-4 size-24 rounded-full bg-gray-50 dark:bg-gray-800 flex items-center justify-center overflow-hidden">
            <div className="w-full h-full flex items-center justify-center">
              <span className="material-symbols-outlined text-gray-300 dark:text-gray-600 text-5xl">receipt</span>
            </div>
          </div>
          <h4 className="text-base font-semibold text-gray-900 dark:text-white">Belum ada transaksi</h4>
          <p className="mt-1 max-w-[200px] text-sm text-gray-500 dark:text-gray-400">Transaksi Anda hari ini akan muncul di sini. Semangat jualan!</p>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
