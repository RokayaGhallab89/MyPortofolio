import React, { useState, useEffect } from 'react';
import { Sidebar } from './components/Sidebar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Resume } from './components/Resume';
import { Portfolio } from './components/Portfolio';
import { Services } from './components/Services';
import { Contact } from './components/Contact';
import { Menu } from 'lucide-react';

// Declare AOS on window
declare global {
  interface Window {
    AOS: any;
  }
}

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleNavigate = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    // Initialize AOS
    if (typeof window !== 'undefined' && window.AOS) {
      window.AOS.init({
        duration: 1000,
        easing: 'ease-in-out',
        once: true,
        mirror: false,
        offset: 50
      });
    }

    const handleScroll = () => {
      const sections = ['hero', 'about', 'skills', 'resume', 'portfolio', 'services', 'contact'];
      
      // Find the current section
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // 100px offset to trigger a bit earlier
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="font-sans antialiased text-gray-900 bg-white">
      {/* Mobile Toggle */}
      <button 
        className="lg:hidden fixed top-4 right-4 z-50 p-3 bg-primary text-white rounded-full shadow-lg hover:bg-blue-600 transition-colors"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        <Menu size={24} />
      </button>

      {/* Sidebar */}
      <Sidebar 
        isOpen={isSidebarOpen} 
        activeSection={activeSection} 
        onNavigate={handleNavigate}
        toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
      />

      {/* Main Content */}
      <main className="lg:ml-72 transition-all duration-300">
        <Hero />
        <About />
        <Skills />
        <Resume />
        <Portfolio />
        <Services />
        <Contact />
      </main>
      
      {/* Footer / Scroll to top could go here */}
      <footer className="lg:ml-72 bg-light py-8 text-center text-sm text-gray-600">
        <p>© Copyright <span className="font-bold text-gray-900">Rokaya Ali</span>. All Rights Reserved</p>
        <p className="text-xs mt-1">Designed by <span className="text-primary">BootstrapMade</span> (Recreated in React)</p>
      </footer>
    </div>
  );
};

export default App;