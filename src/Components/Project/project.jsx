import React from "react";
import style from "./Project.module.css";

function Project() {
  return (
    <main className={style.container}>
      <div className={style.content}>
        <Card
          url="#"
          header="Portifólio"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit."
          tag1="HTML"
          tag2="CSS"
          tag3="JS"
          tag4="React"
        />
        <Card
          url="#"
          header="Portifólio"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit."
          tag1="HTML"
          tag2="CSS"
          tag3="JS"
          tag4="React"
        />
        <Card
          url="#"
          header="Portifólio"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit."
          tag1="HTML"
          tag2="CSS"
          tag3="JS"
          tag4="React"
        />
        <Card
          url="#"
          header="Portifólio"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit."
          tag1="HTML"
          tag2="CSS"
          tag3="JS"
          tag4="React"
        />
      </div>
    </main>
  );
}

function Card(props) {
  return (
    <div className={style.cards}>
      <header>
        <h1>
          <a href={props.url}>{props.header}</a>
        </h1>
      </header>
      <summary>
        <h3>{props.desc}</h3>
      </summary>
      <footer>
        <h5>
          <span className={style.tags}>{props.tag1}</span>
          <span className={style.tags}>{props.tag2}</span>
          <span className={style.tags}>{props.tag3}</span>
          <span className={style.tags}>{props.tag4}</span>
        </h5>
      </footer>
    </div>
  );
}

export default Project;
