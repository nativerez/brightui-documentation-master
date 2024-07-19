import React, { useState } from 'react';
import copy from 'clipboard-copy';
import cn from 'classnames';

const CopyToClipboardButton = ({ text, title, invert }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleCopy = () => {
    copy(text);
    setShowTooltip(true);

    // Hide the tooltip after a certain duration
    setTimeout(() => {
      setShowTooltip(false);
    }, 1500);
  };

  return (
    <div className="relative copy-button">
      <button
        onClick={handleCopy}
        className={cn(
          'flex items-center flex-none invisible px-2 py-1 space-x-2 uppercase transition border-0 rounded-full group-hover:visible hover:cursor-pointer hover:-translate-x-1',
          {
            'bg-gray-900 text-white': invert,
            'bg-white text-gray-900': !invert,
          }
        )}
      >
        <span>{title}</span>
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="fill-current"
        >
          <path d="M3.1 4.35c0-.69.56-1.25 1.25-1.25h6.75a.75.75 0 1 0 0-1.5H4.35A2.75 2.75 0 0 0 1.6 4.35v6.75a.75.75 0 1 0 1.5 0V4.35z"></path>
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M4.35 5.35a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-8a1 1 0 0 1-1-1v-8zm1.5 7.5v-7h7v7h-7z"
          ></path>
        </svg>
      </button>
      <div
        className={cn(
          'absolute z-10 flex px-3 py-2 text-xs flex-nowrap flex-col right-auto left-2/4 -translate-x-2/4 top-6 font-medium text-white transition-opacity duration-300 bg-gray-900 rounded shadow-sm',
          {
            'opacity-1 visible': showTooltip,
            'opacity-0 invisible': !showTooltip,
          }
        )}
      >
        <span className="relative z-10">Copied to Clipboard!</span>
        <div class="tooltip-arrow"></div>
      </div>
    </div>
  );
};
export default CopyToClipboardButton;
