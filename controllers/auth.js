const {response} = require('express');
const User = require('../models/User');

const loginUser = async (req, res = response) => {

    const {nickname, password} = req.body;

    try {
        let user = await User.findOne({nickname})
        if (user.password !== password) {
            return res.status(400).json({});
        }

    } catch (e) {
        console.log(e);
    }

    return res.status(200).json({
        ok: true,
        msg: 'Login User'
    });
}

const createUser = async (req, res = response) => {

    const {nickName, password, email} = req.body;

    try {
        let user = await User.findOne({nickName});

        if (user) {
            return res.status(400).json({
                ok: false,
                msg: 'El usuario Ya existe'
            });
        }

        user = new User(req.body);

        //encriptar
        


    } catch (e) {
        console.log(e);
    }


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

