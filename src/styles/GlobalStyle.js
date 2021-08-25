import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html {
    scroll-behavior: smooth;
  }
  body {
    color: #2b2c34;
    font-size: 16px;
    font-family: 'Roboto', sans-serif;
    padding: 16px;
    background-color: #fffafa;
    height: 100vh;
  }
`;