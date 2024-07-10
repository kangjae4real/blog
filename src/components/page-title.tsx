import React from "react";
import { cva, VariantProps } from "class-variance-authority";
import { H2, Lead } from "@/components/typography";
import { cn } from "@/lib/utils";

const pageTitleVariants = cva("w-full h-full flex flex-col gap-2");

export interface PageTitleProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "children">,
    VariantProps<typeof pageTitleVariants> {
  title: string;
  description?: string;
}

const PageTitle: React.FC<PageTitleProps> = ({ className, title, description, ...props }) => {
  return (
    <div className={cn(pageTitleVariants(), className)} {...props}>
      <H2 className="font-black">{title}</H2>
      {description && <Lead>{description}</Lead>}
    </div>
  );
};

export default PageTitle;
