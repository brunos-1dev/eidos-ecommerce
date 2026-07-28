import { useState, useEffect } from "react";
import { getProductos, getCategorias } from "../../services/productosService";
import ProductCard from "../../components/ProductCard/ProductCard";
import styles from "./Home.module.css";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState("Todos");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [productos, categorias] = await Promise.all([getProductos(), getCategorias()]);
        setProducts(productos);
        setCategories(categorias);
      } catch {
        setError("No se pudieron cargar los productos.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const filtered =
    activeCategory === "Todos"
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <main>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <p className={styles.heroSub}>Tienda oficial</p>
          <h1 className={styles.heroTitle}>
            Diseños <br />
            <em>con sentido</em>
          </h1>
        </div>
        <div className={styles.heroDivider} aria-hidden="true" />
      </section>

      <section className={`${styles.catalog} container`}>
        <div className={styles.catalogHeader}>
          <h2 className={styles.catalogTitle}>Productos</h2>
          {!loading && !error && (
            <p className={styles.catalogCount}>{filtered.length} artículos</p>
          )}
        </div>

        {loading && <p className={styles.status}>Cargando productos…</p>}

        {error && <p className={styles.error}>{error}</p>}

        {!loading && !error && (
          <>
            <div className={styles.filters} role="group" aria-label="Filtrar por categoría">
              <button
                className={`${styles.filterBtn} ${activeCategory === "Todos" ? styles.active : ""}`}
                onClick={() => setActiveCategory("Todos")}
              >
                Todos
              </button>
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  className={`${styles.filterBtn} ${activeCategory === cat.name ? styles.active : ""}`}
                  onClick={() => setActiveCategory(cat.name)}
                >
                  {cat.name}
                </button>
              ))}
            </div>

            <div className={styles.grid}>
              {filtered.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            {filtered.length === 0 && (
              <p className={styles.empty}>No hay productos en esta categoría.</p>
            )}
          </>
        )}
      </section>
    </main>
  );
};

export default Home;
