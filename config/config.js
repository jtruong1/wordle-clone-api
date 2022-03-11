require('dotenv').config();

const config = {
  name: process.env.APP_NAME || 'Wordle Clone',
  env: process.env.APP_ENV || 'local',
  key: process.env.APP_KEY || 'secret',
  port: process.env.PORT || process.env.APP_PORT || 8080,
  path: process.env.APP_PATH || '/',
};

module.exports = config;
