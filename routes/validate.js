const express = require('express');
const { validateWord } = require('../lib/util');

const router = express.Router();

router.post('/', (req, res) => {
  const { state } = req.body;

  res.json(validateWord(state.word, req.app.locals.word));
});

module.exports = router;
