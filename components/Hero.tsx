import React, { useEffect, useState } from 'react';
import heroBg from '../assets/hero-bg.png';

export const Hero: React.FC = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const words = ["Frontend Developer", "React.js Developer", "Next.js Developer", "WordPress Developer", "Freelancer..."];

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % words.length;
      const fullText = words[i];

      setText(isDeleting 
        ? fullText.substring(0, text.length - 1) 
        : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 30 : 150);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, words, typingSpeed]);

  return (
    <section id="hero" className="relative w-full h-screen flex flex-col justify-center px-8 lg:px-24 bg-gray-900 text-white overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-40"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 z-0" />

      <div className="relative z-10 space-y-4">
        <h1 className="text-5xl md:text-7xl font-bold font-heading" data-aos="fade-up" data-aos-delay="50">
          Rokaya Ghallab
        </h1>
        
        <p className="text-2xl md:text-3xl font-light" data-aos="fade-up" data-aos-delay="200">
          I'm a <span className="text-white border-b-2 border-primary pb-1 typing-cursor">{text}</span>
        </p>
        
        <div className="flex gap-4 mt-8" data-aos="fade-up" data-aos-delay="300">
          <a 
            href="#contact" 
            className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/80 transition-colors"
          >
            Hire Me
          </a>
          <a 
            href="#portfolio" 
            className="px-6 py-3 border border-white text-white rounded-lg hover:bg-white hover:text-gray-900 transition-colors"
          >
            View Work
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <a href="#about" className="text-white">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7-7-7m14-6l-7 7-7-7" />
          </svg>
        </a>
      </div>
    </section>
  );
};