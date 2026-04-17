import styles from "./Projects.module.css";

const FEATURED_PROJECTS = [
    {
        title: "Employee Lifecycle Implementation",
        category: "SAP SuccessFactors EC",
        description: "Configured Employee Central including Foundation Objects and Job Structure. Implemented employee lifecycle processes (Hire, Promotion, Transfer, Termination) with Business Rules and Workflows for ABC Technologies.",
        link: "#",
        image: "/sap_project1.png",
    },
    {
        title: "Advanced EC + Recruitment Integration",
        category: "SAP SuccessFactors / RCM",
        description: "Designed multi-country EC implementation for India & UAE at Zenith Global Solutions. Developed complex Business Rules, multi-level Workflows, Event Reasons, and Role-Based Permissions (RBP).",
        link: "#",
        image: "/sap_project2.png",
    }
];

const OTHER_PROJECTS = [
    {
        title: "HR Generalist at J2D Technologies",
        category: "May 2025 - Present (Bengaluru)",
        description: "Managing end-to-end employee lifecycle, maintaining master data, coordinating payroll inputs, and ensuring compliance.",
        link: "#",
    },
    {
        title: "HR Generalist at Axxon HR Solutions",
        category: "Dec 2024 - Mar 2025 (Gulf Based - WFH)",
        description: "Supported HR operations for Gulf-based employees with UAE exposure. Managed onboarding, offboarding, and FnF payroll inputs.",
        link: "#",
    },
    {
        title: "HR Executive at Bixware Technology",
        category: "Mar 2024 - Dec 2024 (Coimbatore)",
        description: "Handled onboarding, attendance, leave updates, payroll support, and employee compliance documentation.",
        link: "#",
    },
    {
        title: "HR Executive at TechAres",
        category: "Mar 2022 - Mar 2024 (Madurai)",
        description: "Managed HR generalist activities, recruitment, master data records, and onboarding/offboarding processes.",
        link: "#",
    }
];

export default function Projects() {
    return (
        <section id="projects" className={styles.section}>
            <div className={styles.header}>
                <div>
                    <span className={styles.label}>Portfolio</span>
                    <h2 className={styles.title}>Significant Projects</h2>
                </div>
                <p className={styles.subtitle}>
                    Showcasing hands-on Project Experiences with **SAP SuccessFactors EC**, as well as a strong foundation in HR Operations.
                </p>
            </div>

            {/* Featured Grid */}
            <div className={styles.grid}>
                {FEATURED_PROJECTS.map((project, index) => (
                    <div key={index} className={styles.card}>
                        <div className={styles.imgWrapper}>
                            <img
                                src={project.image}
                                alt={project.title}
                                className={styles.image}
                            />
                            <div className={styles.overlay}>
                                <span className={styles.category}>{project.category}</span>
                            </div>
                        </div>
                        <div className={styles.content}>
                            <h3 className={styles.projectTitle}>{project.title}</h3>
                            <p className={styles.projectDesc}>
                                {project.description}
                            </p>
                            <a href={project.link} target="_blank" rel="noopener noreferrer" className={styles.link}>
                                View Case Study
                                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
                            </a>
                        </div>
                    </div>
                ))}
            </div>

            {/* Other Projects Section */}
            <div className={styles.otherSectionHeadline}>
                <h3 className={styles.otherTitle}>Professional Experience</h3>
                <p className={styles.otherSubtitle}>My background in HR Operations and continuous employee lifecycle management across various IT organizations.</p>
            </div>

            <div className={styles.otherGrid}>
                {OTHER_PROJECTS.map((project, index) => (
                    <div key={index} className={styles.smallCard}>
                        <span className={styles.smallMeta}>{project.category}</span>
                        <h4 className={styles.smallTitle}>{project.title}</h4>
                        <p className={styles.smallDesc}>{project.description}</p>
                        <a href={project.link} target="_blank" rel="noopener noreferrer" className={styles.link}>
                            Details
                            <svg width="12" height="12" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
}
