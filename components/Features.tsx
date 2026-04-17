import styles from "./Features.module.css";
import { LineChart, Users, TrendingUp, ShieldCheck } from "lucide-react";

export default function Features() {
  const services = [
    {
      icon: <Users size={32} className={styles.icon} />,
      title: "Core HCM Implementation",
      description: "End-to-end implementation of Personnel Administration, Organizational Management, and Employee Self-Service."
    },
    {
      icon: <LineChart size={32} className={styles.icon} />,
      title: "Time Management",
      description: "Complex Time Management configuration including positive and negative time recording strategies."
    },
    {
      icon: <TrendingUp size={32} className={styles.icon} />,
      title: "Payroll Optimization",
      description: "Configuration and optimization of domestic and international payroll schemas and rules."
    },
    {
      icon: <ShieldCheck size={32} className={styles.icon} />,
      title: "SuccessFactors Integration",
      description: "Migrating and integrating on-premise SAP HR data with cloud-based SuccessFactors Employee Central."
    }
  ];

  return (
    <section id="features" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
            <span className={styles.label}>Consulting Expertise</span>
            <h2 className={styles.title}>
              My Core <span style={{ color: "var(--primary)" }}>Competencies</span>
            </h2>
            <p className={styles.headerSubtitle}>Delivering comprehensive HR system transformation, from legacy migration to seamless integration of next-gen SAP HR tools.</p>
        </div>
        
        <div className={styles.grid}>
          {services.map((service, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.iconWrapper}>
                {service.icon}
              </div>
              <h3 className={styles.cardTitle}>{service.title}</h3>
              <p className={styles.cardDesc}>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
