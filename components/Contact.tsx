import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <section className={styles.contactSection} id="contact">
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className="section-title">
            <span>05</span> Contact Me
          </h2>
          <p className={styles.subtitle}>
            Ready to enhance your HR operations with SAP SuccessFactors? Let&apos;s connect and discuss how I can help bring value to your projects.
          </p>
        </div>

        <div className={styles.content}>
          <div className={styles.contactInfo}>
            <div className={styles.infoCard}>
              <div className={styles.iconWrapper}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
              </div>
              <div>
                <h4 className={styles.infoTitle}>Email</h4>
                <a href="mailto:manjubasini657@gmail.com" className={styles.infoText}>manjubasini657@gmail.com</a>
              </div>
            </div>

            <div className={styles.infoCard}>
              <div className={styles.iconWrapper}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              </div>
              <div>
                <h4 className={styles.infoTitle}>Phone</h4>
                <a href="tel:+919123530638" className={styles.infoText}>+91 9123530638</a>
              </div>
            </div>

            <div className={styles.infoCard}>
              <div className={styles.iconWrapper}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
              </div>
              <div>
                <h4 className={styles.infoTitle}>Location</h4>
                <span className={styles.infoText}>Bangalore, India</span>
              </div>
            </div>
            
            <div className={styles.infoCard}>
              <div className={styles.iconWrapper}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </div>
              <div>
                <h4 className={styles.infoTitle}>LinkedIn</h4>
                <a href="https://www.linkedin.com/in/manjubasini-santhanam-5702b0243" target="_blank" rel="noopener noreferrer" className={styles.infoText}>View Profile</a>
              </div>
            </div>
          </div>

          <form className={styles.formContainer}>
            <div className={styles.inputGroup}>
              <input type="text" placeholder="Your Name *" className={styles.input} required />
              <input type="email" placeholder="Your Email *" className={styles.input} required />
            </div>
            <input type="text" placeholder="Subject" className={styles.input} />
            <textarea placeholder="Your Message *" className={styles.textarea} rows={6} required></textarea>
            <button type="submit" className={styles.submitBtn}>
              Send Message
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
