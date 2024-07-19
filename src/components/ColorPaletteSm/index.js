import React from 'react';

const ColorPaletteSm = ({ title, hexColor01, hexColor02, hexColor03 }) => {
  return (
    <div className="mb-6 md:flex md:items-center md:space-x-4">
      <div className="flex items-center justify-items-stretch rounded overflow-hidden min-w-[50%]">
        <div className="w-full h-8 md:w-16" style={{ backgroundColor: `${hexColor01}` }}></div>
        <div className="w-full h-8 md:w-16" style={{ backgroundColor: `${hexColor02}` }}></div>
        <div className="w-full h-8 md:w-16" style={{ backgroundColor: `${hexColor03}` }}></div>
      </div>
      <p class="text-lg, w-full" >{title}</p>
    </div>
  )
};

export default ColorPaletteSm;