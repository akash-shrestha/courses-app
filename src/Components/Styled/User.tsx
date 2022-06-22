import styled from "styled-components";

import User from "../User";

export const StyledUser = styled(User)`
  font-size: 0.5rem;
  display: flex;
  margin: 2.7rem 0 0 0;
  button {
    border: none;
    background-color: rgba(0, 0, 0, 0);
    font-size: 0.45rem;
    font-weight: 600;
    color: #7a7a7a;
  }

  @media (min-width: 720px) {
    text-align: left;
    display: block;
    margin: 3rem 0 0 1.5rem;
    font-size: 0.9rem;

    button {
      font-size: 0.8rem;
      cursor: pointer;
    }
    button:hover {
      color: black;
    }
  }
`;
