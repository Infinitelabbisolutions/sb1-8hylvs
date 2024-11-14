import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Stats from '../components/Stats';
import Team from '../components/Team';
import Mission from '../components/Mission';
import Gallery from '../components/Gallery';
import Press from '../components/Press';
import FAQ from '../components/FAQ';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Services />
      <Stats />
      <Mission />
      <Team />
      <Gallery />
      <Press />
      <FAQ />
      <Contact />
    </div>
  );
}