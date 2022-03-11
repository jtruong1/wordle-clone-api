const express = require('express');
const { validateWord, getRandomWord } = require('../lib/util');

const router = express.Router();

router.get('/', (req, res) => {
  res.send(req.session.word);
});

router.post('/', (req, res) => {
  req.session.word = getRandomWord();

  res.status(201).json({
    message: 'A new word has been generated',
  });
});

router.post('/validate', (req, res) => {
  const { state } = req.body;

  const result = validateWord(state.word, req.session.word);

  if (!result) {
    return res.status(404).json({
      error: 'Not in word list',
    });
  }

  res.json(result);
});

module.exports = router;
