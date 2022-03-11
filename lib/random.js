const seedrandom = require('seedrandom');

const numberBetween = (min, max, seed) => {
  const rng = seedrandom(seed);

  return Math.floor(rng() * (max - min + 1) + min);
};

const uniqueNumberBetween = (min, max, prev, seed) => {
  const num = numberBetween(min, max, seed);

  return num === prev ? uniqueNumberBetween(min, max, prev, seed) : num;
};

module.exports = { numberBetween, uniqueNumberBetween };
