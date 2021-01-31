const jwt = require('jsonwebtoken');

const generateJWT = (nickName, name) => {
    return (new Promise((resolve, reject) => {
        const payload = {
            nickName,
            name
        }

        jwt.sign(payload,
            process.env.SECRET_JWT_SEED,
            {
                expiresIn: '4h'
            },
            (error, token) => {
                if (error) {
                    console.log(error);
                    reject('No se puede generar un token');
                }
                resolve(token);
            })
    }));
}

module.exports = {
    generateJWT
}