import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import formatPrice from "../../utils/formatPrice";
import styles from "./ProductCard.module.css";

const ProductCard = ({ product }) => {
  const { addItem, cart } = useCart();
  const inCart = cart.some((i) => i.id === product.id);

  const handleAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product);
  };

  return (
    <article className={styles.card}>
      <Link to={`/producto/${product.id}`} className={styles.imageWrapper}>
        <img
          src={product.image}
          alt={product.name}
          className={styles.image}
          loading="lazy"
        />
        <span className={styles.category}>{product.category}</span>
      </Link>

      <div className={styles.body}>
        <Link to={`/producto/${product.id}`} className={styles.name}>
          {product.name}
        </Link>
        <p className={styles.price}>{formatPrice(product.price)}</p>

        <button
          onClick={handleAdd}
          className={`${styles.addBtn} ${inCart ? styles.inCart : ""}`}
          aria-label={`Agregar ${product.name} al carrito`}
        >
          {inCart ? (
            <>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <polyline points="20 6 9 17 4 12" />
              </svg>
              Agregado
            </>
          ) : (
            <>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="12" y1="5" x2="12" y2="19" />
                <line x1="5" y1="12" x2="19" y2="12" />
              </svg>
              Agregar
            </>
          )}
        </button>
      </div>
    </article>
  );
};

export default ProductCard;
