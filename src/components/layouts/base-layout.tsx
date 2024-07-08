import React from "react";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const baseLayoutVariants = cva("h-full", {
  variants: {
    size: {
      default: "w-full max-w-3xl mx-auto",
      full: "w-full",
    },
  },
  defaultVariants: {
    size: "default",
  },
});

interface BaseLayoutProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof baseLayoutVariants> {
  children: React.ReactNode;
}

const BaseLayout: React.FC<BaseLayoutProps> = ({ children, className, size, ...props }) => {
  return (
    <div className={cn(baseLayoutVariants({ size }), className)} {...props}>
      <div className="h-full w-full">{children}</div>
    </div>
  );
};

export default BaseLayout;
