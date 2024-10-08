import React from "react";
import Block from "@/components/resume/block";
import { humanizeProfile, Profiles, PROFILES } from "@/values/resume";
import { Entries } from "@/lib/types";
import { Large, Small } from "@/components/typography";
import { Button } from "@/components/ui/button";
import { LinkOutlined } from "@ant-design/icons";
import { StaticImage } from "gatsby-plugin-image";

const PROFILE_IMAGE = "../../../static/images/profile.jpg";

const ProfileBlock: React.FC = () => {
  const onLinkClick = (url: string) => {
    if (typeof window === "undefined") {
      return;
    }

    window.open(url);
  };

  return (
    <Block title="프로필">
      <div className="flex w-full flex-col items-center gap-4 md:flex-row md:gap-0">
        <div className="flex w-full items-center justify-center md:w-1/2">
          <StaticImage
            src={PROFILE_IMAGE}
            alt="my-profile-image"
            className="h-[300px] w-[230px] rounded-xl shadow-xl"
            width={230}
            height={300}
          />
        </div>

        <div className="flex w-full flex-col gap-2 md:w-1/2">
          {(Object.entries(PROFILES) as Entries<Profiles>).map(([key, value], index) => (
            <div key={index} className="grid grid-cols-[120px_264px]">
              <div className="flex items-center">
                <Large className="font-bold">{humanizeProfile(key)}</Large>
              </div>
              <div className="flex items-center text-[12px] md:text-sm">
                {value.startsWith("https://") ? (
                  <Button variant="outline" size="icon" onClick={() => onLinkClick(value)}>
                    <LinkOutlined />
                  </Button>
                ) : (
                  <Small>{value}</Small>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Block>
  );
};

export default ProfileBlock;
