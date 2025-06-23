
import React, { useEffect, useRef, useState } from 'react';
import { Code, Palette, Zap, Heart } from 'lucide-react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="py-20 bg-slate-900/50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            I'm a passionate developer who loves turning complex problems into simple, 
            beautiful, and intuitive solutions. When I'm not coding, you'll find me 
            exploring new technologies and design trends.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className={`transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}>
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10">
              <p className="text-lg text-slate-300 leading-relaxed mb-6">
                With over 5 years of experience in web development, I specialize in creating 
                scalable, performant applications using modern technologies. My journey started 
                with a simple "Hello World" and has evolved into architecting complex systems 
                that serve millions of users.
              </p>
              <p className="text-lg text-slate-300 leading-relaxed">
                I believe in writing clean, maintainable code and creating user experiences 
                that not only look great but also solve real-world problems. Every project 
                is an opportunity to learn something new and push the boundaries of what's possible.
              </p>
            </div>
          </div>

          <div className={`transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}>
            <div className="grid grid-cols-2 gap-6">
              {[
                { icon: Code, title: 'Clean Code', desc: 'Writing maintainable and scalable solutions' },
                { icon: Palette, title: 'UI/UX Design', desc: 'Creating beautiful user experiences' },
                { icon: Zap, title: 'Performance', desc: 'Optimizing for speed and efficiency' },
                { icon: Heart, title: 'Passion', desc: 'Love for continuous learning' }
              ].map((item, index) => (
                <div
                  key={item.title}
                  className={`bg-slate-800/30 backdrop-blur-sm rounded-xl p-6 border border-slate-700/30 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/10 delay-${index * 100}`}
                >
                  <item.icon className="w-8 h-8 text-blue-400 mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-slate-400 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
