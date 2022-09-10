import React from 'react';
import style from './Project.module.css'

function Project() {
  return (
    <main className={style.container}>
      <div className={style.gridContainer}>
        <div className={style.cards}>
          <header><h1>Titulo</h1></header>
          <article><h3>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3></article>
          <footer><h3>Tags</h3></footer>
        </div>

















        <div className={style.cards}>Card 2</div>
        <div className={style.cards}>Card 3</div>
      </div>
    </main>
  );
}

export default Project;
