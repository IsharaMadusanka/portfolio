import React from 'react';

const Services = () => {
  const services = [
    { title: 'Web Development', icon: '💻', desc: 'Building responsive and modern web applications.' },
    { title: 'UI/UX Design', icon: '🎨', desc: 'Designing user-friendly and visually appealing interfaces.' },
    { title: 'Consulting', icon: '🧑‍💼', desc: 'Providing expert advice on software projects and architecture.' },
    { title: 'Cloud & DevOps', icon: '☁️', desc: 'Deploying and managing scalable cloud infrastructure.' }
  ];

  return (
    <section id="services" className="py-20 bg-slate-950">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent text-center">Services</h2>
        <div className="grid md:grid-cols-4 gap-8">
          {services.map((service, idx) => (
            <div key={idx} className="bg-slate-800/60 rounded-xl p-6 border border-slate-700/40 shadow-lg hover:shadow-blue-500/10 transition-all flex flex-col items-center text-center">
              <span className="text-4xl mb-2">{service.icon}</span>
              <span className="font-semibold text-white">{service.title}</span>
              <span className="text-slate-400 text-sm mt-1">{service.desc}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
