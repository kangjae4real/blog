import { graphql, useStaticQuery } from "gatsby";
import { Site } from "@/lib/types";

export const useSiteMetadata = () => {
  const data = useStaticQuery<Site>(graphql`
    query {
      site {
        siteMetadata {
          title
          url
          description
          siteLanguage
        }
      }
    }
  `);

  return data.site.siteMetadata;
};
