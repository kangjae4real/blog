import React, { useMemo } from "react";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { Link, navigate } from "gatsby";
import { H3 } from "@/components/typography";
import { humanizePage, INDEX_PAGE, PAGES } from "@/lib/pages";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { PageLayoutProps } from "@/components/layouts/page-layout";
import { Button } from "@/components/ui/button";
import { SunIcon, MoonIcon, UpdateIcon } from "@radix-ui/react-icons";
import useTheme from "@/hooks/use-theme";

export const HEADER_HEIGHT = 56;

const headerVariants = cva("w-full h-header px-3 md:px-0 flex justify-between items-center border-b");

interface HeaderProps
  extends Omit<React.HTMLAttributes<HTMLBaseElement>, "children">,
    VariantProps<typeof headerVariants>,
    Pick<PageLayoutProps, "location"> {}

const Header: React.FC<HeaderProps> = ({ location, className, ...props }) => {
  const { theme, toggleTheme } = useTheme();

  const buttonContent = useMemo(() => {
    if (!theme) {
      return <UpdateIcon className="animate-spin" />;
    }
    if (theme === "light") {
      return <MoonIcon />;
    }

    return <SunIcon />;
  }, [theme]);

  return (
    <header className={cn(headerVariants(), className)} {...props}>
      <Link to="/" className="flex h-10 items-center">
        <H3 className="text-lg md:text-xl">kangjae.dev</H3>
      </Link>

      <div className="flex items-center justify-between gap-2">
        <NavigationMenu>
          <NavigationMenuList>
            {PAGES.filter((page) => page !== INDEX_PAGE).map((page, index) => (
              <NavigationMenuItem
                key={index}
                className={cn(
                  navigationMenuTriggerStyle(),
                  location?.pathname.startsWith(page) && "bg-accent font-bold text-accent-foreground",
                  "px-2 py-1 md:px-4 md:py-2",
                  "cursor-pointer",
                )}
                onClick={() => navigate(page)}
              >
                {humanizePage(page)}
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        <Button variant="outline" size="icon" disabled={!theme} onClick={() => toggleTheme()}>
          {buttonContent}
        </Button>
      </div>
    </header>
  );
};

export default Header;
