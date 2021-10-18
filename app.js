import express, { json } from 'express';
import morgan from 'morgan';
import cors from 'cors';
import path from 'path'

// Conexión base de datos
const mongoose = require('mongoose');
const uri = 'mongodb+srv://samir:rimas12@cluster0.hkyvx.mongodb.net/inventario?retryWrites=true&w=majority';
const options = {useNewUrlParser: true, useUnifiedTopology: true};
// Or using promises
mongoose.connect(uri, options).then(
/** ready to use. The `mongoose.connect()` promise resolves to
mongoose instance. */
() => { console.log('Conectado a DB') },
/** handle initial connection error */
err => { console.log(err) }
);


const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(morgan('tiny'));
app.use(cors())




app.use('/inventario', require('./routes/clientes'));
app.use('/inventario', require('./routes/productos'));
app.use('/inventario', require('./routes/proveedor'));
app.use('/inventario', require('./routes/usuarios'));
app.use('/inventario', require('./routes/entradas'));

const history = require('connect-history-api-fallback');
app.use(history());
app.use(express.static(path.join(__dirname,'public')));
app.set('puerto',process.env.port||3000);
app.listen(app.get('puerto'),function(){
    console.log('consola puerto:'+app.get('puerto'));
});
