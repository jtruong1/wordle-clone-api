const { numberBetween, uniqueNumberBetween } = require('./random');
const words = require('../data/words.json');

const randomWord = (seed) => {
  return words[numberBetween(0, words.length - 1, seed)];
};

const randomUniqueWord = (prev, seed) => {
  return words[
    uniqueNumberBetween(0, words.length - 1, words.indexOf(prev), seed)
  ];
};

const sanitizeWord = (word) => {
  return word.toLowerCase().replace(/[^a-z]/g, '');
};

const validateWord = (word, solution) => {
  word = sanitizeWord(word);

  if (word.length !== 5 || !words.includes(word)) {
    return false;
  }

  const getLetterStatuses = () => {
    return word.split('').map((letter, i) => {
      return {
        index: i,
        letter: letter,
        status: !solution.includes(letter)
          ? 'incorrect'
          : letter === solution[i]
          ? 'correct'
          : 'present',
      };
    });
  };

  return {
    correct: word === solution,
    letters: getLetterStatuses(),
  };
};

module.exports = { randomWord, randomUniqueWord, sanitizeWord, validateWord };
