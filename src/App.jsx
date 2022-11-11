import React from "react";
import Bio from "./Components/bio/Bio.jsx";
import Project from "./Components/project/Project.jsx";
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
