import React from "react";
import Giscus, { Repo } from "@giscus/react";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { H4 } from "@/components/typography";
import useTheme from "@/hooks/use-theme";

const commentVariants = cva("mt-6");

interface CommentProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "children">,
    VariantProps<typeof commentVariants> {}

const Comment: React.FC<CommentProps> = ({ className, ...props }) => {
  const { theme } = useTheme();

  if (
    !process.env.GATSBY_REPO ||
    !process.env.GATSBY_REPO_ID ||
    !process.env.GATSBY_CATEGORY ||
    !process.env.GATSBY_CATEGORY_ID
  ) {
    return (
      <div className="mt-6 flex w-full justify-center">
        <H4 className="font-bold">Load environment variable failed.</H4>
      </div>
    );
  }

  return (
    <div className={cn(commentVariants(), className)} {...props}>
      <Giscus
        theme={theme ?? "light"}
        repo={process.env.GATSBY_REPO as Repo}
        repoId={process.env.GATSBY_REPO_ID}
        category={process.env.GATSBY_CATEGORY}
        categoryId={process.env.GATSBY_CATEGORY_ID}
        mapping="url"
        strict="0"
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="top"
        lang="ko"
        loading="lazy"
      />
    </div>
  );
};

export default Comment;
