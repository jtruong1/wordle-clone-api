const md5 = require('md5');
const config = require('../config/config');
const { randomWord } = require('../lib/word');

const dailySeed = (salt) => {
  return md5(new Date(new Date().setUTCHours(0, 0, 0, 0)).getTime() + salt);
};

module.exports = (req, _res, next) => {
  req.generateState = (seed) => {
    seed = seed || dailySeed(config.key);

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
