import React, { useMemo, useState } from "react";
import { cn } from "@/lib/utils";
import ProfileBlock from "@/components/resume/profile-block";
import IntroductionBlock from "@/components/resume/introduction-block";
import CareerBlock from "@/components/resume/career-block";
import SideProjectBlock from "@/components/resume/side-project-block";
import ActivityBlock from "@/components/resume/activity-block";
import SkillsBlock from "@/components/resume/skills-block";
import EducationBlock from "@/components/resume/education-block";
import IssueBlock from "@/components/resume/issue-block";
import AlertDialog from "@/components/alert-dialog";
import { P } from "@/components/typography";
import useWindowSize from "@/hooks/use-window-size";
import AlertDrawer from "@/components/alert-drawer";

interface ResumeProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "children"> {}

const DEFAULT_OPEN = true;

const Resume: React.FC<ResumeProps> = ({ className, ...props }) => {
  const [open, setOpen] = useState(DEFAULT_OPEN);
  const { width } = useWindowSize();
  const isMobile = useMemo(() => width < 768, [width]);
  const defaultProps = useMemo(
    () => ({
      open,
      onOpenChange: setOpen,
      title: "잠시만요!",
      cancelLabel: "그래도 보기",
    }),
    [open, setOpen],
  );

  const content = (
    <>
      <P className="text-muted-foreground [&:not(:first-child)]:mt-0">
        보다 나은 사용자 경험과 가독성을 위하여 PC버전이나
      </P>
      <P className="text-muted-foreground [&:not(:first-child)]:mt-0">기기를 가로로 돌려 보시길 권장합니다.</P>
    </>
  );

  return (
    <>
      {isMobile ? (
        <AlertDrawer {...defaultProps}>{content}</AlertDrawer>
      ) : (
        <AlertDialog defaultOpen={DEFAULT_OPEN} {...defaultProps}>
          {content}
        </AlertDialog>
      )}
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
    </>
  );
};

export default Resume;
