import React from "react";
import Photo from "./Photo";
import Buttons from "./Buttons";
import * as styled from "./bio.styled";

function Bio() {
  return (
    <styled.Container>
      <styled.Content>
        {/* <Photo /> */}
        <styled.Name>Hi, I'm Felipe.</styled.Name>
        <styled.Job>Web Developer </styled.Job>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at neque in tellus fringilla viverra vel quis
          nibh. Sed ac elit et mauris lacinia dictum. In cursus neque non semper aliquet. Phasellus eget consequat
          tellus, sit amet luctus risus. Nulla consectetur sit amet leo in placerat.
        </p>
        <Buttons />
      </styled.Content>
    </styled.Container>
  );
}

export default Bio;
