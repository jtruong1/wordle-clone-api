const _ = require('lodash');

const words = require('../data/words.json');

module.exports = {
  getRandomWord: (prev) => {
    const word = _.sample(words);
    return word === prev ? module.exports.getRandomWord(prev) : word;
  },
  validateWord: (current, correct) => {
    current = current.toLowerCase();

    return {
      correct: current === correct,
      letters: current.split('').map((letter, index) => {
        return {
          letter: letter,
          status:
            letter === correct[index]
              ? 'correct'
              : correct.includes(letter)
              ? 'present'
              : 'incorrect',
        };
      }),
    };
  },
};
