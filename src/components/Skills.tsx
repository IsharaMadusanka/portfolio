
import React, { useEffect, useRef, useState } from 'react';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedSkills, setAnimatedSkills] = useState<{[key: string]: boolean}>({});
  const sectionRef = useRef<HTMLElement>(null);

  const skills = [
    { name: 'JavaScript/TypeScript', level: 95, color: 'from-yellow-400 to-orange-500' },
    { name: 'React/Next.js', level: 90, color: 'from-blue-400 to-cyan-500' },
    { name: 'Node.js/Express', level: 85, color: 'from-green-400 to-emerald-500' },
    { name: 'Python/Django', level: 80, color: 'from-purple-400 to-pink-500' },
    { name: 'Database Design', level: 88, color: 'from-red-400 to-rose-500' },
    { name: 'UI/UX Design', level: 75, color: 'from-indigo-400 to-blue-500' },
    { name: 'DevOps/AWS', level: 70, color: 'from-orange-400 to-red-500' },
    { name: 'Mobile Development', level: 65, color: 'from-teal-400 to-cyan-500' }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Animate skills bars with staggered delay
          skills.forEach((skill, index) => {
            setTimeout(() => {
              setAnimatedSkills(prev => ({ ...prev, [skill.name]: true }));
            }, index * 200);
          });
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
      id="skills" 
      ref={sectionRef}
      className="py-20 bg-slate-950"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Here are the technologies and tools I work with to bring ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className={`transition-all duration-1000 delay-${index * 100} ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-blue-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-lg font-semibold text-white">{skill.name}</h3>
                  <span className="text-slate-400 text-sm">{skill.level}%</span>
                </div>
                
                <div className="w-full bg-slate-700 rounded-full h-3 overflow-hidden">
                  <div
                    className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1500 ease-out ${
                      animatedSkills[skill.name] ? `w-[${skill.level}%]` : 'w-0'
                    }`}
                    style={{ width: animatedSkills[skill.name] ? `${skill.level}%` : '0%' }}
                  >
                    <div className="h-full w-full bg-gradient-to-r from-white/20 to-transparent rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Tech Icons */}
        <div className={`mt-16 transition-all duration-1000 delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="grid grid-cols-4 md:grid-cols-8 gap-8 items-center justify-items-center">
            {[
              { name: 'React', color: 'text-blue-400' },
              { name: 'Node.js', color: 'text-green-400' },
              { name: 'Python', color: 'text-yellow-400' },
              { name: 'TypeScript', color: 'text-blue-500' },
              { name: 'MongoDB', color: 'text-green-500' },
              { name: 'AWS', color: 'text-orange-400' },
              { name: 'Docker', color: 'text-blue-600' },
              { name: 'GraphQL', color: 'text-pink-400' }
            ].map((tech, index) => (
              <div
                key={tech.name}
                className={`w-16 h-16 rounded-xl bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 flex items-center justify-center hover:scale-110 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 delay-${index * 50}`}
              >
                <span className={`text-2xl font-bold ${tech.color}`}>
                  {tech.name.charAt(0)}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
