import React from 'react';
import './index.css';
import styled from 'styled-components'

const Title = styled.h1`
color:red;
`;

function Aboutme() {
  return (
    <div id="aboutme-container">
      <Title>
        <h1>About</h1>{' '}
      </Title>
    </div >
  );
}

export default Aboutme;
