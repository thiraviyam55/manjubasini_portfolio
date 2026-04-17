import styles from "./Experience.module.css";

export default function Experience() {
  const sapProjects = [
    {
      title: "SAP SuccessFactors Employee Central Implementation",
      company: "Case Study: ABC Technologies Pvt Ltd",
      date: "Project 2",
      description: "End-to-end configuration of Employee Lifecycle Management automating HR processes such as Hiring, Promotion, Transfer, Salary Revision, and Termination using Business Rules, Workflows, and Dynamic Roles. Mastered system-level sync issues and RBP configuration.",
      fileDownload: "/pdfs/project2.pdf",
      fileName: "Project2_ABC_Technologies.md"
    },
    {
      title: "SAP SuccessFactors EC Implementation with Workflow Automation",
      company: "Zenith Global Solutions (Multi-Country Setup India & UAE)",
      date: "Project 1",
      description: "Implemented EC with multi-country organization structure, compensation setup, and workflows. Simulated end-to-end employee lifecycle for global operations, including custom MDF objects and role-based permissions (RBP).",
      fileDownload: "/pdfs/project1.pdf",
      fileName: "Project1_Zenith_Global.md"
    }
  ];

  const workExperience = [
    {
      role: "HR Generalist",
      company: "J2D Technologies Pvt Ltd | Bengaluru",
      date: "May 2025 - Present",
      description: "Managing end-to-end employee lifecycle activities. Maintaining employee master data, attendance, leave, and coordinating payroll inputs and approvals.",
    },
    {
      role: "HR Generalist (Contract)",
      company: "Axxon HR Solutions | WFH (Gulf Based)",
      date: "Dec 2024 - Mar 2025",
      description: "Supported operations for Gulf employees with UAE exposure. Managed onboarding, FnF, attendance, and payroll inputs aligned with HR systems.",
    },
    {
      role: "HR Executive",
      company: "Bixware Technology | Coimbatore",
      date: "Mar 2024 - Dec 2024",
      description: "Handled onboarding, attendance, leave, and payroll support. Maintained employee documentation and compliance records.",
    },
    {
      role: "HR Executive",
      company: "TechAres | Madurai",
      date: "Mar 2022 - Mar 2024",
      description: "Managed HR generalist activities including recruitment and payroll coordination. Maintained records and supported employee lifecycle.",
    }
  ];

  return (
    <section className={styles.experienceSection} id="experience">
      <div className={styles.container}>
        <div className={styles.grid}>

          <div className={styles.column}>
            <h2 className="section-title">
              <span>02</span> SAP Projects
            </h2>
            <div className={styles.timeline}>
              {sapProjects.map((item, index) => (
                <div key={index} className={styles.timelineItem}>
                  <div className={styles.timelineDot}></div>
                  <div className={styles.timelineContent}>
                    <span className={styles.date}>{item.date}</span>
                    <h3 className={styles.title}>{item.title}</h3>
                    <h4 className={styles.company}>{item.company}</h4>
                    <p className={styles.description}>{item.description}</p>

                    {item.fileDownload && (
                      <a
                        href={item.fileDownload}
                        download={item.fileName}
                        className={styles.downloadBtn}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                        Download Detailed PDF
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.column}>
            <h2 className="section-title">
              <span>03</span> Experience
            </h2>
            <div className={styles.timeline}>
              {workExperience.map((item, index) => (
                <div key={index} className={styles.timelineItem}>
                  <div className={styles.timelineDot}></div>
                  <div className={styles.timelineContent}>
                    <span className={styles.date}>{item.date}</span>
                    <h3 className={styles.title}>{item.role}</h3>
                    <h4 className={styles.company}>{item.company}</h4>
                    <p className={styles.description}>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
