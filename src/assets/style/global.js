import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}
  :root {
    --black: hsl(170, 4%, 11%);
    --green: hsl(170, 96%, 75%);
    --white: hsl(255, 100%, 100%);
    --fontSize: 16px;
  }
  
  * {
    box-sizing: border-box;
    outline: 0;
  }
  
  img {
    height: 50px;
    pointer-events: none;
  }
  
  body {
    padding: calc(2 * var(--fontSize));
    width: 100vw;
    min-height: 100vh;
    background-color: var(--black);
    color: var(--white);
    font-family: "Montserrat", sans-serif;
    font-size: var(--fontSize);
    font-weight: 400;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

export default GlobalStyle;
