import styled from "styled-components";

import LogoTitle from "../LogoTitle";

export const StyledLogoTitle = styled(LogoTitle)`
  font-weight: 500;
  font-size: 0.9rem;
  margin: 1.5rem 0 0 0.3rem;

  @media (min-width: 720px) {
    margin: 3rem 0 0 0.5rem;
    font-size: 1.2rem;
  }
`;
