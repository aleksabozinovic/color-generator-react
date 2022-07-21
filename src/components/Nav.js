import React from "react";

// Import font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowsRotate, faBook } from "@fortawesome/free-solid-svg-icons";
import { randomColor } from "../functions/createColor";

const Nav = ({ setColor, color }) => {
  const changeColor = () => {
    setColor(() => [randomColor()]);
  };

  return (
    <nav>
      <h1>Color Generator</h1>
      <button onClick={changeColor}>
        <FontAwesomeIcon icon={faArrowsRotate} /> Generate
      </button>
      <button>
        <FontAwesomeIcon icon={faBook} /> Library
      </button>
    </nav>
  );
};

export default Nav;
