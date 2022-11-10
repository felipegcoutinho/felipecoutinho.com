import React from "react";
import style from "./Header.module.css";

export default function Header() {
  return (
    <header className={style.container}>
      <div className={style.content}>
        <div className={style.logo}>FELIPE COUTINHO</div>
        <div className={style.dark}>DARK MODE</div>
      </div>
    </header>
  );
}
