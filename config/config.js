require('dotenv').config();

const slug = require('slug');

const config = {
  name: process.env.APP_NAME || 'Wordle Clone',
  env: process.env.APP_ENV || 'local',
  port: process.env.APP_PORT || 3000,
  session: {
    name: process.env.SESSION_NAME,
    secret: process.env.SESSION_SECRET || 'secret',
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: true,
      sameSite: true,
      maxAge: process.env.SESSION_LIFETIME || 60 * 60 * 1000,
    },
  },
};

if (!config.session.name) {
  config.session.name = slug(config.name);
}

module.exports = config;
