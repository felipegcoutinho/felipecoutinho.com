import React, {useEffect, useState} from "react";
import * as styled from "./project.styled";

function Project() {
  const [githubData, setGithubData] = useState();
  const [githubUser] = useState("felipegcoutinho");

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`https://api.github.com/users/${githubUser}/repos?per_page=4&sort=stargazers`);
      const data = await response.json();
      setGithubData(data);
    };
    fetchData();
  }, []);

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
        <Card
          url="#"
          header="Portifólio"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit."
          tag1="HTML"
          tag2="CSS"
          tag3="JS"
          tag4="React"
        />

        {/* {!githubData ? (
          <div>Carregando...</div>
        ) : (
          <>
            {githubData.map((item) => (
              <Card key={item.id} {...item} />
            ))}
          </>
        )} */}
      </styled.Content>
    </styled.Container>
  );
}

function Card(props) {
  // const Topics = props.topics;

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

    // <styled.Cards>
    //   <styled.Header>
    //     <h1>
    //       <styled.Link href={props.html_url}>{props.name}</styled.Link>
    //     </h1>
    //   </styled.Header>
    //   <styled.Summary>
    //     <h3>{props.description}</h3>
    //   </styled.Summary>
    //   <styled.Footer>
    //     <h5>
    //       {Topics.map((item, index) => (
    //         <styled.Tags key={index}>{item}</styled.Tags>
    //       ))}
    //     </h5>
    //   </styled.Footer>
    // </styled.Cards>
  );
}

export default Project;
