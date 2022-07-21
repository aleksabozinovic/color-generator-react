import React, { useEffect } from "react";

// Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLockOpen,
  faLock,
  faSliders,
} from "@fortawesome/free-solid-svg-icons";

import chroma from "chroma-js";

const Color = ({ newColors, setColor, color }) => {
  useEffect(() => {
    // ? EXPORTOVATI OVU FUNKCIJU ?
    const inputs = document.querySelectorAll(".slider input");
    inputs.forEach((slider) => {
      if (slider.classList.contains("hue")) {
        const hueValue = chroma(newColors).hsl()[0];
        slider.value = Math.floor(hueValue);
      }
      if (slider.classList.contains("saturation")) {
        const brightValue = chroma(newColors).hsl()[1];
        slider.value = Math.floor(brightValue * 100) / 100;
      }
      if (slider.classList.contains("brightness")) {
        const satValue = chroma(newColors).hsl()[2];
        slider.value = Math.floor(satValue * 100) / 100;
      }
    });
  }, []);
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
  const hslControls = (e) => {
    const inputs = document.querySelectorAll("input");
    let hue = inputs[0];
    let brightness = inputs[1];
    let saturation = inputs[2];
    let curDiv = e.target.closest(".color");

    let colorHex = chroma(newColors)
      .set("hsl.s", saturation.value)
      .set("hsl.l", brightness.value)
      .set("hsl.h", hue.value);
    curDiv.style.background = colorHex;

    let newColor = colorHex.hex();
    setColor(() => [newColor]);
    colorizedBrightness(newColors);
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
          min="0"
          max="360"
          onInput={(e) => hslControls(e)}
          type="range"
          style={{
            backgroundImage: `linear-gradient(to right, rgb(204, 75, 75), rgb(204, 204, 75), rgb(75, 204, 75), rgb(75, 204, 204), rgb(75, 75, 204), rgb(204, 75, 204), rgb(204, 75, 75))`,
          }}
          className="hue"
        />

        <h2>Brightness</h2>
        <input
          min="0"
          max="1"
          step="0.01"
          onInput={(e) => hslControls(e)}
          style={{
            backgroundImage: `${colorizedBrightness(newColors)}`,
          }}
          type="range"
          className="brightness"
        />

        <h2>Saturation</h2>
        <input
          min="0"
          max="1"
          step="0.01"
          onInput={(e) => hslControls(e)}
          type="range"
          style={{
            backgroundImage: `${colorizedSat(newColors)}`,
          }}
          className="saturation"
        />
      </div>
    </div>
  );
};

export default Color;
