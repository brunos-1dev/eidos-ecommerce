import { findAll } from '../repositories/categoriasRepository.js';

export async function getAll() {
  const rows = await findAll();
  return rows.map(row => ({
    id: Number(row.id_categoria),
    name: row.nombre,
  }));
}
