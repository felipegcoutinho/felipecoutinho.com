import React from 'react';
import style from './Project.module.css'
import stylec from "./CardsProject.module.css";

function Project() {
  return (
    <main className={style.container}>
      <div className={style.gridContainer}>

        <div className={stylec.cards}>
          <header><h1><a href="#">Portifólio</a></h1></header>
          <summary><h3>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3></summary>
          <footer><h3>#JS #HTML #CSS </h3></footer>
        </div>

      </div>
    </main>
  );
}

export default Project;
