const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/rutas');

const app = express();
const port = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/', route);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

