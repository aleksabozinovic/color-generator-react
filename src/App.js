import { useEffect, useState } from "react";

// Styles
import "./styles/app.scss";

// Components
import Nav from "./components/Nav";
import Colors from "./components/Colors";
import { randomColor } from "./functions/createColor";

function App() {
  // State
  const [color, setColor] = useState([]);
  useEffect(() => {
    setColor(() => [randomColor()]);
  }, []);

  return (
    <div className="App">
      <Nav color={color} setColor={setColor} />
      <Colors color={color} setColor={setColor} />
    </div>
  );
}

export default App;
