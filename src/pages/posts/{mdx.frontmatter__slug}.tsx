import React from "react";
import { HeadFC, PageProps } from "gatsby";
import PageLayout from "@/components/layouts/page-layout";
import SEO from "@/components/seo";

const PostPage: React.FC<PageProps> = ({ location }) => {
  return (
    <PageLayout location={location}>
      <span>detail page</span>
    </PageLayout>
  );
};

export default PostPage;

export const head: HeadFC = () => <SEO />;
