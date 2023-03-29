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
   /*  text-align: center;
    flex-grow: 1; */

  }

  /* html {
    min-height: 100%; 

    display: flex;
    flex-direction: column;
} */
`;

/**
 * 
header / footer:
 #313c48 color font
#5d9b9b background color 

 White: #f4f4f4

 availability cards:
 #e4eeee background
 hover: #e6d9d9
 */
