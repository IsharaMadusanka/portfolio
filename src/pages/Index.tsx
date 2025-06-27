import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Experience from '../components/Experience';
import Education from '../components/Education';
import Services from '../components/Services';
import Awards from '../components/Awards';
import Testimonials from '../components/Testimonials';
import Blog from '../components/Blog';
import Community from '../components/Community';
import Hobbies from '../components/Hobbies';
import Resume from '../components/Resume';
import Contact from '../components/Contact';

const Index = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <Services />
      <Awards />
      <Testimonials />
      <Blog />
      <Community />
      <Hobbies />
      <Resume />
      <Contact />
    </div>
  );
};

export default Index;
