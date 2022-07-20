import React from "react";

// Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLockOpen,
  faLock,
  faSliders,
} from "@fortawesome/free-solid-svg-icons";

import chroma from "chroma-js";

const Color = ({ newColors }) => {
  // Functions

  const checkContrast = (color) => {
    const contrast = chroma(color).luminance();
    if (contrast > 0.6) return "#000";
    else return "#fff";
  };

  const colorizedSat = (color) => {
    const noSat = chroma(color).set("hsl.s", 0);
    const fullSat = chroma(color).set("hsl.s", 1);
    const scaleSat = chroma.scale([noSat, color, fullSat]);
    return `linear-gradient(to right,${scaleSat(0)}, ${scaleSat(1)})`;
  };

  const colorizedBrightness = (color) => {
    const midBright = chroma(color).set("hsl.l", 0.5);
    const scaleBright = chroma.scale(["black", midBright, "white"]);
    return `linear-gradient(to right, ${scaleBright(0)}, ${scaleBright(
      0.5
    )}, ${scaleBright(1)})`;
  };

  // !BUG
  const changeSaturation = (e) => {
    let currentDiv = e.target.closest(".color");
    let currentValue = e.target.value;
    let curColor = currentDiv.style.background;

    curColor = chroma(curColor).set("hsl.s", currentValue);
    currentDiv.style.background = curColor;
  };

  return (
    <div style={{ background: newColors }} className="color">
      <h1
        style={{ color: `${checkContrast(newColors)}` }}
        className="color__id"
      >
        {newColors}
      </h1>
      <div className="icons__div">
        <FontAwesomeIcon
          style={{ color: `${checkContrast(newColors)}` }}
          className="icon"
          icon={faSliders}
        />
        <FontAwesomeIcon
          style={{ color: `${checkContrast(newColors)}` }}
          className="icon"
          icon={faLockOpen}
        />
      </div>
      <div className="slider">
        <h2>Hue</h2>
        <input
          type="range"
          style={{
            backgroundImage: `linear-gradient(to right, rgb(204, 75, 75), rgb(204, 204, 75), rgb(75, 204, 75), rgb(75, 204, 204), rgb(75, 75, 204), rgb(204, 75, 204), rgb(204, 75, 75))`,
          }}
        />

        <h2>Brightness</h2>
        <input
          style={{
            backgroundImage: `${colorizedBrightness(newColors)}`,
          }}
          type="range"
        />

        <h2>Saturation</h2>
        <input
          onClick={(e) => changeSaturation(e)}
          type="range"
          style={{
            backgroundImage: `${colorizedSat(newColors)}`,
          }}
        />
      </div>
    </div>
  );
};

export default Color;
