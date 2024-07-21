import React, { useMemo } from "react";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { Link, navigate } from "gatsby";
import { H3, Small } from "@/components/typography";
import { humanizePage, INDEX_PAGE, Pages, PAGES, POSTS_PAGE } from "@/lib/pages";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  navigationMenuTriggerStyle,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from "@/components/ui/navigation-menu";
import { PageLayoutProps } from "@/components/layouts/page-layout";
import List from "@/components/list";
import { useBreakpoint } from "gatsby-plugin-breakpoints";

const headerVariants = cva("w-full h-14 px-4 md:px-0 flex justify-between items-center border-b");

interface HeaderProps
  extends Omit<React.HTMLAttributes<HTMLBaseElement>, "children">,
    VariantProps<typeof headerVariants>,
    Pick<PageLayoutProps, "location"> {}

const Header: React.FC<HeaderProps> = ({ location, className, ...props }) => {
  const { md } = useBreakpoint();

  const currentPathname = useMemo(() => {
    if (!location) {
      return;
    }

    let pathname = location.pathname;

    if (pathname.startsWith(POSTS_PAGE)) {
      pathname = POSTS_PAGE;
    }

    return humanizePage(pathname as Pages);
  }, [location]);

  return (
    <header className={cn(headerVariants(), className)} {...props}>
      <Link to="/" className="flex h-10 items-center">
        <H3 className="text-lg md:text-xl">kangjae.dev</H3>
      </Link>

      {md ? (
        <NavigationMenu>
          <NavigationMenuList>
            {PAGES.filter((page) => page !== INDEX_PAGE).map((page, index) => (
              <NavigationMenuItem
                key={index}
                className={cn(
                  navigationMenuTriggerStyle(),
                  location?.pathname.startsWith(page) && "bg-accent font-bold text-accent-foreground",
                  "cursor-pointer",
                )}
                onClick={() => navigate(page)}
              >
                {humanizePage(page)}
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      ) : (
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="w-[100px]">{currentPathname}</NavigationMenuTrigger>
              <NavigationMenuContent className="w-[100px]">
                <List
                  list={[...PAGES.filter((page) => page !== INDEX_PAGE)]}
                  className="py-2"
                  itemClassName="w-full px-2 [&:not(:first-of-type)]:pt-2"
                  onClick={(page) => navigate(page)}
                  render={(page) => <Small className="w-full">{humanizePage(page)}</Small>}
                />
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      )}
    </header>
  );
};

export default Header;
