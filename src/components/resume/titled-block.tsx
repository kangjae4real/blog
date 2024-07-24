import React from "react";
import { Large, Lead, P } from "@/components/typography";
import { cn } from "@/lib/utils";

interface TitledBlockProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
}

const TitledBlock: React.FC<TitledBlockProps> = ({ className, children, title, ...props }) => {
  return (
    <div className={cn("flex w-full flex-col gap-1", className)} {...props}>
      <Large>{title}</Large>
      {children}
    </div>
  );
};

export default TitledBlock;
