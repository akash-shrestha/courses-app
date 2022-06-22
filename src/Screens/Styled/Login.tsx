import styled from "styled-components";
import Login from "../Login";

export const StyledLogin = styled(Login)`
  width: 100vw;
  height: 100vh;
  background-color: #f6f9fc;
  font-family: sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  h1 {
    text-align: center;
  }

  h2 {
    text-align: center;
    margin: 7rem 0 0 0;
  }
`;
