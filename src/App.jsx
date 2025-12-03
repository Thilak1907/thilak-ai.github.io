import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Stats from './components/Stats';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Publications from './components/Publications';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-gray-50 dark:bg-primary min-h-screen font-sans transition-colors duration-300">
      <Navbar />
      <Hero />
      <About />
      <Stats />
      <Education />
      <Certifications />
      <Skills />
      <Experience />
      <Projects />
      <Publications />
      <Achievements />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
