"use client";
import styles from "./Sections.module.css";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

// Agency Animation Variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemFadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const projects = [
  {
    title: "MediVault",
    subtitle: "High-Performance Medical Wallet",
    description: "Engineered a real-time medical data vault using Next.js and Supabase. Implemented a custom Knuth-Morris-Pratt (KMP) algorithm for sub-millisecond keyword search across clinical logs.",
    tech: ["Next.js", "Supabase", "KMP Algorithm", "TypeScript"],
    link: "#",
    image: "https://images.unsplash.com/photo-1576091160550-217359f4ecf8?w=800&q=80"
  },
  {
    title: "AlgoPrep",
    subtitle: "AI-Driven Learning Ecosystem",
    description: "Built a high-performance MERN platform featuring an interactive coding environment with real-time progress tracking to streamline technical skill acquisition.",
    tech: ["MongoDB", "Express", "React", "Node.js", "Monaco Editor"],
    link: "#",
    image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&q=80"
  },
  {
    title: "InterviewBuddy",
    subtitle: "Intelligent Career Readiness",
    description: "An AI-driven MERN platform that performs deep-profile analysis to identify critical skill gaps between user resumes and targeted job roles.",
    tech: ["MERN Stack", "OpenAI API", "NLP", "Tailwind CSS"],
    link: "#",
    image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&q=80"
  },
  {
    title: "Mood Music",
    subtitle: "NLP-Driven Emotional Intelligence",
    description: "Engineered a high-performance MERN application utilizing Natural Language Processing (NLP) to map user-inputted sentiment to real-time music recommendations.",
    tech: ["React", "NLP", "Express", "Sentiment Analysis"],
    link: "#",
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&q=80"
  }
];

export default function Projects() {
  return (
    <section id="projects" className={styles.section}>
      <div className="container px-4 max-w-7xl mx-auto">
        <motion.div
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true }}
           variants={fadeIn}
        >
          <h2 className={styles.sectionTitle}>
            Featured <span className="text-secondary-glow">Projects</span>
          </h2>
        </motion.div>
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className={styles.projectsGrid}
        >
          {projects.map((project, index) => (
            <motion.div key={index} variants={itemFadeIn} className="h-full">
              <div className={`glass ${styles.projectCard} h-full group hover:border-primary-glow/30 transition-all duration-300 overflow-hidden !p-0 flex flex-col`}>
                <div className="relative h-56 w-full overflow-hidden">
                   <Image 
                     src={project.image} 
                     alt={project.title} 
                     fill 
                     className="object-cover transition-transform duration-700 group-hover:scale-110"
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-300 group-hover:opacity-60"></div>
                </div>
                
                <div className="p-8 flex flex-col flex-grow">
                   <h3 className={styles.projectTitle} style={{ marginBottom: '0.25rem' }}>{project.title}</h3>
                   <p className="text-secondary-glow text-[10px] font-mono uppercase tracking-[0.2em] mb-4 font-bold">{project.subtitle}</p>
                   
                   <p className={styles.projectDesc + " text-sm leading-relaxed text-slate-400 mb-6"}>
                     {project.description}
                   </p>
                   
                   <div className={styles.projectTech + " mt-auto"}>
                     {project.tech.map((tech, i) => (
                       <span key={i} className={styles.techTag}>{tech}</span>
                     ))}
                   </div>
                   
                   <Link 
                     href={project.link} 
                     className="glow-btn-outline group-hover:bg-primary-glow group-hover:text-white transition-all mt-8 no-underline text-center py-3 rounded-xl font-bold"
                   >
                     View Project
                   </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
