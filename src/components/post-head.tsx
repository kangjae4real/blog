import React, { useMemo } from "react";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { FrontMatterData } from "@/lib/types";
import { GatsbyImage, getImage, ImageDataLike } from "gatsby-plugin-image";
import { H1 } from "@/components/typography";

const postHeadVariants = cva("relative mb-6 h-[150px] w-full rounded-lg shadow-xl");

interface PostHeadProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "children">,
    VariantProps<typeof postHeadVariants> {
  frontmatter: FrontMatterData;
}

const PostHead: React.FC<PostHeadProps> = ({
  className,
  frontmatter: { thumbnail_image, thumbnail_image_alt, title },
  ...props
}) => {
  const thumbnail = useMemo(() => {
    if (!thumbnail_image) {
      return;
    }

    return getImage(thumbnail_image as unknown as ImageDataLike);
  }, [thumbnail_image]);

  if (!thumbnail || !title) {
    return;
  }

  return (
    <div className={cn(postHeadVariants())} {...props}>
      <div className="h-full w-full">
        <GatsbyImage
          image={thumbnail}
          alt={thumbnail_image_alt ?? "post-thumbnail-image"}
          className="h-full w-full rounded-lg"
        />
      </div>
      <div className="absolute left-0 top-0 h-full w-full rounded-lg bg-black opacity-50" />
      <div className="absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%]">
        <H1 className="text-white">{title}</H1>
      </div>
    </div>
  );
};

export default PostHead;
