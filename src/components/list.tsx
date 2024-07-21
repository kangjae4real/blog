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
  },
  defaultVariants: {
    orientation: "vertical",
  },
});

interface ListProps<Item>
  extends Omit<React.HTMLAttributes<HTMLUListElement>, "children" | "title" | "onClick">,
    VariantProps<typeof listVariants>,
    Partial<Pick<PageTitleProps, "title">>,
    Pick<PageTitleProps, "description"> {
  list: Item[];
  render: (value: Item) => React.ReactNode;
  onClick?: (value: Item) => void;
  itemClassName?: ClassValue;
}

const List = <Item,>({
  className,
  list,
  render,
  onClick,
  itemClassName,
  orientation,
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
      <ul className={cn(listVariants({ orientation }), className)} {...props}>
        {list.map((value, index) => (
          <li key={index} className={cn(itemClassName)} onClick={() => onClick && onClick(value)}>
            {render(value)}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
