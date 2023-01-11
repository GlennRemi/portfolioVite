import React, { useEffect, useState } from "react";

const Button = (props) => {
  const { colorMode, setMode } = userState(light);

  const { text, style } = props;
  const light = "./style/lightmode.css";
  const dark = "./style/darkmode.css";
  colorMode === "light" ? dark : light;
  // setMode(colorMode){
  //   const modeToggle = document.createElement("link")
  //   modeToggle.href = url
  //   modeToggle.rel = "stylesheet"
  //   document.head.appendChild(modeToggle)
  // }
  return (
    <div>
      <Button onClick={() => setMode((oldMode) => !oldMode)} className={style}>
        {text}
      </Button>
    </div>
  );
};

export default { Button, colorMode };
