import React from "react";
import { Career } from "@/values/resume";
import { cn } from "@/lib/utils";
import { H3, P, Small } from "@/components/typography";

interface BlockHeadProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "children">, Omit<Career, "projects"> {}

const BlockHead: React.FC<BlockHeadProps> = ({
  className,
  company,
  joinedAt,
  quitedAt,
  team,
  job,
  isFullTime,
  issue,
  ...props
}) => {
  return (
    <div className={cn("flex w-full flex-col gap-1", className)} {...props}>
      <H3 className="flex flex-col md:flex-row md:gap-1">
        <span>{company}</span>
        <span>
          ({joinedAt} - {quitedAt})
        </span>
      </H3>
      <P className="flex items-center gap-1 [&:not(:first-child)]:mt-0">
        {team} 팀 / {job} 개발 {isFullTime && <Small className="font-bold">(풀타임)</Small>}
      </P>
      {issue && (
        <P className="whitespace-pre text-[11px] font-bold md:text-[16px] [&:not(:first-child)]:mt-0">
          특이사항{"\n"}
          {issue}
        </P>
      )}
    </div>
  );
};

export default BlockHead;
