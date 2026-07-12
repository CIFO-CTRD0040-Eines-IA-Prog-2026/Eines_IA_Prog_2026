# Pla — 004 Disseny de la base de dades

- Fitxer: schema.sql (a l'arrel de backend/). Conté CREATE DATABASE i les dues taules.
- El disseny segueix la skill mysql (.agents/skills/mysql):
  - PK: id BIGINT UNSIGNED AUTO_INCREMENT.
  - Charset: utf8mb4 / utf8mb4_general_ci a la base de dades i les taules (MariaDB no suporta utf8mb4_0900_ai_ci, propi de MySQL 8).
  - Columnes NOT NULL; created_at DATETIME (no TIMESTAMP), amb DEFAULT CURRENT_TIMESTAMP.
- Taula `users`: id, nom VARCHAR, email VARCHAR amb índex UNIQUE, password_hash VARCHAR, created_at.
- Taula `todos`: id, title VARCHAR, done TINYINT(1) DEFAULT 0, created_at, user_id BIGINT UNSIGNED amb FOREIGN KEY cap a users(id).
- Contracte del FRONT (app.js): els camps de todos són id, title, done, created_at. user_id és nou del backend.
- Utilitza el MCP "mysql" configurat localment a opencode.json
