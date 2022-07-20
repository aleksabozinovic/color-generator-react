import React from "react";

// Import Color
import Color from "./Color";

const Colors = ({ colorsArray }) => {
  return (
    <div className="colors">
      {colorsArray.map((newColors) => (
        <Color newColors={newColors} />
      ))}
    </div>
  );
};

export default Colors;
