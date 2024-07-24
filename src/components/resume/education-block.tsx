import React from "react";
import Block from "@/components/resume/block";
import { ACTIVITIES, EDUCATION } from "@/values/resume";
import { Lead, P } from "@/components/typography";
import TitledBlock from "@/components/resume/titled-block";

const EducationBlock: React.FC = () => {
  return (
    <Block title="학력">
      {EDUCATION.map(({ school, department, admissionAt, graduationAt, isGraduated }, index) => (
        <div key={index} className="[&:not(:first-of-type)]:mt-2">
          <TitledBlock title={school}>
            <Lead className="text-md">{department}</Lead>
            <P className="whitespace-normal md:whitespace-pre [&:not(:first-child)]:mt-0">
              {admissionAt} ~ {graduationAt} {isGraduated && "(졸업)"}
            </P>
          </TitledBlock>
        </div>
      ))}
    </Block>
  );
};

export default EducationBlock;
