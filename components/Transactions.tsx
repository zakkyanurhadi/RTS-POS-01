
import React from 'react';
import { TRANSACTIONS } from '../constants';

const Transactions: React.FC = () => {
  return (
    <div className="animate-in fade-in slide-in-from-right-4 duration-300 pb-32">
      <header className="sticky top-0 z-40 bg-[#fdfdfe] px-4 py-3 flex items-center justify-between border-b border-gray-200/50 dark:border-gray-800/50">
        <button className="p-2 -ml-2 rounded-full text-gray-900 dark:text-white">
          <span className="material-symbols-outlined">arrow_back</span>
        </button>
        <h1 className="text-lg font-bold text-gray-900 dark:text-white tracking-tight flex-1 text-center pr-8">Transaksi</h1>
      </header>

      <main className="px-4 py-4 space-y-4">
        <div className="relative group">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <span className="material-symbols-outlined text-gray-400">search</span>
          </div>
          <input className="block w-full pl-10 pr-3 py-3 border-none rounded-xl bg-white dark:bg-card-dark text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/20 shadow-sm text-base" placeholder="Cari ID, pelanggan, atau nominal..." type="text" />
          <div className="absolute inset-y-0 right-0 pr-2 flex items-center">
            <button className="p-1.5 rounded-lg text-gray-400">
              <span className="material-symbols-outlined text-[20px]">qr_code_scanner</span>
            </button>
          </div>
        </div>

        <div className="flex gap-2 overflow-x-auto no-scrollbar py-1">
          <button className="flex shrink-0 items-center justify-center px-4 py-1.5 rounded-full bg-primary text-white text-sm font-medium shadow-lg shadow-primary/25">Semua</button>
          <button className="flex shrink-0 items-center justify-center gap-1.5 px-4 py-1.5 rounded-full bg-white dark:bg-card-dark border border-gray-200 dark:border-gray-800 text-gray-600 dark:text-gray-300 text-sm font-medium">Hari Ini <span className="material-symbols-outlined text-[18px]">calendar_today</span></button>
          <button className="flex shrink-0 items-center justify-center gap-1.5 px-4 py-1.5 rounded-full bg-white dark:bg-card-dark border border-gray-200 dark:border-gray-800 text-gray-600 dark:text-gray-300 text-sm font-medium">Status <span className="material-symbols-outlined text-[18px]">expand_more</span></button>
        </div>

        {['Hari Ini', 'Kemarin'].map(dateGroup => (
          <div key={dateGroup} className="space-y-3">
            <div className="flex items-center justify-between pt-2">
              <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">{dateGroup}</h2>
              <span className="text-xs font-medium text-gray-400">Total: Rp {dateGroup === 'Hari Ini' ? '195.000' : '320.000'}</span>
            </div>
            {TRANSACTIONS.filter(t => t.date === dateGroup).map(transaction => (
              <div key={transaction.id} className="bg-white dark:bg-card-dark rounded-2xl p-4 shadow-sm border border-gray-100 dark:border-gray-800 flex flex-col gap-3 relative overflow-hidden active:scale-[0.99] transition-transform">
                <div className={`absolute left-0 top-0 bottom-0 w-1.5 rounded-l-2xl ${
                  transaction.status === 'Lunas' ? 'bg-green-500' : 
                  transaction.status === 'Pending' ? 'bg-orange-400' : 'bg-red-500'
                }`}></div>
                <div className="flex justify-between items-start pl-2">
                  <div className="flex gap-3">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${
                      transaction.status === 'Lunas' ? 'bg-green-50 dark:bg-green-500/10 text-green-600' :
                      transaction.status === 'Pending' ? 'bg-orange-50 dark:bg-orange-500/10 text-orange-500' :
                      'bg-red-50 dark:bg-red-500/10 text-red-500'
                    }`}>
                      <span className="material-symbols-outlined">
                        {transaction.status === 'Lunas' ? 'check' : 
                         transaction.status === 'Pending' ? 'hourglass_empty' : 'close'}
                      </span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs text-gray-500 dark:text-gray-400 font-medium mb-0.5">#{transaction.id} • {transaction.time}</span>
                      <h3 className={`text-lg font-bold leading-tight ${transaction.status === 'Gagal' ? 'text-gray-400 line-through decoration-red-500/30' : 'text-gray-900 dark:text-white'}`}>
                        Rp {transaction.amount.toLocaleString()}
                      </h3>
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-1">
                    <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${
                      transaction.status === 'Lunas' ? 'bg-green-100 dark:bg-green-500/20 text-green-700' :
                      transaction.status === 'Pending' ? 'bg-orange-100 dark:bg-orange-500/20 text-orange-700' :
                      'bg-red-100 dark:bg-red-500/20 text-red-700'
                    }`}>
                      {transaction.status}
                    </span>
                    <div className="flex items-center gap-1 text-gray-400">
                      <span className="material-symbols-outlined text-[16px]">
                        {transaction.method === 'QRIS' ? 'qr_code_2' : 
                         transaction.method === 'Tunai' ? 'account_balance_wallet' : 'credit_card'}
                      </span>
                      <span className="text-xs">{transaction.method}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}

        <div className="pt-12 pb-4 flex items-center gap-4">
          <div className="h-px bg-gray-200 dark:bg-gray-800 flex-1"></div>
          <span className="text-xs text-gray-400 font-mono uppercase">Contoh Tampilan Kosong</span>
          <div className="h-px bg-gray-200 dark:bg-gray-800 flex-1"></div>
        </div>

        <div className="flex flex-col items-center justify-center py-12 px-4 text-center rounded-3xl bg-white/50 dark:bg-card-dark/50 border border-dashed border-gray-300 dark:border-gray-700">
          <div className="w-20 h-20 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center mb-4 relative">
            <div className="absolute -top-1 -right-1 w-6 h-6 bg-red-100 rounded-full flex items-center justify-center">
              <span className="material-symbols-outlined text-red-500 text-sm">priority_high</span>
            </div>
            <span className="material-symbols-outlined text-gray-400 text-4xl">receipt_long</span>
          </div>
          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Belum Ada Transaksi</h3>
          <p className="text-gray-500 text-sm max-w-[240px] leading-relaxed">Transaksi penjualan Anda akan muncul di sini. Mulai berjualan sekarang!</p>
          <button className="mt-6 text-primary font-semibold text-sm flex items-center gap-1 active:scale-95">
            <span className="material-symbols-outlined text-lg">add_circle</span> Buat Transaksi Baru
          </button>
        </div>
      </main>

      <div className="fixed bottom-28 right-4 z-50">
        <button className="flex items-center justify-center w-14 h-14 bg-primary text-white rounded-full shadow-lg shadow-primary/30 active:scale-95 transition-all border-4 border-[#fdfdfe] dark:border-background-dark">
          <span className="material-symbols-outlined text-[28px]">add</span>
        </button>
      </div>
    </div>
  );
};

export default Transactions;
