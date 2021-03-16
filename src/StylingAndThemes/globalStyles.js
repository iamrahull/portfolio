import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  html,body {
    height: 100%;
    transition: all .50s linear;
    scroll-behavior: smooth;
  }
  
  body {
    font-family: Montserrat, Helvetica, Arial, sans-serif;
    background-color: ${({ theme }) => theme.backgroundColor};
    color: ${({ theme }) => theme.color};
  }
  
  a {
    color: ${({ theme }) => theme.color};
    text-decoration: none;
  }
  
  ul {
    list-style: none;
  }
`;

export default GlobalStyle;
