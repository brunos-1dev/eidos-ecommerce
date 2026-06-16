import { Link } from "react-router-dom";
import styles from "./NotFound.module.css";

const NotFound = () => (
  <main className={styles.page}>
    <p className={styles.code}>404</p>
    <p className={styles.message}>Página no encontrada.</p>
    <Link to="/" className={styles.link}>← Volver al inicio</Link>
  </main>
);

export default NotFound;
