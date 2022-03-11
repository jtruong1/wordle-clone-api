const express = require('express');
const wordRoute = require('./word');

module.exports = () => {
  const router = express.Router();

  router.use('/word', wordRoute);

  return router;
};
