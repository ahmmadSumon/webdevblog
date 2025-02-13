import { cn } from "@/lib/utils";
import React from "react";

export const Meteors = ({
  number = 20,
  className = "",
}: {
  number?: number;
  className?: string;
}) => {
  return (
    <>
      {Array.from({ length: number }).map((_, idx) => {
        const delay = `${Math.random() * 0.8 + 0.2}s`;
        const duration = `${Math.floor(Math.random() * 8 + 2)}s`;
        const left = `${Math.floor(Math.random() * 800 - 400)}px`;

        return (
          <span
            key={"meteor" + idx}
            className={cn(
              "animate-meteor-effect absolute top-0 left-1/2 h-0.5 w-0.5 rounded-full bg-slate-500 shadow-[0_0_0_1px_#ffffff10] rotate-[215deg]",
              "before:content-[''] before:absolute before:top-1/2 before:-translate-y-[50%] before:w-[50px] before:h-[1px] before:bg-gradient-to-r before:from-[#64748b] before:to-transparent",
              className
            )}
            style={{
              left,
              animationDelay: delay,
              animationDuration: duration,
            }}
          />
        );
      })}
    </>
  );
};
