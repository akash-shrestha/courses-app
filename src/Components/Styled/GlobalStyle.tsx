import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: black;
    margin: 0rem;
    padding: 0rem;
    font-size: 16px;
    h1 {
      font-size: 1.5rem;
    }
    h2 {
      font-size: 1.12rem
    }
    h3 {
      font-size:0.87rem;
    }
    
  @media (min-width: 720px) {
      h1 {
      font-size: 2rem;
    }
    h2 {
      font-size: 1.5rem;
    }
    h3 {
      font-size:1.17rem;
    }
    }
  }
`;
