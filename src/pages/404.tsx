import * as React from "react";
import type { PageProps } from "gatsby";
import Layout from "@lekoarts/gatsby-theme-minimal-blog/src/components/layout";

export default function NotFound(props: PageProps) {
  return (
    <Layout>
      <h1>404 - Page Not Found</h1>
      <p>잘못된 접근이에요.</p>
    </Layout>
  );
}
