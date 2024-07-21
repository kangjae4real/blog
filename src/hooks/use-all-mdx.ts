import { graphql, useStaticQuery } from "gatsby";
import { AllMDX } from "@/lib/types";

const useAllMdx = () => {
  const data = useStaticQuery<AllMDX>(graphql`
    query {
      allMdx(sort: { frontmatter: { date: DESC } }) {
        nodes {
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
          id
          excerpt(pruneLength: 35)
        }
      }
    }
  `);

  return data.allMdx.nodes;
};

export default useAllMdx;
