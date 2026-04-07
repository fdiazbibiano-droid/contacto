-- ============================================================
-- NW Point Construction CMS - MySQL Setup
-- Laragon: el script setup.bat lo ejecuta automaticamente sin password
-- ============================================================

CREATE DATABASE IF NOT EXISTS nwpoint_cms
    CHARACTER SET utf8mb4
    COLLATE utf8mb4_unicode_ci;

CREATE USER IF NOT EXISTS 'nwpoint'@'localhost' IDENTIFIED BY 'NwPoint2024!';
GRANT ALL PRIVILEGES ON nwpoint_cms.* TO 'nwpoint'@'localhost';
FLUSH PRIVILEGES;

USE nwpoint_cms;

-- Strapi genera sus propias tablas al iniciar.
-- Este script solo crea la DB y el usuario.
-- Las tablas se crean automáticamente en el primer `npm run develop`.

SELECT 'Base de datos nwpoint_cms creada exitosamente.' AS resultado;
