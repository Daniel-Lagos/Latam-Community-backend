const {response} = require('express');
const User = require('../models/User');
const bcrypt = require('bcrypt');
const {generateJWT} = require('../helpers/generate-JWT');

const loginUser = async (req, res = response) => {

    const {nickName, email, password} = req.body;

    try {

        let user = await User.findOne({nickName});

        if (!user)
            user = await User.findOne({email});

        if (!user) {
            return res.status(400).json({
                ok: false,
                msg: 'El usuario no existe'
            });
        }
        //password validate
        const validatePassword = bcrypt.compareSync(password, user.password);

        if (!validatePassword) {
            return res.status(400).json({
                ok: false,
                msg: 'Las contrasenias no coinciden'
            });
        }
        const token = await generateJWT(user.nickName, user.name);
        res.status(201).json({
            ok: true,
            nickname: user.nickName,
            name: user.name,
            token
        });

    } catch (e) {
        console.log(e);
        res.status(500).json({
            ok: false,
            msg: 'Por favor hable con el administrador'
        });
    }

    return res.status(200).json({
        ok: true,
        msg: 'Login User'
    });
}

const createUser = async (req, res = response) => {

    const {nickName, password, email} = req.body;

    try {
        let user = await User.find({$and: [{nickName}, {email}]});
        if (user) {
            return res.status(400).json({
                ok: false,
                msg: 'El NickName no esta disponible o el correo ya esta registrado'
            });
        }

        user = new User(req.body);
        console.log(user);
        //encriptar

        const salt = bcrypt.genSaltSync();
        user.password = bcrypt.hashSync(password, salt);
        await user.save();
        const token = await generateJWT(user.nickName, user.name);

        res.status(201).json({
            ok: true,
            nickName: user.nickName,
            name: user.name,
            token
        });

    } catch (e) {
        console.log(e);
        res.status(500).json({
            ok: false,
            msg: 'Por favor hable con el administrador'
        });
    }


}

const renewToken = async (req, res) => {
    const {nickName, name} = req.body;

    const token = await generateJWT(nickName, name);

    res.status(400).json({
        ok: true,
        nickName,
        name,
        token
    });

}

module.exports = {
    loginUser,
    createUser,
    renewToken
}

