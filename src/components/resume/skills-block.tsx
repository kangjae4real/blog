import React from "react";
import Block from "@/components/resume/block";
import { SKILLS } from "@/values/resume";
import TitledBlock from "@/components/resume/titled-block";
import { P } from "@/components/typography";
import List from "@/components/list";

const SkillsBlock: React.FC = () => {
  return (
    <Block title="다루는 기술">
      {SKILLS.map(({ title, skills }, index) => (
        <div key={index} className="[&:not(:first-of-type)]:mt-2">
          <TitledBlock title={title}>
            <List
              list={skills}
              render={(value, index) => (
                <P key={index} className="whitespace-normal md:whitespace-pre">
                  {value}
                </P>
              )}
              variants="disc"
            />
          </TitledBlock>
        </div>
      ))}
    </Block>
  );
};

export default SkillsBlock;
