import { Code2, Globe, Laptop } from "lucide-react";
import { ZoomParallax } from "@/components/ui/zoom-parallax";
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
    <section id="about" className="relative w-full pt-20">
      {/* Title */}
      <div className="container mx-auto px-4 text-center mb-16">
        <p className="text-secondary-glow tracking-widest text-sm uppercase font-semibold mb-2">Get to know</p>
        <h2 className={styles.sectionTitle} style={{ marginBottom: 0 }}>
          About <span className="text-gradient">Me</span>
        </h2>
      </div>

        {/* Full Bleed Zoom Parallax Section */}
      <div className="w-full">
        <ZoomParallax images={images} />
      </div>

      {/* About Content below the Parallax */}
      <div className="container mx-auto px-4 mt-24 mb-24 max-w-5xl">
        <div className="grid grid-cols-1 gap-12 items-center tracking-wide">
          <div className="space-y-8 animate-fade-in-up">
            <div
              className="p-8 md:p-12 leading-relaxed relative rounded-2xl border border-white/10 shadow-2xl backdrop-blur-md"
              style={{ backgroundColor: 'rgba(5, 5, 5, 0.6)' }}
            >
              <p className="text-xl md:text-2xl text-slate-200">
                Hello! My name is Saharsh Singh, and I enjoy creating things that live on the internet. 
                My interest in web development started back when I decided to try editing custom Tumblr themes 
                — turns out hacking together <span className="text-white font-bold tracking-wider">HTML & CSS</span> taught me a lot about full-stack development!
              </p>
            </div>

            <div
              className="p-8 md:p-12 leading-relaxed relative rounded-2xl border border-white/10 shadow-2xl backdrop-blur-md"
              style={{ backgroundColor: 'rgba(5, 5, 5, 0.6)' }}
            >
              <p className="text-xl md:text-2xl text-slate-200">
                Fast-forward to today, and I've had the privilege of building software using the <span className="text-primary-glow font-bold tracking-wider">MERN stack</span> and <span className="text-secondary-glow font-bold tracking-wider">Next.js</span>. 
                My main focus these days is building accessible, inclusive products and digital experiences for a variety of clients.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
                <div className="p-8 rounded-2xl border border-white/10 shadow-xl flex items-center space-x-6 hover:scale-105 transition-transform" style={{ backgroundColor: 'rgba(5, 5, 5, 0.6)' }}>
                    <div className="p-5 bg-blue-500/20 text-blue-400 rounded-xl">
                        <Globe size={40} strokeWidth={1.5} />
                    </div>
                    <div>
                        <h4 className="text-3xl font-extrabold text-white mb-1">Top</h4>
                        <p className="text-sm text-slate-400 uppercase tracking-widest font-semibold">Quality Code</p>
                    </div>
                </div>
                
                <div className="p-8 rounded-2xl border border-white/10 shadow-xl flex items-center space-x-6 hover:scale-105 transition-transform" style={{ backgroundColor: 'rgba(5, 5, 5, 0.6)' }}>
                    <div className="p-5 bg-purple-500/20 text-purple-400 rounded-xl">
                        <Code2 size={40} strokeWidth={1.5} />
                    </div>
                    <div>
                        <h4 className="text-3xl font-extrabold text-white mb-1">Full</h4>
                        <p className="text-sm text-slate-400 uppercase tracking-widest font-semibold">Stack Dev</p>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
