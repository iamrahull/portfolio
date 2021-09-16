import styled from "styled-components";
import { SiRedux,SiMaterialUi } from 'react-icons/si'
import {
  faGithub,
  faHtml5,
  faCss3,
  faReact,
  faJs,
  faGitAlt,
  faNpm,
  faNode
} from "@fortawesome/free-brands-svg-icons";
import { DiExtjs } from "react-icons/di";
import { AiFillApi } from "react-icons/ai";
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
      
        <EachSkill icon={faJs} skill="JavaScript" direction="zoom-out-up" />
        <EachSkill icon={faNode} skill="Express.js" direction="zoom-out-up" />
        <EachSkill icon={faReact} skill="React.js" direction="zoom-out-up" />
        <EachSkill icon={<SiRedux/>} isReactIcon = 'true' skill="Redux" direction="zoom-out-up" />
        <EachSkill icon={<SiMaterialUi/>} isReactIcon = 'true' skill="Material UI" direction="zoom-out-up" />
        <EachSkill
          icon={<AiFillApi/>}
          skill="API Design"
          isReactIcon = 'true'
          direction="zoom-out-up"
        />
        <EachSkill icon={faHtml5} skill="HTML" direction="zoom-out-up" />
        <EachSkill icon={faCss3} skill="CSS" direction="zoom-out-up" />
        <EachSkill
          icon={faMobileAlt}
          skill="responsive design"
          direction="zoom-out-up"
        />
      
      </IconsContainer>
      
    </Container>
  );
};

export default Skills;
