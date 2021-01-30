const {response} = require('express');
const jwt = require('jsonwebtoken');

const validateJWT = (req, res = response) => {
    const token = req.header('x-token');
    if (!token) {
        return res.status(400).json({
            ok: false,
            msg: 'No hay token en la peticion'
        });
    }

}

module.exports = validateJWT;