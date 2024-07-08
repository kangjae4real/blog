import React from "react";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import BaseLayout from "@/components/layouts/base-layout";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { PageProps } from "gatsby";

const pageLayoutVariants = cva("w-full h-full");

export interface PageLayoutProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof pageLayoutVariants> {
  hideHeader?: boolean;
  hideFooter?: boolean;
  location?: PageProps["location"];
  pageData?: PageProps["data"];
}

const PageLayout: React.FC<PageLayoutProps> = ({
  children,
  className,
  hideHeader = false,
  hideFooter = false,
  location,
  pageData,
  ...props
}) => {
  return (
    <BaseLayout>
      <div className={cn(pageLayoutVariants(), className)} {...props}>
        {!hideHeader && <Header location={location} pageData={pageData} />}
        <div className="h-full w-full px-4 py-4 md:px-0">{children}</div>
        {!hideFooter && <Footer />}
      </div>
    </BaseLayout>
  );
};

export default PageLayout;
