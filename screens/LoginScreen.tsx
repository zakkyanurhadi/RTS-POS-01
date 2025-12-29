
import React, { useState } from 'react';

interface LoginScreenProps {
  onLogin: () => void;
}

const LoginScreen: React.FC<LoginScreenProps> = ({ onLogin }) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin();
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 animate-in fade-in duration-500">
      <div className="w-full max-w-[400px] flex flex-col gap-8">
        {/* Brand Header */}
        <div className="flex flex-col items-center gap-4">
          <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center shadow-lg shadow-primary/20">
            <span className="material-symbols-outlined text-white text-4xl">storefront</span>
          </div>
          <h1 className="text-2xl font-bold tracking-tight text-primary">RST POS</h1>
        </div>

        {/* Headline */}
        <div className="text-center space-y-1">
          <h2 className="text-[28px] font-bold text-text-main leading-tight">Selamat Datang Kembali</h2>
          <p className="text-text-secondary text-base">Kelola bisnis UMKM Anda dengan mudah</p>
        </div>

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-5 mt-2">
          {/* Email Field */}
          <div className="flex flex-col gap-2">
            <label className="text-secondary text-sm font-semibold pl-1" htmlFor="email">Email</label>
            <div className="relative">
              <input 
                className="w-full h-12 px-4 rounded-lg border-gray-200 bg-white focus:border-primary focus:ring-1 focus:ring-primary text-base placeholder:text-gray-400 shadow-sm transition-all"
                id="email" 
                type="email" 
                placeholder="masukkan@email.com"
                required
              />
              <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
                <span className="material-symbols-outlined text-[20px]">mail</span>
              </div>
            </div>
          </div>

          {/* Password Field */}
          <div className="flex flex-col gap-2">
            <label className="text-secondary text-sm font-semibold pl-1" htmlFor="password">Kata Sandi</label>
            <div className="relative">
              <input 
                className="w-full h-12 px-4 pr-12 rounded-lg border-gray-200 bg-white focus:border-primary focus:ring-1 focus:ring-primary text-base placeholder:text-gray-400 shadow-sm transition-all"
                id="password" 
                type={showPassword ? "text" : "password"} 
                placeholder="Masukkan kata sandi"
                required
              />
              <button 
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-0 top-0 h-full w-12 flex items-center justify-center text-gray-400 hover:text-primary transition-colors"
              >
                <span className="material-symbols-outlined text-[20px]">
                  {showPassword ? "visibility_off" : "visibility"}
                </span>
              </button>
            </div>
            <div className="flex justify-end mt-1">
              <button type="button" className="text-sm font-medium text-primary hover:text-red-700 transition-colors">
                Lupa Kata Sandi?
              </button>
            </div>
          </div>

          {/* Primary Action Button */}
          <button className="w-full bg-primary hover:bg-[#660000] text-white font-bold h-12 rounded-lg shadow-md shadow-primary/30 transition-all active:scale-[0.98] flex items-center justify-center gap-2 mt-2">
            <span>Masuk</span>
            <span className="material-symbols-outlined text-[20px]">login</span>
          </button>
        </form>

        {/* Divider */}
        <div className="relative flex items-center py-2">
          <div className="flex-grow border-t border-gray-200"></div>
          <span className="mx-4 text-gray-400 text-sm font-medium">Atau</span>
          <div className="flex-grow border-t border-gray-200"></div>
        </div>

        {/* Social Login */}
        <button 
          onClick={onLogin}
          className="w-full bg-white border border-gray-200 hover:bg-gray-50 text-secondary font-medium h-12 rounded-lg transition-all active:scale-[0.98] flex items-center justify-center gap-3 shadow-sm"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"></path>
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"></path>
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"></path>
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"></path>
          </svg>
          Masuk dengan Google
        </button>

        {/* Sign Up Link */}
        <div className="text-center">
          <p className="text-sm text-gray-500">
            Belum punya akun? <button className="font-bold text-primary hover:underline">Daftar Disini</button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;
