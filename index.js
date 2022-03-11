const express = require('express');
const middleware = require('./middleware');
const { getRandomWord, validateWord } = require('./lib/util');

const app = express();

app.use(middleware());

let word = getRandomWord();

app.get('/', (req, res) => {
  res.send(word);
});

app.post('/validate', (req, res) => {
  const { state } = req.body;

  res.json(validateWord(state.word, word));
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
  console.log('Current word:', word);
});
