"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import styles from "./Navbar.module.css";

import { ButtonColorful } from "@/components/ui/button-colorful";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ""} ${isOpen ? styles.menuOpen : ""}`}>
      <div className={`container ${styles.navContainer}`}>
        <Link href="/" className={styles.logo} onClick={closeMenu}>
          Saharsh<span className="text-gradient">.dev</span>
        </Link>

        {/* Mobile Toggle Button */}
        <button className={styles.mobileToggle} onClick={toggleMenu} aria-label="Toggle menu">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Nav Links */}
        <ul className={`${styles.navLinks} ${isOpen ? styles.navLinksActive : ""}`}>
          <li><Link href="#about" onClick={closeMenu}>About</Link></li>
          <li><Link href="#skills" onClick={closeMenu}>Skills</Link></li>
          <li><Link href="#projects" onClick={closeMenu}>Projects</Link></li>
          <li>
            <Link href="#contact" onClick={closeMenu}>
              <ButtonColorful label="Let's Talk" />
            </Link>
          </li>
        </ul>
      </div>
      
      {/* Mobile Menu Backdrop */}
      {isOpen && <div className={styles.backdrop} onClick={closeMenu} />}
    </nav>
  );
}
