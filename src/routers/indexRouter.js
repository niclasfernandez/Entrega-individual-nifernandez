const express = require('express');
const router = express.Router();

const indexController = require('../controllers/indexController');

router.get('/', indexController.home);
router.post('/', indexController.create);
router.delete('/', indexController.delete);

module.exports = router;