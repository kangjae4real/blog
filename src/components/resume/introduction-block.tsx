import React from "react";
import Block from "@/components/resume/block";
import { INTRODUCTION } from "@/values/resume";

const IntroductionBlock: React.FC = () => <Block title="소개" content={INTRODUCTION} />;

export default IntroductionBlock;
