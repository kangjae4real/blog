import React from "react";

interface SEOProps {
  title?: string;
  titleSuffix?: string;
  children?: React.ReactNode;
}

const SEO: React.FC<SEOProps> = ({ title = "kangjae.dev", titleSuffix, children }) => {
  const fullTitle = `${title} ${titleSuffix ? `- ${titleSuffix}` : ""}`;

  return (
    <>
      <html lang="ko" />
      <body className="font-Inter antialiased" />
      <title>{fullTitle}</title>
      <meta name="description" content="Kangjae Personal Dev, Tech, Daily blog" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:url" content="https://kangjae.dev" />
      <meta property="og:description" content="Kangjae Personal Dev, Tech, Daily blog" />
      <meta property="og:type" content="website" />
      {children}
    </>
  );
};

export default SEO;
