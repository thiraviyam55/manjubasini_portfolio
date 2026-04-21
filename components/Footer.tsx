import styles from "./Footer.module.css";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.topSection}>
          <div className={styles.brand}>
            <div className={styles.logo}>
              M<span>.</span>
            </div>
            <p className={styles.tagline}>
              SAP SuccessFactors Employee Central Consultant
            </p>
          </div>
          <div className={styles.links}>
            <Link href="#home">Home</Link>
            <Link href="#about">About</Link>
            <Link href="#experience">Experience</Link>
            <Link href="#education-skills">Education & Skills</Link>
            <a 
  href="/SAP-Manjubasini_Santhanam.pdf" 
  download
  target="_blank" 
  rel="noopener noreferrer"
>
  Download Resume
</a>
          </div>
        </div>
        
        <div className={styles.bottomSection}>
          <p className={styles.copyright}>
            &copy; {currentYear} Manjubasini Santhanam. All rights reserved.
          </p>
          <div className={styles.socials}>
            <a href="https://www.linkedin.com/in/manjubasini-santhanam-5702b0243" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <a href="mailto:manjubasini657@gmail.com">
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
