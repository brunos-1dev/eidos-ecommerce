import { getAll } from '../services/categoriasService.js';

export async function listarCategorias(req, res) {
  try {
    const categorias = await getAll();
    res.status(200).json(categorias);
  } catch (error) {
    console.error('Error al listar categorías:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
}
