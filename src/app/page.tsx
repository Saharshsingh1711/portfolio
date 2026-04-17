import Navbar from "@/components/Navbar";
import MinimalistHeroDemo from "@/components/hero-demo";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <div className="bg-blobs">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
      </div>
      
      <Navbar />
      
      <main className="flex flex-col gap-32 md:gap-64">
        <MinimalistHeroDemo />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </>
  );
}
