import React from 'react';
import style from './Project.module.css'
import stylecard from "./CardsProject.module.css";

function Project() {
  return (
    <main className={style.container}>
      <div className={style.gridContainer}>
        <Card
          url="#"
          header="Portifólio"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit."
          tags="JS HTML CSS"
        />
        <Card
          url="#"
          header="Portifólio"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit."
          tags="JS HTML CSS"
        />
        <Card
          url="#"
          header="Portifólio"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit."
          tags="JS HTML CSS"
        />

      </div >
    </main >
  );
}



function Card(props) {
  return (
    <div className={`${stylecard.cards}`}>
      <header><h1><a href={props.url}>{props.header}</a></h1></header>
      <summary><h3>{props.desc}</h3></summary>
      <footer><h3>{props.tags}</h3></footer>
    </div>

  )
}


export default Project;


{/* <div className={`${stylec.cards} ${stylec.yellow}`}>
< header > <h1><a href="#">Portifólio</a></h1></header>
<summary><h3>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3></summary>
<footer><h3>#JS #HTML #CSS </h3></footer>
</div> */}
