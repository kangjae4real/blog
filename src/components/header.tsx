import React from "react";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { Link, navigate } from "gatsby";
import { H3 } from "@/components/typography";
import { humanizePage, INDEX_PAGE, PAGES } from "@/lib/pages";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const headerVariants = cva("w-full h-14 px-4 lg:px-0 flex justify-between items-center border-b");

interface HeaderProps
  extends Omit<React.HTMLAttributes<HTMLBaseElement>, "children">,
    VariantProps<typeof headerVariants> {}

const Header: React.FC<HeaderProps> = ({ className }) => {
  return (
    <header className={cn(headerVariants(), className)}>
      <Link to="/" className="flex h-10 items-center">
        <H3>kangjae.dev</H3>
      </Link>

      <NavigationMenu>
        <NavigationMenuList>
          {PAGES.filter((page) => page !== INDEX_PAGE).map((page, index) => (
            <NavigationMenuItem
              key={index}
              className={cn(navigationMenuTriggerStyle(), "cursor-pointer")}
              onClick={() => navigate(page)}
            >
              {humanizePage(page)}
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
};

export default Header;
