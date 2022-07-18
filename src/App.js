import { useState } from "react";

// Styles
import "./styles/app.scss";

// Components
import Nav from "./components/Nav";
import Colors from "./components/Colors";

function App() {
  // Functions
  let randomColor = Math.floor(Math.random() * 16777215).toString(16);
  // State
  const [color, setColor] = useState([randomColor]);

  return (
    <div className="App">
      <Nav color={color} setColor={setColor} />
      <Colors color={color} setColor={setColor} />
    </div>
  );
}

export default App;
