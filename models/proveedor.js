import mongoose from 'mongoose';
const Schema = mongoose.Schema;
const proveedorSchema = new Schema({
razonSocial: {type: String, required: [true, 'Nombre obligatorio']},
nit:{type: Number, required: [true, 'Nombre obligatorio']},
primerNombre: {type: String, required: [true, 'Nombre obligatorio']},
segundoNombre: {type: String, required: [false, 'Nombre No obligatorio']},
primerApellido: {type: String, required: [true, 'Nombre obligatorio']},
segundoApellido: {type: String, required: [false, 'Nombre No obligatorio']},
identificacion :{type: Number, required: [true, 'Identificacion Obligatoria']},
email: {type: String, required: [true, 'Correo Electrónico obligatorio']},
celular: {type: Number, required: [true, 'Identificacion Obligatoria']},
direccion: {type: String, required: [false, 'Nombre No obligatorio']},
date:{type: Date, default: Date.now},
activo: {type: Boolean, default: true},
usuarioId: String,
});

// Convertir a modelo
const Proveedor = mongoose.model('Proveedor', proveedorSchema);
export default Proveedor;