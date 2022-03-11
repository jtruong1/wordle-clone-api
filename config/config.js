require('dotenv').config();

const config = {
  name: process.env.APP_NAME || 'Wordle Clone',
  env: process.env.APP_ENV || 'local',
  port: process.env.PORT || process.env.APP_PORT || 8080,
  path: process.env.APP_PATH || '/',
  session: {
    name: process.env.SESSION_NAME || 'wordle-clone',
    secret: process.env.SESSION_SECRET || 'secret',
    resave: false,
    saveUninitialized: false,
    unset: 'destroy',
    cookie: {
      httpOnly: true,
      maxAge: process.env.SESSION_LIFETIME || 86400000, // 24 hours
    },
  },
};

module.exports = config;
