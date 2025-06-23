
import React, { useState, useEffect } from 'react';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const phrases = [
    'Full Stack Developer',
    'UI/UX Designer',
    'Problem Solver',
    'Code Enthusiast'
  ];

  useEffect(() => {
    const currentPhrase = phrases[currentIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentPhrase.substring(0, displayText.length + 1));
        if (displayText === currentPhrase) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setDisplayText(currentPhrase.substring(0, displayText.length - 1));
        if (displayText === '') {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % phrases.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [displayText, currentIndex, isDeleting, phrases]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-60 h-60 bg-teal-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="animate-fade-in">
          {/* Profile Image */}
          <div className="mb-8 relative">
            <div className="w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-gradient-to-r from-blue-400 to-purple-500 p-1 bg-gradient-to-r from-blue-400 to-purple-500 shadow-2xl hover:scale-105 transition-transform duration-300">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
                alt="Developer"
                className="w-full h-full object-cover rounded-full bg-slate-800"
              />
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
            John Developer
          </h1>
          
          <div className="text-2xl md:text-4xl font-semibold mb-8 h-16 flex items-center justify-center">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              {displayText}
              <span className="animate-pulse">|</span>
            </span>
          </div>
          
          <p className="text-xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Passionate about creating beautiful, functional, and user-centered digital experiences. 
            I bring ideas to life through clean code and innovative design.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <button
              onClick={() => scrollToSection('projects')}
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25"
            >
              View My Work
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="border-2 border-slate-600 hover:border-blue-400 text-slate-300 hover:text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 hover:scale-105 hover:bg-slate-800/50"
            >
              Get In Touch
            </button>
          </div>
          
          <div className="flex justify-center space-x-8">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-all duration-300 hover:scale-125 hover:-translate-y-1"
            >
              <Github size={32} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-blue-400 transition-all duration-300 hover:scale-125 hover:-translate-y-1"
            >
              <Linkedin size={32} />
            </a>
            <a
              href="mailto:john@example.com"
              className="text-slate-400 hover:text-purple-400 transition-all duration-300 hover:scale-125 hover:-translate-y-1"
            >
              <Mail size={32} />
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown 
          size={32} 
          className="text-slate-400 cursor-pointer hover:text-white transition-colors duration-300"
          onClick={() => scrollToSection('about')}
        />
      </div>
    </section>
  );
};

export default Hero;
