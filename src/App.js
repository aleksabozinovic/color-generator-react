import { useState } from "react";

// Styles
import "./styles/app.scss";

// Components
import Nav from "./components/Nav";
import Colors from "./components/Colors";

function App() {
  // Functions
  let randomColor = () => Math.floor(Math.random() * 16777215).toString(16);

  let colorsArray = [];
  for (let i = 0; i < 5; i++) {
    colorsArray.push(randomColor());
  }

  // console.log(colorsArray.forEach((e) => console.log(e)));

  // State
  const [color, setColor] = useState([colorsArray.map((e) => e)]);

  return (
    <div className="App">
      <Nav color={color} setColor={setColor} />
      <Colors colorsArray={colorsArray} />
    </div>
  );
}

export default App;
