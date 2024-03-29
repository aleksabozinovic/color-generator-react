import { useEffect, useState } from "react";

// Styles
import "./styles/app.scss";

// Components
import Nav from "./components/Nav";
import Colors from "./components/Colors";
import SideNav from "./components/SideNav";

// Functions
import { randomColor } from "./functions/createColor";

function App() {
  // State
  const [color, setColor] = useState([]);
  const [activeNav, setActiveNav] = useState(false);
  const [isLocked, setIsLocked] = useState(false);

  // Use Effect
  useEffect(() => {
    setColor(() => [randomColor()]);
  }, []);

  // Handler

  return (
    <div className={`App ${activeNav ? "active" : ""}`}>
      <Nav
        activeNav={activeNav}
        setActiveNav={setActiveNav}
        isLocked={isLocked}
        setColor={setColor}
      />
      <Colors
        activeNav={activeNav}
        isLocked={isLocked}
        setIsLocked={setIsLocked}
        color={color}
        setColor={setColor}
      />
      <SideNav setColor={setColor} activeNav={activeNav} />
    </div>
  );
}

export default App;
