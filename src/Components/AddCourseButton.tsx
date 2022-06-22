import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

interface Props {
  className?: string;
}

const AddCourseButton = ({ className }: Props) => {
  const { t } = useTranslation();

  return (
    <Link className={className} to="/courses/add">
      + {t("courses.button")}
    </Link>
  );
};

export default AddCourseButton;
