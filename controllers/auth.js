const {response} = require('express');

const loginUser = async (req, res = response) => {
    return res.status(200).json({
        ok: true,
        msg: 'Login User'
    });
}

const createUser = async (req, res = response) => {
    return res.status(200).json({
        ok: true,
        msg: 'Create User'
    });
}

const renewToken = async (req, res) => {
    return res.status(200).json({
        ok: true,
        msg: 'Renew Token'
    });
}

module.exports = {
    loginUser,
    createUser,
    renewToken
}