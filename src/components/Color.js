import React from "react";

const Color = ({ newColors }) => {
  return (
    <div style={{ background: `#${newColors}` }} className="color">
      <h1>{newColors}</h1>
    </div>
  );
};

export default Color;
