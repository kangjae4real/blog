import path from "path";
import { NodePluginArgs } from "gatsby";

type OnCreateWebpackConfigType = (params: NodePluginArgs) => void;

export const onCreateWebpackConfig: OnCreateWebpackConfigType = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        "@/components": path.resolve(__dirname, "src/components"),
        "@/lib/utils": path.resolve(__dirname, "src/lib/utils"),
        "@/lib/pages": path.resolve(__dirname, "src/lib/pages"),
      },
    },
  });
};
