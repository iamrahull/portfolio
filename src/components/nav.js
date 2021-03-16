import React from "react";
import styled from "styled-components";
import DayCadell from "../images/dayCadell.png";
import NightCadell from "../images/night-cadell.png";

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  margin: 20px 0;
`;

const Emoji = styled.div`
  & img {
    height: 80px;
    width: 80px;
    cursor: pointer;
  }
`;

const Links = styled.ul`
  display: flex;
  margin: auto 0;
  font-size: 25px;
  font-weight: 700;

  & li:first-child {
    margin-right: 20px;
  }

  & li:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

const Nav = ({ theme, themeToggler }) => {
  return (
    <StyledNav>
      <Emoji>
        <img
          src={theme === "dark" ? DayCadell : NightCadell}
          onClick={themeToggler}
          alt="Emoji Cadell"
        />
      </Emoji>
      <Links>
        <li>
          <a href="#projects">projects</a>
        </li>
        <li>
          <a href="#skills">skills</a>
        </li>
      </Links>
    </StyledNav>
  );
};

export default Nav;
