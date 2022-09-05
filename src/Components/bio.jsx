import React from 'react';
import styled from 'styled-components';
import { device } from './device';

const Container = styled.div`
    font-family: Georgia, 'Times New Roman', Times, serif;

    @media ${device.mobileS} {
      min-width: 100%;
      font-size: 1.2rem;
     }
     @media ${device.tablet} {
      min-width: 100%;
      font-size: 2rem;
     }
`
const Logo = styled.h4`
    color: white;

    @media ${device.mobileS} {
      display:flex;
      justify-content: center;
      align-items: center;
      min-width: 320px;
      height: 50px;
      font-size: 1.2rem;
      text-align: center;
      background-color: black;
     }
`
const Description = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    background-color: white;
    height: 95vh;
    padding: 20px;
`
const H1 = styled.h1`
    padding: 20px;
    margin-top: 30px;
`

function Bio() {
  return (
    <Container>
      <Logo>logo</Logo>
      <H1>Olá, :)</H1>
      <Description>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at
        neque in tellus fringilla viverra vel quis nibh. Sed ac elit et mauris
        lacinia dictum. In cursus neque non semper aliquet. Phasellus eget
        consequat tellus, sit amet luctus risus. Nulla consectetur sit amet
        leo in placerat.
      </Description>
    </Container>

  );
}

export default Bio;
