import styled from "styled-components";

import PageTitle from "../WelcomeTitle";

export const StyledWelcomeTitle = styled(PageTitle)`
  margin: 3rem 4rem;
  font-size: 1.5rem;

  @media (min-width: 720px) {
    font-size: 2rem;
  }
`;
