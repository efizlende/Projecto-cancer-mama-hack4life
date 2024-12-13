import React from 'react';
import { Bell, Search } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-[#DCDCDC] shadow-md"> {/* Cor de fundo ajustada para #82ca9d */}
      <div className="flex justify-between items-center px-4 py-4 md:px-6">
        <div className="flex items-center flex-1">
          <div className="relative w-full max-w-md">
            <input
              type="text"
              placeholder="Pesquisar..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
            />
            <Search className="w-5 h-5 text-gray-400 absolute left-3 top-2.5" />
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <button className="relative p-2 text-gray-600 hover:text-gray-900" title="Notifications">
            <Bell className="w-6 h-6" />
            <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>
          <div className="flex items-center gap-3">
            <img
              src="../../../public/admin.png"
              className="w-8 h-8 rounded-full"
            />
            <span className="text-sm font-medium text-gray-700">Admin</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
