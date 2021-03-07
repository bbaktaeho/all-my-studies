const { getUserProfileById } = require('../../controllers/userController');
const { isLoggedIn } = require('../middlewares/auth.middleware');
const router = require('express').Router();

router.get('/:id', isLoggedIn, getUserProfileById);

module.exports = router;
