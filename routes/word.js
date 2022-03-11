const express = require('express');
const { validateWord } = require('../lib/word');

const router = express.Router();

router.get('/', (req, res) => {
  res.send(req.session.state);
});

router.post('/', (req, res) => {
  res.status(201).json({
    state: req.generateState(),
  });
});

router.post('/guess', (req, res) => {
  const { state } = req.session;

  const result = validateWord(req.body.word || '', state.word);

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
