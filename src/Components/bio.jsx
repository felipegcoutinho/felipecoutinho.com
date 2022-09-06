import React from 'react';
import style from './Bio.module.css'

function Bio() {
  return (
    <main className={style.container}>
      <header className={style.logo}>[LOGO]</header>
      <div className={style.description}>
        <div>[FOTO]</div>
        <h1>Hi, :)</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at
          neque in tellus fringilla viverra vel quis nibh. Sed ac elit et mauris
          lacinia dictum. In cursus neque non semper aliquet. Phasellus eget
          consequat tellus, sit amet luctus risus. Nulla consectetur sit amet
          leo in placerat.
        </p>
        <div className={style.links}>[LINKS]</div>
      </div>
    </main>

  );
}

export default Bio;
