"use client";
import Hero from "@/portfolio-components/Hero";
import { FloatingNav } from "@/portfolio-components/ui/FloatingNav";
import Grid from "@/portfolio-components/Grid";
import RecentProjects from "@/portfolio-components/RecentProjects";
import { navItems } from "@/data";
import Experience from "@/portfolio-components/Experience";
import Footer from "@/portfolio-components/Footer";

export default function Home() {

  return (
    <main className="relative overflow-clip bg-black-100 flex justify-center items-center min-h-screen  mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full flex flex-col justify-center items-center">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <RecentProjects />
        <Experience />
        <Footer/>

      </div>
    </main>
  );
}
