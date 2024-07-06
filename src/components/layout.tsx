import React from "react";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const layoutVariants = cva("w-full h-full");

interface LayoutProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof layoutVariants> {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children, className }) => {
  return (
    <div className={cn(layoutVariants(), className)}>
      <div>{children}</div>
    </div>
  );
};

export default Layout;
