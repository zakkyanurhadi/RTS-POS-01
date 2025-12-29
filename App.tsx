
import React, { useState } from 'react';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import LoginScreen from './screens/LoginScreen';
import DashboardScreen from './screens/DashboardScreen';
import CreateStoreScreen from './screens/CreateStoreScreen';
import AccountScreen from './screens/AccountScreen';
import ProfileModal from './components/ProfileModal';
import { AppRoute, User } from './types';

const App: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showProfileModal, setShowProfileModal] = useState(false);
  const [user, setUser] = useState<User>({
    name: 'Budi Santoso',
    businessName: 'Warung Berkah',
    email: 'budi.santoso@example.com',
    profilePic: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBYnT0HvQ5I1TE7jmcVLiDWxaOnLtP-6l7uaRvZqQaT7z3fUFW5DTL7cMtH6EyKRBO3wEWUoVJpsBj1d39BNN5jHvGq5FSlIQ1tyqPAio90wz4iwGCY-jGIXg0jIGXMWL18SbThjT0i44X0_T7SOoe4bmMsPSKMWnUVXKMdirjMK4fEWEctg8Eb7DYVOC3DxTZUu9lBkAEFPWJMTOEUSL3rof6UST25tDodovXYEKGGTMvWcvL0iikm8KBg9w4A4aJwi8bqulQ9fWY'
  });

  const handleLogin = () => {
    setIsAuthenticated(true);
    // Simulate prompt for profile completion if phone is missing
    if (!user.phone) {
      setTimeout(() => setShowProfileModal(true), 1000);
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  const handleSaveProfile = (phone: string) => {
    setUser(prev => ({ ...prev, phone }));
    setShowProfileModal(false);
  };

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark max-w-md mx-auto shadow-xl relative overflow-x-hidden">
      <Routes>
        <Route 
          path={AppRoute.LOGIN} 
          element={!isAuthenticated ? <LoginScreen onLogin={handleLogin} /> : <Navigate to={AppRoute.DASHBOARD} />} 
        />
        <Route 
          path={AppRoute.DASHBOARD} 
          element={isAuthenticated ? <DashboardScreen /> : <Navigate to={AppRoute.LOGIN} />} 
        />
        <Route 
          path={AppRoute.CREATE_STORE} 
          element={isAuthenticated ? <CreateStoreScreen /> : <Navigate to={AppRoute.LOGIN} />} 
        />
        <Route 
          path={AppRoute.ACCOUNT} 
          element={isAuthenticated ? <AccountScreen user={user} onLogout={handleLogout} /> : <Navigate to={AppRoute.LOGIN} />} 
        />
      </Routes>

      {showProfileModal && (
        <ProfileModal 
          user={user} 
          onClose={() => setShowProfileModal(false)} 
          onSave={handleSaveProfile} 
        />
      )}
    </div>
  );
};

export default App;
