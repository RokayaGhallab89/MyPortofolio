import React from 'react';
import { ChevronRight } from 'lucide-react';
import AboutImage from '../assets/profile.jpeg';
export const About: React.FC = () => {
  return (
    <section
      id="about"
      className="py-16 px-6 md:px-12 lg:px-24 bg-white text-gray-800"
    >
      <div className="mb-12" data-aos="fade-up">
        <h2 className="text-3xl font-bold font-heading text-secondary mb-4 pb-4 border-b-2 border-blue-100 inline-block">
          About
        </h2>
        <p className="text-gray-600">
          Frontend Developer specialized in React.js and Next.js with hands-on
          experience building ERP systems, dashboards, and business web
          applications for companies in the UAE, Saudi Arabia, Egypt, and Sudan.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Profile Image */}
        <div className="lg:col-span-1" data-aos="fade-right">
          <div className="relative w-full aspect-[4/5] rounded-lg overflow-hidden shadow-lg bg-gray-200">
            <img
               src={AboutImage}
              alt="Rokaya Ghallab - Frontend Developer"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Content */}
        <div className="lg:col-span-2" data-aos="fade-left">
          <h3 className="text-2xl font-bold text-secondary mb-4">
            Frontend Developer (React.js | Next.js)
          </h3>

          <p className="italic text-gray-600 mb-8">
            Strong in REST API integration, state management, responsive UI, and
            clean, scalable frontend architecture. Additional experience with
            WordPress & WooCommerce.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8 mb-8">
            <ul className="space-y-4">
              <li className="flex items-center space-x-2">
                <ChevronRight className="text-primary" size={16} />
                <span className="font-bold">Phone:</span>
                <span>+20 103 290 7055</span>
              </li>
              <li className="flex items-center space-x-2">
                <ChevronRight className="text-primary" size={16} />
                <span className="font-bold">City:</span>
                <span>Maadi, Cairo, Egypt</span>
              </li>
              <li className="flex items-center space-x-2">
                <ChevronRight className="text-primary" size={16} />
                <span className="font-bold">Degree:</span>
                <span>B.Sc. in Computer Science</span>
              </li>
            </ul>

            <ul className="space-y-4">
              <li className="flex items-center space-x-2">
                <ChevronRight className="text-primary" size={16} />
                <span className="font-bold">Email:</span>
                <span className="text-sm md:text-base">
                  rokayaghallab4@gmail.com
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <ChevronRight className="text-primary" size={16} />
                <span className="font-bold">Freelance:</span>
                <span>Available</span>
              </li>
              <li className="flex items-center space-x-2">
                <ChevronRight className="text-primary" size={16} />
                <span className="font-bold">Languages:</span>
                <span>Arabic (Native), English (Good)</span>
              </li>
            </ul>
          </div>

          <p className="text-gray-600">
            I am passionate about creating efficient, scalable, and
            user-friendly web applications. With a strong foundation in
            Computer Science and practical experience in modern frontend
            technologies, I deliver high-quality solutions for diverse business
            needs.
          </p>
        </div>
      </div>
    </section>
  );
};