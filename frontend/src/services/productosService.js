const BASE_URL = 'http://localhost:3001';

export async function getProductos() {
  try {
    const res = await fetch(`${BASE_URL}/productos`);
    if (!res.ok) throw new Error(`Error ${res.status}`);
    return await res.json();
  } catch (error) {
    throw error;
  }
}

export async function getProductoById(id) {
  try {
    const res = await fetch(`${BASE_URL}/productos/${id}`);
    if (!res.ok) throw new Error(`Error ${res.status}`);
    return await res.json();
  } catch (error) {
    throw error;
  }
}

export async function getCategorias() {
  const res = await fetch(`${BASE_URL}/categorias`);
  if (!res.ok) throw new Error(`Error ${res.status}`);
  return await res.json();
}
