import React from "react";
import Block from "@/components/resume/block";
import { CAREERS } from "@/values/resume";
import CareerBlockHead from "@/components/resume/career-block-head";
import CareerBlockBody from "@/components/resume/career-block-body";
import { Separator } from "@/components/ui/separator";

const CareerBlock: React.FC = () => {
  return (
    <Block title="경력">
      {CAREERS.map(({ projects, ...heads }) => (
        <>
          <CareerBlockHead {...heads} />
          {projects.map((value, index) => (
            <CareerBlockBody key={index} {...value} />
          ))}
          <Separator className="my-4" />
        </>
      ))}
    </Block>
  );
};

export default CareerBlock;
