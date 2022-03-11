const { getRandomWord } = require('../lib/util');

module.exports = (req, res, next) => {
  req.generateWord = () => {
    req.session.word = getRandomWord();
  };

  if (!req.session.word) {
    req.generateWord();
  }

  next();
};
