import React from 'react';

const FigmaExample = ({ iframeUrl, height }) => {
  return (
    <div className="mb-5">
      <div>
        <iframe
          className="flex w-full border-none"
          src={iframeUrl}
          style={{ height: `${height}px` }}
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
};

export default FigmaExample;
