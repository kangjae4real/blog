import React from "react";
import { PageProps } from "gatsby";
import SEO from "@/components/seo";
import PageLayout from "@/components/layouts/page-layout";

const IndexPage: React.FC<PageProps> = ({ location, data: pageData }) => {
  return (
    <PageLayout location={location} pageData={pageData}>
      Index Page
    </PageLayout>
  );
};

export default IndexPage;

export const Head = () => <SEO />;
