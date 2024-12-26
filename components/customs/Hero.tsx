"use client";
import { Vortex } from "@/components/ui/vortex";
import { Oswald, Rubik_Vinyl, Playfair_Display } from "@next/font/google"; 

const oswaldFont = Oswald({
  weight: ["700"], 
  subsets: ["latin"],
  variable: "--font-oswald", 
});

export const Hero = () => {
  return (
    <>
      <div className="w-full mx-auto h-lvh overflow-hidden">
        <Vortex
          backgroundColor="black"
          className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
        >
          <h2
            className={`text-white text-4xl md:text-8xl font-extrabold text-center z-10 font-oswald`}
          >
            VISHAL BELWAL
          </h2>
          <p className="text-zinc-600 text-sm md:text-2xl max-w-xl mt-6 text-center">
            fullstack webdeveloper and freelance video editor
          </p>
        </Vortex>
      </div>
    </>
  );
};
