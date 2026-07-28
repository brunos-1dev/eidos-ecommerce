import { findAll, findById } from '../repositories/productosRepository.js';

export async function getAll() {
  const rows = await findAll();
  return rows.map(normalizeProducto);
}

export async function getById(id) {
  const row = await findById(id);
  if (!row) return null;

  const images = parseJSON(row.imagenes, []);
  const details = parseJSON(row.detalles, {});

  return {
    ...normalizeProducto(row),
    images,
    details,
  };
}

function normalizeProducto(row) {
  return {
    id: Number(row.id_producto),
    name: row.nombre,
    description: row.descripcion,
    price: Number(row.precio),
    image: row.imagen,
    stock: Number(row.stock),
    shipping: row.envio,
    featured: Boolean(row.destacado),
    category: row.categoria,
  };
}

function parseJSON(value, fallback) {
  if (value === null || value === undefined) return fallback;
  if (typeof value !== 'string') return value;
  try {
    return JSON.parse(value);
  } catch {
    return fallback;
  }
}
