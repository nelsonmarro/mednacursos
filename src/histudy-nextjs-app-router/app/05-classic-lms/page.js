import BackToTop from "../backToTop";
import ClassicLmsPage from "./(classic-lms)";

export const metadata = {
  title: "Home Classic Lms - Online Courses & Education NEXTJS14 Template",
  description: "Online Courses & Education NEXTJS14 Template",
};

const ClassicLmsLayout = () => {
  return (
    <>
      <ClassicLmsPage />
      <BackToTop />
    </>
  );
};

export default ClassicLmsLayout;
