import React, { useState } from 'react';
import Link from 'next/link';

const About = () => {
  const [sliderValue, setSliderValue] = useState(50);

  return (
    <div className="bg-white text-black p-8 md:p-16 flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8" style={{ 
        backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 7px, #ddd1 7px, #ddd1 8px),
                         repeating-linear-gradient(90deg, transparent, transparent 7px, #ddd1 7px, #ddd1 8px)` 
      }}>
      <div className="md:w-1/2 space-y-4">
        <h1 className="text-4xl font-bold leading-tight mb-4" style={{ fontFamily: 'Inter' }}>
          Photorealistic renders in seconds, not hours
        </h1>
        <h3 className="text-2xl mb-4 max-w-xl" style={{ fontFamily: 'Inter' }}>
          Say goodbye to time-consuming manual rendering and embrace a new era of efficiency
        </h3>
        <ul className="space-y-4">
            <li className="text-lg text-gray-600" style={{ fontFamily: 'Inter' }}>
            <span className="text-green-500 font-bold">&#10003;</span> 15x more affordable than existing solutions
             </li>
            <li className="text-lg text-gray-600" style={{ fontFamily: 'Inter' }}>
            <span className="text-green-500 font-bold">&#10003;</span> 100+ architectural styles and options
            </li>
            <li className="text-lg text-gray-600" style={{ fontFamily: 'Inter' }}>
            <span className="text-green-500 font-bold">&#10003;</span> Built for architects, interior designers, real estate agents
            </li>
            <li className="text-lg text-gray-600" style={{ fontFamily: 'Inter' }}>
            <span className="text-green-500 font-bold">&#10003;</span> Iterate through designs faster, present clients with stunning renders in seconds
            </li>
        </ul>
        <div className="flex items-center space-x-2">
        <span className="text-yellow-500">
            ★★★★★
        </span>
        <span className="text-gray-500 text-base"> 
            Join 250+ architecture lovers
        </span>
        </div>
        <div className="text-center md:text-left">
        <a href="./pages/Exterior" className="inline-block bg-black text-white px-6 py-3 text-lg font-bold rounded mt-4 transition duration-300 hover:bg-gray-800 mx-auto md:mx-0">
        Go to the YurtAI app -&gt;
        </a>
        </div>
      </div>
      <div className="w-full md:w-1/2 relative" style={{ minHeight: '300px' }}>
        <img src="header_1.png" alt="Before" className="absolute w-full h-full top-0 left-0 object-cover" style={{ clipPath: `inset(0 ${100 - sliderValue}% 0 0)` }} />
        <img src="yurt_ai.png" alt="After" className="absolute w-full h-full top-0 left-0 object-cover" style={{ clipPath: `inset(0 0 0 ${sliderValue}%)` }} />
        <input 
            type="range" 
            min="0" 
            max="100" 
            value={sliderValue} 
            onChange={(e) => setSliderValue(e.target.value)} 
            className="absolute bottom-0 left-0 w-full mt-4 md:mt-0"
            style={{appearance: 'none', height: '2px', background: '#ccc', outline: 'none'}}
        />
        </div>
    </div>
  );
};

export default About;
