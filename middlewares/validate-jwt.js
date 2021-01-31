const {response} = require('express');
const jwt = require('jsonwebtoken');

const validateJWT = (req, res = response, next) => {
    const token = req.header('x-token');
    if (!token) {
        return res.status(400).json({
            ok: false,
            msg: 'No hay token en la peticion'
        });
    }
    try {

        const {nickName, name} = jwt.verify(
            token,
            process.env.SECRET_JWT_SEED
        );

        req.nickName = nickName;
        req.name = name;

        next();

    } catch (e) {
        console.log(e);
        res.status(401).json({
            ok: false,
            msg: 'Token no valido'
        })
    }

}

module.exports = validateJWT;