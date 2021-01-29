const {response} = require('express');

const community = (req, res=response) => {
    res.status(200).json({
        ok: true
    });
}

module.exports = {
    community
}