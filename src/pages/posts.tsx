import React from "react";
import { HeadFC, PageProps } from "gatsby";
import PageLayout from "@/components/layouts/page-layout";
import SEO from "@/components/seo";

const PostsPage: React.FC<PageProps> = () => {
  return <PageLayout>Posts.</PageLayout>;
};

export default PostsPage;

export const Head: HeadFC = () => <SEO titleSuffix="Posts" />;
