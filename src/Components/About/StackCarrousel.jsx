import React from 'react'
import style from "./StackCarrousel.module.css";

function StackCarrousel() {
  // return (
  //   // <div class={style.slider}>
  //   //   <div class={style.slidetrack}>
  //   //     <div class={style.slide}>
  //   //       <img
  //   //         src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/1.png"
  //   //         height="100"
  //   //         width="250"
  //   //         alt=""
  //   //       />
  //   //     </div>
  //   //     <div class={style.slide}>
  //   //       <img
  //   //         src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/1.png"
  //   //         height="100"
  //   //         width="250"
  //   //         alt=""
  //   //       />
  //   //     </div>
  //   //     <div class={style.slide}>
  //   //       <img
  //   //         src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/1.png"
  //   //         height="100"
  //   //         width="250"
  //   //         alt=""
  //   //       />
  //   //     </div>
  //   //     <div class={style.slide}>
  //   //       <img
  //   //         src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/1.png"
  //   //         height="100"
  //   //         width="250"
  //   //         alt=""
  //   //       />
  //   //     </div>
  //   //   </div>
  //   // </div>

  //   <span></span>

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

function SVG() {
  return (
    <div></div >
  )
}


export default StackCarrousel