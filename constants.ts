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
