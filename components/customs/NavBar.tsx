"use client";

import React from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

const Navbar: React.FC = () => {
  const githubAvatarUrl = process.env.NEXT_PUBLIC_GITHUBUSERNAME
    ? `https://github.com/${process.env.NEXT_PUBLIC_GITHUBUSERNAME}.png`
    : "/default-avatar.png"; 

  const router = useRouter(); 

  const handleGetInTouchClick = () => {
    router.push("/touch");
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 w-full flex items-center justify-between py-4 px-6 bg-black text-white z-50"
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
            router.push("/")
          }}
        />
        <span className="font-bold text-zinc-300 cursor-pointer">JOURNEY</span>
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
