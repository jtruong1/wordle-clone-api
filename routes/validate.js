const express = require('express');
const { validateWord } = require('../lib/util');

const router = express.Router();

router.post('/', (req, res) => {
  const { state } = req.body;

  const result = validateWord(state.word, req.app.locals.word);

  if (!result) {
    return res.json({
      error: 'Not in word list',
    });
  }

  res.json(result);
});

module.exports = router;
