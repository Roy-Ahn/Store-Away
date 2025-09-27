
import React, { useState } from 'react';
import { Header } from './components/Header';
import { ListingGrid } from './components/ListingGrid';
import { MapPlaceholder } from './components/MapPlaceholder';
import { LoginModal } from './components/LoginModal';
import { User, UserRole } from './types';
import { LISTINGS, DEMO_USERS } from './constants';

type View = 'listings' | 'map';

const App: React.FC = () => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [view, setView] = useState<View>('listings');
  const [isLoginModalOpen, setLoginModalOpen] = useState<boolean>(false);

  const handleLogin = (role: UserRole) => {
    setCurrentUser(DEMO_USERS[role]);
    setLoginModalOpen(false);
  };

  const handleLogout = () => {
    setCurrentUser(null);
  };

  return (
    <div className="min-h-screen bg-brand-gray-100 font-sans">
      <Header
        currentUser={currentUser}
        onLoginClick={() => setLoginModalOpen(true)}
        onLogoutClick={handleLogout}
        onViewChange={setView}
        currentView={view}
      />
      <main className="container mx-auto px-4 py-8">
        {view === 'listings' ? (
          <ListingGrid listings={LISTINGS} />
        ) : (
          <MapPlaceholder listings={LISTINGS} />
        )}
      </main>
      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={() => setLoginModalOpen(false)}
        onLogin={handleLogin}
      />
    </div>
  );
};

export default App;
   