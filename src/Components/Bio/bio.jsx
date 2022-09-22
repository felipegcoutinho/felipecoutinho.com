import React from 'react';
import Photo from './Photo';
import style from './Bio.module.css';
import Buttons from './Buttons';
import Header from './Header';

function Bio() {
  return (
    <main className={style.container}>
      <Header />
      <div className={style.description}>
        <Photo />
        <h1>Hi, I'm Felipe.</h1>
        <p>Web Developer  </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at
          neque in tellus fringilla viverra vel quis nibh. Sed ac elit et mauris
          lacinia dictum. In cursus neque non semper aliquet. Phasellus eget
          consequat tellus, sit amet luctus risus. Nulla consectetur sit amet
          leo in placerat.
        </p>
        <Buttons />
      </div>
    </main>
  );
}

export default Bio;
