import styled from "styled-components";

import Menu from "../Menu";

export const StyledMenu = styled(Menu)`
  .menu-items {
    display: none;
  }
  #active {
    display: block;
    position: absolute;
    background-color: white;
    right: 1rem;
    width: auto;
    height: auto;
    border: 0.1rem solid #e5e5e5;
    border-radius: 0.5rem;
    box-shadow: rgba(0, 0, 0, 0.35) 0rem 0.3rem 0.9rem;
  }
  .menu-items > .nav-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .styled-burger-button {
    align-items: right;
  }

  .styled-burger-button-active {
    color: #135be0;
  }

  .styled-burger-button:active {
    color: #1565ff;
  }

  @media (min-width: 720px) {
    .menu-items {
      display: initial;
    }
  }
`;
