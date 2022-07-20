import React from "react";

// Import font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowsRotate, faBook } from "@fortawesome/free-solid-svg-icons";

const Nav = ({ setColor }) => {
  const changeColor = () => {
    for (let i = 0; i < 5; i++) {
      let randomColor = () => Math.floor(Math.random() * 16777215).toString(16);
      setColor([randomColor()]);
    }
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
