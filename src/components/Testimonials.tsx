import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Jane Doe',
      role: 'Product Manager',
      quote: 'A truly talented developer! Delivered our project on time with exceptional quality and attention to detail.',
      image: 'https://randomuser.me/api/portraits/women/44.jpg'
    },
    {
      name: 'John Smith',
      role: 'Team Lead',
      quote: 'Great communicator and problem solver. Always goes the extra mile to ensure project success.',
      image: 'https://randomuser.me/api/portraits/men/32.jpg'
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-slate-950">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent text-center">Testimonials</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((t, idx) => (
            <div key={idx} className="bg-slate-800/60 rounded-xl p-6 border border-slate-700/40 shadow-lg hover:shadow-blue-500/10 transition-all flex flex-col items-center text-center">
              <img src={t.image} alt={t.name} className="w-20 h-20 rounded-full object-cover border-4 border-blue-400 mb-4 shadow-md" />
              <div className="text-5xl mb-4">“</div>
              <p className="text-slate-300 mb-4 italic">{t.quote}</p>
              <span className="font-semibold text-white">{t.name}</span>
              <span className="text-slate-400 text-sm">{t.role}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
