import { findAll, findById } from '../repositories/productosRepository.js';

export async function getAll() {
  const rows = await findAll();
  return rows.map(normalizeProducto);
}

export async function getById(id) {
  const row = await findById(id);
  if (!row) return null;

  const images = typeof row.imagenes === 'string'
    ? JSON.parse(row.imagenes)
    : row.imagenes;

  const details = typeof row.detalles === 'string'
    ? JSON.parse(row.detalles)
    : row.detalles;

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
