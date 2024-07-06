import React from "react";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const headingVariants = cva("scroll-m-20 tracking-tight", {
  variants: {
    type: {
      h1: "text-4xl font-extrabold lg:text-5xl",
      h2: "text-3xl font-semibold",
      h3: "text-2xl font-semibold",
      h4: "text-xl font-semibold",
    },
  },
});

const typographyVariants = cva("", {
  variants: {
    type: {
      p: "leading-7 [&:not(:first-child)]:mt-6",
      blockquote: "mt-6 border-l-2 pl-6 italic",
      inlineCode: "relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold",
      lead: "text-xl text-muted-foreground",
      large: "text-lg font-semibold",
      small: "text-sm font-medium leading-none",
      muted: "text-sm text-muted-foreground",
    },
  },
});

interface TypographyProps<ElementType> extends React.HTMLAttributes<ElementType> {}

const H1 = ({ children, className, ...props }: TypographyProps<HTMLHeadingElement>) => {
  return (
    <h1 className={cn(headingVariants({ type: "h1" }), className)} {...props}>
      {children}
    </h1>
  );
};

const H2 = ({ children, className, ...props }: TypographyProps<HTMLHeadingElement>) => {
  return (
    <h2 className={cn(headingVariants({ type: "h2" }), className)} {...props}>
      {children}
    </h2>
  );
};

const H3 = ({ children, className, ...props }: TypographyProps<HTMLHeadingElement>) => {
  return (
    <h3 className={cn(headingVariants({ type: "h3" }), className)} {...props}>
      {children}
    </h3>
  );
};

const H4 = ({ children, className, ...props }: TypographyProps<HTMLHeadingElement>) => {
  return (
    <h4 className={cn(headingVariants({ type: "h4" }), className)} {...props}>
      {children}
    </h4>
  );
};

const P = ({ children, className, ...props }: TypographyProps<HTMLParagraphElement>) => {
  return (
    <p className={cn(typographyVariants({ type: "p" }), className)} {...props}>
      {children}
    </p>
  );
};

const Blockquote = ({ children, className, ...props }: TypographyProps<HTMLQuoteElement>) => {
  return (
    <blockquote className={cn(typographyVariants({ type: "blockquote" }), className)} {...props}>
      {children}
    </blockquote>
  );
};

const InlineCode = ({ children, className, ...props }: TypographyProps<HTMLBaseElement>) => {
  return (
    <code className={cn(typographyVariants({ type: "inlineCode" }), className)} {...props}>
      {children}
    </code>
  );
};

const Lead = ({ children, className, ...props }: TypographyProps<HTMLParagraphElement>) => {
  return (
    <p className={cn(typographyVariants({ type: "lead" }), className)} {...props}>
      {children}
    </p>
  );
};

const Large = ({ children, className, ...props }: TypographyProps<HTMLDivElement>) => {
  return (
    <div className={cn(typographyVariants({ type: "large" }), className)} {...props}>
      {children}
    </div>
  );
};

const Small = ({ children, className, ...props }: TypographyProps<HTMLBaseElement>) => {
  return (
    <small className={cn(typographyVariants({ type: "small" }), className)} {...props}>
      {children}
    </small>
  );
};

const Muted = ({ children, className, ...props }: TypographyProps<HTMLParagraphElement>) => {
  return (
    <p className={cn(typographyVariants({ type: "muted" }), className)} {...props}>
      {children}
    </p>
  );
};

export { H1, H2, H3, H4, P, Blockquote, InlineCode, Lead, Large, Small, Muted };
