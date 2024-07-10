import React from "react";
import { PageProps } from "gatsby";
import SEO from "@/components/seo";
import PageLayout from "@/components/layouts/page-layout";
import Hero from "@/components/hero";

const IndexPage: React.FC<PageProps> = ({ location }) => {
  return (
    <PageLayout location={location}>
      <Hero />
    </PageLayout>
  );
};

export default IndexPage;

export const Head = () => <SEO />;
