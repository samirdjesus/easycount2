import express from 'express';
const router = express.Router();
// importar el modelo Entrada
import Entrada from '../models/entradas';
// Agregar una Entrada
router.post('/nueva-entrada', async(req, res) => {
const body = req.body;
try {
const entradaDB = await Entrada.create(body);
res.status(200).json(entradaDB);
} catch (error) {
return res.status(500).json({
mensaje: 'Ocurrio un error',
error
})
}
});
// Exportamos la configuración de express app
// Get con parámetros
router.get('/entrada/:id', async(req, res) => {
    const _id = req.params.id;
    try {
    const entradaDB = await Entrada.findOne({_id});
    res.json(entradaDB);
    } catch (error) {
    return res.status(400).json({
    mensaje: 'Ocurrio un error',
    error
    })
    }
});

// Delete eliminar una Entrada
router.delete('/entrada/:id', async(req, res) => {
    const _id = req.params.id;
    try {
    const entradaDb = await Entrada.findByIdAndDelete({_id});
    if(!entradaDb){
    return res.status(400).json({
    mensaje: 'No se encontró el id indicado',
    error
    })
    }
    res.json(entradaDb);
    } catch (error) {
    return res.status(400).json({
    mensaje: 'Ocurrio un error',
    error
    })
    }
    })

// Get con todos los documentos
router.get('/entrada', async(req, res) => {
    try {
    const entradaDb = await Entrada.find();
    res.json(entradaDb);
    } catch (error) {
    return res.status(400).json({
    mensaje: 'Ocurrio un error',
    error
    })
    }
    });

// Put actualizar una Entrada
router.put('/entrada/:id', async(req, res) => {
    const _id = req.params.id;
    const body = req.body;
    try {
    const entradaDb = await Entrada.findByIdAndUpdate(
        _id,
    body,
    {new: true});
    res.json(entradaDb);
    } catch (error) {
    return res.status(400).json({
    mensaje: 'Ocurrio un error',
    error
    })
    }
    })








module.exports = router;