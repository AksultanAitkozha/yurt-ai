'use client'

import React from 'react';

const GeneratedImage = ( { imageUrl }) => {
    //console.log(imageUrl);
    return (
        <div className="flex flex-col p-4">
            <div className="border-b pb-5">
                <span className="font-bold">Generated Image</span>
                <div>
                    <span className="text-stone-600 text-sm">Your generated image will show up here.</span>
                </div>
            </div>
            <div className="mt-5">
                {imageUrl ? (
                    <img 
                        src={imageUrl} 
                        alt="Generated output" 
                        className="w-full md:w-2/3 lg:w-2/3 mx-auto object-cover"
                    />
                ) : (
                    <div className="bg-gray-100 w-full md:w-2/3 lg:w-1/2 h-64 mx-auto flex items-center justify-center">
                        <span className="text-gray-400">No Image Yet</span>
                    </div>
                )}
            </div>
        </div>
    );
}

export default GeneratedImage;