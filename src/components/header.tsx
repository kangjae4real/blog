import React, { useCallback } from "react";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { Link, navigate } from "gatsby";
import { H3 } from "@/components/typography";
import { humanizePage, INDEX_PAGE, Pages, PAGES } from "@/lib/pages";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { PageLayoutProps } from "@/components/layouts/page-layout";

const headerVariants = cva("w-full h-14 px-4 lg:px-0 flex justify-between items-center border-b");

const navigationItemVariants = cva("", {
  variants: {
    itemVariant: {
      active: "font-bold",
    },
  },
});

interface HeaderProps
  extends Omit<React.HTMLAttributes<HTMLBaseElement>, "children">,
    VariantProps<typeof headerVariants>,
    VariantProps<typeof navigationItemVariants>,
    Pick<PageLayoutProps, "location" | "pageData"> {}

const Header: React.FC<HeaderProps> = ({ location, pageData, className, itemVariant }) => {
  const getActiveStyle = useCallback(
    (page: Pages) => {
      if (!location || page !== location.pathname) {
        return "";
      }

      return "bg-accent text-accent-foreground font-bold";
    },
    [location],
  );

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
              className={cn(navigationMenuTriggerStyle(), getActiveStyle(page), "cursor-pointer")}
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
