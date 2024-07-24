import React from "react";
import { cn } from "@/lib/utils";
import ProfileBlock from "@/components/resume/profile-block";
import IntroductionBlock from "@/components/resume/introduction-block";
import CareerBlock from "@/components/resume/career-block";
import SideProjectBlock from "@/components/resume/side-project-block";
import ActivityBlock from "@/components/resume/activity-block";
import SkillsBlock from "@/components/resume/skills-block";
import EducationBlock from "@/components/resume/education-block";
import IssueBlock from "@/components/resume/issue-block";

interface ResumeProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "children"> {}

const Resume: React.FC<ResumeProps> = ({ className, ...props }) => {
  return (
    <div className={cn(className)} {...props}>
      <ProfileBlock />
      <IntroductionBlock />
      <CareerBlock />
      <SideProjectBlock />
      <ActivityBlock />
      <SkillsBlock />
      <EducationBlock />
      <IssueBlock />
    </div>
  );
};

export default Resume;
