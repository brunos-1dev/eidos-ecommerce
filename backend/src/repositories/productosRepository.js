import { query } from '../config/database.js';

export async function findAll() {
  return query(`
    SELECT
      p.id_producto,
      p.nombre,
      p.descripcion,
      p.precio,
      p.imagen,
      p.stock,
      p.envio,
      p.destacado,
      c.nombre AS categoria
    FROM producto p
    JOIN categoria c ON p.id_categoria = c.id_categoria
    ORDER BY p.id_producto
  `);
}

export async function findById(id) {
  const [row] = await query(
    `
    SELECT
      p.id_producto,
      p.nombre,
      p.descripcion,
      p.precio,
      p.imagen,
      p.imagenes,
      p.detalles,
      p.stock,
      p.envio,
      p.destacado,
      c.nombre AS categoria
    FROM producto p
    JOIN categoria c ON p.id_categoria = c.id_categoria
    WHERE p.id_producto = ?
    `,
    [id]
  );

  return row ?? null;
}
