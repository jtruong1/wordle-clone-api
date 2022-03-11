const { getRandomWord } = require('../lib/util');

module.exports = (req, res, next) => {
  if (!req.session.word) {
    req.session.word = getRandomWord();
  }

  next();
};
