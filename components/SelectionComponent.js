import React from 'react';
import Select from 'react-select';

const options = [
  { value: 'residential', label: 'Residential Home' },
  { value: 'apartment', label: 'Apartment' },
  { value: 'office', label: 'Office Building' },
  // more options...
];

export default function SelectionComponent() {
  return (
    <div className="font-inter text-gray-500 text-lg md:text-2xl mb-4">
      <p className="text-lg md:text-xl font-semibold mb-2">Choose your building type:</p>
      <Select options={options} className="mb-4"/>
      
      <p className="text-lg md:text-xl font-semibold mb-2">Choose your style:</p>
      <Select options={options} className="mb-4"/>
      
      <p className="text-lg md:text-xl font-semibold mb-2">Choose your location:</p>
      <Select options={options} className="mb-4"/>
      
      <p className="text-lg md:text-xl font-semibold mb-2">Choose your material:</p>
      <Select options={options} className="mb-4"/>
      
      <p className="text-lg md:text-xl font-semibold mb-2">Choose the season:</p>
      <Select options={options} className="mb-4"/>
    </div>
  );
}
