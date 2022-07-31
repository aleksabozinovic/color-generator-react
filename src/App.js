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

  const [isLocked, setIsLocked] = useState(false);

  // Use Effect
  useEffect(() => {
    setColor(() => [randomColor()]);
  }, []);

  // Handler

  return (
    <div className="App">
      <Nav isLocked={isLocked} setColor={setColor} />
      <Colors
        isLocked={isLocked}
        setIsLocked={setIsLocked}
        color={color}
        setColor={setColor}
      />
    </div>
  );
}

export default App;
