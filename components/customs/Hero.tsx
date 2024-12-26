"use client";
import { Vortex } from "@/components/ui/vortex";
import confetti from "canvas-confetti";
import { useCallback } from "react";

export const Hero = () => {
  const handlePolygonClick = useCallback(() => {
    confetti({
      particleCount: 50,
      angle: 45,
      spread: 70,
      origin: { x: 0, y: 1 }, 
      colors: ["#FFFFFF", "#e5f35a"],
    });
    confetti({
      particleCount: 50,
      angle: 135,
      spread: 70,
      origin: { x: 1, y: 1 }, 
      colors: ["#FFFFFF", "#e5f35a"],
    });
  }, []);

  return (
    <div className="w-full h-screen relative bg-black overflow-hidden">
      <Vortex backgroundColor="black" className="w-full h-full relative">
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
          <h2
            className="text-white text-4xl md:text-8xl font-extrabold text-center font-oswald"
          >
            VISHAL BELWAL
          </h2>
          <p className="text-zinc-400 text-sm md:text-2xl max-w-xl mt-4 text-center">
            fullstack webdeveloper and freelance video editor
          </p>
        </div>
        <div className="absolute bottom-24 flex items-center justify-center w-full z-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="692.31 510.49 730.77 1199.3"
            className="h-[200px] w-[200px] select-none fill-slate-300 lg:h-[250px] lg:w-[250px] hover:cursor-pointer transition-transform hover:scale-110"
            onClick={handlePolygonClick} 
          >
            <path
              className="hover:cursor-pointer dark:hover:fill-slate-300 dark:fill-slate-400 transition-all duration-500"
              id="star"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M772.727 510.49C1000 1000 1000 1000 1300.7 524.476 1000 1000 1000 1000 1423.077 1709.79 1000 1000 1000 1000 692.307 1125.874 1000 1000 1000 1000 772.728 510.49"
            ></path>
          </svg>
        </div>
      </Vortex>
    </div>
  );
};
