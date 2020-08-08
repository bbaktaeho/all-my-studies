const { getUserProfileById } = require('../../controllers/userController');
const { isAuthenticated } = require('../middlewares/auth.middleware');
const router = require('express').Router();

router.get('/:id', isAuthenticated, getUserProfileById);

module.exports = router;
