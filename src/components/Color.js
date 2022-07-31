import React from "react";

// Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLockOpen,
  faLock,
  faSliders,
} from "@fortawesome/free-solid-svg-icons";

import chroma from "chroma-js";

import Slider from "./Slider";

const Color = ({ newColors, setColor, color }) => {
  // Handlers
  const openSliderHandler = (e) => {
    const slider = document.querySelector(".slider");
    slider.classList.remove("slider-hidden");
  };

  // Functions
  const checkContrast = (color) => {
    const contrast = chroma(color).luminance();
    if (contrast > 0.6) return "#000";
    else return "#fff";
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
          onClick={openSliderHandler}
        />
        <FontAwesomeIcon
          style={{ color: `${checkContrast(newColors)}` }}
          className="icon"
          icon={faLockOpen}
        />
      </div>
      <Slider newColors={newColors} setColor={setColor} />
    </div>
  );
};

export default Color;
