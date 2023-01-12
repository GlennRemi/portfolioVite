import { useState } from "react";

function ButtonToggle() {
  const light = "../../styles/darkmode.css";
  const dark = "../../style/darkmode.css";
  const [colorMode, setMode] = useState(light);

  function handleClick() {
    setMode((oldMode) => (oldMode === light ? dark : light));
    const modeToggle = document.createElement("link");
    modeToggle.href = colorMode;
    modeToggle.rel = "stylesheet";
    document.head.appendChild(modeToggle);
  }

  return (
    <div>
      <button onClick={handleClick}>test</button>
      <p>{colorMode}</p>
    </div>
  );
}

export default ButtonToggle;
