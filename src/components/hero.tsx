import React from "react";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { H1, Lead, Small } from "@/components/typography";
import { GithubOutlined, InstagramOutlined, LinkedinOutlined, MailOutlined } from "@ant-design/icons";
import { SOCIAL_LIST, SocialContent } from "@constants";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";

const heroVariants = cva("flex flex-col justify-center gap-4");

interface HeroProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "children">, VariantProps<typeof heroVariants> {}

const ICON_MAP: Record<SocialContent, React.ReactElement<HTMLSpanElement>> = {
  Github: <GithubOutlined />,
  Instagram: <InstagramOutlined />,
  LinkedIn: <LinkedinOutlined />,
  Mail: <MailOutlined />,
};

const Hero: React.FC<HeroProps> = ({ className, ...props }) => {
  return (
    <div className={cn(heroVariants(), className)} {...props}>
      <div className="flex w-full items-center justify-center">
        <div className="h-[230px] w-[230px] rounded-xl bg-[url(/images/selfie.webp)] bg-cover bg-no-repeat" />
      </div>

      <div className="flex w-full flex-col items-center justify-center gap-2">
        <Lead className="text-lg">Front-end Developer</Lead>
        <H1>최강재</H1>
      </div>

      <div className="flex w-full items-center justify-center">
        <ul className="flex items-center gap-2">
          {SOCIAL_LIST.map(({ content, href }, index) => (
            <li key={index}>
              <HoverCard>
                <HoverCardTrigger asChild>
                  <a href={href} target="_blank" className="flex h-8 w-8 items-center justify-center">
                    {ICON_MAP[content]}
                  </a>
                </HoverCardTrigger>
                <HoverCardContent className="w-auto px-2 py-1">
                  <Small>{content}</Small>
                </HoverCardContent>
              </HoverCard>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Hero;
