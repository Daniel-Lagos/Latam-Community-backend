const {Router} = require('express');
const router = Router();
const {event} = require('../controllers/auth')

router.get('/', [], event);//login//

router.get('/new', (req, res) => {//create User
    res.status(200).json({
        ok: true
    });
});

router.get('/renew', (req, res) => {
    res.status(200).json({
        ok: true
    });
});

module.exports = router;