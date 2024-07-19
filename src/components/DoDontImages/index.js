import React from 'react';
import DoTick from '@site/src/components/DoTick';
import DontCross from '@site/src/components/DontCross';

const DoDontImages = ({ children, img01, img02 }) => {
  return (
    <div className="lg:grid grid-cols-3 grid-rows-1 gap-4 bg-[#F0F6FA] rounded-md p-4 border-0 border-t-4 lg:border-t-0 lg:border-l-4 border-solid border-[#1c1e21] mb-6">
      <div>{children}</div>
      <div className="my-6 lg:my-0">
        <div className="flex items-center font-bold text-[#28a138] mb-4">
          <DoTick /> <span>Do</span>
        </div>

        <div className="bg-white border-0 border-t-4 border-solid border-[#28a138] p-4">
          <img src={img01} />
        </div>
      </div>

      <div className="my-4 lg:my-0">
        <div className="flex items-center font-bold text-[#d21c1c] mb-4">
          <DontCross /> <span>Don't</span>
        </div>
        <div className="bg-white border-0 border-t-4 border-solid border-[#d21c1c] p-4">
          <img src={img02} />
        </div>
      </div>
    </div>
  );
};

export default DoDontImages;
