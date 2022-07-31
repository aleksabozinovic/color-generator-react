import React from "react";

// Import Color
import Color from "./Color";

const Colors = ({ color, setColor, isLocked, setIsLocked }) => {
  return (
    <div className="colors">
      {color.map((newColors, i) => (
        <Color
          isLocked={isLocked}
          setIsLocked={setIsLocked}
          key={i}
          newColors={newColors}
          setColor={setColor}
        />
      ))}
    </div>
  );
};

export default Colors;
