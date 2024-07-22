import React, { HTMLAttributes } from "react";
import { cva, VariantProps } from "class-variance-authority";
import { Lead } from "@/components/typography";
import { cn } from "@/lib/utils";

const footerVariants = cva("w-full h-14 px-3 md:px-0 flex justify-between items-center border-t");

interface FooterProps extends Omit<HTMLAttributes<HTMLBaseElement>, "children">, VariantProps<typeof footerVariants> {}

const Footer: React.FC<FooterProps> = ({ className, ...props }) => {
  const fullYear = new Date().getFullYear();

  return (
    <footer className={cn(footerVariants(), className)} {...props}>
      <Lead className="text-sm">© {fullYear} by Kangjae Choi. All rights reserved.</Lead>
    </footer>
  );
};

export default Footer;
