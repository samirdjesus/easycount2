import mongoose from 'mongoose';
const Schema = mongoose.Schema;
const productoSchema = new Schema({
codigo :{type: Number, required: [true, 'codigo obligadorio']},
nombre: {type: String, required: [true, 'Nombre obligatorio']},
tamanio: {type: String, required: [false, 'Nombre No obligatorio']},
referencia: {type: String, required: [true, 'Correo Electrónico obligatorio']},
preciolista: {type: Number, required: [true, 'precio obligatorio']},
impuesto: {type: Number, required: [true, 'impuesto obligatorio']},
cantidad: {type: Number, required: [true, 'impuesto obligatorio']},
date:{type: Date, default: Date.now},
activo: {type: Boolean, default: true},
productoId: String,
});

// Convertir a modelo
const Producto = mongoose.model('Producto', productoSchema);
export default Producto;