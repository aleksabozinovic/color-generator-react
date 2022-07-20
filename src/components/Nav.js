import React from "react";

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
      <button onClick={changeColor}>Generate</button>
      <button>Library</button>
    </nav>
  );
};

export default Nav;
