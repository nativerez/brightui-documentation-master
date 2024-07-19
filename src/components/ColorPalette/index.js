import React from 'react';

const ColorPalette = ({ children }) => {
  return <div className="grid grid-cols-3 mb-6">{children}</div>;
};

export default ColorPalette;
