import React from "react";
import Block from "@/components/resume/block";
import { ACTIVITIES } from "@/values/resume";
import { Lead, P } from "@/components/typography";
import TitledBlock from "@/components/resume/titled-block";

const ActivityBlock: React.FC = () => {
  return (
    <Block title="개인활동">
      {ACTIVITIES.map(({ title, description, acquisition }, index) => (
        <div key={index} className="[&:not(:first-child)]:mt-2">
          <TitledBlock title={title}>
            <Lead className="text-md">{acquisition}</Lead>
            <P className="whitespace-normal md:whitespace-pre [&:not(:first-child)]:mt-0">{description}</P>
          </TitledBlock>
        </div>
      ))}
    </Block>
  );
};

export default ActivityBlock;
