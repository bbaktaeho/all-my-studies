const devController = require('../controllers/dev.controller');
const devDto = require('../dto/dev.dto');
const validateDto = require('../middlewares/validators/dto.valdate');

const router = require('express').Router();
router.post('/dev', validateDto(devDto), devController.createDev);

module.exports = router;
