const express = require('express');
const router = express.Router();

const indexController = require('../controllers/indexController');

router.get('/', indexController.home);
router.post('/', indexController.create);

module.exports = router;