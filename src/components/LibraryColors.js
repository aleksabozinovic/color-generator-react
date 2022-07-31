import React, { useState } from "react";

// Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";

const LibraryColor = () => {
  // State
  const [isShown1, setIsShown1] = useState(false);
  const [isShown2, setIsShown2] = useState(false);
  const [isShown3, setIsShown3] = useState(false);

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
          <div className="library__color">
            <div
              style={{ background: "#ff0000" }}
              className="painted__div"
            ></div>
            <div className="library__description">
              <h4>Red</h4>
              <h6>#ff0000 </h6>
            </div>
          </div>

          {/* Each Color */}
          <div className="library__color">
            <div
              style={{ background: "#ffff00" }}
              className="painted__div"
            ></div>
            <div className="library__description">
              <h4>Yellow</h4>
              <h6>#ffff00</h6>
            </div>
          </div>

          {/* Each Color */}
          <div className="library__color">
            <div
              style={{ background: "#0000ff" }}
              className="painted__div"
            ></div>
            <div className="library__description">
              <h4>Blue</h4>
              <h6>#0000ff</h6>
            </div>
          </div>

          {/* Each Color */}
          <div className="library__color">
            <div
              style={{ background: "#800080" }}
              className="painted__div"
            ></div>
            <div className="library__description">
              <h4>Purple</h4>
              <h6>#800080</h6>
            </div>
          </div>

          {/* Each Color */}
          <div className="library__color">
            <div
              style={{ background: "#ff6d0a" }}
              className="painted__div"
            ></div>
            <div className="library__description">
              <h4>Orange</h4>
              <h6>#ff6d0a</h6>
            </div>
          </div>
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
          <div className="library__color">
            <div
              style={{ background: "#98a7fd" }}
              className="painted__div"
            ></div>
            <div className="library__description">
              <h4>Light Blue</h4>
              <h6>#98a7fd</h6>
            </div>
          </div>

          {/* Each Color */}
          <div className="library__color">
            <div
              style={{ background: "#FF7676" }}
              className="painted__div"
            ></div>
            <div className="library__description">
              <h4>Light Blue</h4>
              <h6>#ff7676</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LibraryColor;
