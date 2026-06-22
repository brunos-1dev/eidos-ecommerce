import { Link, useLocation } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const { totalItems } = useCart();
  const { pathname } = useLocation();

  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        {/* Logo */}
        <Link to="/" className={styles.logo}>
          <img src="/images/logo/logo_blanco_transparente.png" alt="EIDOS" className={styles.logoImg} />
          <span className={styles.logoText}>EIDOS</span>
        </Link>

        {/* Links */}
        <ul className={styles.links}>
          <li>
            <Link to="/" className={`${styles.link} ${pathname === "/" ? styles.active : ""}`}>
              Tienda
            </Link>
          </li>
        </ul>

        {/* Cart */}
        <Link to="/carrito" className={styles.cartBtn} aria-label="Ver carrito">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor"
            strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
            <line x1="3" y1="6" x2="21" y2="6" />
            <path d="M16 10a4 4 0 01-8 0" />
          </svg>
          {totalItems > 0 && (
            <span className={styles.badge}>{totalItems > 99 ? "99+" : totalItems}</span>
          )}
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
