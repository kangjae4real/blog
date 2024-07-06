import React from "react";
import { PageProps } from "gatsby";
import SEO from "@/components/seo";

const IndexPage: React.FC<PageProps> = () => {
  return <div>Index Page</div>;
};

export default IndexPage;

export const Head = () => <SEO title="Kangjae Blog" />;
