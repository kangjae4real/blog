import * as React from "react";

export const FONT_TYPES = [
  "Black",
  "BlackItalic",
  "Bold",
  "BoldItalic",
  "ExtraBold",
  "ExtraBoldItalic",
  "ExtraLight",
  "ExtraLightItalic",
  "Italic",
  "Light",
  "LightItalic",
  "Medium",
  "MediumItalic",
  "Regular",
  "SemiBold",
  "SemiBoldItalic",
  "Thin",
  "ThinItalic",
];

export const INTER_FONTS = FONT_TYPES.map((type) => `Inter-${type}`);

export type SocialContent = "Github" | "Instagram" | "LinkedIn" | "Mail";

export interface Social {
  content: SocialContent;
  href: string;
}

export const SOCIAL_LIST: Social[] = [
  {
    content: "Github",
    href: "https://github.com/kangjae4real",
  },
  {
    content: "Instagram",
    href: "https://www.instagram.com/kangjae.choi",
  },
  {
    content: "LinkedIn",
    href: "https://www.linkedin.com/in/kangjae-choi",
  },
  {
    content: "Mail",
    href: "mailto:awpe89@gmail.com",
  },
];

type ReactProps<T extends Element> = React.DetailedHTMLProps<React.HTMLAttributes<T>, T>;

export const HTML_ATTRIBUTES: ReactProps<HTMLHtmlElement> = {
  lang: "ko",
  className: "light",
  style: {
    colorScheme: "light",
  },
};

export const BODY_ATTRIBUTES: ReactProps<HTMLBodyElement> = {
  className: "font-Inter antialiased",
};
