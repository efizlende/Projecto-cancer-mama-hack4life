import React, { useState } from 'react';
import { Menu } from 'lucide-react';
import Header from '../../components/admin/Header';
import Sidebar from './../admin/Sidebar';
import Footer from '../../components/admin/footer';
import Dashboard from '../../pages/admin/Dashboard';

const AdminLayout: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-gray-900/50 lg:hidden z-30"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      {/* Main Content */}
      <div className="lg:pl-64">
        {/* Mobile Header */}
        <div className="sticky top-0 z-20 lg:hidden">
          <div className="flex items-center p-4 bg-white border-b">
            <button
              onClick={() => setSidebarOpen(true)}
              className="p-1.5 rounded-lg text-gray-600 hover:bg-gray-100"
            >
              <Menu className="w-6 h-6" />
            </button>
            <h1 className="ml-4 text-lg font-semibold text-gray-800">
              Gestão de Estágios
            </h1>
          </div>
        </div>

        {/* Desktop Header */}
        <div className="sticky top-0 z-0 hidden lg:block">
          <Header />
        </div>

        {/* Page Content */}
        <main className="p-4 md:p-6 lg:p-8">
          <Dashboard/>
          <Footer></Footer>
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
