const express = require('express');
const router = express.Router();

// Aquí puedes agregar la lógica para obtener la lista de gatos desde una base de datos si es necesario
router.get('/', async (req, res) => {
    // Ejemplo estático para propósitos demostrativos
    res.json([
        { name: "Gato 2", url: "http://localhost:3018/image/gato-2.jpg" },
        { name: "Gato 3", url: "http://localhost:3018/image/gato-3.jpg" },
        { name: "Gato 4", url: "http://localhost:3018/image/gato-4.jpg" },
        // Agrega más gatos aquí
    ]);
});

module.exports = router;
