"use client";
import { Oswald } from "@next/font/google";
import { motion } from "framer-motion";
import { LampContainer } from "../ui/lamp";
import { FlipWords } from "../ui/flip-words";
import { VelocityScroll } from "../ui/scroll-based-velocity";
import { InfoPage } from "./Info";

export const AboutPage = () => {
  const words = ["About Me", "what am i cooking?"];
  return (
    <>
      <div className="w-full mx-auto h-lvh">
        <div className="h-4/5 -mb-5">
          <LampContainer className="relative z-0 bg-black">
            <motion.h1
              initial={{ opacity: 0.5, y: 100 }}
              whileInView={{ opacity: 1, y: -120 }}
              transition={{
                delay: 0.3,
                duration: 0.8,
                ease: "easeInOut",
              }}
              className="mt-2 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
            >
              <FlipWords words={words} /> <br />
            </motion.h1>
          </LampContainer>
        </div>
        <div className="">
          <VelocityScroll
            text="undergrad student, fullstack dev, building awesome things with code"
            default_velocity={2}
            className="font-display text-center text-4xl relative font-bold tracking-[-0.02em] text-slate-300 drop-shadow-sm dark:text-white md:text-7xl md:leading-[5rem]"
          />
        </div>
      </div>
      <InfoPage />
    </>
  );
};
