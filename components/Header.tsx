
import React from 'react';
import { User } from '../types';
import { BoxIcon, GlobeIcon, ListIcon, LogOutIcon } from './icons/Icons';

interface HeaderProps {
  currentUser: User | null;
  onLoginClick: () => void;
  onLogoutClick: () => void;
  onViewChange: (view: 'listings' | 'map') => void;
  currentView: 'listings' | 'map';
}

export const Header: React.FC<HeaderProps> = ({
  currentUser,
  onLoginClick,
  onLogoutClick,
  onViewChange,
  currentView,
}) => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-10">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2 text-2xl font-bold text-brand-blue">
            <BoxIcon className="w-8 h-8"/>
            <span>Store Away</span>
          </div>
        </div>

        <div className="hidden md:flex items-center bg-brand-gray-100 rounded-full p-1">
          <button
            onClick={() => onViewChange('listings')}
            className={`px-4 py-2 text-sm font-semibold rounded-full flex items-center space-x-2 transition-colors duration-200 ${
              currentView === 'listings' ? 'bg-white text-brand-blue shadow' : 'text-brand-gray-500 hover:bg-brand-gray-200'
            }`}
          >
            <ListIcon className="w-5 h-5" />
            <span>List</span>
          </button>
          <button
            onClick={() => onViewChange('map')}
            className={`px-4 py-2 text-sm font-semibold rounded-full flex items-center space-x-2 transition-colors duration-200 ${
              currentView === 'map' ? 'bg-white text-brand-blue shadow' : 'text-brand-gray-500 hover:bg-brand-gray-200'
            }`}
          >
            <GlobeIcon className="w-5 h-5" />
            <span>Map</span>
          </button>
        </div>

        <div className="flex items-center space-x-4">
          {currentUser ? (
            <div className="flex items-center space-x-3">
              <span className="font-semibold text-brand-gray-700 hidden sm:block">Welcome, {currentUser.name}</span>
              <img src={currentUser.avatarUrl} alt={currentUser.name} className="w-10 h-10 rounded-full border-2 border-brand-blue-light" />
              <button
                onClick={onLogoutClick}
                className="p-2 rounded-full text-brand-gray-500 hover:bg-brand-gray-100 hover:text-brand-gray-900 transition-colors"
                aria-label="Logout"
              >
                <LogOutIcon className="w-6 h-6" />
              </button>
            </div>
          ) : (
            <button
              onClick={onLoginClick}
              className="px-4 py-2 bg-brand-blue hover:bg-brand-blue-light text-white font-semibold rounded-lg shadow-sm transition-transform duration-200 hover:scale-105"
            >
              Login
            </button>
          )}
        </div>
      </div>
    </header>
  );
};
   