const express = require('express');
const user = require('../models/user.model');
const connection = require('../conexion');
const { body, param, validationResult } = require('express-validator');
let router = express.Router();

router.get('/user', [], (req, res) => {
    user.getAll(connection, (result) => {
        res.json(result);
    });
});

router.post('/user', [
    body("idUser").not().isEmpty().isString(),
    body('name').not().isEmpty().isString(),
    body('lastname').not().isEmpty().isString(),
    body('contact').not().isEmpty().isString(),
    body('cellphone').not().isEmpty().isString()
], (req, res) => {
    console.log("Api Post");
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
    }
    user.create(connection, req.body, (result) => {
        res.json(result);
    });
});

module.exports = router;