import React, { useMemo } from "react";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { Excerpt, FrontMatterData } from "@/lib/types";
import { H3, Lead, Small } from "@/components/typography";
import { navigate } from "gatsby";
import { GatsbyImage, getImage, ImageDataLike } from "gatsby-plugin-image";

const postPreviewVariants = cva(
  "cursor-pointer scale-x-100 scale-y-100 hover:scale-x-[1.01] hover:scale-y-[1.01] transition flex flex-col-reverse items-start gap-4 md:gap-0 md:justify-between md:items-center md:flex-row md:h-[86px]",
);

interface PostPreviewProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "children" | "title">,
    VariantProps<typeof postPreviewVariants>,
    FrontMatterData,
    Excerpt {}

const PostPreview: React.FC<PostPreviewProps> = ({
  className,
  thumbnail_image,
  thumbnail_image_alt,
  title,
  date,
  slug,
  excerpt,
  ...props
}) => {
  const thumbnailImage = useMemo(() => {
    if (!thumbnail_image) {
      return;
    }

    return getImage(thumbnail_image as unknown as ImageDataLike);
  }, [thumbnail_image]);

  return (
    <article className={cn(postPreviewVariants(), className)} onClick={() => navigate(slug)} {...props}>
      <div className="flex flex-col justify-start gap-2">
        <H3 className="font-bold">{title}</H3>
        <Lead className="text-md">{excerpt}</Lead>
        <Small>{date}</Small>
      </div>

      {thumbnailImage && (
        <div className="mr-0 h-[86px] w-full rounded-lg shadow-xl md:w-[150px]">
          <GatsbyImage image={thumbnailImage} alt={thumbnail_image_alt} className="h-full w-full rounded-lg" />
        </div>
      )}
    </article>
  );
};

export default PostPreview;
