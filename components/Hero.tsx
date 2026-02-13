import React, { useEffect, useState } from 'react';

export const Hero: React.FC = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const words = ["Frontend Developer", "React.js Developer", "Next.js Specialist", "Freelancer"];

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
        style={{ backgroundImage: `url('/assets/img/hero-bg.jpg')` }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 z-0" />

      <div className="relative z-10 space-y-4">
        <h1 className="text-5xl md:text-7xl font-bold font-heading" data-aos="fade-up" data-aos-delay="50">Rokaya Ali</h1>
        <p className="text-2xl md:text-3xl font-light" data-aos="fade-up" data-aos-delay="200">
          I'm a <span className="text-white border-b-2 border-primary pb-1 typing-cursor">{text}</span>
        </p>
      </div>
    </section>
  );
};