import React from "react";
import { cn } from "@/lib/utils";
import { FrownOutlined } from "@ant-design/icons";
import { H2, Lead } from "@/components/typography";
import { Button } from "@/components/ui/button";
import { navigate } from "gatsby";
import { INDEX_PAGE } from "@/lib/pages";

interface NotFoundProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "children"> {}

const NotFound: React.FC<NotFoundProps> = ({ className, ...props }) => {
  return (
    <div className={cn("flex h-full w-full flex-col gap-3", className)} {...props}>
      <div className="h-[200px] w-full">
        <FrownOutlined
          className="flex h-full w-full items-center justify-center text-muted-foreground"
          style={{ fontSize: 200 }}
        />
      </div>

      <div className="flex flex-col items-center justify-center gap-2">
        <H2>404 Not found.</H2>
        <Lead>잘못된 접근이에요.</Lead>
        <Button variant="outline" onClick={() => navigate(INDEX_PAGE)}>
          첫 페이지로 돌아가기
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
