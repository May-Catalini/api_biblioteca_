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

module.exports = router