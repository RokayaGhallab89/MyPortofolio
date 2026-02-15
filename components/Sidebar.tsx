import React from 'react';
import { Home, User, FileText, FolderOpen, Mail, Server, Linkedin, Github } from 'lucide-react';
import { NavItem } from '../types';
import profileImage from '../assets/profile.jpeg';

interface SidebarProps {
  isOpen: boolean;
  activeSection: string;
  onNavigate: (id: string) => void;
  toggleSidebar: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ isOpen, activeSection, onNavigate, toggleSidebar }) => {
  const navItems: NavItem[] = [
    { id: 'hero', label: 'Home', icon: 'Home' },
    { id: 'about', label: 'About', icon: 'User' },
    { id: 'resume', label: 'Resume', icon: 'FileText' },
    { id: 'portfolio', label: 'Portfolio', icon: 'FolderOpen' },
    { id: 'services', label: 'Services', icon: 'Server' },
    { id: 'contact', label: 'Contact', icon: 'Mail' },
  ];

  const getIcon = (name: string) => {
    switch (name) {
      case 'Home': return <Home size={20} />;
      case 'User': return <User size={20} />;
      case 'FileText': return <FileText size={20} />;
      case 'FolderOpen': return <FolderOpen size={20} />;
      case 'Server': return <Server size={20} />;
      case 'Mail': return <Mail size={20} />;
      default: return <Home size={20} />;
    }
  };

  return (
    <>
      {/* Mobile Backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          onClick={toggleSidebar}
        />
      )}

      {/* Sidebar Container */}
      <aside className={`
        fixed top-0 left-0 bottom-0 z-50 w-72 bg-dark text-white transition-transform duration-300 ease-in-out overflow-y-auto
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        <div className="flex flex-col items-center p-6">
          <div className="w-32 h-32 rounded-full border-8 border-gray-800 overflow-hidden mb-4 bg-gray-700">
            <img
              src={profileImage}
              alt="Rokaya Ali - Frontend Developer"
              className="w-full h-full object-cover"
            />
          </div>

          <h1 className="text-2xl font-semibold font-heading mb-2">Rokaya Ali</h1>
          <div className="flex space-x-3 mb-8">
            <a href="https://github.com/RokayaGhallab89" target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-800 rounded-full hover:bg-primary transition-colors">
              <Github size={16} />
            </a>
            <a href="https://www.linkedin.com/in/rokaya-ghallab-76385721b" target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-800 rounded-full hover:bg-primary transition-colors">
              <Linkedin size={16} />
            </a>
            <a href="mailto:rokayaghallab4@gmail.com" className="p-2 bg-gray-800 rounded-full hover:bg-primary transition-colors">
              <Mail size={16} />
            </a>
          </div>
        </div>

        <nav className="px-6 pb-6">
          <ul className="space-y-4">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => {
                    onNavigate(item.id);
                    if (window.innerWidth < 1024) toggleSidebar();
                  }}
                  className={`
                    flex items-center space-x-3 w-full text-left group
                    ${activeSection === item.id ? 'text-primary' : 'text-gray-400 hover:text-white'}
                  `}
                >
                  <span className={`
                    ${activeSection === item.id ? 'text-primary' : 'text-gray-500 group-hover:text-primary'}
                  `}>
                    {getIcon(item.icon)}
                  </span>
                  <span className="text-lg font-normal tracking-wide">{item.label}</span>
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <div className="mt-auto p-6 text-center text-sm text-gray-500">
          {/* يمكن إضافة محتوى هنا إذا أردت */}
        </div>
      </aside>
    </>
  );
};