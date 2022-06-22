import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import {
  useCreateCourseMutation,
  useGetCoursesQuery,
} from "../redux/coursesApi";

interface Props {
  className?: string;
}

const CourseForm = ({ className }: Props) => {
  const { t } = useTranslation();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [descriptionError, setDescriptionError] = useState("");

  const validate = () => {
    let descriptionErrorMessage: any = "";
    if (description.length < 10) {
      descriptionErrorMessage = t("courses_add.form.description.error_message");
    }
    if (descriptionErrorMessage) {
      setDescriptionError(descriptionErrorMessage);
      return false;
    }
    return true;
  };

  let history = useHistory();

  const [createCourse] = useCreateCourseMutation();
  const { refetch } = useGetCoursesQuery(1);

  const onSubmit = (event: any): any => {
    event.preventDefault();
    const isValid = validate();
    if (isValid) {
      createCourse({
        title: title,
        description: description,
      }).then(() => {
        refetch();
        history.push("/courses");
      });
    }
  };

  return (
    <form className={className} onSubmit={onSubmit}>
      <label>
        {t("courses_add.form.name.label")}
        <input
          type="text"
          id="title"
          placeholder={t("courses_add.form.name.placeholder")}
          onChange={(e) => setTitle(e.target.value)}
        />
      </label>
      <label>
        {t("courses_add.form.description.label")}
        <textarea
          rows={5}
          id="description"
          placeholder={t("courses_add.form.description.placeholder")}
          onChange={(e) => setDescription(e.target.value)}
        />
      </label>
      <div className="error-message">{descriptionError}</div>
      <div className="buttons">
        <button className="button" type="submit" disabled={!title}>
          {t("courses_add.form.button.create")}
        </button>
        <Link className="button cancel" to="/courses">
          {t("courses_add.form.button.cancel")}
        </Link>
      </div>
    </form>
  );
};

export default CourseForm;
