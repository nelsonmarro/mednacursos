import BackToTop from "../backToTop";
import UniversityPage from "./(university-classic)";

export const metadata = {
  title: "University Classic - Online Courses & Education NEXTJS14 Template",
  description: "Online Courses & Education NEXTJS14 Template",
};

const UniversityLayout = () => {
  return (
    <>
      <UniversityPage />
      <BackToTop />
    </>
  );
};

export default UniversityLayout;
