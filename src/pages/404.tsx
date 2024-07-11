import React from "react";
import { HeadFC, PageProps } from "gatsby";
import PageLayout from "@/components/layouts/page-layout";
import SEO from "@/components/seo";

const NotFoundPage: React.FC<PageProps> = () => {
  return <PageLayout>Not Found.</PageLayout>;
};

export default NotFoundPage;

export const Head: HeadFC = () => <SEO />;
