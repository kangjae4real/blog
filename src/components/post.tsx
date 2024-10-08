import React from "react";
import { cva, VariantProps } from "class-variance-authority";
import { cn, COMPONENT_MAP } from "@/lib/utils";
import { MDX } from "@/lib/types";
import { MDXProvider } from "@mdx-js/react";
import PostHead from "@/components/post-head";
import Comment from "@/components/comment";

const postVariants = cva("");

interface PostProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof postVariants> {
  post: MDX;
}

const Post: React.FC<PostProps> = ({
  className,
  post: {
    mdx: { frontmatter },
  },
  children,
  ...props
}) => {
  return (
    <div className={cn(postVariants(), className, "post")} {...props}>
      <PostHead frontmatter={frontmatter} />
      <MDXProvider components={COMPONENT_MAP}>{children}</MDXProvider>
      <Comment />
    </div>
  );
};

export default Post;
