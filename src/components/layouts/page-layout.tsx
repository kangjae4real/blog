import React from "react";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import BaseLayout from "@/components/layouts/base-layout";
import Header from "@/components/header";

const pageLayoutVariants = cva("w-full h-full");

interface PageLayoutProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof pageLayoutVariants> {
  hideHeader?: boolean;
  hideFooter?: boolean;
}

const PageLayout: React.FC<PageLayoutProps> = ({ children, className, hideHeader = false, hideFooter = false }) => {
  return (
    <BaseLayout>
      <div className={cn(pageLayoutVariants(), className)}>
        {!hideHeader && <Header />}
        <div className="h-full w-full px-4 py-4 lg:px-0">{children}</div>
        {!hideFooter && <div>footer</div>}
      </div>
    </BaseLayout>
  );
};

export default PageLayout;
