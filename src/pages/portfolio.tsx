import React from "react";
import { HeadFC, PageProps } from "gatsby";
import PageLayout from "@/components/layouts/page-layout";
import SEO from "@/components/seo";

const PortfolioPage: React.FC<PageProps> = ({ location, data: pageData }) => {
  return (
    <PageLayout location={location} pageData={pageData}>
      Portfolio.
    </PageLayout>
  );
};

export default PortfolioPage;

export const Head: HeadFC = () => <SEO titleSuffix="Portfolio" />;
