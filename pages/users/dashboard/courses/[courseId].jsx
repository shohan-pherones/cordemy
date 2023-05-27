import { getCourse } from "@/prisma/courses";

const CourseVideos = ({ course }) => {
  return (
    <div>
      <h1>{course.title}</h1>
    </div>
  );
};

export default CourseVideos;

export const getServerSideProps = async ({ query }) => {
  const course = await getCourse(query.courseId);

  const updatedCourse = {
    ...course,
    updatedAt: course.updatedAt.toString(),
    createdAt: course.createdAt.toString(),
  };

  return {
    props: {
      course: updatedCourse,
    },
  };
};
