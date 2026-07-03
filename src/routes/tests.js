const express = require('express');
const router = express.Router();
const Test = require('../models/Test');

router.get('/', async (req, res) => {
  try {
    const tests = await Test.find();
    res.json(tests);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post('/', async (req, res) => {
  try {
    const test = new Test(req.body);
    await test.save();
    res.json(test);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;