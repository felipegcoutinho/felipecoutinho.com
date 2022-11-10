import React from 'react'
import style from "./StackCarrousel.module.css";

function StackCarrousel() {
  return (
    <div className={style.container}>
      <div className={style.containeritens}>
        <div className={style.item}><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" height="80px" /></div>
        <div className={style.item}><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" height="80px" /></div>
        <div className={style.item}><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg" height="80px" /></div>
        <div className={style.item}><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" height="80px" /></div>
      </div>
    </div>
  )
}


export default StackCarrousel