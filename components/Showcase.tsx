import styles from "./Showcase.module.css";
import { CheckCircle2 } from "lucide-react";

export default function Showcase() {
    return (
        <section id="about" className={styles.section}>
            <div className={styles.container}>
                <div className={styles.contentWrapper}>
                    <div className={styles.imageContainer}>
                        {/* We will just use the corporate hero image again as a placeholder or a generic styling */}
                        <div className={styles.imagePlaceholder}>
                            <div className={styles.playBtn}>
                                <div style={{width: 0, height: 0, borderTop: '10px solid transparent', borderBottom: '10px solid transparent', borderLeft: '16px solid var(--primary)', marginLeft: '4px'}}></div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.textContainer}>
                        <span className={styles.label}>My Approach</span>
                        <h2 className={styles.title}>
                            Streamlining HR with <span style={{color: "var(--primary)"}}>SAP Excellence_</span>
                        </h2>
                        <p className={styles.description}>
                            With my extensive experience in SAP HCM and SuccessFactors, I am committed to transforming HR landscapes. I partner with stakeholders to simplify workforce data management, optimize complex payrolls, and drive employee engagement.
                        </p>
                        
                        <ul className={styles.list}>
                            <li className={styles.listItem}>
                                <CheckCircle2 className={styles.listIcon} size={20} />
                                <span>End-to-end blueprinting & configuration</span>
                            </li>
                            <li className={styles.listItem}>
                                <CheckCircle2 className={styles.listIcon} size={20} />
                                <span>Seamless payroll and legal compliance</span>
                            </li>
                            <li className={styles.listItem}>
                                <CheckCircle2 className={styles.listIcon} size={20} />
                                <span>Continuous post-go-live support</span>
                            </li>
                        </ul>

                        <div className={styles.stats}>
                            <div className={styles.stat}>
                                <h4 className={styles.statValue}>15+</h4>
                                <p className={styles.statLabel}>Implementations</p>
                            </div>
                            <div className={styles.stat}>
                                <h4 className={styles.statValue}>10+</h4>
                                <p className={styles.statLabel}>Years Experience</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
