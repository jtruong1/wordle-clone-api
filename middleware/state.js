const { v4: uuidv4 } = require('uuid');
const { randomWord } = require('../lib/word');

module.exports = (req, res, next) => {
  req.generateState = () => {
    req.session.state = {
      id: uuidv4(),
      word: randomWord(),
    };
  };

  if (!req.session.state) {
    req.generateState();
  }

  next();
};
