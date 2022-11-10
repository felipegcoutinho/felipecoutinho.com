import React, {Fragment} from "react";
import Photo from "./Photo";
import style from "./Bio.module.css";
import Buttons from "./Buttons";

function Bio() {
  return (
    <>
      <section className={style.container}>
        <div className={style.content}>
          {/* <Photo /> */}
          <h1 className={style.name}>Hi, I'm Felipe.</h1>
          <p className={style.job}>Web Developer </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at neque in tellus fringilla viverra vel quis
            nibh. Sed ac elit et mauris lacinia dictum. In cursus neque non semper aliquet. Phasellus eget consequat
            tellus, sit amet luctus risus. Nulla consectetur sit amet leo in placerat.
          </p>
          <Buttons />
        </div>
      </section>
    </>
  );
}

export default Bio;
