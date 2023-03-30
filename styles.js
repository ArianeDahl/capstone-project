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
    background-color: #f0f0f0;
    text-align: center;
    flex-grow: 1; 
  }
`;
