import React, { useCallback } from "react";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { Link, navigate } from "gatsby";
import { H3, Small } from "@/components/typography";
import { humanizePage, INDEX_PAGE, Pages, PAGES } from "@/lib/pages";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  navigationMenuTriggerStyle,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from "@/components/ui/navigation-menu";
import { PageLayoutProps } from "@/components/layouts/page-layout";
import useWindowSize from "@/hooks/use-window-size";
import List from "@/components/list";

const headerVariants = cva("w-full h-14 px-4 md:px-0 flex justify-between items-center border-b");

interface HeaderProps
  extends Omit<React.HTMLAttributes<HTMLBaseElement>, "children">,
    VariantProps<typeof headerVariants>,
    Pick<PageLayoutProps, "location"> {}

const Header: React.FC<HeaderProps> = ({ location, className, ...props }) => {
  const { width } = useWindowSize();

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
    <header className={cn(headerVariants(), className)} {...props}>
      <Link to="/" className="flex h-10 items-center">
        <H3 className="text-lg md:text-xl">kangjae.dev</H3>
      </Link>

      {width < 768 ? (
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="w-[100px]">
                {location?.pathname && humanizePage(location.pathname as Pages)}
              </NavigationMenuTrigger>
              <NavigationMenuContent className="w-[100px]">
                <List
                  list={[...PAGES]}
                  className="py-2"
                  itemClassName="w-full px-2 [&:not(:first-of-type)]:pt-2"
                  onClick={(page) => navigate(page)}
                  render={(page) => <Small className="w-full">{humanizePage(page)}</Small>}
                />
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      ) : (
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
      )}
    </header>
  );
};

export default Header;
