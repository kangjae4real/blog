import React from "react";
import { PageProps } from "gatsby";
import SEO from "@/components/seo";
import PageLayout from "@/components/layouts/page-layout";
import Hero from "@/components/hero";

const IndexPage: React.FC<PageProps> = ({ location, data: pageData }) => {
  return (
    <PageLayout location={location} pageData={pageData}>
      <Hero />
    </PageLayout>
  );
};

export default IndexPage;

export const Head = () => <SEO />;
