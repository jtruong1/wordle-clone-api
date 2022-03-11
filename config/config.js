require('dotenv').config();

const config = {
  env: process.env.APP_ENV || 'local',
  port: process.env.APP_PORT || 3000,
  secret: process.env.APP_SECRET || 'secret',
};

module.exports = config;
