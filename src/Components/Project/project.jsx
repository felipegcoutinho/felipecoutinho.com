import React from "react";
import * as styled from "./project.styled";

function Project() {
  return (
    <styled.Container>
      <styled.Content>
        <Card
          url="#"
          header="Portifólio"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit."
          tag1="HTML"
          tag2="CSS"
          tag3="JS"
          tag4="React"
        />
        <Card
          url="#"
          header="Portifólio"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit."
          tag1="HTML"
          tag2="CSS"
          tag3="JS"
          tag4="React"
        />
        <Card
          url="#"
          header="Portifólio"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit."
          tag1="HTML"
          tag2="CSS"
          tag3="JS"
          tag4="React"
        />
        <Card
          url="#"
          header="Portifólio"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit."
          tag1="HTML"
          tag2="CSS"
          tag3="JS"
          tag4="React"
        />
      </styled.Content>
    </styled.Container>
  );
}

function Card(props) {
  return (
    <styled.Cards>
      <styled.Header>
        <h1>
          <styled.Link href={props.url}>{props.header}</styled.Link>
        </h1>
      </styled.Header>
      <styled.Summary>
        <h3>{props.desc}</h3>
      </styled.Summary>
      <styled.Footer>
        <h5>
          <styled.Tags>{props.tag1}</styled.Tags>
          <styled.Tags>{props.tag2}</styled.Tags>
          <styled.Tags>{props.tag3}</styled.Tags>
          <styled.Tags>{props.tag4}</styled.Tags>
        </h5>
      </styled.Footer>
    </styled.Cards>
  );
}

export default Project;
