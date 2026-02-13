import React from 'react';
import { MapPin, Mail, Phone } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-16 px-6 md:px-12 lg:px-24 bg-light text-gray-800">
      <div className="mb-12" data-aos="fade-up">
        <h2 className="text-3xl font-bold font-heading text-secondary mb-4 pb-4 border-b-2 border-blue-100 inline-block">Contact</h2>
        <p className="text-gray-600">
          Feel free to reach out for collaborations, freelance projects, or job opportunities.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
        <div className="lg:col-span-2 space-y-8 shadow-lg p-8 bg-white rounded-lg" data-aos="fade-right">
          <div className="flex space-x-4 group">
             <div className="w-12 h-12 bg-blue-100 text-primary rounded-full flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <MapPin size={20} />
             </div>
             <div>
               <h4 className="text-xl font-bold text-secondary mb-1">Location:</h4>
               <p className="text-sm text-gray-600">Maadi, Cairo, Egypt</p>
             </div>
          </div>

          <div className="flex space-x-4 group">
             <div className="w-12 h-12 bg-blue-100 text-primary rounded-full flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <Mail size={20} />
             </div>
             <div>
               <h4 className="text-xl font-bold text-secondary mb-1">Email:</h4>
               <p className="text-sm text-gray-600">Rokayaghallab89@gmail.com</p>
             </div>
          </div>

          <div className="flex space-x-4 group">
             <div className="w-12 h-12 bg-blue-100 text-primary rounded-full flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <Phone size={20} />
             </div>
             <div>
               <h4 className="text-xl font-bold text-secondary mb-1">Call:</h4>
               <p className="text-sm text-gray-600">+20 103 290 7055</p>
             </div>
          </div>
          
           <div className="w-full h-64 mt-4">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55251.377099646166!2d31.22344483258064!3d29.95982859063266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1458380d6b9d8855%3A0x6b9074a383d46777!2sMaadi%2C%20Cairo%20Governorate!5e0!3m2!1sen!2seg!4v1709400000000!5m2!1sen!2seg" 
              className="w-full h-full border-0 rounded"
              allowFullScreen={true}
              loading="lazy"
              title="Google Maps"
            ></iframe>
          </div>
        </div>

        <div className="lg:col-span-3 shadow-lg p-8 bg-white rounded-lg" data-aos="fade-left">
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col">
                <label htmlFor="name" className="text-sm font-medium text-gray-700 mb-1">Your Name</label>
                <input type="text" id="name" className="border border-gray-300 p-3 rounded focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary" required />
              </div>
              <div className="flex flex-col">
                <label htmlFor="email" className="text-sm font-medium text-gray-700 mb-1">Your Email</label>
                <input type="email" id="email" className="border border-gray-300 p-3 rounded focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary" required />
              </div>
            </div>
            <div className="flex flex-col">
               <label htmlFor="subject" className="text-sm font-medium text-gray-700 mb-1">Subject</label>
               <input type="text" id="subject" className="border border-gray-300 p-3 rounded focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary" required />
            </div>
             <div className="flex flex-col">
               <label htmlFor="message" className="text-sm font-medium text-gray-700 mb-1">Message</label>
               <textarea id="message" rows={6} className="border border-gray-300 p-3 rounded focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary" required></textarea>
            </div>
            <div className="text-center">
              <button type="submit" className="bg-primary text-white px-8 py-3 rounded-full hover:bg-blue-600 transition-colors font-semibold shadow-md">Send Message</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};