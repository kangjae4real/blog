import { graphql, useStaticQuery } from "gatsby";
import { AllFile, FileNodes } from "@/lib/types";

type UsePostsNameParams = (limit?: number) => FileNodes["nodes"];

export const usePostsName: UsePostsNameParams = (limit) => {
  const data = useStaticQuery<AllFile>(graphql`
    query {
      allFile {
        nodes {
          name
        }
      }
    }
  `);

  if (!limit) {
    return data.allFile.nodes;
  }
  return data.allFile.nodes.filter((_, index) => index < limit);
};
