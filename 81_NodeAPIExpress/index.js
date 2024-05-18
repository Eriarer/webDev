const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 8080;
const myName = 'Abraham Melgoza de la Torre';
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send({ message: `Hello world! ${myName}` });
});

app.get('/help', (req, res) => {
    res.send({ message: `Help page! ${myName}` });
});

app.get('/test', (req, res) => {
    res.send({ message: `Test page! ${req.query.name} ${req.query.surname}` });
});