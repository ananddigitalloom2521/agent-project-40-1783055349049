const express = require('express');
const router = express.Router();
const usersRouter = require('./users');
const testsRouter = require('./tests');
const resultsRouter = require('./results');

router.use('/users', usersRouter);
router.use('/tests', testsRouter);
router.use('/results', resultsRouter);

module.exports = router;