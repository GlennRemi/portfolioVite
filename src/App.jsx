import "./App.css";
import Project from "./components/Project/Project_default_compiler";
import NavBar from "./components/NavBar/NavBar_Compiler";

function App() {
  return (
    <div className="App">
      <NavBar>
        <p>This is getting mapped in the nav component</p>
        <p>this is to make multiple input for maping</p>
        <p>This is not part of the portfolio</p>
      </NavBar>
      <Project />
    </div>
  );
}

export default App;
