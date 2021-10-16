import mongoose from 'mongoose';
const Schema = mongoose.Schema;
const usuarioSchema = new Schema({
primerNombre: {type: String, required: [true, 'Nombre obligatorio']},
segundoNombre: {type: String, required: [false, 'Nombre No obligatorio']},
primerApellido: {type: String, required: [true, 'Apellido obligatorio']},
segundoApellido: {type: String, required: [false, 'Apellido No obligatorio']},
identificacion :{type: Number, required: [true, 'Identificacion Obligatoria']},
email: {type: String, required: [true, 'Correo Electrónico obligatorio']},
celular: {type: Number, required: [true, 'Identificacion Obligatoria']},
direccion: {type: String, required: [false, 'Nombre No obligatorio']},
date:{type: Date, default: Date.now},
activo: {type: Boolean, default: true},
rol:{type:String,required:[true,'Rol Obligatorio']},
usuario:{type:String,required:[true,'Rol Obligatorio']},
password:{type:String,required:[true,'Rol Obligatorio']},
usuarioId: String,
});

// Convertir a modelo
const Usuario = mongoose.model('Usuario', usuarioSchema);
export default Usuario;