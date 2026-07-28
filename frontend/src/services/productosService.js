const BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001';

export async function getProductos() {
  const res = await fetch(`${BASE_URL}/productos`);
  if (!res.ok) throw new Error(`Error ${res.status}`);
  return await res.json();
}

export async function getProductoById(id) {
  const res = await fetch(`${BASE_URL}/productos/${id}`);
  if (!res.ok) throw new Error(`Error ${res.status}`);
  return await res.json();
}

export async function getCategorias() {
  const res = await fetch(`${BASE_URL}/categorias`);
  if (!res.ok) throw new Error(`Error ${res.status}`);
  return await res.json();
}
