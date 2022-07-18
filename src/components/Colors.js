import React from "react";

// Import Color
import Color from "./Color";

const Colors = ({ color, setColor }) => {
  return (
    <div className="colors">
      <Color color={color} />
      <Color color={color} />
      <Color color={color} />
      <Color color={color} />
      <Color color={color} />
    </div>
  );
};

export default Colors;
