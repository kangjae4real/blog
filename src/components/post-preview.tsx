import React from "react";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { Excerpt, FrontMatterData } from "@/lib/types";
import { H3, Lead, Small } from "@/components/typography";
import { navigate } from "gatsby";

const postPreviewVariants = cva(
  "cursor-pointer scale-x-100 scale-y-100 hover:scale-x-105 hover:scale-y-105 transition duration-400",
);

interface PostPreviewProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "children" | "title">,
    VariantProps<typeof postPreviewVariants>,
    FrontMatterData,
    Excerpt {}

const PostPreview: React.FC<PostPreviewProps> = ({ className, title, date, slug, excerpt, ...props }) => {
  return (
    <article className={cn(postPreviewVariants(), className)} onClick={() => navigate(slug)} {...props}>
      <div className="flex flex-col gap-2">
        <H3 className="font-bold">{title}</H3>
        <Lead className="text-md">{excerpt}</Lead>
        <Small>{date}</Small>
      </div>
    </article>
  );
};

export default PostPreview;
