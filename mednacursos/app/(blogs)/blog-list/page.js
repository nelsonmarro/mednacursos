import BackToTop from "@/app/backToTop";
import BlogListPage from "./(blog-list)";

export const metadata = {
  title: "Blog List - Online Courses & Education NEXTJS14 Template",
  description: "Online Courses & Education NEXTJS14 Template",
};

const BlogListLayout = () => {
  return (
    <>
      <BlogListPage />
      <BackToTop />
    </>
  );
};

export default BlogListLayout;
