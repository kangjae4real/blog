import React from "react";
import { PageProps } from "gatsby";
import SEO from "@/components/seo";
import PageLayout from "@/components/layouts/page-layout";
import Hero from "@/components/hero";
import { HEADER_HEIGHT } from "@/components/header";
import { FOOTER_HEIGHT } from "@/components/footer";

const CONTAINER_STYLE = `h-[calc(100vh-${HEADER_HEIGHT + FOOTER_HEIGHT}px)]`;

const IndexPage: React.FC<PageProps> = ({ location }) => {
  return (
    <PageLayout location={location} containerStyle={CONTAINER_STYLE}>
      <Hero />
    </PageLayout>
  );
};

export default IndexPage;

export const Head = () => <SEO />;
