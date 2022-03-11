const md5 = require('md5');
const config = require('../config/config');
const { randomWord } = require('../lib/word');

module.exports = (req, _res, next) => {
  req.generateState = (seed) => {
    seed = seed || md5(new Date().toDateString() + config.key);

    req.state = {
      id: seed,
      solution: randomWord(seed),
    };

    return seed;
  };

  if (!req.state) {
    req.generateState(req.query.seed || req.body.seed);
  }

  next();
};
