import React from "react";
import { HeadFC, PageProps } from "gatsby";
import PageLayout from "@/components/layouts/page-layout";
import SEO from "@/components/seo";
import { Large, P } from "@/components/typography";

const PortfolioPage: React.FC<PageProps> = ({ location }) => {
  return (
    <PageLayout location={location}>
      <Large>열심히 작성중입니다!</Large>
      <P className="[&:not(:first-child)]:mt-0">그때 만나요~</P>
    </PageLayout>
  );
};

export default PortfolioPage;

export const Head: HeadFC = () => <SEO titleSuffix="Portfolio" />;
