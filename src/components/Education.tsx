import React from 'react';

const eduIcons = ['🎓', '📜', '🏅', '💡'];

const Education = () => {
  const education = [
    {
      degree: 'BSc in Computer Science',
      school: 'University of Modern Tech',
      period: '2019 - 2023',
      description: 'Graduated with First Class Honors. Focused on software engineering, web development, and cloud computing.'
    },
    {
      degree: 'Full Stack Web Development Certificate',
      school: 'Online Academy',
      period: '2021',
      description: 'Completed a 6-month intensive bootcamp covering React, Node.js, and DevOps.'
    }
  ];

  return (
    <section id="education" className="py-20 bg-slate-950 relative overflow-hidden">
      <div className="absolute -top-20 -right-20 w-72 h-72 bg-gradient-to-br from-blue-400/20 to-purple-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="max-w-5xl mx-auto px-4 relative">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent text-center drop-shadow-lg">Education</h2>
        <div className="grid md:grid-cols-2 gap-10">
          {education.map((edu, idx) => (
            <div key={idx} className="relative bg-slate-800/60 rounded-2xl p-8 border border-blue-400/30 shadow-xl hover:shadow-blue-400/20 transition-all flex flex-col items-center text-center backdrop-blur-lg">
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-tr from-blue-400 to-purple-400 shadow-lg border-4 border-slate-950">
                <span className="text-3xl">{eduIcons[idx % eduIcons.length]}</span>
              </div>
              <span className="font-semibold text-white text-lg mt-10 block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent drop-shadow">
                {edu.degree} @ {edu.school}
              </span>
              <span className="text-slate-400 text-sm mt-2">{edu.period}</span>
              <p className="text-slate-300 mt-4">{edu.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
