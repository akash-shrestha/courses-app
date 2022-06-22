import styled from "styled-components";

export const ContentContainer = styled.section`
  background-color: #f6f9fc;
  grid-column-start: 1;
  grid-column-end: 7;
  grid-row-start: 2;
  grid-row-end: 3;

  @media (min-width: 720px) {
    grid-row-start: 1;
    grid-row-end: 3;
    grid-column-start: 2;
    grid-column-end: 7;
  }
`;
