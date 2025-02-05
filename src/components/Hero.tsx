"use client";

import { RetroGrid } from "./ui/retro-grid";

export function Hero() {

  return (
    <>
      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background h-full -z-10">
        {
          <>
            <span className="pointer-events-none z-10 whitespace-pre-wrap bg-gradient-to-b from-[#ffd319] via-[#ff2975] to-[#8c1eff] bg-clip-text text-center text-5xl md:text-7xl font-bold leading-none tracking-tighter text-transparent font-love flex flex-col items-center p-5">
              <span>Happy</span>
              <span className="text-[6rem] lg:text-[8rem] mt-2">
                  Valentine's
              </span> 
              <span className="">Amor</span>
            </span>
            <RetroGrid />
          </>
        }

      
      </div>
    </>
  );
}
