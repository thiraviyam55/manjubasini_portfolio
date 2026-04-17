import Image from "next/image";
import Link from "next/link";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.heroSection} id="home">
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.badge}>
            <span className={styles.badgeDot}></span> Available for Work
          </div>
          <h1 className={styles.title}>
            I&apos;m Manjubasini <br />
            <span className={styles.highlight}>SAP SuccessFactors</span> <br />
            Consultant
          </h1>
          <p className={styles.description}>
            Functional Consultant with 3+ years of experience in HR operations including employee lifecycle management, payroll, and SAP SuccessFactors Employee Central configuration.
          </p>
          <div className={styles.actions}>
            <Link href="#contact" className={styles.primaryBtn}>
              Contact Me
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </Link>
            <a href="https://www.linkedin.com/in/manjubasini-santhanam-5702b0243" target="_blank" rel="noopener noreferrer" className={styles.secondaryBtn}>
              LinkedIn
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            </a>
          </div>
        </div>
        <div className={styles.imageWrapper}>
          <div className={styles.imageBackdrop}></div>
          <Image
            src="/manjubasini.jpeg"
            alt="Manjubasini Santhanam"
            fill
            className={styles.image}
            priority
          />
          <div className={styles.experienceTag}>
            <span className={styles.years}>3+</span>
            <span className={styles.text}>Years<br />Experience</span>
          </div>
        </div>
      </div>
    </section>
  );
}
