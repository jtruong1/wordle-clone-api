const express = require('express');
const cors = require('cors');
const session = require('express-session');
const MemoryStore = require('memorystore')(session);
const config = require('../config/config');
const state = require('./state');

module.exports = () => {
  const router = express.Router();

  router.use(cors({ origin: true, credentials: true }));
  router.use(express.json());
  router.use(
    session({
      ...config.session,
      store: new MemoryStore({
        checkPeriod: config.session.cookie.maxAge,
      }),
    })
  );
  router.use(state);

  return router;
};
