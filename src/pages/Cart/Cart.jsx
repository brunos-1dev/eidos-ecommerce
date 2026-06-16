import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import formatPrice from "../../utils/formatPrice";
import styles from "./Cart.module.css";

const Cart = () => {
  const { cart, removeItem, updateQuantity, clearCart, totalPrice, totalItems } = useCart();

  if (cart.length === 0) {
    return (
      <main className={`${styles.empty} container`}>
        <div className={styles.emptyIcon}>
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
            <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
            <line x1="3" y1="6" x2="21" y2="6" />
            <path d="M16 10a4 4 0 01-8 0" />
          </svg>
        </div>
        <h2 className={styles.emptyTitle}>Tu carrito está vacío</h2>
        <p className={styles.emptyDesc}>Explorá la tienda y encontrá algo que te guste.</p>
        <Link to="/" className={styles.shopBtn}>Ver productos</Link>
      </main>
    );
  }

  return (
    <main className={`${styles.page} container`}>
      <div className={styles.header}>
        <h1 className={styles.title}>Carrito</h1>
        <span className={styles.count}>{totalItems} {totalItems === 1 ? "artículo" : "artículos"}</span>
      </div>

      <div className={styles.layout}>
        {/* Items */}
        <div className={styles.items}>
          {cart.map((item) => (
            <article key={item.id} className={styles.item}>
              <Link to={`/producto/${item.id}`} className={styles.itemImage}>
                <img src={item.image} alt={item.name} />
              </Link>

              <div className={styles.itemInfo}>
                <Link to={`/producto/${item.id}`} className={styles.itemName}>
                  {item.name}
                </Link>
                <span className={styles.itemCategory}>{item.category}</span>
                <p className={styles.itemPrice}>{formatPrice(item.price)}</p>
              </div>

              <div className={styles.itemActions}>
                <div className={styles.qty}>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className={styles.qtyBtn}
                    aria-label="Decrementar"
                    disabled={item.quantity <= 1}
                  >−</button>
                  <span className={styles.qtyNum}>{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className={styles.qtyBtn}
                    aria-label="Incrementar"
                  >+</button>
                </div>

                <p className={styles.subtotal}>{formatPrice(item.price * item.quantity)}</p>

                <button
                  onClick={() => removeItem(item.id)}
                  className={styles.removeBtn}
                  aria-label={`Eliminar ${item.name}`}
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <polyline points="3 6 5 6 21 6" />
                    <path d="M19 6l-1 14a2 2 0 01-2 2H8a2 2 0 01-2-2L5 6" />
                    <path d="M10 11v6M14 11v6" />
                    <path d="M9 6V4a1 1 0 011-1h4a1 1 0 011 1v2" />
                  </svg>
                </button>
              </div>
            </article>
          ))}

          <button onClick={clearCart} className={styles.clearBtn}>
            Vaciar carrito
          </button>
        </div>

        {/* Resumen */}
        <aside className={styles.summary}>
          <h2 className={styles.summaryTitle}>Resumen del pedido</h2>

          <div className={styles.summaryRows}>
            {cart.map((item) => (
              <div key={item.id} className={styles.summaryRow}>
                <span className={styles.summaryName}>
                  {item.name} <span className={styles.summaryQty}>× {item.quantity}</span>
                </span>
                <span>{formatPrice(item.price * item.quantity)}</span>
              </div>
            ))}
          </div>

          <div className={styles.summaryDivider} />

          <div className={styles.summaryTotal}>
            <span>Total</span>
            <span className={styles.totalPrice}>{formatPrice(totalPrice)}</span>
          </div>

          <p className={styles.shippingNote}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="8" x2="12" y2="12" />
              <line x1="12" y1="16" x2="12.01" y2="16" />
            </svg>
            Envío calculado al finalizar la compra
          </p>

          <button className={styles.checkoutBtn} disabled>
            Finalizar compra
            <span className={styles.checkoutNote}>(próximamente)</span>
          </button>

          <Link to="/" className={styles.continueLink}>
            ← Seguir comprando
          </Link>
        </aside>
      </div>
    </main>
  );
};

export default Cart;
