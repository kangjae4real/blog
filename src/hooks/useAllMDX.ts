import { graphql, useStaticQuery } from "gatsby";
import { AllMDX } from "@/lib/types";

const useAllMDX = () => {
  const data = useStaticQuery<AllMDX>(graphql`
    query {
      allMdx(sort: { frontmatter: { date: DESC } }) {
        nodes {
          frontmatter {
            title
            date(formatString: "YYYY-MM-DD")
            slug
          }
          id
          excerpt
        }
      }
    }
  `);

  return data.allMdx.nodes;
};

export default useAllMDX;
