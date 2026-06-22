import { Router } from 'express';
import { listarProductos, obtenerProducto } from '../controllers/productosController.js';

const router = Router();

router.get('/', listarProductos);
router.get('/:id', obtenerProducto);

export default router;
