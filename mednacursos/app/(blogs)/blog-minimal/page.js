import BackToTop from "@/app/backToTop";
import BlogGridPage from "../blog-grid/(blog-grid)";

export const metadata = {
  title: "Blog Grid - Online Courses & Education NEXTJS14 Template",
  description: "Online Courses & Education NEXTJS14 Template",
};

const BlogGridMinimalLayout = () => {
  return (
    <>
      <BlogGridPage />
      <BackToTop />
    </>
  );
};

export default BlogGridMinimalLayout;
