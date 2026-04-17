"use client";
import styles from "./Sections.module.css";
import Link from "next/link";
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
      <div className="container px-4">
        <motion.div
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true }}
           variants={fadeIn}
        >
          <h2 className={styles.sectionTitle}>
            Featured <span>Projects</span>
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
              <div className={`glass ${styles.projectCard} h-full group hover:border-primary-glow/30 transition-all duration-300`}>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectDesc}>{project.description}</p>
                <div className={styles.projectTech}>
                  {project.tech.map((tech, i) => (
                    <span key={i} className={styles.techTag}>{tech}</span>
                  ))}
                </div>
                <Link href={project.link} className="glow-btn-outline group-hover:bg-primary-glow group-hover:text-white transition-all" style={{ marginTop: 'auto', width: '100%' }}>
                  View Project
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
