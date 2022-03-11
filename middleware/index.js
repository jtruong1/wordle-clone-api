const express = require('express');
const cors = require('cors');
const session = require('express-session');
const config = require('../config/config');
const state = require('./state');

module.exports = () => {
  const router = express.Router();

  router.use(cors());
  router.use(express.json());
  router.use(session(config.session));
  router.use(state);

  return router;
};
