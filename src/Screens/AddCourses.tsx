import React from "react";
import { useTranslation } from "react-i18next";
import { StyledCourseForm } from "../Components/Styled/CourseForm";

interface Props {
  className?: string;
}

const AddCourses = ({ className }: Props) => {
  const { t } = useTranslation();

  return (
    <div className={className}>
      <p>{t("courses_add.title")}</p>
      <StyledCourseForm />
    </div>
  );
};

export default AddCourses;
