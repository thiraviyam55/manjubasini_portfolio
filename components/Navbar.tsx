"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.container}>
        <div className={styles.logo}>
          M<span>.</span>
        </div>
        <div className={styles.links}>
          <Link href="#home">Home</Link>
          <Link href="#about">About</Link>
          <Link href="#experience">Experience</Link>
          <Link href="#education-skills">Education</Link>
          <Link href="#contact" className={styles.cta}>Contact</Link>
        </div>
      </div>
    </nav>
  );
}
