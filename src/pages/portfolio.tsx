import React from "react";
import { HeadFC, PageProps } from "gatsby";
import PageLayout from "@/components/layouts/page-layout";
import SEO from "@/components/seo";

const PortfolioPage: React.FC<PageProps> = ({ location }) => {
  return <PageLayout location={location}>Portfolio.</PageLayout>;
};

export default PortfolioPage;

export const Head: HeadFC = () => <SEO titleSuffix="Portfolio" />;
