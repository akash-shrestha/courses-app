import styled from "styled-components";

export const AppContainer = styled.article`
  width: 100vw;
  height: 100vh;

  background-color: grey;
  font-family: sans-serif;

  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: 10% auto;
  grid-auto-flow: row;

  @media (min-width: 720px) {
    grid-auto-flow: column;
  }
`;
