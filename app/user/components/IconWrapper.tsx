import { cn } from "@nextui-org/react";
import React, { ReactNode } from "react"; // 导入 ReactNode 类型

interface IconWrapperProps {
  children: ReactNode;
  className?: string;
}

export const IconWrapper: React.FC<IconWrapperProps> = ({ children, className }) => (
  <div className={cn(className, "flex items-center rounded-small justify-center w-7 h-7")}>
    {children}
  </div>
);
