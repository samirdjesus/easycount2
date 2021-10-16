import mongoose from 'mongoose';
const Schema = mongoose.Schema;
const entradaSchema = new Schema({
numeroDocumento: {type: Number, required: [true, '']},
productos:[{codigo:Number, cantidad:Number, valor:Number}],
total:{type: Number, required: [true, '']},
identificacionEntrada :{type: Number, required: [true, '']},
identificacionUsuario: {type: Number, required: [true, '']},
tipoEntrada:{type: String, required: [true, '']},
date:{type: Date, default: Date.now},
activo: {type: Boolean, default: true},
usuarioId: String,
});

// Convertir a modelo
const Entrada = mongoose.model('Entrada', entradaSchema);
export default Entrada;