const express = require('express');
const middleware = require('./middleware');
const routes = require('./routes');
const { getRandomWord } = require('./lib/util');

const app = express();

app.locals.word = getRandomWord();

app.use(middleware());
app.use(routes());

app.listen(3000, () => {
  console.log('Server is running on port 3000');
  console.log('Current word:', app.locals.word);
});
