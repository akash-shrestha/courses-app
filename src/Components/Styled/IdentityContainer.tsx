import styled from "styled-components";

export const IdentityContainer = styled.div`
  display: flex;

  @media (min-width: 720px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
`;
