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
        "@/lib/types": path.resolve(__dirname, "src/lib/types"),
        "@/hooks": path.resolve(__dirname, "src/hooks"),
        "@/values": path.resolve(__dirname, "src/values"),
        "@constants": path.resolve(__dirname, "./constants"),
      },
    },
  });
};
