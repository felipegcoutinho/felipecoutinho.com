import React from 'react';
import style from './About.module.css';

function About() {
  return (
    <main className={style.container}>
      <div className={style.description}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at
          neque in tellus fringilla viverra vel quis nibh. Sed ac elit et mauris
          lacinia dictum. In cursus neque non semper aliquet. Phasellus eget
          consequat tellus, sit amet luctus risus. Nulla consectetur sit amet
          leo in placerat.
        </p>
      </div>
    </main>
  );
}

export default About;
