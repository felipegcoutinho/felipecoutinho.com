import React from "react";
import styled from "styled-components";
import {device} from "../../Assets/device";

const Container = styled.div`
  @media ${device.mobileS_320px} {
    margin-top: 5px;
  }

  @media ${device.tablet_768px} {
    margin-bottom: 20px;
  }

  @media ${device.laptop_1024px} {
    margin-top: 80px;
  }
`;
const ContainerBtn = styled.div`
  display: flex;
  justify-content: center;

  @media ${device.mobileS_320px} {
    flex-direction: column;
  }

  @media ${device.tablet_768px} {
    margin-top: 20px;
    flex-direction: row;
  }
`;

const Button = styled.button`
  background-color: #685d79;
  border: none;
  border-radius: 10px;
  color: white;
  cursor: pointer;
  transition: transform 0.7s, background-color 0.5s;
  padding: 15px;

  &:hover {
    background-color: #4a3f5a;
  }

  @media ${device.mobileS_320px} {
    font-size: 1.1rem;
    width: 100%;
    margin: 0;
  }

  @media ${device.mobileL_425px} {
    width: 80%;
  }

  @media ${device.tablet_768px} {
    width: 130px;
    font-size: 1rem;
    margin-left: 5px;
  }
`;

export default function BioButtons() {
  return (
    <ContainerBtn>
      <Buttons icon="fa-brands fa-github-alt" name="Github" url="#"></Buttons>
      <Buttons icon="fa-brands fa-linkedin" name="Linkedin" url="#"></Buttons>
      <Buttons icon="fa-regular fa-file-lines" name="Resumé" url="#"></Buttons>
      <Buttons icon="fa-solid fa-bolt" name="Stackblitz" url="#"></Buttons>
    </ContainerBtn>
  );
}

function Buttons(props) {
  return (
    <Container>
      <a href={props.url}>
        <Button>
          <i className={props.icon}></i> {props.name}
        </Button>
      </a>
    </Container>
  );
}
