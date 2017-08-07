const Writings = require('./writings');

const animalData = [];

const dog = {
  type: 'dog',
  writing: Writings.dog,
};

const cat = {
  type: 'cat',
  writing: Writings.cat,
};

const pig = {
  type: 'pig',
  writing: Writings.pig,
};

const monkey = {
  type: 'monkey',
  writing: Writings.monkey,
};

animalData.push(dog, cat, pig, monkey);

module.exports = animalData;
