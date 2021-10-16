import express from 'express';
const router = express.Router();
// importar el modelo Cliente
import Cliente from '../models/clientes';
// Agregar una Cliente
router.post('/nuevo-cliente', async(req, res) => {
const body = req.body;
try {
const clienteDB = await Cliente.create(body);
res.status(200).json(clienteDB);
} catch (error) {
return res.status(500).json({
mensaje: 'Ocurrio un error',
error
})
}
});
// Exportamos la configuración de express app
// Get con parámetros
router.get('/cliente/:id', async(req, res) => {
    const _id = req.params.id;
    try {
    const clienteDB = await Cliente.findOne({_id});
    res.json(clienteDB);
    } catch (error) {
    return res.status(400).json({
    mensaje: 'Ocurrio un error',
    error
    })
    }
});

// Delete eliminar una Cliente
router.delete('/cliente/:id', async(req, res) => {
    const _id = req.params.id;
    try {
    const clienteDb = await Cliente.findByIdAndDelete({_id});
    if(!clienteDb){
    return res.status(400).json({
    mensaje: 'No se encontró el id indicado',
    error
    })
    }
    res.json(clienteDb);
    } catch (error) {
    return res.status(400).json({
    mensaje: 'Ocurrio un error',
    error
    })
    }
    })

// Get con todos los documentos
router.get('/cliente', async(req, res) => {
    try {
    const clienteDb = await Cliente.find();
    res.json(clienteDb);
    } catch (error) {
    return res.status(400).json({
    mensaje: 'Ocurrio un error',
    error
    })
    }
    });

// Put actualizar una Cliente
router.put('/cliente/:id', async(req, res) => {
    const _id = req.params.id;
    const body = req.body;
    try {
    const clienteDb = await Cliente.findByIdAndUpdate(
        _id,
    body,
    {new: true});
    res.json(clienteDb);
    } catch (error) {
    return res.status(400).json({
    mensaje: 'Ocurrio un error',
    error
    })
    }
    })








module.exports = router;