import Link from "next/link";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.heroSection}>
      <div className={`container ${styles.heroContent}`}>
        <span className={styles.greeting}>Hi there, I am</span>
        <h1 className={styles.title}>
          <div className={styles.titleLine1}>Saharsh Singh.</div>
          <div className={styles.titleLine2}>
            I build <span className="text-gradient">digital experiences.</span>
          </div>
        </h1>
        <p className={styles.description}>
          I'm a passionate MERN and Next.js Full Stack Developer specializing in building exceptional digital experiences. Currently, I'm focused on creating accessible, dynamic, and premium web architectures.
        </p>
        <div className={styles.ctaGroup}>
          <Link href="#projects" className="glow-btn">
            View My Work
          </Link>
          <Link href="https://github.com" target="_blank" rel="noopener noreferrer" className="glow-btn-outline">
            GitHub Profile
          </Link>
        </div>
      </div>
    </section>
  );
}
