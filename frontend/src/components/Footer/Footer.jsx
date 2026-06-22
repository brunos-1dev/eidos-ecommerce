import styles from "./Footer.module.css";

const Footer = () => (
  <footer className={styles.footer}>
    <div className={`${styles.inner} container`}>
      <p className={styles.brand}>EIDOS</p>
      <p className={styles.copy}>© {new Date().getFullYear()} Eidos. Todos los derechos reservados.</p>
      <p className={styles.ig}>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
            <circle cx="12" cy="12" r="4" />
            <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
          </svg>
          @eidos.sf
        </a>
      </p>
    </div>
  </footer>
);

export default Footer;
