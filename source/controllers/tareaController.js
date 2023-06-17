const tarea = require('../models/tarea.js');

async function obtenerTodas(resq, res) {
    const tareas = await tarea.find();
    res.status(200).json(tareas);
}

async function obtenerUna(req, res) {
    const tarea = await tarea.findById(req.params.id);
    res.status(200).json(tarea);
}

async function crearTarea(req, res) {
    const tarea = new tarea({
        contenido: req.body.contenido,
        fueCompletada: req.body.fueCompletada,
        prioridad: req.body.prioridad,
    });
    const tareaGuardada = await tarea.save();
    res.status(201).json(tareaGuardada);
}

async function actualizarTarea(req, res) {
    const { contenido, fueCompletada, prioridad } = req.body;
    await tarea.findByIdAndUpdate(req.params.id, { contenido: contenido, fueCompletada: fueCompletada, prioridad: prioridad });
    res.status(200).json();
}


async function eliminarTarea(req, res) {
    await tarea.findByIdAndRemove(req.params.id);
    res.status(204).json();
}

module.exports = {
    obtenerTodas,
    obtenerUna,
    crearTarea,
    actualizarTarea,
    eliminarTarea,
};