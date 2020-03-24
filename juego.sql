-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 24-03-2020 a las 07:42:39
-- Versión del servidor: 10.3.16-MariaDB
-- Versión de PHP: 7.3.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `juegos`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `juego`
--

CREATE TABLE `juego` (
  `Titulo` varchar(30) COLLATE utf8_spanish_ci NOT NULL,
  `Link` varchar(50) COLLATE utf8_spanish_ci NOT NULL,
  `Imagen` varchar(50) COLLATE utf8_spanish_ci NOT NULL,
  `Categoria` varchar(20) COLLATE utf8_spanish_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `juego`
--

INSERT INTO `juego` (`Titulo`, `Link`, `Imagen`, `Categoria`) VALUES
('Breakout', 'Juegos/Breakout/js/script.js', 'Capturas/Breakout.png', 'Accion'),
('MarioEsquivador', 'Juegos/marioElEsquivador/js/js_j1/inicio.js', 'Capturas/MarioEsquivador.PNG', 'Aventura'),
('FlappyMario', 'Juegos/FlappyBird/juego.js', 'Capturas/FlappyMario.PNG', 'Aventura');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
