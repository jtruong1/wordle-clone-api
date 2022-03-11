const express = require('express');
const config = require('./config/config');
const middleware = require('./middleware');
const routes = require('./routes');
const { getRandomWord } = require('./lib/util');

const app = express();

app.locals.word = getRandomWord();

app.use(middleware());
app.use('/api', routes());

app.listen(config.port, () => {
  console.log('Server is running on port', config.port);
  console.log('Current word:', app.locals.word);
});
