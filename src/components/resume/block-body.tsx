import React from "react";
import { Project } from "@/values/resume";
import { cn } from "@/lib/utils";
import { Large, Lead, Small } from "@/components/typography";
import InnerBlock from "@/components/resume/inner-block";

interface BlockBodyProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "children" | "title">, Project {}

const BlockBody: React.FC<BlockBodyProps> = ({
  className,
  title,
  description,
  link,
  startedAt,
  endAt,
  tech,
  work,
  improvement,
  ...props
}) => {
  return (
    <div className={cn("mt-4 grid grid-cols-1 md:grid-cols-[50%_50%]", className)} {...props}>
      <div className="w-full">
        <Large>{title}</Large>
        {startedAt && endAt && (
          <Lead className="text-md">
            {startedAt} - {endAt}
          </Lead>
        )}
        <InnerBlock title="사용기술" list={tech} />
      </div>

      <div className="w-full">
        <Small className="whitespace-pre">{description}</Small>
        <InnerBlock title="업무" list={work} />
        <InnerBlock title="개선한 점 및 성과" list={improvement} />
      </div>
    </div>
  );
};

export default BlockBody;
