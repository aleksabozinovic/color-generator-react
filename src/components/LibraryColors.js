import React, { useState } from "react";

// Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";

// Import Data
import { basicColorData, preMadeColorData } from "../data";

const LibraryColor = () => {
  // State
  const [isShown1, setIsShown1] = useState(false);
  const [isShown2, setIsShown2] = useState(false);
  const [isShown3, setIsShown3] = useState(false);

  const [basicColors, setBasicColors] = useState(basicColorData());
  const [preMadeColors, setPreMadeColors] = useState(preMadeColorData());

  const hideColorsHandler = (e, setIsShown) => {
    const childrenElement = e.target.closest("div").children[1];
    childrenElement.classList.toggle("hidden");
    setIsShown((previous) => !previous);
  };

  return (
    <div className="library">
      {/* YOUR COLORS*/}
      <div className="your__colors">
        <h2 onClick={(e) => hideColorsHandler(e, setIsShown1)}>
          Your Colors {/* ! FIX THIS! */}
          {isShown1 ? (
            <FontAwesomeIcon icon={faAngleUp} />
          ) : (
            <FontAwesomeIcon icon={faAngleDown} />
          )}{" "}
        </h2>
        {/* Library Colors */}
        <div className="library__colors hidden">
          <p>Please add color to your library 😄</p>
        </div>
      </div>
      {/* BASIC COLORS */}
      <div className="basic__colors ">
        <h2 onClick={(e) => hideColorsHandler(e, setIsShown2)}>
          Basic Colors{" "}
          {isShown2 ? (
            <FontAwesomeIcon icon={faAngleUp} />
          ) : (
            <FontAwesomeIcon icon={faAngleDown} />
          )}{" "}
        </h2>
        {/* Library Colors */}
        <div className="library__colors hidden">
          {/* Each Color */}

          {basicColors.map((element) => (
            <div key={element.id} className="library__color">
              <div
                style={{ background: `${element.background}` }}
                className="painted__div"
              ></div>
              <div className="library__description">
                <h4>{element.name}</h4>
                <h6>{element.background}</h6>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* PRE MADE COLORS */}
      <div className="pre-made__colors ">
        <h2 onClick={(e) => hideColorsHandler(e, setIsShown3)}>
          Pre Made Colors{" "}
          {isShown3 ? (
            <FontAwesomeIcon icon={faAngleUp} />
          ) : (
            <FontAwesomeIcon icon={faAngleDown} />
          )}{" "}
        </h2>

        {/* Library Colors */}
        <div className="library__colors hidden">
          {/* Each Color */}
          {preMadeColors.map((element) => (
            <div key={element.id} className="library__color">
              <div
                style={{ background: `${element.background}` }}
                className="painted__div"
              ></div>
              <div className="library__description">
                <h4>{element.name}</h4>
                <h6>{element.background}</h6>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LibraryColor;
