
import React, { useState } from 'react';
import { User } from '../types';

interface ProfileModalProps {
  user: User;
  onClose: () => void;
  onSave: (phone: string) => void;
}

const ProfileModal: React.FC<ProfileModalProps> = ({ user, onClose, onSave }) => {
  const [phone, setPhone] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (phone.trim()) {
      onSave(phone);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-[2px] animate-in fade-in duration-300">
      <div className="w-full max-w-[340px] bg-white rounded-xl shadow-2xl flex flex-col relative overflow-hidden animate-in zoom-in-95 duration-300">
        <div className="absolute top-0 left-0 w-full h-1.5 bg-primary" />
        
        <div className="px-6 pt-8 pb-6 flex flex-col">
          <div className="flex flex-col items-center text-center mb-6">
            <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4 text-primary">
              <span className="material-symbols-outlined text-[28px]">badge</span>
            </div>
            <h3 className="text-text-main text-xl font-bold">Lengkapi Profil</h3>
            <p className="text-text-secondary text-sm mt-2 px-2">
              Mohon lengkapi data diri Anda untuk melanjutkan transaksi.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="flex flex-col gap-1.5 opacity-60">
              <label className="text-text-main text-xs font-semibold uppercase">Nama Lengkap</label>
              <div className="relative">
                <input 
                  disabled 
                  value={user.name} 
                  className="w-full rounded-lg bg-gray-100 border-none text-gray-500 text-sm h-12 pl-11 pr-4 cursor-not-allowed" 
                />
                <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 text-[20px]">lock</span>
              </div>
            </div>

            <div className="flex flex-col gap-1.5 opacity-60">
              <label className="text-text-main text-xs font-semibold uppercase">Email</label>
              <div className="relative">
                <input 
                  disabled 
                  value={user.email} 
                  className="w-full rounded-lg bg-gray-100 border-none text-gray-500 text-sm h-12 pl-11 pr-4 cursor-not-allowed" 
                />
                <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 text-[20px]">lock</span>
              </div>
            </div>

            <div className="flex flex-col gap-1.5 mt-1">
              <label className="text-text-main text-xs font-semibold uppercase">Nomor WhatsApp / HP</label>
              <div className="relative group">
                <input 
                  autoFocus 
                  type="tel" 
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="0812..." 
                  className="w-full rounded-lg bg-white border border-gray-300 text-text-main text-base h-12 pl-11 pr-4 focus:ring-2 focus:ring-primary/20 focus:border-primary placeholder:text-gray-400 shadow-sm transition-all"
                  required
                />
                <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-primary transition-colors text-[20px]">smartphone</span>
              </div>
              <p className="text-[11px] text-text-secondary mt-0.5">Wajib diisi untuk verifikasi akun.</p>
            </div>

            <div className="flex gap-3 mt-4">
              <button 
                type="button" 
                onClick={onClose}
                className="flex-1 h-11 flex items-center justify-center rounded-lg border border-gray-200 bg-transparent text-text-main text-sm font-bold hover:bg-gray-50 transition-colors"
              >
                Batal
              </button>
              <button 
                type="submit"
                className="flex-1 h-11 flex items-center justify-center rounded-lg bg-primary text-white text-sm font-bold shadow-md hover:bg-primary-hover transition-all active:scale-[0.98]"
              >
                Simpan Data
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProfileModal;
