const express = require('express');
const router = express.Router();

const generateController = require('../controller/generateController');

router.post('/triangle', generateController.triangle);
router.post('/odd', generateController.odd);
router.post('/prime', generateController.prime);

module.exports = router;
