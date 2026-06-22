import { getAll, getById } from '../services/productosService.js';

export async function listarProductos(req, res) {
  try {
    const productos = await getAll();
    res.status(200).json(productos);
  } catch (error) {
    console.error('Error al listar productos:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
}

export async function obtenerProducto(req, res) {
  try {
    const id = Number(req.params.id);
    if (isNaN(id)) {
      return res.status(400).json({ error: 'ID inválido' });
    }

    const producto = await getById(id);
    if (!producto) {
      return res.status(404).json({ error: 'Producto no encontrado' });
    }

    res.status(200).json(producto);
  } catch (error) {
    console.error('Error al obtener producto:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
}
