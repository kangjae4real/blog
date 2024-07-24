import React from "react";
import { cn } from "@/lib/utils";
import { H2, P } from "@/components/typography";
import { Separator } from "@/components/ui/separator";

interface BlockProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "children" | "content"> {
  title: string;
  content?: string[];
  children?: React.ReactNode;
}

const Block: React.FC<BlockProps> = ({ className, title, content, children, ...props }) => {
  return (
    <div className={cn("[&:not(:first-child)]:mt-6", className)} {...props}>
      <H2>{title}</H2>
      <Separator className="my-4" />
      {content
        ? content.map((value, index) => (
            <P key={index} className="whitespace-normal md:whitespace-pre">
              {value}
            </P>
          ))
        : children}
    </div>
  );
};

export default Block;
