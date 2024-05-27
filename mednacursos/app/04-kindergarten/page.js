import BackToTop from "../backToTop";
import KindergartenPage from "./(kindergarten)";

export const metadata = {
  title: "KindergartenPage - Online Courses & Education NEXTJS14 Template",
  description: "Online Courses & Education NEXTJS14 Template",
};

const KindergartenLayout = () => {
  return (
    <>
      <KindergartenPage />
      <BackToTop />
    </>
  );
};

export default KindergartenLayout;
