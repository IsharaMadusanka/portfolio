import React from 'react';

const Resume = () => {
  return (
    <section id="resume" className="py-20 bg-slate-950">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Download My Resume</h2>
        <a
          href="/resume.pdf"
          download
          className="inline-block px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-xl shadow-lg hover:scale-105 hover:shadow-blue-500/20 transition-all"
        >
          Download CV
        </a>
      </div>
    </section>
  );
};

export default Resume;
