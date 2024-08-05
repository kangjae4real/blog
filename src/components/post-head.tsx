import React, { useMemo } from "react";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { FrontMatterData } from "@/lib/types";
import { GatsbyImage, getImage, ImageDataLike } from "gatsby-plugin-image";
import { H1, H2, Lead, P } from "@/components/typography";
import { Separator } from "@/components/ui/separator";

const postHeadVariants = cva("relative mb-6 h-[120px] w-full rounded-lg shadow-xl md:h-[150px]");

interface PostHeadProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "children">,
    VariantProps<typeof postHeadVariants> {
  frontmatter: FrontMatterData;
}

const PostHead: React.FC<PostHeadProps> = ({
  className,
  frontmatter: { thumbnail_image, thumbnail_image_alt, title, date },
  ...props
}) => {
  const thumbnail = useMemo(() => {
    if (!thumbnail_image) {
      return;
    }

    return getImage(thumbnail_image as unknown as ImageDataLike);
  }, [thumbnail_image]);

  if (!thumbnail) {
    return (
      <>
        <H2 className="font-extrabold">{title}</H2>
        <Lead className="mt-1 text-lg">{date}</Lead>
        <Separator className="my-4" />
      </>
    );
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
      <div className="absolute left-1/2 top-1/2 flex translate-x-[-50%] translate-y-[-50%] flex-col items-center gap-1 md:gap-2">
        <H2 className="text-2xl font-extrabold text-white md:text-4xl">{title}</H2>
        <P className="text-sm text-white md:text-lg [&:not(:first-child)]:mt-0">{date}</P>
      </div>
    </div>
  );
};

export default PostHead;
