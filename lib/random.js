const numberBetween = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const uniqueNumberBetween = (min, max, prev) => {
  const num = numberBetween(min, max);

  return num === prev ? uniqueNumberBetween(min, max, prev) : num;
};

module.exports = { numberBetween, uniqueNumberBetween };
