const express = require("express");
const router = express.Router();

const { getAllLibros, getLibroById, createLibro, updateLibro, deleteLibro} = require("../controllers/libroController");


// Importamos la libreria para validar scopes
const { requiredScopes } = require("express-oauth2-jwt-bearer");

// Ruta para obtener todos los libros
router.get("/", requiredScopes("read:libros"), getAllLibros);

// Ruta para obtener un libro por id
router.get("/:id", requiredScopes("read:libros"), getLibroById);

// Ruta para crear un nuevo Libro
router.post("/", requiredScopes("write:libros"), createLibro);

// Ruta para actualizar un Libro existente
router.put("/:id", requiredScopes("write:libros"), updateLibro);

// Ruta para eliminar un Libro
router.delete("/:id", requiredScopes("write:libros"), deleteLibro);

module.exports = router;


// Implementar las siguientes rutas y funcionalidades:
// a. GET /usuarios: Devuelve la lista completa de usuarios.
// b. GET /usuarios/:id: Devuelve los detalles de un usuario específico según su ID.
// c. POST /usuarios: Crea un nuevo usuario con la información proporcionada.
// d. PUT /usuarios/:id: Actualiza la información de un usuario específico según su ID.
// e. DELETE /usuarios/:id: Elimina un usuario específico según su ID.

const { getAllUsuarios, getUsuarioById, createUsuario, updateUsuario, deleteUsuario } = require("../controllers/usuarioController");

// Ruta para obtener todos los usuarios
router.get("/usuarios", requiredScopes("read:usuarios"), getAllUsuarios);

// Ruta para obtener un usuario por id
router.get("/usuarios/:id", requiredScopes("read:usuarios"), getUsuarioById);

// Ruta para crear un nuevo usuario
router.post("/usuarios", requiredScopes("write:usuarios"), createUsuario);

// Ruta para actualizar un usuario existente
router.put("/usuarios/:id", requiredScopes("write:usuarios"), updateUsuario);

// Ruta para eliminar un usuario
router.delete("/usuarios/:id", requiredScopes("write:usuarios"), deleteUsuario);

