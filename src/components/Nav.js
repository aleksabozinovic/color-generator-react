import React from "react";

// Import font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowsRotate, faBook } from "@fortawesome/free-solid-svg-icons";
import { randomColor } from "../functions/createColor";

// import { coloredSlider } from "../functions";

const Nav = ({ setColor, isLocked, setActiveNav }) => {
  // Handlers
  const changeColorHandler = () => {
    if (isLocked) return;
    setColor(() => [randomColor()]);
  };

  const activateSideNavHandler = () => {
    setActiveNav((previous) => !previous);
  };

  return (
    <nav>
      <h1>Color Generator</h1>
      <button onClick={changeColorHandler}>
        <FontAwesomeIcon icon={faArrowsRotate} /> Generate
      </button>
      <button onClick={activateSideNavHandler}>
        <FontAwesomeIcon icon={faBook} /> Library
      </button>
    </nav>
  );
};

export default Nav;
