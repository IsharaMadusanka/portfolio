import React from 'react';

const Hobbies = () => {
  const hobbies = [
    { name: 'Photography', icon: '📷', desc: 'Capturing moments and landscapes.' },
    { name: 'Traveling', icon: '🌍', desc: 'Exploring new places and cultures.' },
    { name: 'Music', icon: '🎵', desc: 'Playing guitar and listening to indie music.' },
    { name: 'Reading', icon: '📚', desc: 'Enjoying tech blogs and sci-fi novels.' }
  ];

  return (
    <section id="hobbies" className="py-20 bg-slate-950">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent text-center">Hobbies & Interests</h2>
        <div className="grid md:grid-cols-4 gap-8">
          {hobbies.map((hobby, idx) => (
            <div key={idx} className="bg-slate-800/60 rounded-xl p-6 border border-slate-700/40 shadow-lg hover:shadow-blue-500/10 transition-all flex flex-col items-center text-center">
              <span className="text-4xl mb-2">{hobby.icon}</span>
              <span className="font-semibold text-white">{hobby.name}</span>
              <span className="text-slate-400 text-sm mt-1">{hobby.desc}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hobbies;
