const { getUserProfileById } = require('../../controllers/userController');
const router = require('express').Router();

router.get('/:id', getUserProfileById);

module.exports = router;
