import React, { useEffect } from "react";

// Import Chroma Js
import chroma from "chroma-js";

// Import functions
import { coloredSlider } from "../functions";

// Font Awesome
// Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const Slider = ({ newColors, setColor }) => {
  // Use Effect
  useEffect(() => coloredSlider(newColors, chroma));

  // Handler
  const closeSliderHandler = () => {
    const slider = document.querySelector(".slider");
    slider.classList.add("slider-hidden");
  };

  // Functions

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
    <div className="slider slider-hidden">
      <FontAwesomeIcon
        className="iks"
        icon={faXmark}
        onClick={closeSliderHandler}
      />
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
  );
};

export default Slider;
