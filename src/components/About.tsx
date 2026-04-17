import styles from "./Sections.module.css";

export default function About() {
  return (
    <section id="about" className={styles.section}>
      <div className="container">
        <h2 className={styles.sectionTitle}>
          About <span>Me</span>
        </h2>
        <div className={styles.aboutGrid}>
          <div className={styles.aboutImage}>
            <div className="glass">👨‍💻</div>
          </div>
          <div className={styles.aboutText}>
            <p>
              Hello! My name is Saharsh Singh, and I enjoy creating things that live on the internet. 
              My interest in web development started back when I decided to try editing custom Tumblr themes 
              — turns out hacking together HTML & CSS taught me a lot about full-stack development!
            </p>
            <p>
              Fast-forward to today, and I've had the privilege of building software using the MERN stack 
              (MongoDB, Express, React, Node.js) and Next.js. My main focus these days is building accessible, 
              inclusive products and digital experiences for a variety of clients.
            </p>
            <p>
              When I'm not at the computer, I'm usually exploring new tech, contributing to open-source, or gaming.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
