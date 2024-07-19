import React from "react";

const TextImage = ({ children, title, img }) => {
  return (
    <div className="grid-rows-1 gap-4 xl:grid-cols-2 xl:grid">
      <div>
        <h4>{title}</h4>
        {children}
      </div>
      <div className="my-6 lg:my-0">
        <img
          className="w-full sm:w-3/4 md:w-1/2 lg:w-3/4 xl:w-full"
          src={img}
        />
      </div>
    </div>
  );
};

export default TextImage;
