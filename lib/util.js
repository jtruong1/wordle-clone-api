const _ = require('lodash');

const words = require('../data/words.json');

module.exports = {
  getRandomWord: (previousWord) => {
    const word = _.sample(words);

    return word !== previousWord
      ? word
      : module.exports.getRandomWord(previousWord);
  },
};
