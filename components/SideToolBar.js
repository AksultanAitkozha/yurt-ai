import React from 'react';
import Intro from './Intro';
import UploadImage from './UploadImage';

export default function SideToolBar() {
  return (
    <div className="md:col-span-1">
      <Intro />
      <UploadImage />
    </div>
  );
}
