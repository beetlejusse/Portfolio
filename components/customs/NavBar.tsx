"use client";

import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

const Navbar: React.FC = () => {
  const [isBlurred, setIsBlurred] = useState(false); // Default state without blur
  const githubAvatarUrl = process.env.NEXT_PUBLIC_GITHUBUSERNAME
    ? `https://github.com/${process.env.NEXT_PUBLIC_GITHUBUSERNAME}.png`
    : "/default-avatar.png";

  const router = useRouter();

  const handleGetInTouchClick = () => {
    router.push("/touch");
  };

  const handleJourneyClick = () => {
    router.push("/journey");
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsBlurred(scrollY > 20); // Apply blur effect when user scrolls 20px or more
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 w-full flex items-center justify-between py-4 px-6 z-50 transition-all duration-300",
        isBlurred
          ? "bg-black/50 backdrop-blur-md text-white shadow-lg"
          : "bg-black text-white"
      )}
    >
      <div className="flex items-center space-x-3">
        <Image
          width={80}
          height={80}
          src={githubAvatarUrl}
          alt="GitHub Profile"
          className="rounded-full object-cover cursor-pointer"
          onClick={() => {
            router.push("/");
          }}
        />
        <span
          className="font-bold text-zinc-300 cursor-pointer"
          onClick={handleJourneyClick}
        >
          JOURNEY
        </span>
      </div>

      <div className="flex items-center space-x-4">
        <Button
          className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg font-semibold font-mono inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 text-slate-400 transition-colors focus:outline-none"
          onClick={handleGetInTouchClick}
        >
          get in touch
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
