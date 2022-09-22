import React from 'react'
import style from "./Buttons.module.css";

export default function BioButtons() {
  return (
    <div>
      <Buttonsprops
        social1="Github"
        social2="Linkedin"
        social3="Resume"
      />
    </div>
  )
}


function Buttonsprops(props) {
  return (
    <div>
      <a href="#1"><button>{props.social1}</button></a>
      <a href="#2"><button>{props.social2}</button></a>
      <a href="#3"><button>{props.social3}</button></a>
    </div >
  )

}
