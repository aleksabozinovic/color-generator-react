import React from "react";

// Import Color
import Color from "./Color";

const Colors = ({ color, setColor }) => {
  return (
    <div className="colors">
      {color.map((newColors) => (
        <Color newColors={newColors} setColor={setColor} color={color} />
      ))}
    </div>
  );
};

export default Colors;
