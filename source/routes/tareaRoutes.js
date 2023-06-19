const { Router } = require('express');
const router = Router();

const {
    obtenerTodas,
    obtenerUna,
    crearTarea,
    actualizarTarea,
    eliminarTarea,
} = require('../controllers/tareaController');

router.get('/tasks', (req, res) => {
    obtenerTodas(req, res).then(r => console.log(r))
});
router.get('/getTask/:id', (req, res) => {
    obtenerUna(req, res).then(r => console.log(r))
});
router.post('/createTask', (req, res) => {
    crearTarea(req, res).then(r => console.log(r))
});
router.put('/update/:id', (req, res) => {
    actualizarTarea(req, res).then(r => console.log(r))
});
router.delete('/delete/:id', (req, res) => {
    eliminarTarea(req, res).then(r => console.log(r))
});

module.exports = router;