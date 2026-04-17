import styles from "./Sections.module.css";

const experiences = [
  {
    role: "Full Stack Developer",
    company: "Freelance",
    duration: "2023 - Present",
    description: "Developing custom web applications for various clients using the MERN stack and Next.js. Ensuring high performance and responsive design."
  },
  {
    role: "Web Development Intern",
    company: "Tech Solutions Inc.",
    duration: "2022 - 2023",
    description: "Assisted in building UI components using React and styled-components. Collaborated with the backend team to integrate RESTful APIs."
  }
];

export default function Experience() {
  return (
    <section id="experience" className={styles.section}>
      <div className="container">
        <h2 className={styles.sectionTitle}>
          Where I've <span>Worked</span>
        </h2>
        <div className={styles.timeline}>
          {experiences.map((exp, index) => (
            <div key={index} className={styles.timelineItem}>
              <div className={styles.timelineDot}></div>
              <div className={`glass ${styles.timelineContent}`}>
                <h3 className={styles.timelineRole}>{exp.role}</h3>
                <h4 className={styles.timelineCompany}>{exp.company}</h4>
                <span className={styles.timelineDuration}>{exp.duration}</span>
                <p className={styles.timelineDesc}>{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
