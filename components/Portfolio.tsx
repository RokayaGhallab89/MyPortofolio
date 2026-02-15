import React, { useState } from 'react';
import { Project } from '../types';
import { Link as LinkIcon, ExternalLink } from 'lucide-react';

export const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState('all');

  interface RealProject extends Project {
    link?: string;
    description?: string;
    tech?: string;
  }

  // Categories: ERP, CRM, Dashboard, Ecommerce, Websites
  const projects: RealProject[] = [
    // --- New Frontend Projects ---
    { 
      id: 101, 
      title: 'Admin Dashboard 2026', 
      category: 'dashboard', 
      image: '/assets/admin-dashboard.png',
      link: 'https://admin-dashboard-2026.netlify.app/',
      description: 'Modern Analytics Dashboard',
      tech: 'React.js / Next.js'
    },
          {
        id: 102,
        title: 'OmniPOS – Cashier System 2026',
        category: 'dashboard',
        image: '/assets/cashier-system.png',
        link: 'https://cashier-system.netlify.app/',
        description: 'Full-featured POS & Cashier System with sales, inventory, invoices, and reports management.',
        tech: 'React.js / Next.js / Tailwind CSS'
      },

    { 
      id: 103, 
      title: 'Freelance Marketplace', 
      category: 'ecommerce', 
      image: '/assets/freelance-marketplace.jpg',
      link: 'https://freelance-services-marketplace.netlify.app/',
      description: 'Services Marketplace Platform',
      tech: 'React.js'
    },
    { 
      id: 104, 
      title: 'CRM System 2026', 
      category: 'crm', 
      image: '/assets/crm-system.jpg',
      link: 'https://crm-system-2026.netlify.app/', 
      description: 'Comprehensive CRM Solution',
      tech: 'React.js'
    },
    { 
      id: 105, 
      title: 'Lumina Marketplace', 
      category: 'ecommerce', 
      image: '/assets/lumina-marketplace.jpg',
      link: 'https://lumina-marketplace.netlify.app/',
      description: 'Modern E-commerce Store',
      tech: 'React.js'
    },
    { 
      id: 106, 
      title: 'Software Portfolio', 
      category: 'websites', 
      image: '/assets/software-portfolio.jpg',
      link: 'https://software-portofolio.netlify.app/',
      description: 'Tech Portfolio Template',
      tech: 'React.js'
    },
    { 
      id: 107, 
      title: 'MediHub System', 
      category: 'websites', 
     image: '/assets/medihub-system.jpg',
      link: 'https://medihub-system.netlify.app/',
      description: 'Medical Management System',
      tech: 'React.js'
    },
    { 
      id: 108, 
      title: 'My Personal Site', 
      category: 'websites', 
      image: '/assets/my-personal-site.jpg',
      link: 'https://mysiterokaya.netlify.app/',
      description: 'Personal Developer Portfolio',
      tech: 'React.js'
    },

    // --- WordPress Projects ---
    { 
      id: 201, 
      title: 'Movinz', 
      category: 'websites', 
      image: '/assets/movinz.jpg',
      link: 'https://movinz.com/',
      description: 'Logistics Company Website',
      tech: 'WordPress'
    },
    { 
      id: 202, 
      title: 'Servix Agency', 
      category: 'websites', 
      image: '/assets/servix-agency.jpg',
      link: 'https://servix.agency/',
      description: 'Digital Agency Website',
      tech: 'WordPress'
    },
    { 
      id: 203, 
      title: 'Zayam Rock', 
      category: 'dashboard', 
      image: '/assets/zayam-rock.jpg',
      link: 'https://zayamrock.com/',
      description: 'Construction & Mining',
      tech: 'WordPress'
    },
    { 
      id: 204, 
      title: 'Egy Herbal', 
      category: 'ecommerce', 
      image: '/assets/egy-herbal.jpg',
      link: 'https://egy-herbal.com/',
      description: 'Herbal Products Store',
      tech: 'WordPress / Woo'
    },
    { 
      id: 205, 
      title: 'Client Project (Staging)', 
      category: 'websites', 
      image: '/assets/client-project.jpg',
      link: 'https://lemonchiffon-hornet-261850.hostingersite.com/',
      description: 'Educational Platform',
      tech: 'WordPress'
    },

    // --- Existing Major ERPs (Keep for Resume strength) ---
    { 
      id: 1, 
      title: 'Cannata ERP (UAE)', 
      category: 'erp', 
      image: '/assets/cannata-erp.jpg',
      link: 'https://cannata.ae/',
      description: 'Enterprise Resource Planning',
      tech: 'Next.js'
    },
    // { 
    //   id: 5, 
    //   title: 'CodeSoft ERP', 
    //   category: 'erp', 
    //   image: '/assets/img/portfolio/codesoft-erp.jpg',
    //   link: 'https://github.com/RokayaGhallab89/codesoft-erpApi',
    //   description: 'Management System',
    //   tech: 'React.js'
    // },
    // { 
    //   id: 9, 
    //   title: 'Core Brackets ERP', 
    //   category: 'erp', 
    //   image: '/assets/img/portfolio/core-brackets-erp.jpg',
    //   link: 'https://github.com/RokayaGhallab89/Core-brakets-ERP',
    //   description: 'Internal Business ERP',
    //   tech: 'React.js'
    // }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter);

  const categories = ['all', 'erp', 'crm', 'dashboard', 'ecommerce', 'websites'];

  return (
    <section id="portfolio" className="py-16 px-6 md:px-12 lg:px-24 bg-light text-gray-800">
      <div className="mb-12" data-aos="fade-up">
        <h2 className="text-3xl font-bold font-heading text-secondary mb-4 pb-4 border-b-2 border-blue-100 inline-block">Portfolio</h2>
        <p className="text-gray-600">
          A diverse collection of projects ranging from complex ERPs and CRMs to modern E-commerce platforms and Corporate Websites.
        </p>
      </div>

      <div className="flex justify-center mb-10 overflow-x-auto pb-4" data-aos="fade-up" data-aos-delay="100">
        <div className="bg-white rounded-full px-4 py-2 shadow-sm whitespace-nowrap flex">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`
                mx-2 px-3 py-1 rounded-full text-sm font-semibold uppercase tracking-wider transition-colors
                ${filter === cat ? 'text-primary bg-blue-50' : 'text-gray-600 hover:text-primary'}
              `}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <div key={project.id} className="group relative overflow-hidden rounded-lg shadow-md bg-white border border-gray-100" data-aos="fade-up" data-aos-delay="200">
            <div className="h-56 overflow-hidden relative">
                <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm px-2 py-1 rounded text-xs font-bold text-gray-700 shadow-sm">
                  {project.tech}
                </div>
            </div>
            <div className="absolute inset-0 bg-secondary/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center p-6 text-center">
               <h4 className="text-white text-xl font-bold mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{project.title}</h4>
               <p className="text-gray-200 text-sm mb-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">{project.description}</p>
               <span className="inline-block bg-primary text-white text-xs font-bold uppercase px-2 py-1 rounded mb-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                  {project.category}
               </span>
               <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">
                 {project.link && (
                     <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center space-x-2 bg-white text-secondary hover:bg-primary hover:text-white transition-colors px-5 py-2 rounded-full font-medium text-sm" title="View Live Project">
                       <ExternalLink size={16} />
                       <span>View Live</span>
                     </a>
                 )}
               </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};