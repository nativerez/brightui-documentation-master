import React from 'react';

const ColorToken = ({ title, rgbColor }) => {
  return (
    <>
      <span class="group relative inline-flex items-center rounded-full font-bold px-3 bg-white border border-solid border-gray-300 mx-1 space-x-2">
        <span
          class="rounded-full h-4 w-4 flex-none border border-solid border-gray-300"
          style={{ backgroundColor: `${rgbColor}` }}
        ></span>
        <span>{title}</span>
        <div className="absolute right-auto z-10 flex flex-col invisible px-3 py-2 text-xs font-medium text-white transition-opacity duration-300 bg-gray-900 rounded shadow-sm flex-nowrap left-2/4 -translate-x-2/4 top-6 group-hover:visible dark:bg-gray-700">
          <span className="relative z-10">{rgbColor}</span>
          <div class="tooltip-arrow"></div>
        </div>
      </span>
    </>
  );
};

export default ColorToken;
