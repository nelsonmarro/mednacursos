import BackToTop from "../backToTop";
import MarketplacePage from "./(marketplace)";

export const metadata = {
  title: "Marketplace - Online Courses & Education NEXTJS14 Template",
  description: "Online Courses & Education NEXTJS14 Template",
};

const MarketplaceLayout = () => {
  return (
    <>
      <MarketplacePage />
      <BackToTop />
    </>
  );
};

export default MarketplaceLayout;
