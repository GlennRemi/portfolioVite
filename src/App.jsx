/* Modules */
import { useState, createContext } from "react";

/* Components */
import Project from "./components/Project/Project_default_compiler";
import NavBar from "./components/NavBar/NavBar_Compiler";
import ButtonToggle from "./components/Button/ButtonToggle";
import RepoDisplay from "./components/API/RepoDisplay";
import RepoCount from "./components/API/RepoCount";
import RecentChanges from "./components/API/GHRecentChanges";

/* Styles */
import darkmode from "./styles/darkmode.module.css";
import lightmode from "./styles/lightmode.module.css";
import "./App.css";
export const CurrentTheme = createContext();

function App() {
  /* Global dark light style mode */
  const [colorMode, setColorMode] = useState("lightmode");
  const themes = {
    lightmode,
    darkmode,
  };
  const theme = themes[colorMode];

  return (
    <div className="App">
      <CurrentTheme.Provider value={{ theme, setColorMode }}>
        <ButtonToggle />
        <Project />
        <RepoDisplay />
        <RepoCount />
        <RecentChanges />
      </CurrentTheme.Provider>
    </div>
  );
}

export default App;

// For DnL CSS, add these lines in component
// import { CurrentTheme } from "../../App";
// import { useContext } from "react";
// const colorToggle = useContext(CurrentTheme);
// Use colorToggle.theme.(CSS-CLASSNAME)

// Improve DnL Button layout
//
//
//
//
