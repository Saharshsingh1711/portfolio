import styles from "./Sections.module.css";
import Link from "next/link";

export default function Contact() {
  return (
    <section id="contact" className={styles.section} style={{ textAlign: "center" }}>
      <div className="container">
        <h2 className={styles.sectionTitle}>
          Get In <span>Touch</span>
        </h2>
        <div className="glass" style={{ maxWidth: "600px", margin: "0 auto", padding: "3rem" }}>
          <p style={{ color: "#cbd5e1", marginBottom: "2rem", fontSize: "1.1rem", lineHeight: "1.6" }}>
            I'm currently looking for new opportunities. Whether you have a question, a project idea, or just want to say hi, I'll try my best to get back to you!
          </p>
          <Link href="mailto:hello@example.com" className="glow-btn" style={{ padding: "1rem 2rem", fontSize: "1.1rem" }}>
            Say Hello
          </Link>
        </div>
      </div>
      
      <footer style={{ marginTop: "6rem", padding: "2rem 0", borderTop: "1px solid var(--glass-border)", color: "#94a3b8" }}>
        <p>Built with Next.js & Vanilla CSS by Saharsh Singh.</p>
      </footer>
    </section>
  );
}
