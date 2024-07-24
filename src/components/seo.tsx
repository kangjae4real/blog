import React, { useMemo } from "react";
import { useSiteMetadata } from "@/hooks/use-site-metadata";
import { cn } from "@/lib/utils";

interface SEOProps {
  titleSuffix?: string;
  disableScroll?: boolean;
  children?: React.ReactNode;
}

const SEO: React.FC<SEOProps> = ({ titleSuffix, disableScroll = false, children }) => {
  const { siteLanguage, title, description, url } = useSiteMetadata();

  const fullTitle = useMemo(() => {
    if (!titleSuffix) {
      return title;
    }
    return `${title} - ${titleSuffix}`;
  }, [title, titleSuffix]);

  return (
    <>
      <html lang={siteLanguage} />
      <body className={cn("font-Inter antialiased", disableScroll && "overflow-x-hidden")} />
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:url" content={url} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      {children}
    </>
  );
};

export default SEO;
