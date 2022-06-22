import styled from "styled-components";

import Courses from "../Courses";

export const StyledCourses = styled(Courses)`
  & > header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .status {
    text-align: center;
  }
`;
