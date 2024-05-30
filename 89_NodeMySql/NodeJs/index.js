const express = require('express');
const bodyParser = require('body-parser');
const connection = require('./conexion');
const cors = require('cors');
const app = express();

const rutas = require('./routes/rutas');
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.use('/', rutas);

connection.connect((err, res) => {
    if (err) {
        console.log(err);
        console.log('Error al conectar a la base de datos');
        return;
    }
    console.log('Conectado a la base de datos');
});

app.listen(port, (err, res) => {
    if (err) {
        console.log(`Error al iniciar el servidor: ${err}`);
    } else {
        console.log(`Servidor iniciado en: http://localhost:${port}`);
    }
});


