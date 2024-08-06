import React from "react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { DialogProps } from "@radix-ui/react-dialog";

interface AlertDrawerProps extends Required<Pick<DialogProps, "open" | "onOpenChange" | "children">> {
  title: string;
  description?: string;
  cancelLabel?: string;
}

const AlertDrawer: React.FC<AlertDrawerProps> = ({ children, open, onOpenChange, title, description, cancelLabel }) => {
  return (
    <Drawer open={open} onOpenChange={onOpenChange}>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>{title}</DrawerTitle>
          {description && <DrawerDescription>{description}</DrawerDescription>}
        </DrawerHeader>

        <div className="px-4">{children}</div>

        <DrawerFooter>
          <DrawerClose asChild>
            <Button variant="outline">{cancelLabel ?? "닫기"}</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default AlertDrawer;
