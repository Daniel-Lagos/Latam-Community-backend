const jwt = require('jsonwebtoken');

const generateJWT = (uid, name) => {
    return (new Promise((resolve, reject) => {
        const payload = {
            uid,
            name
        }



    }));
}

module.exports = {
    generateJWT
}