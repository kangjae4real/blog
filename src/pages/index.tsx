import React from "react";
import { HeadFC, PageProps } from "gatsby";

const IndexPage: React.FC<PageProps> = () => {
  return <div>Index Page</div>;
};

export default IndexPage;

export const Head: React.FC<HeadFC> = () => <title>Home</title>;
