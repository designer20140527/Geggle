"use client";
import React from "react";
import { MovingBorder } from "./moving-border";
import { cn } from "@/lib/utils";

export function MovingBorderBox({
  children,
  className,
  containerClassName,
  borderClassName,
  duration = 4000,
  borderRadius = "9999px",
  ...otherProps
}: {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  borderClassName?: string;
  duration?: number;
  borderRadius?: string;
  [key: string]: any;
}) {
  return (
    <div
      className={cn(
        "relative overflow-hidden bg-transparent border border-gray-600/50",
        containerClassName
      )}
      style={{
        borderRadius: borderRadius,
        padding: '1px',
      }}
      {...otherProps}
    >
      {/* 移动边框效果层 */}
      <div
        className="absolute inset-0 z-0"
        style={{ borderRadius: borderRadius }}
      >
        <MovingBorder duration={duration} rx="50%" ry="50%">
          <div
            className={cn(
              "h-6 w-6 bg-[radial-gradient(#00e6ca_30%,transparent_70%)] opacity-[0.7]",
              borderClassName
            )}
          />
        </MovingBorder>
      </div>

      {/* 内层容器 */}
      <div
        className={cn(
          "relative z-10 flex items-center justify-center bg-[#0a1c30] backdrop-blur-sm",
          className
        )}
        style={{
          borderRadius: `calc(${borderRadius} * 0.96)`,
        }}
      >
        {children}
      </div>
    </div>
  );
} 