import React from 'react';
import { Skill } from '../types';

export const Skills: React.FC = () => {
  const skills: Skill[] = [
    { name: 'React.js / Next.js', percentage: 95 },
    { name: 'JavaScript / TypeScript', percentage: 90 },
    { name: 'HTML5 / CSS3', percentage: 100 },
    { name: 'Tailwind CSS / Material UI', percentage: 90 },
    { name: 'Redux / Zustand', percentage: 85 },
    { name: 'REST APIs / Axios', percentage: 90 },
    { name: 'WordPress / WooCommerce', percentage: 75 },
    { name: 'Git / GitHub', percentage: 85 },
  ];

  return (
    <section id="skills" className="py-16 px-6 md:px-12 lg:px-24 bg-light text-gray-800">
      <div className="mb-12" data-aos="fade-up">
        <h2 className="text-3xl font-bold font-heading text-secondary mb-4 pb-4 border-b-2 border-blue-100 inline-block">Technical Skills</h2>
        <p className="text-gray-600">
          Proficient in modern frontend technologies and tools for building responsive, high-performance web applications.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skills.map((skill, index) => (
          <div key={skill.name} data-aos="fade-up" data-aos-delay={index * 50}>
            <div className="flex justify-between items-center mb-1">
              <span className="font-bold text-secondary text-sm uppercase">{skill.name}</span>
              <span className="text-sm text-gray-600">{skill.percentage}%</span>
            </div>
            <div className="w-full bg-gray-200 h-2.5 rounded-none">
              <div 
                className="bg-primary h-2.5 rounded-none transition-all duration-1000 ease-out"
                style={{ width: `${skill.percentage}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};