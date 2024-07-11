import React from "react";
import { graphql, HeadFC, PageProps } from "gatsby";
import PageLayout from "@/components/layouts/page-layout";
import SEO from "@/components/seo";
import { MDX } from "@/lib/types";

const PostPage: React.FC<PageProps<MDX>> = ({ location, data, children }) => {
  return <PageLayout location={location}>{children}</PageLayout>;
};

export default PostPage;

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "YYYY-MM-DD")
        slug
      }
    }
  }
`;

export const Head: HeadFC<MDX> = ({
  data: {
    mdx: {
      frontmatter: { title },
    },
  },
}) => <SEO titleSuffix={title} />;
