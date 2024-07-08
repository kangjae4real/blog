import React from "react";
import { RenderBodyArgs } from "gatsby";
import { INTER_FONTS } from "@constants";

type OnRenderBodyType = (params: RenderBodyArgs) => void;

export const onRenderBody: OnRenderBodyType = ({ setHeadComponents }) => {
  setHeadComponents(
    INTER_FONTS.map((font) => (
      <link
        key={font}
        href={`/fonts/${font}.woff2`}
        rel="preload"
        as="font"
        type="font/woff2"
        crossOrigin="anonymous"
      />
    )),
  );
};
