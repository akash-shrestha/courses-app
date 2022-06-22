import styled from "styled-components";

import Logo from "../Logo";

export const StyledLogo = styled(Logo)`
  height: 2rem;
  width: 2rem;
  margin-left: 0.5rem;
  margin-top: 1rem;

  @media (min-width: 720px) {
    height: 4rem;
    width: 4rem;
    margin-left: 1.5rem;
    margin-top: 1.5rem;
  }
`;
