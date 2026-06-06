/**
 * Portfolio page — all sections with gradient dividers between them
 */
import React from 'react';
import Hero         from '../components/sections/Hero';
import About        from '../components/sections/About';
import Background   from '../components/sections/Background';
import Skills       from '../components/sections/Skills';
import Experience   from '../components/sections/Experience';
import Projects     from '../components/sections/Projects';
import Testimonials from '../components/sections/Testimonials';
import Achievements from '../components/sections/Achievements';
import Contact      from '../components/sections/Contact';
import Footer       from '../components/Footer';

/* Gradient divider line between sections */
const Divider = () => <hr className="section-divider" aria-hidden="true" />;

const Portfolio = () => (
  <main>
    <Hero />
    <Divider />
    <About />
    <Divider />
    <Background />
    <Divider />
    <Skills />
    <Divider />
    <Experience />
    <Divider />
    <Projects />
    <Divider />
    <Testimonials />
    <Divider />
    <Achievements />
    <Divider />
    <Contact />
    <Footer />
  </main>
);

export default Portfolio;
