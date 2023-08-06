'use client'

import { useState } from 'react';


import Header from '../components/Header';  // Assuming you have a Header component in a `components` folder.
import About from '../components/About';    // Same for the About component.
import Footer from '../components/Footer';  // And the Footer component.
import HowItWorks from '../components/HowItWorks';

export default function Home() {
  return (
    <div className="font-inter min-h-screen bg-white text-black flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto p-6">
        <About />
        <HowItWorks />
      </main>
      <Footer />
    </div>
  );
}
