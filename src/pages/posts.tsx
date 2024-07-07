import React from "react";
import { HeadFC, PageProps } from "gatsby";
import PageLayout from "@/components/layouts/page-layout";
import SEO from "@/components/seo";

const PostsPage: React.FC<PageProps> = ({ location, data: pageData }) => {
  return (
    <PageLayout location={location} pageData={pageData}>
      Posts.
    </PageLayout>
  );
};

export default PostsPage;

export const Head: HeadFC = () => <SEO titleSuffix="Posts" />;
