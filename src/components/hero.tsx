import React from "react";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { H1, Lead, Small } from "@/components/typography";
import { GithubOutlined, InstagramOutlined, LinkedinOutlined, MailOutlined } from "@ant-design/icons";
import { SOCIAL_LIST, SocialContent } from "@constants";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { StaticImage } from "gatsby-plugin-image";

const heroVariants = cva("w-full flex flex-col justify-center gap-4", {
  variants: {
    size: {
      default: "h-full",
      full: "h-containerFullHeight",
    },
  },
  defaultVariants: {
    size: "default",
  },
});

interface HeroProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "children">, VariantProps<typeof heroVariants> {}

const ICON_MAP: Record<SocialContent, React.ReactElement<HTMLSpanElement>> = {
  Github: <GithubOutlined />,
  Instagram: <InstagramOutlined />,
  LinkedIn: <LinkedinOutlined />,
  Mail: <MailOutlined />,
};

const SELFIE_IMAGE = "../../static/images/selfie.jpeg";

const Hero: React.FC<HeroProps> = ({ className, size, ...props }) => {
  return (
    <div className={cn(heroVariants({ size }), className)} {...props}>
      <div className="flex w-full items-center justify-center">
        <StaticImage
          src={SELFIE_IMAGE}
          alt="my-selfie"
          className="h-[230px] w-[230px] rounded-xl shadow-xl"
          width={230}
          height={230}
        />
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
