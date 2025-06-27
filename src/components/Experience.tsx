import React from 'react';

const Experience = () => {
  const experiences = [
    {
      role: 'Frontend Developer',
      company: 'Tech Solutions',
      period: '2023 - Present',
      description: 'Building modern web apps with React, TypeScript, and Tailwind CSS. Collaborated with designers and backend teams to deliver seamless user experiences.'
    },
    {
      role: 'Intern Developer',
      company: 'InnovateX',
      period: '2022 - 2023',
      description: 'Worked on full-stack features, contributed to UI/UX improvements, and automated deployment pipelines.'
    },
    {
      role: 'Freelance Web Developer',
      company: 'Self-Employed',
      period: '2021 - 2022',
      description: 'Developed custom websites and dashboards for small businesses. Focused on responsive design and SEO best practices.'
    },
    {
      role: 'Open Source Contributor',
      company: 'GitHub',
      period: '2020 - Present',
      description: 'Contributed to popular open source projects, fixed bugs, and improved documentation for JavaScript and React libraries.'
    },
    {
      role: 'Teaching Assistant',
      company: 'University of Modern Tech',
      period: '2020 - 2021',
      description: 'Assisted in teaching web development courses, mentored students, and graded assignments.'
    }
  ];

  return (
    <section id="experience" className="py-20 bg-slate-950 relative overflow-hidden">
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-gradient-to-br from-blue-400/20 to-purple-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="max-w-5xl mx-auto px-4 relative">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent text-center drop-shadow-lg">Experience</h2>
        <div className="grid md:grid-cols-2 gap-10">
          {experiences.map((exp, idx) => (
            <div key={idx} className="relative bg-slate-800/70 rounded-2xl p-8 border border-slate-700/40 shadow-xl hover:shadow-blue-400/20 transition-all flex flex-col text-left backdrop-blur-lg group">
              <div className="flex flex-col gap-2 mb-4">
                <span className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors duration-300">
                  {exp.role}
                </span>
                <span className="text-slate-400 text-base font-medium">{exp.company}</span>
                <span className="text-xs text-slate-400 font-mono tracking-wide">{exp.period}</span>
              </div>
              <p className="text-slate-300 leading-relaxed text-sm md:text-base">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
