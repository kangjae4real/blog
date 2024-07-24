import React from "react";
import Block from "@/components/resume/block";
import { SIDE_PROJECTS } from "@/values/resume";
import BlockBody from "@/components/resume/block-body";

const SideProjectBlock: React.FC = () => {
  return (
    <Block title="사이드 프로젝트">
      {SIDE_PROJECTS.map((value, index) => (
        <React.Fragment key={index}>
          <BlockBody {...value} />
        </React.Fragment>
      ))}
    </Block>
  );
};

export default SideProjectBlock;
