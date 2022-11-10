import React from "react";
import Bio from "./Components/bio/bio.jsx";
import Project from "./Components/project/project.jsx";
import About from "./Components/about/About.jsx";
import style from "./App.module.css";
import Header from "./Components/header/Header.jsx";

function App() {
  return (
    <div className={style.container}>
      <Header />
      <Bio />
      <Project />
      <About />
    </div>
  );
}

export default App;
