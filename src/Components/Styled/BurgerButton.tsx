import styled from "styled-components";

import BurgerButton from "../BurgerButton";

export const StyledBurgerButton = styled(BurgerButton)`
  border-style: none;
  background-color: white;
  margin-top: 1rem;

  @media (min-width: 720px) {
    display: none;
  }
`;
