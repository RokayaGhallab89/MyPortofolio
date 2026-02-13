import React from 'react';
import { Layout, Database, ShoppingCart, Globe, Server, Smartphone } from 'lucide-react';
import { Service } from '../types';

export const Services: React.FC = () => {
  const services: Service[] = [
    { id: 1, title: 'Web Application Development', description: 'Building fast, responsive, and scalable web applications using React.js and Next.js.', icon: 'Layout' },
    { id: 2, title: 'ERP System Development', description: 'Designing and implementing complex Enterprise Resource Planning systems for business management.', icon: 'Server' },
    { id: 3, title: 'Dashboard Creation', description: 'Developing interactive and data-driven dashboards for real-time analytics and monitoring.', icon: 'Database' },
    { id: 4, title: 'E-commerce Solutions', description: 'Creating online stores using WooCommerce and custom Next.js e-commerce solutions.', icon: 'ShoppingCart' },
    { id: 5, title: 'WordPress Customization', description: 'Customizing themes and plugins to build tailored WordPress websites for diverse business needs.', icon: 'Globe' },
    { id: 6, title: 'Responsive UI Design', description: 'Ensuring websites work seamlessly across all devices, from desktops to mobile phones.', icon: 'Smartphone' },
  ];

  const getIcon = (name: string) => {
    switch (name) {
      case 'Layout': return <Layout size={32} />;
      case 'Database': return <Database size={32} />;
      case 'ShoppingCart': return <ShoppingCart size={32} />;
      case 'Globe': return <Globe size={32} />;
      case 'Server': return <Server size={32} />;
      case 'Smartphone': return <Smartphone size={32} />;
      default: return <Layout size={32} />;
    }
  };

  return (
    <section id="services" className="py-16 px-6 md:px-12 lg:px-24 bg-white text-gray-800">
      <div className="mb-12" data-aos="fade-up">
        <h2 className="text-3xl font-bold font-heading text-secondary mb-4 pb-4 border-b-2 border-blue-100 inline-block">Services</h2>
        <p className="text-gray-600">
          Offering a wide range of frontend development services to help businesses grow and succeed online.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div key={service.id} className="flex space-x-4 p-4 hover:shadow-lg transition-shadow rounded-lg" data-aos="fade-up" data-aos-delay={index * 100}>
            <div className="flex-shrink-0 w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center text-primary border border-blue-100">
              {getIcon(service.icon)}
            </div>
            <div>
              <h4 className="text-xl font-bold text-secondary mb-2 hover:text-primary transition-colors cursor-pointer">{service.title}</h4>
              <p className="text-sm text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};