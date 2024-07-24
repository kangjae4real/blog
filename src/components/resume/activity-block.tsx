import React from "react";
import Block from "@/components/resume/block";
import { ACTIVITIES } from "@/values/resume";
import { Large, Lead, P } from "@/components/typography";
import { Separator } from "@/components/ui/separator";

const ActivityBlock: React.FC = () => {
  return (
    <Block title="개인활동">
      {ACTIVITIES.map(({ title, description, acquisition }, index) => {
        const isLast = index === ACTIVITIES.length - 1;

        return (
          <React.Fragment key={index}>
            <div className="flex w-full flex-col gap-1">
              <Large>{title}</Large>
              <Lead className="text-md">{acquisition}</Lead>
              <P className="whitespace-normal md:whitespace-pre [&:not(:first-child)]:mt-0">{description}</P>
            </div>
            {!isLast && <Separator className="my-4" />}
          </React.Fragment>
        );
      })}
    </Block>
  );
};

export default ActivityBlock;
