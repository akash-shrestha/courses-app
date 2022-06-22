import styled from "styled-components";

import Course from "../Course";

export const StyledCourse = styled(Course)`
  background: white;
  margin: 0.6rem 1.8rem;
  padding: 0.1rem 1rem;
  width: 80%;
  box-shadow: 0rem 0.2rem #e9e9e9;
  border-radius: 0.2rem;
  h3 {
    margin: 1rem 0 0 0.5rem;
  }
  p {
    margin: 0.5rem 0 1rem 0.5rem;
  }
  & > .course-header {
    display: flex;
    justify-content: space-between;
  }
  & > .course-header > button {
    cursor: pointer;
    background-color: red;
    border-radius: 0.4rem;
    height: 2rem;
    width: 1.9rem;
    color: white;
    font-weight: 600;
    font-family: Verdana;
    font-size: 1rem;
    border-style: none;
    margin: 0.5rem 0.5rem 0 0;
  }

  @media (min-width: 720px) {
    margin: 0.6rem 1.8rem;
    width: 90%;
    & > .course-header > button:hover {
      background-color: #d60000;
    }
  }
`;
