import React from "react";
import Block from "@/components/resume/block";
import { SIDE_PROJECTS } from "@/values/resume";
import BlockBody from "@/components/resume/block-body";
import { Separator } from "@/components/ui/separator";

const SideProjectBlock: React.FC = () => {
  return (
    <Block title="사이드 프로젝트">
      {SIDE_PROJECTS.map((value, index) => {
        const isLast = index === SIDE_PROJECTS.length - 1;

        return (
          <React.Fragment key={index}>
            <BlockBody {...value} />
            {!isLast && <Separator className="my-4" />}
          </React.Fragment>
        );
      })}
    </Block>
  );
};

export default SideProjectBlock;
