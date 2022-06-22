import styled from "styled-components";

import LoginForm from "../LoginForm";

export const StyledLoginForm = styled(LoginForm)`
  width: 35%;
  margin: auto;
  font-size: 0.75rem;
  input {
    margin: 0.5rem 0 0 0;
    font-size: 0.75rem;
  }
  label {
    display: flex;
    flex-direction: column;
    margin: 0.9rem 0 0 0;
    font-size: 0.7rem;
  }
  .error-message {
    color: red;
  }
  & > .buttons > .button {
    background-color: #1565ff;
    color: #ffffff;
    border-radius: 0.2rem;
    border-style: none;
    padding: 0.2rem 0.4rem;
    margin: 1rem 0.5rem 0 1rem;
    cursor: pointer;
    text-decoration: none;
    font-size: 0.7rem;
  }
  & > .buttons > .button:hover {
    background-color: #135be0;
  }
  & > .buttons {
    display: flex;
    flex-direction: column;
    justify-content: right;
  }

  @media (min-width: 720px) {
    font-size: 1rem;
    input {
      font-size: 1rem;
    }
    label {
      font-size: 1rem;
      margin: 0.9rem 0 0 0;
    }
    & > .buttons > .button {
      font-size: 1rem;
    }
    & > .buttons > .button {
      border-radius: 0.3rem;
      padding: 0.3rem 0.6rem;
      margin: 1rem 0.5rem 0 1rem;
    }
  }
`;
