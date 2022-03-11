const express = require('express');
const app = express();

const { getRandomWord } = require('./lib/util');

let currentWord = getRandomWord();

app.get('/', (req, res) => {
  res.send(currentWord);
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
  console.log('Current word:', currentWord);
});
