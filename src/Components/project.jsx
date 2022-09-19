import React from 'react';
import style from './Project.module.css'
import stylec from "./CardsProject.module.css";

function Project() {
  return (
    <main className={style.container}>
      <div className={style.gridContainer}>

        <a href="">
          <div className={stylec.cards}>
            <header><h1>Portifólio</h1></header>
            <summary><h3>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3></summary>
            <footer><h3>#JS #HTML</h3></footer>
          </div>
        </a>

      </div>
    </main>
  );
}

export default Project;
