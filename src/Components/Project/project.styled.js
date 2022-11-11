import {device} from "../../Assets/device";
import styled from "styled-components";

export const Container = styled.section`
  grid-area: 11 / 1 / 13 / 17;

  @media ${device.laptop_1024px} {
    min-height: 100vh;
  }

  @media ${device.laptopL_1440px} {
    min-height: 40vh;
  }
`;

export const Content = styled.div`
  @media ${device.mobileS_320px} {
    margin: 10px;
    padding: 10px;
  }

  @media ${device.mobileL_425px} {
    display: grid;
    grid-template-columns: repeat(1, 300px);
    justify-content: center;
  }

  @media ${device.tablet_768px} {
    gap: 10px;
    grid-template-columns: repeat(2, 300px);
  }

  @media ${device.laptop_1024px} {
    grid-template-columns: repeat(3, 300px);
  }

  @media ${device.laptopL_1440px} {
    grid-template-columns: repeat(4, 300px);
  }
`;

export const Link = styled.a`
  color: #465c7a;
  text-decoration: none;
`;

export const Cards = styled.div`
  background: linear-gradient(45deg, #fcbb6d 0%, #fcbb6d 100%);
  border-radius: 20px;
  box-shadow: 0px 20px 80px 0px #fcbb6d;
  display: flex;
  flex-direction: column;
  height: 300px;
  justify-content: space-around;
  transition: transform 0.7s, box-shadow 0.7s, margin 0.7s;
  cursor: pointer;

  &:hover {
    background: #d9727f;
    box-shadow: 0px 20px 80px 0px #d9727f;
    transform: scale(1.05);
  }

  @media ${device.mobileS_320px} {
    margin-bottom: 15px;
    padding: 20px;
  }

  @media ${device.tablet_768px} {
    margin-bottom: 0;
  }
`;

export const Header = styled.header`
  @media ${device.mobileS_320px} {
    font-size: 1rem;
    text-transform: uppercase;
    text-align: center;
  }
`;

export const Summary = styled.summary`
  @media ${device.mobileS_320px} {
    font-size: 1.3rem;
    text-align: center;
  }
`;

export const Footer = styled.footer`
  @media ${device.mobileS_320px} {
    text-align: center;
  }
`;

export const Tags = styled.span`
  border: 2px solid #465c7a;
  border-radius: 5px;
  margin-left: 3px;
  padding: 1px 10px;
`;
