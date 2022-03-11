const { uniqueNumberBetween } = require('./random');
const words = require('../data/words.json');

const sanitize = (word) => {
  return word.toLowerCase().replace(/[^a-z]/g, '');
};

const randomWord = (prev) => {
  return words[uniqueNumberBetween(0, words.length - 1, words.indexOf(prev))];
};

const validateWord = (word, correct) => {
  word = sanitize(word);

  if (word.length !== 5 || !words.includes(word)) {
    return false;
  }

  const getLetterStatuses = () => {
    return word.split('').map((letter, i) => {
      return {
        letter: letter,
        status: !correct.includes(letter)
          ? 'incorrect'
          : letter === correct[i]
          ? 'correct'
          : 'present',
      };
    });
  };

  return {
    correct: word === correct,
    letters: getLetterStatuses(),
  };
};

module.exports = { randomWord, validateWord };
