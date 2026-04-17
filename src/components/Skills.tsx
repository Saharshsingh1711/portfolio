import styles from "./Sections.module.css";

const skills = [
  { name: "Next.js", icon: "🚀" },
  { name: "React", icon: "⚛️" },
  { name: "Node.js", icon: "🟢" },
  { name: "Express", icon: "🚂" },
  { name: "MongoDB", icon: "🍃" },
  { name: "TypeScript", icon: "💙" },
  { name: "JavaScript", icon: "💛" },
  { name: "Tailwind CSS", icon: "🌊" }, // User may use it later
  { name: "Git", icon: "📦" },
  { name: "REST APIs", icon: "🔗" }
];

export default function Skills() {
  return (
    <section id="skills" className={styles.section}>
      <div className="container">
        <h2 className={styles.sectionTitle}>
          My <span>Skills</span>
        </h2>
        <div className={styles.skillsGrid}>
          {skills.map((skill, index) => (
            <div key={index} className={`glass ${styles.skillCard}`}>
              <span className={styles.skillIcon}>{skill.icon}</span>
              <span className={styles.skillName}>{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
