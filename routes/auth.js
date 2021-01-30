const {Router} = require('express');
const {check} = require('express-validator');
const router = Router();
const {loginUser, createUser, renewToken} = require('../controllers/auth')

router.post('/', [
    check('name', "El nombre debe es obligatorio").notEmpty(),
    check('nickname', 'El nickname es obligatorio').notEmpty(),
    check('email', 'El Email es obligatorio').isEmail(),
    check('password', 'La Contrasenia debe contener min 6 caracteres').isLength({min: 6})
], loginUser);//login//

router.post('/new', createUser);

router.get('/renew', renewToken);

module.exports = router;