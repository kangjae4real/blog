import React from "react";

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
};

export const BODY_ATTRIBUTES: ReactProps<HTMLBodyElement> = {
  className: "font-Inter antialiased bg-background",
};

export const PRE_BODY_SCRIPT: string = `(function() {
  window.__onThemeChange = function () {};
  
  var preferredTheme;
  
  try {
    preferredTheme = localStorage.getItem("theme");
  } catch (err) {
  }
  
  window.__setPreferredTheme = function (newTheme) {
    window.__theme = newTheme;
    preferredTheme = newTheme;
    document.body.className = newTheme + " font-Inter antialiased bg-background";
    window.__onThemeChange(newTheme);

    try {
      localStorage.setItem("theme", newTheme);
    } catch (err) {
    }
  };
  
  var darkQuery = window.matchMedia("(prefers-color-scheme: dark)");
  
  darkQuery.addListener(function (event) {
    window.__setPreferredTheme(event.matches ? "dark" : "light");
  });
  
  window.__setPreferredTheme(
    preferredTheme || (darkQuery.matches ? "dark" : "light")
  );
})();`;

export const PRE_BODY_SCRIPT_ELEMENT: React.ReactNode = (
  <script key="pre-body-script" dangerouslySetInnerHTML={{ __html: PRE_BODY_SCRIPT }} />
);

export const GOOGLE_ANALYTICS_CDN_SCRIPT_ELEMENT: React.ReactNode = (
  <script
    key="google-analytics-cdn-script"
    src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GOOGLE_ANALYTICS_ID}`}
    async
  />
);

export const GOOGLE_ANALYTICS_SCRIPT: string = `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${process.env.GOOGLE_ANALYTICS_ID}');`;

export const GOOGLE_ANALYTICS_SCRIPT_ELEMENT: React.ReactNode = (
  <script key="google-analytics-script" dangerouslySetInnerHTML={{ __html: GOOGLE_ANALYTICS_SCRIPT }} />
);
