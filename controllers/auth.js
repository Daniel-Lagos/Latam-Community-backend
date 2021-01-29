const {response} = require('express');

const event = (req, res = response) => {
    res.status(200).json({
        ok: true
    });
}


module.exports = {
    event
}