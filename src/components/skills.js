import styled from "styled-components";
import {
  faGithub,
  faHtml5,
  faCss3,
  faReact,
  faJs,
  faGitAlt,
  faNpm,
  faNode,
} from "@fortawesome/free-brands-svg-icons";
import {
  faMobileAlt,
} from "@fortawesome/free-solid-svg-icons";
import EachSkill from "./eachSkill";
import "aos/dist/aos.css";

const Container = styled.div`
  & h2 {
    margin: 40px 0;
    font-size: 30px;
  }
`;

const IconsContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 1fr;
  grid-gap: 20px;
  text-align: center;

  @media (max-width: 1000px) {
    width: 100%;
  }

  @media (max-width: 800px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const Skills = () => {
  return (
    <Container id="skills" data-aos="zoom-out-up">
      <h2>skills</h2>
      <IconsContainer>
        <EachSkill icon={faHtml5} skill="html5" direction="zoom-out-up" />
        <EachSkill icon={faJs} skill="javascript" direction="zoom-out-up" />
        <EachSkill icon={faReact} skill="react" direction="zoom-out-up" />
        <EachSkill icon={faNode} skill="express" direction="zoom-out-up" />
        <EachSkill icon={faCss3} skill="css3" direction="zoom-out-up" />
        <EachSkill icon={faGitAlt} skill="git" direction="zoom-out-up" />
        <EachSkill icon={faGithub} skill="github" direction="zoom-out-up" />
        <EachSkill
          icon={faMobileAlt}
          skill="responsive design"
          direction="zoom-out-up"
        />
        <EachSkill
          icon={faNpm}
          skill="npm"
          direction="zoom-out-up"
        />
      </IconsContainer>
    </Container>
  );
};

export default Skills;
