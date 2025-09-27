
import React from 'react';
import { UserRole } from '../types';
import { DEMO_USERS } from '../constants';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLogin: (role: UserRole) => void;
}

export const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose, onLogin }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-lg shadow-xl p-8 w-full max-w-md mx-4"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="text-center">
          <h2 className="text-2xl font-bold text-brand-gray-900 mb-2">Welcome to Store Away</h2>
          <p className="text-brand-gray-500 mb-6">Please select a demo account to continue.</p>
        </div>
        <div className="space-y-4">
          <button
            onClick={() => onLogin(UserRole.Buyer)}
            className="w-full flex items-center p-4 border border-brand-gray-200 rounded-lg hover:bg-brand-gray-100 hover:border-brand-blue transition-colors"
          >
            <img src={DEMO_USERS.BUYER.avatarUrl} alt="Buyer" className="w-12 h-12 rounded-full mr-4" />
            <div>
              <p className="font-bold text-left text-brand-gray-800">Login as a Buyer</p>
              <p className="text-sm text-left text-brand-gray-500">Browse and book storage spaces.</p>
            </div>
          </button>
          <button
            onClick={() => onLogin(UserRole.Seller)}
            className="w-full flex items-center p-4 border border-brand-gray-200 rounded-lg hover:bg-brand-gray-100 hover:border-brand-blue transition-colors"
          >
            <img src={DEMO_USERS.SELLER.avatarUrl} alt="Seller" className="w-12 h-12 rounded-full mr-4" />
            <div>
              <p className="font-bold text-left text-brand-gray-800">Login as a Seller</p>
              <p className="text-sm text-left text-brand-gray-500">List and manage your spaces.</p>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};
   