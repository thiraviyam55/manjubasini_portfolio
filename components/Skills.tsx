"use client";

import {
    Code2,
    Layers,
    Database,
    Globe,
    Cpu,
    CreditCard,
    Terminal,
    Workflow,
    ShieldCheck,
    Zap,
    Users
} from "lucide-react";
import styles from "./Skills.module.css";

const SKILLS = [
    {
        name: "SAP HCM (PA & OM)",
        level: 95,
        icon: <Users size={20} />,
        color: "#008ece"
    },
    {
        name: "SAP Time Management",
        level: 92,
        icon: <Globe size={20} />,
        color: "#f5a623"
    },
    {
        name: "SAP Payroll",
        level: 90,
        icon: <CreditCard size={20} />,
        color: "#e11d48"
    },
    {
        name: "SuccessFactors EC",
        level: 85,
        icon: <Layers size={20} />,
        color: "#47a248"
    },
    {
        name: "SAP ABAP HR (Debugging)",
        level: 80,
        icon: <Code2 size={20} />,
        color: "#8b5cf6"
    },
    {
        name: "Data Migration (LSMW, BDC)",
        level: 88,
        icon: <Database size={20} />,
        color: "#14b8a6"
    },
];

const TOOLS = [
    { name: "SAP GUI", icon: <Terminal size={14} /> },
    { name: "Fiori Apps", icon: <Zap size={14} /> },
    { name: "ServiceNow", icon: <Workflow size={14} /> },
    { name: "Jira / ALM", icon: <ShieldCheck size={14} /> }
];

const REGIONS = ["India Payroll", "US Payroll", "UK Payroll", "UAE Payroll"];

export default function Skills() {
    return (
        <section id="skills" className={styles.section}>
            <div className={styles.container}>
                <div>
                    <span className={styles.label}>Competencies</span>
                    <h2 className={styles.title}>SAP HR Expertise Suite</h2>
                    <p className={styles.desc}>
                        From blueprinting core organizational structures to driving complex payroll schemas, my knowledge spans across the SAP HCM landscape, bridging the gap between legacy systems and cloud-based SuccessFactors solutions.
                    </p>

                    <div className={styles.toolSection}>
                        <h3 className={styles.smallHeading}>Tools & Platforms</h3>
                        <div className={styles.tags}>
                            {TOOLS.map((tool) => (
                                <span key={tool.name} className={styles.tag}>
                                    <span className={styles.tagIcon}>{tool.icon}</span>
                                    {tool.name}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className={styles.gatewaySection}>
                        <h3 className={styles.smallHeading}>Localization Experience</h3>
                        <div className={styles.tags}>
                            {REGIONS.map((gw) => (
                                <span key={gw} className={styles.tag} style={{ borderColor: "rgba(16, 185, 129, 0.3)" }}>
                                    <Globe size={12} className={styles.tagIcon} />
                                    {gw}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                <div className={styles.skillList}>
                    {SKILLS.map((skill) => (
                        <div key={skill.name} className={styles.skillItem}>
                            <div className={styles.skillInfo}>
                                <div className={styles.skillNameWrapper}>
                                    <span className={styles.skillIcon} style={{ color: skill.color }}>{skill.icon}</span>
                                    <span>{skill.name}</span>
                                </div>
                                <span className={styles.skillPercent}>{skill.level}%</span>
                            </div>
                            <div className={styles.progressBar}>
                                <div
                                    className={styles.progressFill}
                                    style={{
                                        width: `${skill.level}%`,
                                        background: `linear-gradient(to right, ${skill.color}, var(--primary))`
                                    }}
                                ></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
