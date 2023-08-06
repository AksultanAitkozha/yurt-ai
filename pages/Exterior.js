import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SideToolBar from '../components/SideToolBar';
import GeneratedImage from '../components/GeneratedImage';

export default function Exterior() {
  const [imageUrl, setImageUrl] = useState(null);

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      <div className="flex-grow grid md:grid-cols-3 gap-4">
        <SideToolBar setImageUrl={setImageUrl} />
        <GeneratedImage imageUrl={imageUrl} />
      </div>
      <Footer />
    </div>
  );
}
