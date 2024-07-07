import React from "react";
import { HeadFC, PageProps } from "gatsby";
import PageLayout from "@/components/layouts/page-layout";
import SEO from "@/components/seo";

const ResumePage: React.FC<PageProps> = ({ location, data: pageData }) => {
  return (
    <PageLayout location={location} pageData={pageData}>
      Resume.
    </PageLayout>
  );
};

export default ResumePage;

export const Head: HeadFC = () => <SEO titleSuffix="Resume" />;
