import React from "react";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import PageTitle, { PageTitleProps } from "@/components/page-title";
import { Separator } from "@/components/ui/separator";
import { ClassValue } from "clsx";

const listVariants = cva("w-full h-full", {
  variants: {
    orientation: {
      horizontal: "flex gap-2",
      vertical: "flex flex-col",
    },
    variants: {
      default: "list-none",
      decimal: "list-decimal pl-[14px]",
      disc: "list-disc pl-[14px]",
    },
  },
  defaultVariants: {
    orientation: "vertical",
    variants: "default",
  },
});

interface ListProps<Item>
  extends Omit<React.HTMLAttributes<HTMLUListElement>, "children" | "title" | "onClick">,
    VariantProps<typeof listVariants>,
    Partial<Pick<PageTitleProps, "title">>,
    Pick<PageTitleProps, "description"> {
  list: Item[];
  render: (value: Item, index: number) => React.ReactNode;
  onClick?: (value: Item) => void;
  itemClassName?: ClassValue;
  withSeparator?: boolean;
}

const List = <Item,>({
  className,
  list,
  render,
  onClick,
  itemClassName,
  withSeparator = false,
  orientation,
  variants,
  title,
  description,
  ...props
}: ListProps<Item>) => {
  return (
    <div className="flex h-full w-full flex-col">
      {title && (
        <>
          <PageTitle title={title} description={description} />
          <Separator className="my-4" />
        </>
      )}
      <ul className={cn(listVariants({ orientation, variants }), className)} {...props}>
        {list.map((value, index) => {
          const isLast = index === list.length - 1;

          return (
            <React.Fragment key={index}>
              <li className={cn(itemClassName)} onClick={() => onClick && onClick(value)}>
                {render(value, index)}
              </li>
              {withSeparator && !isLast && <Separator />}
            </React.Fragment>
          );
        })}
      </ul>
    </div>
  );
};

export default List;
