import styled from "styled-components";

import AddCourseButton from "../AddCourseButton";

export const StyledAddCourseButton = styled(AddCourseButton)`
  background-color: #1565ff;
  color: #ffffff;
  border-radius: 0.3rem;
  border-style: none;
  padding: 0.3rem 0.6rem;
  margin: 0 2.3rem 0 0;
  text-decoration: none;

  @media (min-width: 720px) {
    margin: 0 3.5rem 0 0;
    cursor: pointer;
    &:hover {
      background-color: #135be0;
    }
  }
`;
