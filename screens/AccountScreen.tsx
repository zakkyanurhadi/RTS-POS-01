
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { User, AppRoute } from '../types';

interface AccountScreenProps {
  user: User;
  onLogout: () => void;
}

const AccountScreen: React.FC<AccountScreenProps> = ({ user, onLogout }) => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen bg-background-light animate-in fade-in duration-300">
      {/* AppBar */}
      <header className="sticky top-0 z-50 bg-background-light/80 backdrop-blur-md border-b border-gray-200/50">
        <div className="flex items-center px-4 h-[52px]">
          <button onClick={() => navigate(-1)} className="text-primary">
            <span className="material-symbols-outlined">arrow_back</span>
          </button>
          <h2 className="flex-1 text-center text-secondary text-[17px] font-semibold pr-6">Akun</h2>
        </div>
      </header>

      <main className="flex-1 px-4 pb-10">
        {/* Profile Header */}
        <div className="flex flex-col items-center py-8">
          <div className="relative mb-4">
            <div 
              className="rounded-full h-24 w-24 border-4 border-white shadow-md bg-center bg-cover"
              style={{ backgroundImage: `url(${user.profilePic})` }}
            />
            <div className="absolute bottom-0 right-0 bg-primary rounded-full p-1.5 border-2 border-background-light text-white flex items-center justify-center cursor-pointer">
              <span className="material-symbols-outlined text-[16px]">edit</span>
            </div>
          </div>
          <div className="text-center mb-6">
            <h1 className="text-secondary text-xl font-bold">{user.name}</h1>
            <p className="text-gray-500 text-sm font-medium">{user.businessName}</p>
          </div>
          <button className="w-full h-11 bg-primary text-white rounded-xl font-semibold shadow-sm hover:bg-primary/90 transition-all active:scale-[0.98]">
            Edit Profil
          </button>
        </div>

        {/* Menu Sections */}
        <Section title="BANTUAN & DUKUNGAN">
          <MenuItem icon="mail" label="Hubungi via Email" iconBg="bg-primary/10" iconColor="text-primary" />
          <MenuItem icon="chat" label="Hubungi via WhatsApp" iconBg="bg-green-100" iconColor="text-[#25D366]" />
          <MenuItem icon="forum" label="Forum Komunitas" iconBg="bg-blue-100" iconColor="text-blue-600" />
        </Section>

        <Section title="INFO LEGAL">
          <MenuItem icon="shield" label="Kebijakan Privasi" />
          <MenuItem icon="description" label="Syarat & Ketentuan" />
        </Section>

        <Section>
          <MenuItem icon="logout" label="Keluar" onClick={onLogout} />
          <MenuItem icon="delete_forever" label="Hapus Akun" textColor="text-red-600" iconBg="bg-red-100" iconColor="text-red-600" />
        </Section>

        {/* Footer */}
        <div className="text-center mt-8 pb-4">
          <p className="text-gray-400 text-xs">RST POS v1.2.0 (Build 204)</p>
        </div>
      </main>
    </div>
  );
};

const Section: React.FC<{ title?: string; children: React.ReactNode }> = ({ title, children }) => (
  <div className="mb-6">
    {title && <h3 className="text-gray-500 text-xs font-semibold uppercase tracking-wider ml-4 mb-2">{title}</h3>}
    <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-200/50">
      {children}
    </div>
  </div>
);

const MenuItem: React.FC<{
  icon: string;
  label: string;
  iconBg?: string;
  iconColor?: string;
  textColor?: string;
  onClick?: () => void;
}> = ({ icon, label, iconBg = "bg-gray-100", iconColor = "text-gray-600", textColor = "text-secondary", onClick }) => (
  <div 
    onClick={onClick}
    className="flex items-center gap-3 px-4 py-3.5 border-b border-gray-100 last:border-0 active:bg-gray-50 transition-colors cursor-pointer"
  >
    <div className={`flex items-center justify-center rounded-lg shrink-0 w-8 h-8 ${iconBg} ${iconColor}`}>
      <span className="material-symbols-outlined text-[20px]">{icon}</span>
    </div>
    <p className={`text-[15px] font-medium flex-1 ${textColor}`}>{label}</p>
    <span className="material-symbols-outlined text-gray-400 text-[20px]">chevron_right</span>
  </div>
);

export default AccountScreen;
