import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Layout as LayoutIcon,
  Users, 
  UserPlus, 
  FileText,
  Menu
} from 'lucide-react';
import MenuIcon from '../../../public/logo.png'; // Importar a imagem

interface MenuItem {
  title: string;
  icon: React.ReactNode;
  path: string;
}

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const location = useLocation();
  
  const menuItems: MenuItem[] = [
    { 
      title: 'Home', 
      icon: <LayoutIcon className="w-5 h-5" />, 
      path: '/admin/dashboard' 
    },
    { 
      title: 'Conteudos', 
      icon: <FileText className="w-5 h-5" />, 
      path: '/admin/dashboard/conteudos' 
    },
    { 
      title: 'Usuarios', 
      icon: <Users className="w-5 h-5" />, 
      path: '/admin/dashboard/management/users' 
    },
    { 
      title: 'Preferencias', 
      icon: <UserPlus className="w-5 h-5" />, 
      path: '/admin/dashboard/settings' 
    },
  ];

  const isActivePath = (path: string): boolean => {
    if (path === '/') {
      return location.pathname === path;
    }
    return location.pathname.startsWith(path);
  };

  return (
    <aside className={`
      fixed top-0 left-0 z-0 w-64 h-screen transition-transform duration-300 ease-in-out
      ${isOpen ? 'translate-x-0' : '-translate-x-full'}
      lg:translate-x-0 bg-[#DCDCDC] shadow-lg  /* Cor de fundo ajustada */
    `}>
      <div className="flex flex-col h-full">
        <div className="flex items-center justify-between p-4 border-b">
          <div className="flex items-center">
            <img src={MenuIcon} alt="Menu Icon" className="w-6 h-6 mr-2" /> {/* Imagem ao lado do título */}
            <h2 className="text-lg font-semibold">VivaMae</h2>
          </div>
          <button onClick={onClose} className="lg:hidden">
            <Menu className="w-6 h-6" />
          </button>
        </div>
        <nav className="flex-1 p-4 overflow-y-auto">
          <ul className="space-y-2">
            {menuItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`flex items-center p-2 rounded-lg hover:bg-gray-100 ${
                    isActivePath(item.path) ? 'bg-gray-200' : ''
                  }`}
                >
                  {item.icon}
                  <span className="ml-3">{item.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
