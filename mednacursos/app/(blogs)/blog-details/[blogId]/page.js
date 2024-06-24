import BackToTop from "@/app/backToTop";
import SingleBlog from "../index";

export const metadata = {
  title: "Blog Details - Online Courses & Education NEXTJS14 Template",
  description: "Online Courses & Education NEXTJS14 Template",
};

const SingleBlogLayout = ({ params }) => {
  return (
    <>
      <SingleBlog getParams={params} />
      <BackToTop />
    </>
  );
};

export default SingleBlogLayout;
