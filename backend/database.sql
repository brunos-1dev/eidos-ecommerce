-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Versión del servidor:         12.2.2-MariaDB - MariaDB Server
-- SO del servidor:              Win64
-- HeidiSQL Versión:             12.14.0.7165
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Volcando estructura de base de datos para pwa_integrador
CREATE DATABASE IF NOT EXISTS `pwa_integrador` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_uca1400_ai_ci */;
USE `pwa_integrador`;

-- Volcando estructura para tabla pwa_integrador.categoria
CREATE TABLE IF NOT EXISTS `categoria` (
  `id_categoria` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) NOT NULL,
  `creado_en` datetime NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id_categoria`),
  UNIQUE KEY `nombre` (`nombre`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_uca1400_ai_ci;

-- Volcando datos para la tabla pwa_integrador.categoria: ~4 rows (aproximadamente)
INSERT INTO `categoria` (`id_categoria`, `nombre`, `creado_en`) VALUES
	(1, 'Indumentaria', '2026-06-22 11:26:16'),
	(2, 'Gorras', '2026-06-22 11:26:16'),
	(3, 'Accesorios', '2026-06-22 11:26:16'),
	(4, 'Hogar', '2026-06-22 11:26:16');

-- Volcando estructura para tabla pwa_integrador.producto
CREATE TABLE IF NOT EXISTS `producto` (
  `id_producto` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) NOT NULL,
  `descripcion` varchar(500) NOT NULL,
  `precio` decimal(10,2) NOT NULL,
  `imagen` varchar(500) NOT NULL,
  `imagenes` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL CHECK (json_valid(`imagenes`)),
  `detalles` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL CHECK (json_valid(`detalles`)),
  `stock` int(11) NOT NULL,
  `envio` varchar(255) NOT NULL,
  `destacado` tinyint(1) NOT NULL,
  `creado_en` datetime NOT NULL DEFAULT current_timestamp(),
  `id_categoria` int(11) NOT NULL,
  PRIMARY KEY (`id_producto`),
  KEY `id_categoria` (`id_categoria`),
  CONSTRAINT `1` FOREIGN KEY (`id_categoria`) REFERENCES `categoria` (`id_categoria`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_uca1400_ai_ci;

-- Volcando datos para la tabla pwa_integrador.producto: ~9 rows (aproximadamente)
INSERT INTO `producto` (`id_producto`, `nombre`, `descripcion`, `precio`, `imagen`, `imagenes`, `detalles`, `stock`, `envio`, `destacado`, `creado_en`, `id_categoria`) VALUES
	(1, 'Buzo ARG Oversize Eidos', 'Buzo oversize de algodón premium con diseño exclusivo Eidos. Confeccionado con tela gruesa de primera calidad, ideal para el invierno. Disponible en talles S al XL.', 48500.00, '/images/indumentaria/buzoArg5.jpeg', '["/images/indumentaria/buzoArg5.jpeg","/images/indumentaria/buzoArg.jpeg","/images/indumentaria/buzoArg1.jpeg","/images/indumentaria/buzoArg2.jpeg","/images/indumentaria/buzoArg3.jpeg","/images/indumentaria/buzoArg4.jpeg"]', '{"Material":"100% Algodón","Talle":"S / M / L / XL","Colores":"Negro, Azul, Celeste, Amarillo"}', 12, 'Envío gratis a todo el país en compras mayores a $30.000', 1, '2026-06-22 11:26:16', 1),
	(2, 'Remera ARG Eidos', 'Remera de algodón suave de Argentina. Corte moderno y cómodo, perfecta para el día a día. Lavado a máquina a 30°C.', 24900.00, '/images/indumentaria/remArg.jpeg', '["/images/indumentaria/remArg.jpeg","/images/indumentaria/remArgSol.jpeg","/images/indumentaria/remDiego.jpeg","/images/indumentaria/remDiego1.jpeg"]', '{"Material":"95% Algodón / 5% Elastano","Talle":"XS / S / M / L / XL / XXL","Colores":"Negro, Blanco, Verde Oliva"}', 30, 'Envío gratis a todo el país en compras mayores a $30.000', 1, '2026-06-22 11:26:16', 1),
	(3, 'Gorra lisa Eidos', 'Gorra lisa con visera e isologo Eidos bordado. Regulable, talle único. Confeccionada en twill de alta resistencia con cierre de plástico ajustable.', 11200.00, '/images/gorra/gorraLisa.jpeg', '["/images/gorra/gorraLisa.jpeg","/images/gorra/gorraLisa1.jpeg","/images/gorra/gorraLisa2.jpeg","/images/gorra/gorraLisa3.jpeg"]', '{"Material":"Twill Polyéster","Talle":"Talle único regulable","Colores":"Negro, Blanco roto"}', 20, 'Envío en 24-48hs hábiles por Correo Argentino o Andreani.', 0, '2026-06-22 11:26:16', 2),
	(4, 'Taza Cerámica Eidos', 'Taza de cerámica de 350ml con isologo Eidos impreso en alta resolución. Apta para microondas y lavavajillas.', 9800.00, '/images/hogar/taza.jpeg', '["/images/hogar/taza.jpeg","/images/hogar/taza1.jpeg","/images/hogar/taza2.jpeg"]', '{"Material":"Cerámica premium","Dimensiones":"350 ml","Colores":"Negro c/logo blanco · Blanco c/logo negro"}', 50, 'Envío protegido con packaging especial anti-golpes.', 1, '2026-06-22 11:26:16', 4),
	(5, 'Set Matero ARG Eidos', 'Set completo matero Eidos: mate de calabaza curado + bombilla de acero inoxidable + porta yerbas de madera.', 24500.00, '/images/hogar/materaArg.jpeg', '["/images/hogar/materaArg.jpeg","/images/hogar/materaArg1.jpeg","/images/hogar/materaArg2.jpeg"]', '{"Incluye":"Mate calabaza · Bombilla acero · Porta yerbas","Presentación":"Caja regalo premium","Colores":"Negro / madera natural"}', 6, 'Envío con packaging regalo. Llega listo para regalar.', 1, '2026-06-22 11:26:16', 4),
	(6, 'Porta Yerba ARG Eidos', 'Porta yerbas de cuerina grabado a láser. Capacidad 500g. Mantiene la yerba fresca por más tiempo.', 9900.00, '/images/hogar/materaTodoPasa.jpeg', '["/images/hogar/materaTodoPasa.jpeg"]', '{"Material":"Cuerina","Capacidad":"500 g","Colores":"Negro, marrón"}', 15, 'Envío en 24-48hs hábiles. Caja con diseño exclusivo.', 0, '2026-06-22 11:26:16', 4),
	(7, 'Buzo Abel Pintos', 'Buzo con estampa de Abel Pintos. Tela polar por dentro, suave y abrigada. Diseño urbano. Ideal para los días de frío.', 32000.00, '/images/indumentaria/buzoAbel.jpeg', '["/images/indumentaria/buzoAbel.jpeg","/images/indumentaria/buzoAbel1.jpeg","/images/indumentaria/buzoAbel2.jpeg","/images/indumentaria/buzoAbel3.jpeg"]', '{"Material":"Algodón con interior polar","Talle":"S / M / L / XL / XXL","Colores":"Negro"}', 10, 'Envío gratis a todo el país en compras mayores a $30.000', 1, '2026-06-22 11:26:16', 1),
	(8, 'Lonas ARG', 'Lona de Argentina con diseño exclusivo Eidos. Medidas 1.40 x 1.40 m. Tela resistente con estampado full color.', 15500.00, '/images/accesorios/lona.jpeg', '["/images/accesorios/lona.jpeg","/images/accesorios/lona1.jpeg"]', '{"Material":"Tela polyéster resistente","Medidas":"1.40 x 1.40 m","Colores":"Diseño full color"}', 6, 'Envío con packaging regalo. Llega listo para regalar.', 1, '2026-06-22 11:26:16', 3),
	(9, 'Lapiceras personalizadas', 'Lapiceras personalizadas con grabado láser del isologo Eidos. Tinta de larga duración, cuerpo resistente y escritura fluida.', 1500.00, '/images/accesorios/lapicera3.jpeg', '["/images/accesorios/lapicera3.jpeg","/images/accesorios/lapicera.jpeg","/images/accesorios/lapicera1.jpeg","/images/accesorios/lapicera2.jpeg"]', '{"Presentación":"Caja regalo premium","Colores":"Negro / madera natural"}', 100, 'Envío con packaging regalo. Llega listo para regalar.', 1, '2026-06-22 11:26:16', 3),
	(10, 'Buzo Indio Solari', 'Buzo con estampa del Indio Solari. Tela con frisa por dentro, suave y abrigada. Diseño urbano. Ideal para los días de frío.', 32000.00, '/images/indumentaria/buzoIndio.jpeg', '["/images/indumentaria/buzoIndio.jpeg","/images/indumentaria/buzoIndio1.jpeg","/images/indumentaria/buzoIndio2.jpeg","/images/indumentaria/buzoIndio3.jpeg","/images/indumentaria/buzoIndio4.jpeg"]', '{"Material":"Algodón con interior polar","Talle":"S / M / L / XL / XXL","Colores":"Negro"}', 10, 'Envío gratis a todo el país en compras mayores a $30.000', 1, '2026-06-22 12:08:03', 1);

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
