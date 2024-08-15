import React from "react";
import { RenderBodyArgs } from "gatsby";
import {
  HTML_ATTRIBUTES,
  BODY_ATTRIBUTES,
  INTER_FONTS,
  PRE_BODY_SCRIPT_ELEMENT,
  GOOGLE_ANALYTICS_CDN_SCRIPT_ELEMENT,
  GOOGLE_ANALYTICS_SCRIPT_ELEMENT,
} from "@constants";

export const onRenderBody = ({
  setHtmlAttributes,
  setBodyAttributes,
  setPreBodyComponents,
  setHeadComponents,
}: RenderBodyArgs) => {
  const googleAnalyticsScripts = [GOOGLE_ANALYTICS_CDN_SCRIPT_ELEMENT, GOOGLE_ANALYTICS_SCRIPT_ELEMENT];
  const fonts = INTER_FONTS.map((font) => (
    <link key={font} href={`/fonts/${font}.woff2`} rel="preload" as="font" type="font/woff2" crossOrigin="anonymous" />
  ));
  const links = [<link key="canonical" rel="canonical" href="https://kangjae.dev" />];
  const scripts = [PRE_BODY_SCRIPT_ELEMENT];
  const components = [...googleAnalyticsScripts, ...fonts, ...links];

  setHtmlAttributes(HTML_ATTRIBUTES);
  setBodyAttributes(BODY_ATTRIBUTES);
  setPreBodyComponents(scripts);
  setHeadComponents(components);
};
