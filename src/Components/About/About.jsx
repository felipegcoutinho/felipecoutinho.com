import React from "react";
import Stack from "./StackCarrousel";
import styled from "styled-components";
import {device} from "../../Assets/device";

const Container = styled.section`
  grid-area: 15 / 1 / 16 / 17;
  margin-bottom: 20px;

  @media ${device.tablet_768px} {
    grid-area: 15 / 2 / 16 / 16;
  }
  @media ${device.laptop_1024px} {
    grid-area: 15 / 3 / 16 / 15;
    min-height: 50vh;
    display: flex;
    align-items: center;
  }

  @media ${device.laptopL_1440px} {
    min-height: 80vh;
  }
`;

const Content = styled.div`
  @media ${device.mobileS} {
    align-items: center;
    color: #333;
    justify-content: center;
    padding: 0 20px;
  }

  @media ${device.mobileS} {
    font-size: 1.1rem;
  }

  @media ${device.mobileL_425px} {
    font-size: 1.2rem;
  }

  @media ${device.tablet_768px} {
    font-size: 1.3rem;
  }

  @media ${device.laptop_1024px} {
    font-size: 1.4rem;
  }

  @media ${device.laptopL_1440px} {
    font-size: 1.6rem;
  }
`;

function About() {
  return (
    <Container>
      <Content>
        <p>
          I'm currently an Engineer at Upstatement building things for the web with some awesome people. I recently
          graduated from Northeastern University after completing three awesome six-month co-ops at MullenLowe U.S.,
          Starry, and Apple Music.
        </p>
        <br></br>
        <p>
          As a software engineer, I enjoy bridging the gap between engineering and design — combining my technical
          knowledge with my keen eye for design to create a beautiful product. My goal is to always build applications
          that are scalable and efficient under the hood while providing engaging, pixel-perfect user experiences. When
          I'm not in front of a computer screen, I'm probably snowboarding, cruising around on my penny board, or
          crossing off another item on my bucket list.
        </p>

        {/* <Stack /> */}
      </Content>
    </Container>
  );
}

export default About;
