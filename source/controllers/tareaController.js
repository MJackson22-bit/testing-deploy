const taskModel = require('../models/tarea.js');

async function obtenerTodas(resq, res) {
    const tareas = await taskModel.find();
    res.status(200).json(tareas);
}

async function obtenerUna(req, res) {
    const tarea = await taskModel.findById(req.params.id);
    res.status(200).json(tarea);
}

async function crearTarea(req, res) {
    const tarea = new taskModel({
        contenido: req.body.contenido,
        fueCompletada: req.body.fueCompletada,
        prioridad: req.body.prioridad,
    });
    const tareaGuardada = await tarea.save();
    res.status(201).json(tareaGuardada);
}

async function actualizarTarea(req, res) {
    const { contenido, fueCompletada, prioridad } = req.body;
    await taskModel.findByIdAndUpdate(req.params.id, { contenido: contenido, fueCompletada: fueCompletada, prioridad: prioridad });
    res.status(200).json();
}


async function eliminarTarea(req, res) {
    await taskModel.findByIdAndRemove(req.params.id);
    res.status(204).json();
}

module.exports = {
    obtenerTodas,
    obtenerUna,
    crearTarea,
    actualizarTarea,
    eliminarTarea,
};