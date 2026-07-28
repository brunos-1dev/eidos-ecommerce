import express from 'express';
import cors from 'cors';
import productosRouter from './routes/productos.js';
import categoriasRouter from './routes/categorias.js';

const app = express();

app.use(cors({ origin: process.env.CORS_ORIGIN || 'http://localhost:5173' }));
app.use(express.json());

app.use('/productos', productosRouter);
app.use('/categorias', categoriasRouter);

app.use((req, res) => {
  res.status(404).json({ error: 'Ruta no encontrada' });
});

export default app;
