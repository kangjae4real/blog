import React from "react";

interface SEOProps {
  title: string;
  children?: React.ReactNode;
}

const SEO: React.FC<SEOProps> = ({ title, children }) => {
  return (
    <>
      <html lang="ko" />
      <body className="font-Inter bg-background antialiased" />
      <title>{title}</title>
      <meta name="description" content="Kangjae Choi, Blog" />
      {children}
    </>
  );
};

export default SEO;
