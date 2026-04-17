import styles from "./Sections.module.css";
import Link from "next/link";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-featured e-commerce platform built with Next.js, Stripe, and Tailwind CSS. Features dynamic routing, cart management, and secure checkout.",
    tech: ["Next.js", "React", "Stripe", "MongoDB"],
    link: "#"
  },
  {
    title: "Real-time Chat App",
    description: "A real-time messaging application using Socket.io, Express, and React. Includes private messaging, group chats, and online status indicators.",
    tech: ["React", "Socket.io", "Node.js", "Express"],
    link: "#"
  },
  {
    title: "AI Image Generator",
    description: "A web app that generates images from text prompts using OpenAI's DALL-E API. Features a masonry gallery and user authentication.",
    tech: ["MERN Stack", "OpenAI API", "Tailwind CSS"],
    link: "#"
  }
];

export default function Projects() {
  return (
    <section id="projects" className={styles.section}>
      <div className="container">
        <h2 className={styles.sectionTitle}>
          Featured <span>Projects</span>
        </h2>
        <div className={styles.projectsGrid}>
          {projects.map((project, index) => (
            <div key={index} className={`glass ${styles.projectCard}`}>
              <h3 className={styles.projectTitle}>{project.title}</h3>
              <p className={styles.projectDesc}>{project.description}</p>
              <div className={styles.projectTech}>
                {project.tech.map((tech, i) => (
                  <span key={i} className={styles.techTag}>{tech}</span>
                ))}
              </div>
              <Link href={project.link} className="glow-btn-outline" style={{ marginTop: '1.5rem', width: '100%' }}>
                View Project
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
