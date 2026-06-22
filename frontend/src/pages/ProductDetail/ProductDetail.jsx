import { useParams, Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { getProductoById } from "../../services/productosService";
import { useCart } from "../../context/CartContext";
import formatPrice from "../../utils/formatPrice";
import styles from "./ProductDetail.module.css";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addItem, cart } = useCart();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeImg, setActiveImg] = useState(0);
  const [added, setAdded] = useState(false);

  useEffect(() => {
    setProduct(null);
    setActiveImg(0);
    setAdded(false);
    setLoading(true);
    setError(null);

    getProductoById(id)
      .then((data) => setProduct(data))
      .catch(() => setError("No se pudo cargar el producto."))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) {
    return (
      <div className={styles.notFound}>
        <p>Cargando producto…</p>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className={styles.notFound}>
        <p>{error ?? "Producto no encontrado."}</p>
        <Link to="/" className={styles.backLink}>← Volver a la tienda</Link>
      </div>
    );
  }

  const inCart = cart.some((i) => i.id === product.id);

  const handleAdd = () => {
    addItem(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <main className={`${styles.page} container`}>
      {/* Breadcrumb */}
      <nav className={styles.breadcrumb} aria-label="Breadcrumb">
        <button onClick={() => navigate(-1)} className={styles.back}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <polyline points="15 18 9 12 15 6" />
          </svg>
          Volver
        </button>
        <span className={styles.sep}>/</span>
        <span className={styles.crumb}>{product.category}</span>
        <span className={styles.sep}>/</span>
        <span className={`${styles.crumb} ${styles.crumbActive}`}>{product.name}</span>
      </nav>

      <div className={styles.layout}>
        {/* Galería */}
        <div className={styles.gallery}>
          <div className={styles.mainImage}>
            <img src={product.images[activeImg]} alt={product.name} />
            {product.images.length > 1 && (
              <>
                <button
                  className={`${styles.arrow} ${styles.arrowPrev}`}
                  onClick={() => setActiveImg((prev) => (prev - 1 + product.images.length) % product.images.length)}
                  aria-label="Imagen anterior"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="15 18 9 12 15 6" />
                  </svg>
                </button>
                <button
                  className={`${styles.arrow} ${styles.arrowNext}`}
                  onClick={() => setActiveImg((prev) => (prev + 1) % product.images.length)}
                  aria-label="Imagen siguiente"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </button>
                <span className={styles.imageCounter}>{activeImg + 1} / {product.images.length}</span>
              </>
            )}
          </div>
          {product.images.length > 1 && (
            <div className={styles.thumbs}>
              {product.images.map((img, i) => (
                <button
                  key={i}
                  className={`${styles.thumb} ${i === activeImg ? styles.thumbActive : ""}`}
                  onClick={() => setActiveImg(i)}
                  aria-label={`Ver imagen ${i + 1}`}
                >
                  <img src={img} alt={`${product.name} ${i + 1}`} />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Info */}
        <div className={styles.info}>
          <span className={styles.category}>{product.category}</span>
          <h1 className={styles.name}>{product.name}</h1>
          <p className={styles.price}>{formatPrice(product.price)}</p>

          <div className={styles.divider} />

          <p className={styles.description}>{product.description}</p>

          {/* Detalles */}
          <div className={styles.detailsBlock}>
            <h3 className={styles.detailsTitle}>Especificaciones</h3>
            <dl className={styles.detailsList}>
              {Object.entries(product.details).map(([key, value]) => (
                <div key={key} className={styles.detailRow}>
                  <dt className={styles.detailKey}>{key.charAt(0).toUpperCase() + key.slice(1)}</dt>
                  <dd className={styles.detailVal}>{value}</dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Envío */}
          <div className={styles.shipping}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <rect x="1" y="3" width="15" height="13" rx="1" />
              <path d="M16 8h4l3 3v5h-7V8z" />
              <circle cx="5.5" cy="18.5" r="2.5" />
              <circle cx="18.5" cy="18.5" r="2.5" />
            </svg>
            <p>{product.shipping}</p>
          </div>

          {/* Stock */}
          <p className={styles.stock}>
            {product.stock > 10
              ? "✓ Stock disponible"
              : product.stock > 0
              ? `⚠ Últimas ${product.stock} unidades`
              : "✗ Sin stock"}
          </p>

          {/* CTA */}
          <button
            onClick={handleAdd}
            className={`${styles.addBtn} ${added || inCart ? styles.added : ""}`}
            disabled={product.stock === 0}
          >
            {added
              ? "¡Agregado al carrito!"
              : inCart
              ? "Agregar otra unidad"
              : product.stock === 0
              ? "Sin stock"
              : "Agregar al carrito"}
          </button>

          <Link to="/carrito" className={styles.cartLink}>
            Ver carrito →
          </Link>
        </div>
      </div>
    </main>
  );
};

export default ProductDetail;
