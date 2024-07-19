import React from 'react';
import DoTick from '@site/src/components/DoTick';

const DoImage = ({ children, title, imgSrc, imgAlt }) => {
  return (
    <div className="bg-[#F0F6FA] rounded-md p-4 border-0 border-t-4 xl:border-t-0 xl:border-l-4 border-solid border-[#28a138] mb-6 flex items-start space-x-3">
      <DoTick />
      <div className="grid-cols-2 grid-rows-1 gap-4 space-y-4 xl:grid xl:space-y-0">
        <div>
          <h4>{title}</h4>
          <div>{children}</div>
        </div>

        <div className="my-6 lg:my-0">
          <div className="bg-white border-0 border-t-4 border-solid border-[#28a138] p-4 flex flex-col items-center h-full">
            <img src={imgSrc} alt={imgAlt} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoImage;
