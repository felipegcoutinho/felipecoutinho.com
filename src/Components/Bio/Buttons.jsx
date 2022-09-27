import React from 'react'
import style from "./Buttons.module.css";

export default function BioButtons() {
  return (
    <div>
      <Buttonsprops
        social1="Github" url1="###1"
        social2="Linkedin" url2="###2"
        social3="Resumé" url3="###3"
        social4="Stackblitz" url4="###4"
      />

    </div>
  )
}


function Buttonsprops(props) {
  return (
    <div className={style.buttoncontainer}>
      <a href={props.url1}><button><i class="fa-brands fa-github-alt"></i> {props.social1} </button></a>
      <a href={props.url2}><button><i class="fa-brands fa-linkedin"></i> {props.social2} </button></a>
      <a href={props.url3}><button><i class="fa-regular fa-file-lines"></i> {props.social3}</button></a>
      <a href={props.url4}><button><i class="fa-solid fa-bolt"></i> {props.social4}</button></a>
    </div >
  )

}
