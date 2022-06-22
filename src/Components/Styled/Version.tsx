import styled from "styled-components";

import Version from "../Version";

export const StyledVersion = styled(Version)`
  font-size: 0.6rem;
  text-align: center;
  margin-top: 1rem;
  @media (min-width: 720px) {
    text-align: left;
    display: block;
    margin-left: 1rem;
    font-size: 0.7rem;
  }
`;
