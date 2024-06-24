import BackToTop from "../backToTop";
import LanguageAcademyPage from "./(language-academy)";

export const metadata = {
  title: "Language Academy - Online Courses & Education NEXTJS14 Template",
  description: "Online Courses & Education NEXTJS14 Template",
};

const LanguageAcademyLayout = () => {
  return (
    <>
      <LanguageAcademyPage />
      <BackToTop />
    </>
  );
};

export default LanguageAcademyLayout;
