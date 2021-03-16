import React from 'react';
import styled from 'styled-components';

const Project = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`;

const ImgContainer = styled.div`
  & img {
    max-width: 100%;
    height: auto;
  }
`;

const Details = styled.ul`
  padding: 0 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  & li:nth-child(1) {
    font-size: 30px;
    font-weight: 900;
  }

  & li {
    font-size: 18px;
    margin: 6px 0;
  }

  & span:hover {
    text-decoration: underline;
  }

  @media (max-width: 800px) {
    padding: 0;
    margin-bottom: 20px;
  }
`;

const EachProject = ({
  img,
  title,
  liveLink,
  githubLink,
  direction,
  description,
  tech,
}) => {
  direction = direction % 2 === 0 ? 'fade-left' : 'fade-right';

  return (
    <Project
      data-aos={direction}
      data-aos-easing="ease-in-out"
      data-aos-duration="1500"
    >
      <ImgContainer>
        <img src={img} alt={title} />
      </ImgContainer>
      <Details direction={direction}>
        <li>{title}</li>
        <li>{description}</li>
        <li>{tech}</li>
        <li>
          <span>
            <a href={liveLink} target="_blank" rel="noreferrer">
              live{' '}
            </a>
          </span>
          <span>
            <a href={githubLink} target="_blank" rel="noreferrer">
              github{' '}
            </a>
          </span>
        </li>
      </Details>
    </Project>
  );
};

export default EachProject;
