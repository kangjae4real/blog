import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { DialogProps } from "@radix-ui/react-dialog";
import { Button } from "@/components/ui/button";

interface AlertDialogProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "children" | "className">,
    Required<Pick<DialogProps, "open" | "defaultOpen" | "onOpenChange" | "children">> {
  title: string;
  description?: string;
  cancelLabel?: string;
}

const AlertDialog: React.FC<AlertDialogProps> = ({
  children,
  open,
  defaultOpen,
  onOpenChange,
  title,
  description,
  cancelLabel,
  ...props
}) => {
  return (
    <Dialog open={open} defaultOpen={defaultOpen} onOpenChange={onOpenChange} {...props}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          {description && <DialogDescription>{description}</DialogDescription>}
        </DialogHeader>

        <div>{children}</div>

        <DialogFooter>
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            {cancelLabel ?? "닫기"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default AlertDialog;
