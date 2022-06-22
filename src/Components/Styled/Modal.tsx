import styled from "styled-components";

import Modal from "../Modal";

export const StyledModal = styled(Modal)`
  .modal__background {
    background-color: rgba(231, 231, 231, 0.8);
    position: fixed;
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
  }
  .modal__container {
    width: 60%;
    height: 60%;
    border-radius: 0.7rem;
    background-color: white;
    box-shadow: rgba(0, 0, 0, 0.35) 0rem 0.3rem 0.9rem;
    display: flex;
    flex-direction: column;
    padding: 1.5rem;
  }
  .modal__container > .title {
    display: inline-block;
    text-align: center;
    margin-top: 0.6rem;
    font-size: 1.2rem;
  }
  .title-close-btn {
    display: flex;
    justify-content: flex-end;
  }
  .title-close-btn > button {
    background: transparent;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
  }
  .modal__container > .body {
    flex: 50;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.4rem;
    text-align: center;
  }
  .footer {
    margin: 0 auto;
  }
  .modal__container > .footer > button {
    width: 6.3rem;
    height: 1.7rem;
    margin: 0.625rem;
    border: none;
    background-color: #1565ff;
    color: white;
    border-radius: 0.3rem;
    font-size: 1rem;
    cursor: pointer;
  }
  #cancel-btn {
    background-color: red;
  }
  @media (min-width: 720px) {
    .modal__container {
      margin-right: 10rem;
    }
  }
`;
