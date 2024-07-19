import React from "react";

const TwoColGrid = ({ children }) => {
  return <div className="grid-cols-2 gap-4 mb-6 lg:grid">{children}</div>;
};

export default TwoColGrid;
