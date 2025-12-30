
import React, { useState, useEffect } from 'react';
import { AreaChart, Area, XAxis, YAxis, ResponsiveContainer, BarChart, Bar, Tooltip } from 'recharts';
import { getBusinessInsights } from '../services/geminiService';

const dataTrend = [
  { name: 'Sen', value: 1.1 },
  { name: 'Sel', value: 3.5 },
  { name: 'Rab', value: 2.2 },
  { name: 'Kam', value: 5.2 },
  { name: 'Jum', value: 2.0 },
  { name: 'Sab', value: 4.1 },
  { name: 'Min', value: 1.5 },
];

const dataVolume = [
  { name: 'SEN', val: 12 },
  { name: 'SEL', val: 25 },
  { name: 'RAB', val: 45 },
  { name: 'KAM', val: 18 },
  { name: 'JUM', val: 30 },
  { name: 'SAB', val: 48 },
  { name: 'MIN', val: 35 },
];

const Summary: React.FC = () => {
  const [insight, setInsight] = useState<string | null>(null);
  const [loadingInsight, setLoadingInsight] = useState(false);

  const fetchInsight = async () => {
    setLoadingInsight(true);
    const result = await getBusinessInsights(1500000, 45);
    setInsight(result);
    setLoadingInsight(false);
  };

  useEffect(() => {
    // Optional: fetch once on mount or keep it manual
  }, []);

  return (
    <div className="animate-in fade-in slide-in-from-right-4 duration-300 pb-32">
      <header className="sticky top-0 z-30 bg-[#fdfdfe] px-4 pt-6 pb-2 border-b border-gray-200 dark:border-gray-800">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">Ringkasan Bisnis</h1>
          <button className="p-2 rounded-full active:bg-gray-100 dark:active:bg-gray-800">
            <span className="material-symbols-outlined text-gray-600 dark:text-gray-400">notifications</span>
          </button>
        </div>
        <div className="flex gap-3 overflow-x-auto no-scrollbar pb-2">
          <button className="group flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-primary text-white pl-4 pr-3 shadow-md active:scale-95 transition-transform">
            <span className="text-sm font-medium">Hari Ini</span>
            <span className="material-symbols-outlined text-[18px]">keyboard_arrow_down</span>
          </button>
          <button className="flex h-9 shrink-0 items-center justify-center rounded-lg bg-white dark:bg-card-dark border border-gray-200 dark:border-gray-800 px-4">
            <span className="text-sm font-medium text-gray-600 dark:text-gray-300">Minggu Ini</span>
          </button>
          <button className="flex h-9 shrink-0 items-center justify-center rounded-lg bg-white dark:bg-card-dark border border-gray-200 dark:border-gray-800 px-4">
            <span className="text-sm font-medium text-gray-600 dark:text-gray-300">Bulan Ini</span>
          </button>
          <button className="w-9 h-9 shrink-0 flex items-center justify-center rounded-lg bg-white dark:bg-card-dark border border-gray-200 dark:border-gray-800">
            <span className="material-symbols-outlined text-gray-600 dark:text-gray-300 text-[20px]">calendar_month</span>
          </button>
        </div>
      </header>

      <main className="px-4 pt-6 flex flex-col gap-6">
        <section className="grid grid-cols-2 gap-3">
          <div className="col-span-2 flex flex-col gap-1 rounded-xl p-5 bg-white dark:bg-card-dark shadow-sm border border-gray-100 dark:border-gray-800">
            <div className="flex justify-between items-start">
              <div className="p-2 rounded-lg bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
                <span className="material-symbols-outlined">receipt_long</span>
              </div>
              <span className="flex items-center text-emerald-600 bg-emerald-50 dark:bg-emerald-900/30 px-2 py-0.5 rounded-full text-xs font-semibold">
                <span className="material-symbols-outlined text-[14px] mr-0.5">trending_up</span> 12%
              </span>
            </div>
            <p className="text-gray-500 dark:text-gray-400 text-sm font-medium mt-3">Total Transaksi</p>
            <p className="text-3xl font-bold text-gray-900 dark:text-white">45</p>
          </div>
          <div className="flex flex-col gap-1 rounded-xl p-4 bg-white dark:bg-card-dark shadow-sm border border-gray-100 dark:border-gray-800">
            <div className="p-2 rounded-lg bg-orange-50 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 w-fit mb-2">
              <span className="material-symbols-outlined text-[20px]">account_balance_wallet</span>
            </div>
            <p className="text-gray-500 dark:text-gray-400 text-xs font-medium">Penjualan Kotor</p>
            <p className="text-lg font-bold text-gray-900 dark:text-white truncate">Rp 5.2jt</p>
            <p className="text-xs text-emerald-600 font-medium">+5%</p>
          </div>
          <div className="flex flex-col gap-1 rounded-xl p-4 bg-white dark:bg-card-dark shadow-sm border border-gray-100 dark:border-gray-800">
            <div className="p-2 rounded-lg bg-purple-50 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 w-fit mb-2">
              <span className="material-symbols-outlined text-[20px]">payments</span>
            </div>
            <p className="text-gray-500 dark:text-gray-400 text-xs font-medium">Penjualan Bersih</p>
            <p className="text-lg font-bold text-gray-900 dark:text-white truncate">Rp 4.85jt</p>
            <p className="text-xs text-emerald-600 font-medium">+4%</p>
          </div>
        </section>

        <section className="bg-white dark:bg-card-dark rounded-xl p-5 shadow-sm border border-gray-100 dark:border-gray-800">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-gray-900 dark:text-white font-bold flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">auto_awesome</span> 
              Saran AI Bisnis
            </h3>
            <button 
              onClick={fetchInsight}
              disabled={loadingInsight}
              className="text-xs font-semibold text-primary active:scale-95 disabled:opacity-50"
            >
              {loadingInsight ? 'Menganalisis...' : 'Dapatkan Analisis'}
            </button>
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-300 bg-gray-50 dark:bg-gray-800/50 p-3 rounded-lg border border-gray-100 dark:border-gray-700 italic">
            {insight || "Gunakan AI untuk menganalisis performa bisnis Anda hari ini."}
          </div>
        </section>

        <section className="flex flex-col rounded-xl bg-white dark:bg-card-dark shadow-sm border border-gray-100 dark:border-gray-800 p-5">
          <div className="flex justify-between items-end mb-4">
            <div>
              <h3 className="text-gray-500 dark:text-gray-400 text-sm font-medium mb-1">Tren Penjualan</h3>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">Rp 5.200.000</p>
            </div>
            <p className="text-xs text-gray-400 mb-1">10 Okt - 16 Okt</p>
          </div>
          <div className="h-48 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={dataTrend}>
                <defs>
                  <linearGradient id="colorVal" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#ec1313" stopOpacity={0.2}/>
                    <stop offset="95%" stopColor="#ec1313" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <Area type="monotone" dataKey="value" stroke="#ec1313" strokeWidth={3} fillOpacity={1} fill="url(#colorVal)" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#9ca3af' }} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </section>

        <section className="flex flex-col rounded-xl bg-white dark:bg-card-dark shadow-sm border border-gray-100 dark:border-gray-800 p-5">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h3 className="text-gray-500 dark:text-gray-400 text-sm font-medium mb-1">Volume Transaksi</h3>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">45 Trx</p>
            </div>
            <span className="flex items-center text-emerald-600 bg-emerald-50 dark:bg-emerald-900/30 px-2 py-1 rounded-lg text-xs font-semibold">
              +12%
            </span>
          </div>
          <div className="h-40 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={dataVolume}>
                <Bar 
                  dataKey="val" 
                  fill="#ec1313" 
                  radius={[4, 4, 0, 0]} 
                  opacity={(entry: any) => entry.name === 'RAB' ? 1 : 0.2}
                />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#9ca3af' }} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Summary;
