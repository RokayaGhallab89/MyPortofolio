import React from 'react';

export const Resume: React.FC = () => {
  return (
    <section id="resume" className="py-16 px-6 md:px-12 lg:px-24 bg-white text-gray-800">
      <div className="mb-12" data-aos="fade-up">
        <h2 className="text-3xl font-bold font-heading text-secondary mb-4 pb-4 border-b-2 border-blue-100 inline-block">Resume</h2>
        <p className="text-gray-600">
          Experienced Frontend Developer with a track record of delivering complex ERP systems and business applications.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Summary & Education */}
        <div data-aos="fade-up" data-aos-delay="100">
          <h3 className="text-2xl font-bold text-secondary mb-6">Summary</h3>
          <div className="relative pl-6 pb-6 border-l-2 border-gray-200 last:border-0">
            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full border-2 border-primary bg-white"></div>
            <h4 className="text-lg font-bold uppercase text-secondary mb-2">Rokaya Ali</h4>
            <p className="italic text-gray-600 mb-4">Frontend Developer specialized in React.js and Next.js with hands-on experience building ERP systems, dashboards, and business web applications for companies in the UAE, Saudi Arabia, Egypt, and Sudan.</p>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              <li>Maadi, Cairo, Egypt</li>
              <li>+20 103 290 7055</li>
              <li>rokayaghallab4@gmail.com</li>
            </ul>
          </div>

          <h3 className="text-2xl font-bold text-secondary mt-8 mb-6">Education</h3>
          <div className="relative pl-6 pb-6 border-l-2 border-gray-200">
            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full border-2 border-primary bg-white"></div>
            <h4 className="text-lg font-bold text-secondary uppercase mb-2">B.Sc. in Computer Science</h4>
            <div className="bg-gray-100 inline-block px-3 py-1 text-sm font-semibold text-gray-700 mb-4">2020 - 2024</div>
            <p className="italic text-gray-600 mb-2">South Valley University</p>
            <p className="text-gray-600">Graduation Project: Rooftop Planting Website — Grade: Excellent</p>
          </div>
        </div>

        {/* Experience */}
        <div data-aos="fade-up" data-aos-delay="200">
          <h3 className="text-2xl font-bold text-secondary mb-6">Professional Experience</h3>
          
          <div className="relative pl-6 pb-6 border-l-2 border-gray-200">
             <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full border-2 border-primary bg-white"></div>
            <h4 className="text-lg font-bold text-secondary uppercase mb-2">Freelance Frontend Developer</h4>
            <div className="bg-gray-100 inline-block px-3 py-1 text-sm font-semibold text-gray-700 mb-4">2024 - Present</div>
            <p className="italic text-gray-600 mb-2">Remote</p>
             <ul className="list-disc list-inside text-gray-600 space-y-2 mt-4">
              <li>Delivered multiple ERP, CRM, and shipping systems using Next.js.</li>
              <li>Built dashboards, invoices, authentication flows, and role-based access systems.</li>
              <li>Migrated WordPress websites into modern React-based solutions.</li>
            </ul>
          </div>

          <div className="relative pl-6 pb-6 border-l-2 border-gray-200">
            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full border-2 border-primary bg-white"></div>
            <h4 className="text-lg font-bold text-secondary uppercase mb-2">Frontend Developer</h4>
            <p className="italic text-gray-600 mb-2">SoftKhana (UAE) | Remote</p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 mt-4">
              <li>Developed production-ready web applications using React.js and Next.js.</li>
              <li>Built reusable components and responsive layouts with Tailwind CSS.</li>
              <li>Integrated REST APIs and managed application state efficiently.</li>
            </ul>
          </div>
          
          <div className="relative pl-6 pb-6 border-l-2 border-gray-200">
             <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full border-2 border-primary bg-white"></div>
            <h4 className="text-lg font-bold text-secondary uppercase mb-2">Frontend Developer</h4>
            <p className="italic text-gray-600 mb-2">CodeSoft (Saudi Arabia) | Remote</p>
             <ul className="list-disc list-inside text-gray-600 space-y-2 mt-4">
              <li>Worked on ERP and dashboard-based applications using React.js / Next.js.</li>
              <li>Implemented scalable UI architecture with clean code practices.</li>
              <li>Collaborated remotely using GitHub & Bitbucket workflows.</li>
            </ul>
          </div>

          <div className="relative pl-6 pb-6 border-l-2 border-gray-200">
             <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full border-2 border-primary bg-white"></div>
            <h4 className="text-lg font-bold text-secondary uppercase mb-2">Frontend Developer</h4>
            <p className="italic text-gray-600 mb-2">Core Brackets | Maadi, Cairo</p>
             <ul className="list-disc list-inside text-gray-600 space-y-2 mt-4">
              <li>Developed responsive web applications using React.js and Next.js.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};