import React, { useEffect, useRef, useState } from 'react';

const skillIcons: { [key: string]: string } = {
  'JavaScript/TypeScript': '🟨',
  'React/Next.js': '⚛️',
  'Node.js/Express': '🟩',
  'Python/Django': '🐍',
  'Database Design': '🗄️',
  'UI/UX Design': '🎨',
  'DevOps/AWS': '☁️',
  'Mobile Development': '📱',
};

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

  // Helper for circular progress
  const getCircle = (level: number, color: string, animated: boolean) => {
    const radius = 40;
    const stroke = 8;
    const normalizedRadius = radius - stroke / 2;
    const circumference = normalizedRadius * 2 * Math.PI;
    const progress = animated ? (level / 100) * circumference : 0;
    return (
      <svg height={radius * 2} width={radius * 2} className="block mx-auto">
        <circle
          stroke="#334155"
          fill="none"
          strokeWidth={stroke}
          cx={radius}
          cy={radius}
          r={normalizedRadius}
        />
        <circle
          strokeDasharray={circumference}
          strokeDashoffset={circumference - progress}
          strokeLinecap="round"
          fill="none"
          strokeWidth={stroke}
          cx={radius}
          cy={radius}
          r={normalizedRadius}
          className={`transition-all duration-1000 ${color.replace('from-', 'stroke-').replace(' to-', ' ')} `}
          style={{ stroke: 'url(#gradient)' }}
        />
        <defs>
          <linearGradient id="gradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#60a5fa" />
            <stop offset="100%" stopColor="#a78bfa" />
          </linearGradient>
        </defs>
      </svg>
    );
  };

  return (
    <section 
      id="skills" 
      ref={sectionRef}
      className="py-20 bg-slate-950 bg-opacity-90 backdrop-blur-xl relative overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-gradient-to-br from-blue-500/30 to-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tr from-pink-500/20 to-blue-400/10 rounded-full blur-2xl"></div>
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent drop-shadow-lg">
            Skills & Expertise
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Here are the technologies and tools I work with to bring ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-10">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className={`transition-all duration-1000 delay-${index * 100} ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              } bg-slate-800/60 backdrop-blur-lg rounded-2xl p-8 border border-slate-700/40 shadow-xl hover:shadow-blue-500/20 hover:scale-105 hover:border-blue-400/40 flex flex-col items-center`}
            >
              <div className="mb-4 text-4xl">
                {skillIcons[skill.name] || '💡'}
              </div>
              <div className="relative mb-4">
                {getCircle(skill.level, skill.color, animatedSkills[skill.name])}
                <span className="absolute inset-0 flex items-center justify-center text-xl font-bold text-white">
                  {skill.level}%
                </span>
              </div>
              <h3 className="text-lg font-semibold text-white text-center mt-2 drop-shadow">
                {skill.name}
              </h3>
            </div>
          ))}
        </div>

        {/* Tech Icons */}
        <div className={`mt-20 transition-all duration-1000 delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="grid grid-cols-4 md:grid-cols-8 gap-8 items-center justify-items-center">
            {[
              { name: 'React', color: 'text-blue-400', icon: '⚛️' },
              { name: 'Node.js', color: 'text-green-400', icon: '🟩' },
              { name: 'Python', color: 'text-yellow-400', icon: '🐍' },
              { name: 'TypeScript', color: 'text-blue-500', icon: '🟦' },
              { name: 'MongoDB', color: 'text-green-500', icon: '🍃' },
              { name: 'AWS', color: 'text-orange-400', icon: '☁️' },
              { name: 'Docker', color: 'text-blue-600', icon: '🐳' },
              { name: 'GraphQL', color: 'text-pink-400', icon: '🕸️' }
            ].map((tech, index) => (
              <div
                key={tech.name}
                className={`w-20 h-20 rounded-2xl bg-slate-800/60 backdrop-blur-lg border border-slate-700/40 flex flex-col items-center justify-center hover:scale-110 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 delay-${index * 50} shadow-md`}
              >
                <span className={`text-3xl mb-1 ${tech.color}`}>{tech.icon}</span>
                <span className="text-xs text-slate-300 font-semibold">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
