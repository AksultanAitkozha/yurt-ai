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
    <div className="text-stone-600 text-sm">
      <p className="text-stone-600 text-sm">Choose your building type:</p>
      <Select options={options} className="mb-4"/>
      
      <p className="text-stone-600 text-sm">Choose your style:</p>
      <Select options={options} className="mb-4"/>
      
      <p className="text-stone-600 text-sm">Choose your location:</p>
      <Select options={options} className="mb-4"/>
      
      <p className="text-stone-600 text-sm">Choose your material:</p>
      <Select options={options} className="mb-4"/>
      
      <p className="text-stone-600 text-sm">Choose the season:</p>
      <Select options={options} className="mb-4"/>
    </div>
  );
}
