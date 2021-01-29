const {Router} = require('express');
const router = Router();
const {community} = require('../controllers/community');

router.use('/', [], community);

module.exports = router;