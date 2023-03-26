import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    font-family: helvetica;
    text-align: center;
    flex-grow: 1;

  }

  html {
    min-height: 100%; 

    display: flex;
    flex-direction: column;
}
`;
