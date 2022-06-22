import styled from "styled-components";

import LocaleSwitcher from "../LocaleSwitcher";

export const StyledLocaleSwitcher = styled(LocaleSwitcher)`
  margin-top: 2rem;
  & > p {
    text-align: center;
    font-size: 0.8rem;
  }
  & > div {
    border-top: 0.125rem solid #ebecee;
  }
  & > section {
    display: flex;
    justify-content: center;
  }
  & > section > button {
    border: none;
    background-color: rgba(0, 0, 0, 0);
    cursor: pointer;
    margin-left: -2.6rem;
    margin-right: -2.6rem;
    font-size: 0.6rem;
  }
  & > section > button.active {
    font-weight: bold;
  }
  & > section > figure {
    border-left: 0.1rem solid #ebecee;
    height: 1rem;
  }
  @media (min-width: 720px) {
    display: block;
    margin-left: 0rem;
    margin-top: 9rem;
    & > p {
      text-align: left;
      margin: 1rem 0rem 0rem 1rem;
      font-size: 1rem;
    }
    & > section {
      justify-content: left;
      margin-left: 2.7rem;
    }
    & > section > button {
      margin-left: -2rem;
      margin-right: -2rem;
      font-size: 0.8rem;
    }
  }
`;
