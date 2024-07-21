import React from "react";
import { graphql, HeadFC, PageProps } from "gatsby";
import PageLayout from "@/components/layouts/page-layout";
import SEO from "@/components/seo";
import { MDX } from "@/lib/types";
import Post from "@/components/post";

const PostPage: React.FC<PageProps<MDX>> = ({ location, data: post, children }) => {
  return (
    <PageLayout location={location}>
      <Post post={post}>{children}</Post>
    </PageLayout>
  );
};

export default PostPage;

export const query = graphql`
  query ($slug: String) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date(formatString: "YYYY-MM-DD")
        slug
        thumbnail_image {
          childImageSharp {
            gatsbyImageData
          }
        }
        thumbnail_image_alt
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
