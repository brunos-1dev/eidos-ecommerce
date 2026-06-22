# EIDOS — E-commerce Frontend

Trabajo Práctico Integrador — Programación Web Avanzada
Primera entrega: Frontend React

## Stack
- React 19 + Vite
- React Router DOM v7
- CSS Modules
- localStorage para persistencia del carrito

## Estructura
src/
├── components/   Navbar, ProductCard, Footer
├── context/      CartContext (useReducer + localStorage)
├── data/         products.js (datos hardcodeados)
├── pages/        Home, ProductDetail, Cart
└── App.jsx       Router principal

## Instalación
npm install
npm run dev
→ http://localhost:5173

## Funcionalidades
- Catálogo en grilla con filtro por categoría
- Vista individual de producto (galería, detalles, envío, stock)
- Carrito completo (agregar, eliminar, modificar cantidad, total)
- Persistencia en localStorage
- Dark theme responsive
