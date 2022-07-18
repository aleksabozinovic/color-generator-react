import React from "react";

const Color = ({ color, setColor }) => {
  // console.log(color);
  return (
    <div style={{ background: `#${color}` }} className="color">
      <h1>{`#${color}`}</h1>
    </div>
  );
};

export default Color;
