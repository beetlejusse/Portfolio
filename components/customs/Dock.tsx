"use client";

import React from "react";

export const DockInfo = () => {
  // Fetch links from environment variables
  const links = [
    {
      title: "GitHub",
      icon: (
        <img
          src="https://skillicons.dev/icons?i=github"
          alt="GitHub Icon"
          width={50}
          height={50}
        />
      ),
      href: process.env.NEXT_PUBLIC_GITHUB_LINK || "#",
    },
    {
      title: "X",
      icon: (
        <img
          src="https://skillicons.dev/icons?i=twitter"
          alt="X Icon"
          width={50}
          height={50}
        />
      ),
      href: process.env.NEXT_PUBLIC_X_LINK || "#",
    },
    {
      title: "LinkedIn",
      icon: (
        <img
          src="https://skillicons.dev/icons?i=linkedin"
          alt="LinkedIn Icon"
          width={50}
          height={50}
        />
      ),
      href: process.env.NEXT_PUBLIC_LINKEDIN_LINK || "#",
    },
  ];

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 w-max bg-gray-900/80 text-white px-6 py-4 rounded-full shadow-2xl backdrop-blur-sm transition-transform transform hover:scale-110 duration-300 ease-linear">
      <div className="flex items-center gap-6">
        {links.map((link, index) => (
          <a
            key={index}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="relative flex items-center justify-center bg-gray-800 hover:bg-gray-700 rounded-full transition-transform transform hover:scale-125 duration-300 ease-linear group"
            title={link.title}
          >
            {link.icon}
            <span className="absolute bottom-14 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out text-sm bg-gray-800 text-white py-1 px-2 rounded-md w-max">
              {link.title}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
};
