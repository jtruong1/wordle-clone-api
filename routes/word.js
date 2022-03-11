const express = require('express');
const { validateWord } = require('../lib/util');

const router = express.Router();

router.get('/', (req, res) => {
  res.send(req.session.state);
});

router.post('/', (req, res) => {
  req.generateState();

  res.status(201).json({
    success: true,
  });
});

router.post('/guess', (req, res) => {
  const { word } = req.body;
  const { state } = req.session;

  const result = validateWord(word, state.word);

  if (!result) {
    return res.status(404).json({
      error: 'Not in word list',
    });
  }

  res.json({
    state: state.id,
    ...result,
  });
});

module.exports = router;
