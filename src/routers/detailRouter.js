const express = require('express');
const router = express.Router();

const detailController = require('../controllers/detailController');

router.get('/:id', detailController.detail);
router.put('/:id', detailController.update)

module.exports = router;