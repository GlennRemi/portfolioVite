import { CurrentTheme } from "../../App";
import { useState, useContext } from "react";

function ButtonToggle() {
  const [newcolorMode, setNewMode] = useState("darkmode");
  const { setColorMode, colorMode } = useContext(CurrentTheme);

  function handleClick() {
    setNewMode((oldMode) =>
      oldMode === "darkmode" ? "lightmode" : "darkmode"
    );
    setColorMode(newcolorMode);
  }

  return (
    <div>
      <button onClick={handleClick}>test</button>
      <p>{colorMode}</p>
    </div>
  );
}

export default ButtonToggle;
