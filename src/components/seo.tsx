import React from "react";

interface SEOProps {
  title?: string;
  children?: React.ReactNode;
}

const SEO: React.FC<SEOProps> = ({ title = "kangjae.dev", children }) => {
  return (
    <>
      <html lang="ko" />
      <body className="font-Inter antialiased" />
      <title>{title}</title>
      <meta name="description" content="Kangjae Personal Dev, Tech, Daily blog" />
      {children}
    </>
  );
};

export default SEO;
