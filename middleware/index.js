const express = require('express');
const cors = require('cors');
const state = require('./state');

module.exports = () => {
  const router = express.Router();

  router.use(express.json());
  router.use(cors());
  router.use(state);

  return router;
};
