const express = require('express');
const { validateWord } = require('../lib/word');

const router = express.Router();

router.get('/', (req, res) => {
  res.send(req.state);
});

router.post('/guess/:word?', (req, res) => {
  const { state } = req;

  const result = validateWord(
    req.params.word || req.body.word || '',
    state.solution
  );

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
