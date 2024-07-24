import React from "react";
import Block from "@/components/resume/block";
import { CAREERS } from "@/values/resume";
import BlockHead from "@/components/resume/block-head";
import BlockBody from "@/components/resume/block-body";
import { Separator } from "@/components/ui/separator";

const CareerBlock: React.FC = () => {
  return (
    <Block title="경력">
      {CAREERS.map(({ projects, ...heads }, index) => {
        const isLast = index === CAREERS.length - 1;

        return (
          <React.Fragment key={index}>
            <BlockHead {...heads} />
            {projects.map((value, index) => (
              <BlockBody key={`${index}-block-body`} {...value} />
            ))}
            {!isLast && <Separator className="my-4" />}
          </React.Fragment>
        );
      })}
    </Block>
  );
};

export default CareerBlock;
