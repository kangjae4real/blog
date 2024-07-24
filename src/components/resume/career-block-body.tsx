import React from "react";
import { Project } from "@/values/resume";
import { cn } from "@/lib/utils";
import { H3, H4, Large, Lead, P, Small } from "@/components/typography";
import List from "@/components/list";
import InnerBlock from "@/components/resume/inner-block";

interface CareerBlockBodyProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "children" | "title">, Project {}

const CareerBlockBody: React.FC<CareerBlockBodyProps> = ({
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
        <Lead className="text-md">
          {startedAt} - {endAt}
        </Lead>
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

export default CareerBlockBody;
