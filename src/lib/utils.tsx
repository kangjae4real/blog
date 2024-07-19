import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import React from "react";
import { Blockquote, H1, H2, H3, H4, InlineCode, P } from "@/components/typography";

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

type ComponentsKey = "h1" | "h2" | "h3" | "h4" | "p" | "blockquote" | "code";

// IMPROVE: props type 명시적으로 선언 필요.
export const COMPONENT_MAP: Record<ComponentsKey, (props: any) => React.ReactNode> = {
  h1: (props) => <H1 {...props} />,
  h2: (props) => <H2 {...props} />,
  h3: (props) => <H3 {...props} />,
  h4: (props) => <H4 {...props} />,
  p: (props) => <P {...props} />,
  blockquote: (props) => <Blockquote {...props} />,
  code: (props) => <InlineCode {...props} />,
};
