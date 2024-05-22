import BackToTop from "../backToTop";
import CourseSchoolPage from "./(course-school)";

export const metadata = {
  title: "Course School - Online Courses & Education NEXTJS14 Template",
  description: "Online Courses & Education NEXTJS14 Template",
};

const CourseSchoolLayout = () => {
  return (
    <>
      <CourseSchoolPage />
      <BackToTop />
    </>
  );
};

export default CourseSchoolLayout;
