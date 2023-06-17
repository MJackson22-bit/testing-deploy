const { Router } = require('express');
const router = Router();

const {
    obtenerTodas,
    obtenerUna,
    crearTarea,
    actualizarTarea,
    eliminarTarea,
} = require('../controllers/tareaController');

router.get('/', obtenerTodas);
router.get('/:id', obtenerUna);
router.post('/', crearTarea);
router.put('/:id', actualizarTarea);
router.delete('/:id', eliminarTarea);

module.exports = router;