const {response} = require('express');
const {validationResult} = require('express-validator');

const fieldValidator = (req, res = response, next) => {
    const error = validationResult(req);
    if (!error.isEmpty()) {
        return res.status(400).json({
            of: false,
            errors: error.mapped()
        });
    }
    next();
}

module.exports = fieldValidator;