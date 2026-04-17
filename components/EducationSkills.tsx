import styles from "./EducationSkills.module.css";

export default function EducationSkills() {
  const tools = [
    "SAP SuccessFactors (EC)",
    "SAP HCM (Training)",
    "Microsoft Dynamics 365 HRMS",
    "MS Excel",
    "Google Sheets",
    "ATS & HR Documentation Tools"
  ];

  const certifications = [
    "SAP SuccessFactors – Employee Central",
    "SAP HCM Functional Training (PA, OM, Time, Payroll)",
    "Payroll Certification",
    "Indian Labour Law Certification",
    "Performance Management Course"
  ];

  return (
    <section className={styles.eduSkillsSection} id="education-skills">
      <div className={styles.container}>
        <h2 className="section-title">
          <span>04</span> Education & Skills
        </h2>

        <div className={styles.grid}>
          {/* Education & Certs */}
          <div className={styles.column}>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Education</h3>
              <div className={styles.eduItem}>
                <span className={styles.year}>2020 - 2022</span>
                <h4 className={styles.degree}>MBA – Human Resources & Finance</h4>
                <p className={styles.institution}>Anna University | Nandha Engineering College</p>
              </div>
            </div>

            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Certifications & Courses</h3>
              <ul className={styles.certList}>
                {certifications.map((cert, i) => (
                  <li key={i}>
                    <svg className={styles.checkIcon} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    {cert}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Tools & Systems */}
          <div className={styles.column}>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Tools & Systems</h3>
              <div className={styles.pillsContainer}>
                {tools.map((tool, i) => (
                  <span key={i} className={styles.pill}>{tool}</span>
                ))}
              </div>
            </div>
            
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Competencies</h3>
              <div className={styles.pillsContainer}>
                {["Foundation Objects", "Job & Compensation Setup", "Position Management", "Business Rules", "Workflows", "Role-Based Permissions (RBP)", "Employee Lifecycle Management", "Data Validation (Import/Export)"].map((comp, i) => (
                  <span key={i} className={styles.pillSecondary}>{comp}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
