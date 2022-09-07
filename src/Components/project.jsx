import React from 'react';
import style from './Project.module.css'

function Project() {
  return (
    <main className={style.container}>
      <div className={style.gridContainer}>
        <div className={style.cards}>Card 1</div>
        <div className={style.cards}>Card 2</div>
        <div className={style.cards}>Card 3</div>
        {/* <div className={style.cards}>Card 4</div>
        <div className={style.cards}>Card 5</div>
        <div className={style.cards}>Card 6</div>
        <div className={style.cards}>Card 7</div> */}
      </div>
    </main>
  );
}

export default Project;
