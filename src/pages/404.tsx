import React from "react";
import { HeadFC, PageProps } from "gatsby";
import PageLayout from "@/components/layouts/page-layout";
import SEO from "@/components/seo";
import NotFound from "@/components/not-found";

const NotFoundPage: React.FC<PageProps> = () => {
  return (
    <PageLayout>
      <NotFound />
    </PageLayout>
  );
};

export default NotFoundPage;

export const Head: HeadFC = () => <SEO titleSuffix="Not found" />;
