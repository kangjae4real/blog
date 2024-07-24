import React from "react";
import { cn } from "@/lib/utils";
import { Large, P } from "@/components/typography";
import List from "@/components/list";

interface InnerBlockProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "children"> {
  title: string;
  list: string[];
}

const InnerBlock: React.FC<InnerBlockProps> = ({ className, title, list, ...props }) => {
  return (
    <div className={cn("mt-4", className)} {...props}>
      <Large className="text-md">{title}</Large>
      <List
        list={list}
        itemClassName="mt-1"
        render={(value, index) => (
          <P key={index} className="whitespace-pre text-sm">
            {value}
          </P>
        )}
        variants="disc"
      />
    </div>
  );
};

export default InnerBlock;