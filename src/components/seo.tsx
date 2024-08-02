import React, { useMemo } from "react";
import { useSiteMetadata } from "@/hooks/use-site-metadata";
import { ThumbnailImage } from "@/lib/types";
import { cn } from "@/lib/utils";

interface SEOProps {
  titleSuffix?: string;
  thumbnailImage?: ThumbnailImage;
  disableScroll?: boolean;
  children?: React.ReactNode;
}

const SEO: React.FC<SEOProps> = ({ titleSuffix, thumbnailImage, disableScroll = false, children }) => {
  const { siteLanguage, description, title, url, image } = useSiteMetadata();

  const fullTitle = useMemo(() => {
    if (!titleSuffix) {
      return title;
    }
    return `${title} - ${titleSuffix}`;
  }, [title, titleSuffix]);

  const thumbnail = useMemo(() => {
    if (!thumbnailImage) {
      return image;
    }
    return thumbnailImage.childImageSharp.gatsbyImageData.images.fallback.src;
  }, [thumbnailImage, image]);

  return (
    <>
      <html lang={siteLanguage} />
      <body className={cn("font-Inter antialiased", disableScroll && "overflow-x-hidden")} />
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={thumbnail} />
      <meta property="og:type" content="website" />
      {children}
    </>
  );
};

export default SEO;
