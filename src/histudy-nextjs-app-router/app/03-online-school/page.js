import BackToTop from "../backToTop";
import OnlineSchoolPage from "./(online-school)";

export const metadata = {
  title: "Online School - Online Courses & Education NEXTJS14 Template",
  description: "Online Courses & Education NEXTJS14 Template",
};


const OnlineSchoolLayout = () => {
  return (
    <>
      <OnlineSchoolPage />
      <BackToTop />
    </>
  );
};

export default OnlineSchoolLayout;
