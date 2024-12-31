import { Hero } from "@/components/customs/Hero";
import Navbar from "@/components/customs/NavBar";
import { DockInfo } from "@/components/customs/Dock";
import {AboutPage}  from "@/components/customs/AboutPage";

export default function Home() {
  return (
    <>
      <main className="overflow-hidden">
        <Navbar />
        <Hero />
        <AboutPage />
      </main>
      <footer>
        <DockInfo />
      </footer>
    </>
  );
}


