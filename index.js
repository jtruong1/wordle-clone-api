const express = require('express');
const config = require('./config/config');
const middleware = require('./middleware');
const routes = require('./routes');

const app = express();

app.use(middleware());
app.use('/api', routes());

app.listen(config.port, () => {
  console.log('Server is running on port', config.port);
});
