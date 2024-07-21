import React, { useMemo } from "react";
import { useSiteMetadata } from "@/hooks/use-site-metadata";

interface SEOProps {
  titleSuffix?: string;
  children?: React.ReactNode;
}

const SEO: React.FC<SEOProps> = ({ titleSuffix, children }) => {
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
      <body className="font-Inter antialiased" />
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
