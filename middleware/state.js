const { v4: uuidv4 } = require('uuid');
const { getRandomWord } = require('../lib/util');

module.exports = (req, res, next) => {
  req.generateState = () => {
    req.session.state = {
      id: uuidv4(),
      word: getRandomWord(),
    };
  };

  if (!req.session.state) {
    req.generateState();
  }

  next();
};
