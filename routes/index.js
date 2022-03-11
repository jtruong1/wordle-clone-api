const express = require('express');
const validateRoute = require('./validate');

module.exports = () => {
  const router = express.Router();

  router.get('/', (req, res) => {
    res.send(req.app.locals.word);
  });

  router.use('/validate', validateRoute);

  return router;
};
