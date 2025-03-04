import React from "react";
import { Vortex } from "./ui/vortex";

export function VortexDemo() {
  return (
    <div className="w-[calc(100%-4rem)] mx-auto rounded-md  h-[30rem] overflow-hidden">
      <Vortex
        backgroundColor="black"
        className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
      >
        <h2 className="text-white text-2xl md:text-6xl font-bold text-center">
          Want the latest tech news?
        </h2>
        <p className="text-white text-sm md:text-2xl max-w-xl mt-6 text-center">
          This is chemical burn. It&apos;ll hurt more than you&apos;ve ever been
          burned and you&apos;ll have a scar.
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
        <button className="relative rounded-full px-6 py-3 bg-[#e02e2e] dark:bg-white dark:text-black  text-white text-sm font-medium tracking-wide overflow-hidden group">
            <span className="relative z-10 block transition-transform duration-300 group-hover:-translate-y-8">
              SUBSCRIBE NOW
            </span>
            <span className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            SUBSCRIBE NOW
            </span>
          </button>
         
        </div>
      </Vortex>
    </div>
  );
}
