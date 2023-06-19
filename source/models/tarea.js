const mongoose = require("mongoose");

const tareaSchema = new mongoose.Schema({
    contenido: { type: String, required: true, },
    fueCompletado: { type: Boolean, default: false, },
    prioridad: { type: Number, default: 1, },
});

const tarea = mongoose.model('tarea', tareaSchema);
module.exports = tarea;