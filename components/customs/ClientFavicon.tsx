"use client";

import { useEffect } from "react";

const ClientFavicon = () => {
  useEffect(() => {
    const githubUsername = process.env.NEXT_PUBLIC_GITHUBUSERNAME;
    const avatarUrl = githubUsername
      ? `https://github.com/${githubUsername}.png`
      : "/default-avatar.png";

    // Create a new link element for the favicon
    const link = document.createElement("link");
    link.rel = "icon";
    link.href = avatarUrl;
    link.type = "image/png";

    // Remove existing favicon and add the new one
    const existingFavicon = document.querySelector("link[rel='icon']");
    if (existingFavicon) {
      document.head.removeChild(existingFavicon);
    }
    document.head.appendChild(link);
  }, []);

  return null;
};

export default ClientFavicon;
