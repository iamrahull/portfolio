import React from 'react';
import styled from 'styled-components';
import AllInOne from '../images/all-in-one-sports.png';
import DevJobs from '../images/devjobs.png';
import NumberSystem from '../images/number-system-conversion.png';
import SpotoStats from '../images/spotoStats.png';
import EachProject from './eachProject';
import 'aos/dist/aos.css';

const Container = styled.div`
  & h2 {
    margin: 40px 0;
    font-size: 30px;
  }
`;

const ProjectsContainer = styled.div`
  & div {
    margin: 10px 0;
  }
`;

const Projects = () => {
  return (
    <Container id="projects">
      <h2>projects</h2>
      <ProjectsContainer>
        <EachProject
          githubLink="https://github.com/iamrahull"
          img={SpotoStats}
          liveLink="https://spotostats.netlify.app/"
          title="spotoStats"
          description="view your top tracks & artists as well as discover new music on spotify."
          direction="1"
          tech="react | react router | styled components | express"
        />
        <EachProject
          githubLink="https://github.com/iamrahull/Traveller"
          img={DevJobs}
          liveLink="#"
          title="Vacation Weather Predictor"
          direction="2"
          description="Forcast your vacation weather"
          tech="express.js | SASS | pixabay api"
        />
        <EachProject
          githubLink="https://github.com/iamrahull/ContactApp-Fend"
          img={NumberSystem}
          liveLink="https://contactappbycesur.herokuapp.com/"
          title="Contacts App"
          direction="3"
          description="A virtual contact app to store your contacts."
          tech="react | material ui | Contacts api"
        />
        <EachProject
          githubLink="https://github.com/iamrahull/Personal-Blog"
          img={AllInOne}
          liveLink="https://blogspot-by-cesur.netlify.app/index.html"
          title="Car Blog"
          direction="4"
          description="displays popular articles of all major sports"
          tech="CSS | Flexbox | responsive layouts"
        />
        
      </ProjectsContainer>
    </Container>
  );
};

export default Projects;
