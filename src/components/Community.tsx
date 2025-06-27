import React from 'react';

const contributionIcons = ['🌐', '🎤', '🤝', '💡'];

const Community = () => {
  const contributions = [
    {
      title: 'Open Source Contributor',
      org: 'GitHub',
      desc: 'Contributed to several open source projects including UI libraries and developer tools.'
    },
    {
      title: 'Tech Meetup Speaker',
      org: 'Local Dev Community',
      desc: 'Presented talks on React, TypeScript, and career growth for junior developers.'
    }
  ];

  return (
    <section id="community" className="py-20 bg-slate-950 relative overflow-hidden">
      <div className="absolute -top-20 -right-20 w-72 h-72 bg-gradient-to-br from-blue-400/20 to-purple-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="max-w-4xl mx-auto px-4 relative">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent text-center drop-shadow-lg">Community & Open Source</h2>
        <div className="grid md:grid-cols-2 gap-10">
          {contributions.map((c, idx) => (
            <div key={idx} className="relative bg-slate-800/60 rounded-2xl p-8 border border-blue-400/30 shadow-xl hover:shadow-blue-400/20 transition-all flex flex-col items-center text-center backdrop-blur-lg">
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-tr from-blue-400 to-purple-400 shadow-lg border-4 border-slate-950">
                <span className="text-3xl">{contributionIcons[idx % contributionIcons.length]}</span>
              </div>
              <span className="font-semibold text-white text-lg mt-10 block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent drop-shadow">
                {c.title} @ {c.org}
              </span>
              <p className="text-slate-300 mt-4">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Community;
