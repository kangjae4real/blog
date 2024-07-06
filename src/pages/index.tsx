import React from "react";
import { PageProps } from "gatsby";
import SEO from "@/components/seo";
import PageLayout from "@/components/layouts/page-layout";

const IndexPage: React.FC<PageProps> = () => {
  return <PageLayout>Index Page</PageLayout>;
};

export default IndexPage;

export const Head = () => <SEO />;
