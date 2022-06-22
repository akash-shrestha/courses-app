import React from "react";
import { useTranslation } from "react-i18next";
import {
  useDeleteCourseMutation,
  useGetCoursesQuery,
} from "../redux/coursesApi";
import { useHistory } from "react-router-dom";

interface Props {
  className?: string;
  toggleModal: () => void;
  courseId: number;
}

const Modal = ({ className, toggleModal, courseId }: Props) => {
  const { t } = useTranslation();

  const [deleteCourse] = useDeleteCourseMutation();
  const { refetch } = useGetCoursesQuery(1);

  let history = useHistory();

  const onDelete = (courseId: number) => {
    deleteCourse(courseId).then(() => {
      toggleModal();
      refetch();
      history.push("/courses");
    });
  };

  return (
    <div className={className}>
      <div className="modal__background">
        <div className="modal__container">
          <div className="title-close-btn">
            <button onClick={toggleModal}> X </button>
          </div>
          <div className="title">
            <h1>{t("courses.modal.title")}</h1>
          </div>
          <div className="body">
            <p>{t("courses.modal.body")}</p>
          </div>
          <div className="footer">
            <button onClick={() => onDelete(courseId)}>
              {t("courses.modal.button.continue")}
            </button>
            <button id="cancel-btn" onClick={toggleModal}>
              {t("courses.modal.button.cancel")}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
