const {Router} = require('express');
const {check} = require('express-validator');
const {loginUser, createUser, renewToken} = require('../controllers/auth')
const fieldValidator = require('../middlewares/field-validator');
const validateJWT = require('../middlewares/validate-jwt');
const router = Router();

router.post('/', [
    check('password', 'La Contrasenia debe contener min 6 caracteres').isLength({min: 6}),
    fieldValidator
], loginUser);//login//

router.post('/new', [
        check('nickName', 'El nickname es obligatorio').notEmpty(),
        check('name', "El nombre debe es obligatorio").notEmpty(),
        check('email', 'El Email es obligatorio').isEmail(),
        check('password', 'La Contrasenia debe contener min 6 caracteres').isLength({min: 6}),
        check('country', "La Ciudad es obligatoria").notEmpty(),
        fieldValidator
    ],
    createUser);

router.get('/renew', validateJWT, renewToken);

module.exports = router;