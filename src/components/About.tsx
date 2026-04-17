import { Code2, Globe, Laptop } from "lucide-react";
import { ZoomParallax } from "@/components/ui/zoom-parallax";
import Bucket from "@/components/ui/bucket";
import styles from "./Sections.module.css";

export default function About() {
  const images = [
		{
			src: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1280&h=720&fit=crop&q=80',
			alt: 'Laptop showing code',
		},
		{
			src: 'https://images.unsplash.com/photo-1555066931-bf19f8fd1085?w=800&h=800&fit=crop&q=80',
			alt: 'Technology layout',
		},
		{
			src: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&h=800&fit=crop&q=80',
			alt: 'Matrix code',
		},
		{
			src: 'https://images.unsplash.com/photo-1550439062-609e1531270e?w=800&h=800&fit=crop&q=80',
			alt: 'Programming languages',
		},
		{
			src: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=800&fit=crop&q=80',
			alt: 'Circuit board',
		},
		{
			src: 'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=1280&h=720&fit=crop&q=80',
			alt: 'Office desk',
		},
		{
			src: 'https://images.unsplash.com/photo-1618477247222-ac60c6470d14?w=1280&h=720&fit=crop&q=80',
			alt: 'Keyboard lighting',
		},
	];

  return (
    <section id="about" className="relative w-full pt-20 pb-64">
      {/* Title */}
      <div className="container mx-auto px-4 text-center mb-12">
        <p className="text-secondary-glow tracking-widest text-sm uppercase font-semibold mb-2">Get to know</p>
        <h2 className={styles.sectionTitle} style={{ marginBottom: 0 }}>
          About <span className="text-gradient">Me</span>
        </h2>
      </div>

        {/* Full Bleed Zoom Parallax Section */}
      <div className="w-full">
        <ZoomParallax images={images} />
      </div>

      {/* Interactive Bucket Section */}
      <div className="container mx-auto px-4 mt-20 mb-20 overflow-visible relative z-30">
        <Bucket />
      </div>

      {/* About Content - Frameless Typography Redesign */}
      <div className="container mx-auto px-4 mt-12 mb-24 max-w-4xl">
        <div className="space-y-20 animate-fade-in-up">
          
          {/* Section 1: Introduction & Stack */}
          <div className="relative">
            <h3 className="text-secondary-glow font-mono text-sm uppercase tracking-[0.3em] mb-6">Technical Profile</h3>
            <p className="text-2xl md:text-4xl font-medium leading-tight text-white/90">
              I am a <span className="text-gradient font-bold underline decoration-white/20 underline-offset-8">Full-Stack Engineer</span> specializing in architecting scalable, high-performance digital experiences. My core expertise lies in the <span className="text-white font-bold">MERN Stack</span> and <span className="text-white font-bold">Next.js</span>, where I bridge the gap between pixel-perfect UI design and robust, type-safe system architecture.
            </p>
          </div>

          {/* Section 2: Problem Solving & DSA */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-start">
            <div className="md:col-span-2">
              <h3 className="text-primary-glow font-mono text-sm uppercase tracking-[0.3em] mb-4">Problem Solving</h3>
              <div className="h-px w-12 bg-primary-glow/50 mb-6"></div>
            </div>
            <div className="md:col-span-3">
              <p className="text-xl text-slate-300 leading-relaxed mb-6">
                Beyond building products, I have a deep-seated passion for <span className="text-white font-semibold">Algorithmic Engineering</span>. I actively challenge myself on platforms like <span className="text-white font-semibold">LeetCode</span> and <span className="text-white font-semibold">Codeforces</span>, mastering complex Data Structures and Algorithms.
              </p>
              <p className="text-xl text-slate-400 leading-relaxed">
                This competitive mindset translates directly into my production code, where I prioritize <span className="italic text-slate-200">Big O optimization</span>, memory efficiency, and deterministic logic to build systems that scale effortlessly.
              </p>
            </div>
          </div>

          {/* Section 3: Engineering Philosophy */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-start">
            <div className="md:col-span-2">
              <h3 className="text-purple-400 font-mono text-sm uppercase tracking-[0.3em] mb-4">The Craft</h3>
              <div className="h-px w-12 bg-purple-400/50 mb-6"></div>
            </div>
            <div className="md:col-span-3">
              <p className="text-xl text-slate-300 leading-relaxed">
                For me, software engineering is a craft. I prioritize <span className="text-white font-semibold">Maintainable Architecture</span> and <span className="text-white font-semibold">Inclusive Accessibility</span>. I believe that code quality is measured not just by its functionality, but by its readability, resilience, and the value it provides to the end user.
              </p>
            </div>
          </div>

          {/* Stats / Highlights - Minimalist Style */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-12">
            <div className="group relative p-8 rounded-2xl border border-white/5 hover:border-blue-500/30 transition-all duration-500 bg-gradient-to-br from-white/[0.02] to-transparent">
              <div className="flex items-center space-x-6">
                <div className="p-4 bg-blue-500/10 text-blue-400 rounded-xl group-hover:scale-110 transition-transform">
                  <Globe size={32} strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-white mb-1">Architecture</h4>
                  <p className="text-xs text-slate-500 uppercase tracking-widest font-mono">Scalable Systems</p>
                </div>
              </div>
            </div>
            
            <div className="group relative p-8 rounded-2xl border border-white/5 hover:border-purple-500/30 transition-all duration-500 bg-gradient-to-br from-white/[0.02] to-transparent">
              <div className="flex items-center space-x-6">
                <div className="p-4 bg-purple-500/10 text-purple-400 rounded-xl group-hover:scale-110 transition-transform">
                  <Code2 size={32} strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-white mb-1">Optimization</h4>
                  <p className="text-xs text-slate-500 uppercase tracking-widest font-mono">Algorithmic Rigor</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
      {/* Spacer to ensure definitive separation */}
      <div className="h-32"></div>
    </section>
  );
}
