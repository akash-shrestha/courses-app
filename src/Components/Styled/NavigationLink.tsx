import styled from "styled-components";

import NavigationLink from "../NavigationLink";

export const StyledNavigationLink = styled(NavigationLink)`
  margin-top: 0.5rem;
  padding: 0.5rem 0rem;
  text-decoration: none;
  color: black;
  width: 100%;
  text-align: center;
  &.active {
    background-color: #e7e7e7;
    width: 100%;
  }
  @media (min-width: 720px) {
    text-align: left;
    padding: 0.5rem 1.5rem;
    font-size: 1rem;
    display: block;
  }
`;
