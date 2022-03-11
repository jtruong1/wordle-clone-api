const express = require('express');
const app = express();

const _ = require('lodash');

const words = require('./data/words.json');

app.get('/', (req, res) => {
  res.send(_.sample(words));
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
