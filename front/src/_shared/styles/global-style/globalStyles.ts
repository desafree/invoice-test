import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  @import url("https://fonts.googleapis.com/css2?family=League+Spartan:wght@500;700&display=swap");
  
  
  *,
  *::after,
  *::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: "League Spartan", sans-serif;
    font-size: 12px;
    font-weight: 500;
    line-height: 15px;
    letter-spacing: -0.25px;
    text-align: left;
    background-color: #f8f8fb;
    min-height: 100vh;
  }
`;
