"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { GithubIcon, Linkedin01Icon, File01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { NeonButton } from "@/components/ui/neon-button";
import { cn } from "@/lib/utils";
import { twMerge } from "tailwind-merge";

// Register ScrollTrigger safely
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// -------------------------------------------------------------------------
// REUSABLE COMPONENTS
// -------------------------------------------------------------------------
const MagneticButton = ({ className, children, onClick }: { className?: string, children: React.ReactNode, onClick?: () => void }) => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!ref.current) return;
    const element = ref.current;
    const ctx = gsap.context(() => {
      element.addEventListener("mousemove", (e) => {
        const rect = element.getBoundingClientRect();
        const x = (e.clientX - rect.left - rect.width / 2) * 0.4;
        const y = (e.clientY - rect.top - rect.height / 2) * 0.4;
        gsap.to(element, { x, y, duration: 0.4, ease: "power2.out" });
      });
      element.addEventListener("mouseleave", () => {
        gsap.to(element, { x: 0, y: 0, duration: 1.2, ease: "elastic.out(1, 0.3)" });
      });
    });
    return () => ctx.revert();
  }, []);
  return (
    <div ref={ref} className={cn("cursor-pointer", className)} onClick={onClick}>
       {children}
    </div>
  );
};

// -------------------------------------------------------------------------
// MAIN COMPONENT
// -------------------------------------------------------------------------
export default function About() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const giantTextRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!wrapperRef.current) return;

    const ctx = gsap.context(() => {
      // 1. Giant Background Text Parallax
      gsap.fromTo(
        giantTextRef.current,
        { y: "10vh", scale: 0.8, opacity: 0 },
        {
          y: "0vh",
          scale: 1,
          opacity: 0.1,
          ease: "power1.out",
          scrollTrigger: {
            trigger: wrapperRef.current,
            start: "top 80%",
            end: "bottom bottom",
            scrub: 1,
          },
        }
      );

      // 2. Content Reveal
      gsap.fromTo(
        contentRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: wrapperRef.current,
            start: "top 45%",
            end: "bottom bottom",
            scrub: 1,
          },
        }
      );
    }, wrapperRef);

    return () => ctx.revert();
  },[]);

  return (
    <section id="about" className="relative w-full">
      {/* LAYER 1: THE CURTAIN (Entry Point) */}
      <div className="relative z-20 w-full h-[100dvh] bg-background flex flex-col items-center justify-center border-b border-white/5 shadow-2xl rounded-b-[4rem]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.05)_0%,transparent_70%)] pointer-events-none" />
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center space-y-4"
        >
            <p className="text-indigo-400 font-mono text-xs uppercase tracking-[0.4em] mb-2">Architectural Discovery</p>
            <h2 className="text-4xl md:text-6xl font-light tracking-[0.3em] text-slate-500 uppercase">
                Scroll to <span className="text-white font-bold tracking-tighter">Discover</span> Profile
            </h2>
            <div className="w-[1px] h-24 bg-gradient-to-b from-indigo-500 to-transparent mx-auto mt-8 animate-bounce" />
        </motion.div>
      </div>

      {/* LAYER 2: THE REVEAL WRAPPER */}
      <div
        ref={wrapperRef}
        className="relative h-[160vh] w-full z-10"
        style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
      >
        <div className="fixed bottom-0 left-0 flex h-[100dvh] w-full flex-col items-center justify-center overflow-hidden bg-[#050505] text-foreground">
          
          {/* Ambient Background Grid */}
          <div className="footer-bg-grid absolute inset-0 opacity-20 pointer-events-none" />
          
          {/* Giant background text (SAHARSH) */}
          <div
            ref={giantTextRef}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[22vw] md:text-[26vw] font-black text-white/[0.05] whitespace-nowrap z-0 pointer-events-none select-none tracking-tighter"
          >
            SAHARSH
          </div>

          {/* REVEALED CONTENT */}
          <div 
            ref={contentRef}
            className="relative z-10 flex flex-col items-center gap-10 w-full max-w-4xl mx-auto px-6"
          >
            {/* 1. Hero Content */}
            <div className="flex flex-col items-center text-center gap-4">
               <h3 className="text-4xl md:text-6xl font-black text-white leading-tight tracking-tighter">
                  Hi, I'm <span className="text-gradient">Saharsh</span>.
               </h3>
               <p className="text-slate-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
                  Full-Stack Engineer specialized in <span className="text-white font-semibold">MERN and Next.js</span>, architecting scalable digital experiences where pixel-perfect UI meets robust logic.
               </p>
            </div>

            {/* 2. Detailed About Block */}
            <div className="w-full rounded-3xl border border-white/5 bg-white/[0.02] p-8 md:p-10 shadow-lg text-center backdrop-blur-md">
                <p className="text-base md:text-lg text-slate-200 leading-relaxed font-medium">
                    "I prioritize maintainable architecture and inclusive accessibility. For me, software engineering is a craft where <span className="text-indigo-400">clean code</span> translates directly into <span className="text-indigo-400">user value</span>. Algorithmic rigor is my hallmark."
                </p>
            </div>

            {/* 3. Socials Block */}
            <div className="flex flex-wrap justify-center gap-4 w-full">
                {[
                  { label: 'GitHub', icon: <HugeiconsIcon icon={GithubIcon} size={20} />, bg: 'bg-zinc-800', hover: 'hover:border-indigo-500', href: 'https://github.com/Saharshsingh1711' },
                  { label: 'LinkedIn', icon: <HugeiconsIcon icon={Linkedin01Icon} size={20} />, bg: 'bg-indigo-600', hover: 'hover:border-white', href: 'https://www.linkedin.com/in/saharsh-singh-4a9a02300?utm_source=share_via&utm_content=profile&utm_medium=member_android' },
                  { label: 'Resume', icon: <HugeiconsIcon icon={File01Icon} size={20} />, bg: 'bg-pink-600', hover: 'hover:border-white', href: '/Resume_Saharsh_Singh.pdf' },
                ].map((link) => (
                  <MagneticButton
                    key={link.label}
                    onClick={() => window.open(link.href, '_blank')}
                  >
                    <NeonButton 
                      className={cn(
                        "flex items-center gap-3 transition-all bg-opacity-80 backdrop-blur-sm pointer-events-none",
                        link.bg,
                        link.hover
                      )}
                    >
                      {link.icon}
                      <span className="uppercase tracking-widest">{link.label}</span>
                    </NeonButton>
                  </MagneticButton>
                ))}
            </div>

            {/* Scroll More Indicator */}
            <div className="flex flex-col items-center gap-2 pt-4 opacity-40">
              <p className="text-[11px] font-mono tracking-[0.3em] uppercase text-slate-400">Scroll More</p>
              <div className="w-[1px] h-10 bg-gradient-to-b from-indigo-500 to-transparent animate-bounce" />
            </div>
          </div>

          {/* Credits Bar */}
          <div className="absolute bottom-8 left-0 w-full px-12 flex justify-between items-center opacity-30">
             <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono tracking-widest uppercase">EST 2026</span>
                <span className="text-slate-500">|</span>
                <span className="text-[10px] font-mono tracking-widest uppercase italic">Digital Architect</span>
             </div>
             <div className="flex items-center gap-2">
                <Heart size={14} className="text-indigo-400 animate-pulse" />
                <span className="text-[10px] font-mono tracking-widest uppercase">Crafted with Craft</span>
             </div>
          </div>
        </div>
      </div>
      <div className="h-40" />
    </section>
  );
}
