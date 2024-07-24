import React from "react";
import { HeadFC, PageProps } from "gatsby";
import PageLayout from "@/components/layouts/page-layout";
import SEO from "@/components/seo";
import Resume from "@/components/resume";

const ResumePage: React.FC<PageProps> = ({ location }) => {
  return (
    <PageLayout location={location} containerStyle="py-6">
      <Resume />
    </PageLayout>
  );
};

export default ResumePage;

export const Head: HeadFC = () => <SEO titleSuffix="Resume" disableScroll />;
