import React from "react";

type CourseType = {
  id: number;
  title: string;
  description: string;
};

interface Props {
  course: CourseType;
  className?: string;
  toggleModal: () => void;
  setModalCourseId: React.Dispatch<React.SetStateAction<number>>;
}

const Course = ({
  course,
  className,
  toggleModal,
  setModalCourseId,
}: Props) => {
  return (
    <div className={className}>
      <div className="course-header">
        <h3>{course.title}</h3>
        <button
          onClick={() => {
            toggleModal();
            setModalCourseId(course.id);
          }}
        >
          X
        </button>
      </div>
      <p>{course.description}</p>
    </div>
  );
};

export default Course;
