
import React, { useState } from 'react';
import { PRODUCTS } from '../constants';

const Products: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('Semua');
  const categories = ['Semua', 'Coffee', 'Tea', 'Milk Based', 'Yakult Series', 'Lainnya'];

  const filteredProducts = activeCategory === 'Semua' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === activeCategory);

  return (
    <div className="flex flex-col min-h-full animate-in fade-in slide-in-from-right-4 duration-300 bg-[#fdfdfe]">
      <header className="sticky top-0 z-20 flex items-center justify-between bg-[#fdfdfe] px-4 py-3 border-b border-gray-100 dark:border-white/10">
        <button className="flex size-10 items-center justify-center active:bg-gray-100">
          <span className="material-symbols-outlined text-gray-900 dark:text-white">arrow_back</span>
        </button>
        <h1 className="text-lg font-bold text-gray-900 dark:text-white">Produk</h1>
        <button className="flex size-10 items-center justify-center text-primary">
          <span className="material-symbols-outlined">import_export</span>
        </button>
      </header>

      <div className="px-4 py-3 sticky top-[52px] z-10 bg-[#fdfdfe] border-b border-gray-50">
        <div className="relative flex w-full items-center">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <span className="material-symbols-outlined text-gray-400">search</span>
          </div>
          <input 
            className="block w-full border border-gray-200 bg-white dark:bg-card-dark py-3 pl-10 pr-4 text-sm text-gray-900 dark:text-white placeholder-gray-400 focus:ring-1 focus:ring-primary/20 outline-none" 
            placeholder="Cari nama produk, SKU..." 
            type="text" 
          />
        </div>
      </div>

      <div className="flex gap-2 overflow-x-auto px-4 pb-2 no-scrollbar">
        {categories.map(cat => (
          <button 
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`flex h-9 shrink-0 items-center justify-center rounded-lg px-4 transition-all ${
              activeCategory === cat 
                ? 'bg-primary text-white shadow-sm shadow-primary/30' 
                : 'bg-white dark:bg-card-dark border border-gray-100 dark:border-gray-800 text-gray-600 dark:text-gray-300'
            }`}
          >
            <p className="text-sm font-medium">{cat}</p>
          </button>
        ))}
      </div>

      <div className="flex flex-col flex-1 px-4 py-2 gap-3 pb-64">
        {filteredProducts.map(product => (
          <div key={product.id} className="group relative flex items-center justify-between gap-3 rounded-xl bg-white dark:bg-card-dark p-3 shadow-sm border border-transparent dark:border-gray-800 active:border-primary/20 transition-colors">
            <div className="flex items-center gap-3 overflow-hidden">
              <div className="relative shrink-0 size-16 overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                {product.image ? (
                  <img src={product.image} alt={product.name} className="h-full w-full object-cover" />
                ) : (
                  <span className="material-symbols-outlined text-gray-300 dark:text-gray-600 text-3xl">local_shipping</span>
                )}
              </div>
              <div className="flex flex-col min-w-0">
                <p className="text-base font-semibold text-gray-900 dark:text-white truncate">{product.name}</p>
                <p className="text-primary font-bold text-sm">Rp {product.price.toLocaleString()}</p>
                <div className="mt-1 flex items-center gap-1">
                  <span className={`inline-flex items-center rounded px-1.5 py-0.5 text-xs font-medium ${
                    product.stock === 'infinite' 
                      ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400' 
                      : (product.stock as number) <= 5 
                        ? 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400' 
                        : 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400'
                  }`}>
                    Stok: {product.stock === 'infinite' ? '∞' : product.stock}
                  </span>
                </div>
              </div>
            </div>
            <button className="flex size-8 shrink-0 items-center justify-center rounded-full text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800">
              <span className="material-symbols-outlined">more_vert</span>
            </button>
          </div>
        ))}
      </div>

      <div className="fixed bottom-28 right-4 z-30">
        <button className="flex size-14 items-center justify-center rounded-full bg-primary shadow-lg shadow-primary/40 active:scale-95 transition-all text-white border-4 border-[#fdfdfe] dark:border-background-dark">
          <span className="material-symbols-outlined" style={{ fontSize: '28px' }}>add</span>
        </button>
      </div>
    </div>
  );
};

export default Products;
