const express = require('express');
const router = express.Router();

const generate = require('./generate');

router.use('/generate', generate);

module.exports = router;
