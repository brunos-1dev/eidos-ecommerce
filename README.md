# Eidos E-commerce

Aplicación e-commerce con frontend en React y backend en Node.js + Express + MariaDB, con arquitectura en capas (routes → controllers → services → repositories).

## Estructura del proyecto

```
eidos-ecommerce/
├── backend/      API REST con Node.js, Express y MariaDB
├── frontend/     Interfaz en React
└── package.json  Scripts raíz para instalar y correr ambos proyectos
```

## Requisitos previos

- Node.js instalado
- MariaDB corriendo con la base de datos `pwa_integrador` creada

## Instalación rápida

```bash
npm run install:all
```

## Levantar el proyecto

En dos terminales separadas:

```bash
# Terminal 1 — backend (http://localhost:3001)
npm run dev:backend

# Terminal 2 — frontend (http://localhost:5173)
npm run dev:frontend
```

---

## Backend

Stack: Node.js · Express · MariaDB · dotenv · cors

### Configuración

Crear el archivo `backend/.env` a partir del ejemplo y completar las credenciales:

```bash
cp backend/.env.example backend/.env
```

Variables requeridas:

```
PORT=3001
DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASSWORD=
DB_NAME=pwa_integrador
```

> `DB_PORT=3306` es el puerto por defecto de MariaDB. Puede variar según la instalación local (por ejemplo, `3307` si se usa XAMPP o una instalación con puerto personalizado).

### Base de datos

La base de datos `pwa_integrador` debe existir previamente con 2 tablas:

- `categoria` — id_categoria, nombre, creado_en
- `producto` — id_producto, nombre, descripcion, precio, imagen, **imagenes** (JSON), **detalles** (JSON), stock, envio, destacado, creado_en, id_categoria

### Estructura de src/

```
src/
├── config/         database.js (pool de conexión MariaDB)
├── routes/         productos.js (definición de endpoints)
├── controllers/    productosController.js (manejo de request/response)
├── services/       productosService.js (lógica de negocio y normalización)
├── repositories/   productosRepository.js (queries SQL)
├── app.js          configuración de Express y middlewares
└── index.js        entrada, levanta el servidor
```

---

## Frontend

Stack: React 19 · Vite · React Router DOM v7 · CSS Modules

### Estructura de src/

```
src/
├── components/   Navbar, ProductCard, Footer
├── context/      CartContext (useReducer + localStorage)
├── pages/        Home, ProductDetail, Cart, NotFound
├── services/     productosService.js (llamadas a la API)
├── utils/        formatPrice.js
└── App.jsx       Router principal
```

### Funcionalidades

- Catálogo en grilla con filtro por categoría
- Vista individual de producto (galería, detalles, envío, stock)
- Carrito completo (agregar, eliminar, modificar cantidad, total)
- Persistencia en localStorage
- Dark theme responsive
