const Writings = require('./writings');

const animalData = [];

const pynchon = {
  type: 'pynchon',
  writing: Writings.pynchon,
};

const dillard = {
  type: 'dillard',
  writing: Writings.dillard,
};

const camus = {
  type: 'camus',
  writing: Writings.camus,
};


animalData.push(pynchon, dillard, camus);

module.exports = animalData;
