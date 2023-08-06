'use client'

// ImageContext.js
import React, { createContext, useContext, useState } from 'react';

// Creating our context
const ImageContext = createContext();

// Custom hook for easy access to the context
export const useImage = () => {
    return useContext(ImageContext);
}

// Provider component
export const ImageProvider = ({ children }) => {
    const [imageUrl, setImageUrl] = useState(null);

    const value = {
        imageUrl,
        setImageUrl
    };

    return (
        <ImageContext.Provider value={value}>
            {children}
        </ImageContext.Provider>
    );
}
