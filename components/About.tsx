import styles from "./About.module.css";

export default function About() {
  return (
    <section className={styles.aboutSection} id="about">
      <div className={styles.container}>
        <h2 className="section-title">
          <span>01</span> About Me
        </h2>
        
        <div className={styles.content}>
          <div className={styles.textColumn}>
            <p className={styles.paragraph}>
              SAP SuccessFactors Employee Central (EC) Functional Consultant with 3+ years of experience in HR operations including employee lifecycle management, payroll, and HR processes.
            </p>
            <p className={styles.paragraph}>
              I have hands-on exposure to SAP SuccessFactors Employee Central configuration through comprehensive project-based implementations. This includes configuring Foundation Objects, Job & Compensation, Position Management, Business Rules, Workflows, and Role-Based Permissions (RBP).
            </p>
            <p className={styles.paragraph}>
              My background covers end-to-end project simulation with multi-country setups (India & UAE), along with strong foundational knowledge of SAP HCM (PA, OM, Time Management, and Payroll). I aim to build impactful HR solutions by combining deep process knowledge with practical system expertise.
            </p>
          </div>
          
          <div className={styles.statsColumn}>
            <div className={styles.statCard}>
              <h3 className={styles.statNumber}>03+</h3>
              <p className={styles.statText}>Years of<br/>Experience</p>
            </div>
            <div className={styles.statCard}>
              <h3 className={styles.statNumber}>02</h3>
              <p className={styles.statText}>Major SAP<br/>Projects</p>
            </div>
            <div className={styles.statCard}>
              <h3 className={styles.statNumber}>10+</h3>
              <p className={styles.statText}>HCM Tools<br/>Mastered</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
