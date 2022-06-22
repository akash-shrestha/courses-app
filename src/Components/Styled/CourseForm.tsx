import styled from "styled-components";

import CourseForm from "../CourseForm";

export const StyledCourseForm = styled(CourseForm)`
  width: 50%;
  input {
    margin: 0.5rem 0 0 0;
    font-size: 1rem;
  }
  textarea {
    margin: 0.5rem 0 0 0;
    font-size: 1rem;
  }
  label {
    display: flex;
    flex-direction: column;
    margin: 1rem 0 0 0;
  }
  .error-message {
    color: red;
  }
  & > .buttons > .button {
    background-color: #1565ff;
    color: #ffffff;
    border-radius: 0.3rem;
    border-style: none;
    padding: 0.3rem 0.6rem;
    margin: 1rem 0.5rem 0 1rem;
    cursor: pointer;
    text-decoration: none;
    font-size: 1rem;
  }
  & > .buttons > .button:hover {
    background-color: #135be0;
  }
  & > .buttons > .cancel {
    background-color: #fc1515;
    text-align: center;
  }
  & > .buttons > .cancel:hover {
    background-color: #d11212;
  }
  & > .buttons > button:disabled {
    background-color: #7097e0;
  }
  & > .buttons {
    display: flex;
    flex-direction: column;
    justify-content: right;
  }
`;
