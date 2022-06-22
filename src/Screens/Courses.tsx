import { useState } from "react";
import { useTranslation } from "react-i18next";

import { StyledPageTitle } from "../Components/Styled/PageTitle";
import { StyledCourse } from "../Components/Styled/Course";
import { StyledAddCourseButton } from "../Components/Styled/AddCourseButton";
import { useGetCoursesQuery } from "../redux/coursesApi";
import { StyledModal } from "../Components/Styled/Modal";

interface Props {
  className?: string;
}

const Courses = ({ className }: Props) => {
  const { t } = useTranslation();

  const { data, isLoading, isSuccess, isError } = useGetCoursesQuery(1);

  const [modalOpen, setModalOpen] = useState(false);
  const [modalCourseId, setModalCourseId] = useState(-1);

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <div className={className}>
      {modalOpen && (
        <StyledModal toggleModal={toggleModal} courseId={modalCourseId} />
      )}
      <header>
        <StyledPageTitle />
        <StyledAddCourseButton />
      </header>
      <div className="status">
        {isLoading && t("courses.loading_status")}
        {isError && t("courses.error_status")}
      </div>
      {isSuccess &&
        data &&
        data.map((course: any): any => (
          <StyledCourse
            course={course}
            key={course.id}
            toggleModal={toggleModal}
            setModalCourseId={setModalCourseId}
          />
        ))}
    </div>
  );
};

export default Courses;
