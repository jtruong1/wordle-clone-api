const express = require('express');
const { validateWord } = require('../lib/util');

const router = express.Router();

router.get('/', (req, res) => {
  res.send(req.session.word);
});

router.post('/', (req, res) => {
  req.generateWord();

  res.status(201).json({
    success: true,
  });
});

router.post('/guess', (req, res) => {
  const { word } = req.body;

  const result = validateWord(word, req.session.word);

  if (!result) {
    return res.status(404).json({
      error: 'Not in word list',
    });
  }

  if (result.correct) {
    req.session.destroy();
  }

  res.json(result);
});

module.exports = router;
