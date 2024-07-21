import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import React from "react";
import { Blockquote, H1, H2, H3, H4, InlineCode, P, Small } from "@/components/typography";
import { ComponentsKey } from "@/lib/types";

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

// IMPROVE: `props` type 명시적으로 선언 필요.
// IMPROVE: `table`, `tr`, `th`, `td` 태그 대응 필요.
// IMPROVE: `delete` 대응 필요.
// IMPROVE: `code` prism 연동 필요.
// NOTE: 그 외 내요은 `global.css` 의 작성 됨.
export const COMPONENT_MAP: Record<ComponentsKey, (props: any) => React.ReactNode> = {
  h1: (props) => <H1 {...props} />,
  h2: (props) => <H2 {...props} />,
  h3: (props) => <H3 {...props} />,
  h4: (props) => <H4 {...props} />,
  p: (props) => <P {...props} />,
  blockquote: (props) => <Blockquote {...props} />,
  code: (props) => <InlineCode {...props} />,
  ul: (props) => <ul {...props} />,
  ol: (props) => <ol {...props} />,
  li: (props) => <li {...props} />,
  a: (props) => <a {...props} />,
};
