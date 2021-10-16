import express from 'express';
const router = express.Router();
// importar el modelo Proveedor
import Proveedor from '../models/proveedor';
// Agregar una Proveedor
router.post('/nuevo-proveedor', async(req, res) => {
const body = req.body;
try {
const proveedorDB = await Proveedor.create(body);
res.status(200).json(proveedorDB);
} catch (error) {
return res.status(500).json({
mensaje: 'Ocurrio un error',
error
})
}
});
// Exportamos la configuración de express app
// Get con parámetros
router.get('/proveedor/:id', async(req, res) => {
    const _id = req.params.id;
    try {
    const proveedorDB = await Proveedor.findOne({_id});
    res.json(proveedorDB);
    } catch (error) {
    return res.status(400).json({
    mensaje: 'Ocurrio un error',
    error
    })
    }
});

// Delete eliminar una Proveedor
router.delete('/proveedor/:id', async(req, res) => {
    const _id = req.params.id;
    try {
    const proveedorDb = await Proveedor.findByIdAndDelete({_id});
    if(!proveedorDb){
    return res.status(400).json({
    mensaje: 'No se encontró el id indicado',
    error
    })
    }
    res.json(proveedorDb);
    } catch (error) {
    return res.status(400).json({
    mensaje: 'Ocurrio un error',
    error
    })
    }
    })

// Get con todos los documentos
router.get('/proveedor', async(req, res) => {
    try {
    const proveedorDb = await Proveedor.find();
    res.json(proveedorDb);
    } catch (error) {
    return res.status(400).json({
    mensaje: 'Ocurrio un error',
    error
    })
    }
    });

// Put actualizar una Proveedor
router.put('/proveedor/:id', async(req, res) => {
    const _id = req.params.id;
    const body = req.body;
    try {
    const proveedorDb = await Proveedor.findByIdAndUpdate(
        _id,
    body,
    {new: true});
    res.json(proveedorDb);
    } catch (error) {
    return res.status(400).json({
    mensaje: 'Ocurrio un error',
    error
    })
    }
    })








module.exports = router;