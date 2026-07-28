import { query } from '../config/database.js';

export async function findAll() {
  return query('SELECT id_categoria, nombre FROM categoria ORDER BY id_categoria');
}
