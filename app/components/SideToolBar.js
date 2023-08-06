'use client'

import React, { useState } from "react";
import UploadImage from "./UploadImage";
import SelectionComponent from "./SelectionComponent";

const SideToolBar = ( { setImageUrl }) => {
  return (
    <div className="lg:w-3//4 p-7 space-y-3 bg-white">
    <h1 className="font-bold text-2xl underline">Exterior Architecture Design Studio</h1>
    <div><span className="text-stone-600 text-sm">Our AI-powered app automates the process of remodeling and revisualizing scenes. Simply upload your sketches or photos, and watch as the app transforms them into stunning designs in various styles and preferences.</span></div>
    <div className="flex justify-between w-full pb-5">
      <span className="font-bold text-stone-600">Upload Image</span>
    </div>
      <UploadImage setImageUrl={setImageUrl} />
      <SelectionComponent />
      <button className="bg-blue-500 rounded-full text-white font-medium px-4 py-2 mt-8 hover:bg-blue-500/80 transition w-full">Build my idea</button>
    </div>
  );
};

export default SideToolBar;
