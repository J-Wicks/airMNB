const utils = require('./utils');
const _ = require('lodash');

const MultinomialNB = (options) => {
  const fit = (model, words) => ({
    predict: (doc) => {
      const $doc = doc.toLowerCase();
      const docTokens = Object.keys(utils.tokenize($doc));
      const docVocab = _.intersection(docTokens, words);
      const probabilities = Array(model.data[0].length).fill(0);
      const tokenScores = utils.getTokenCounts(model.data);
      // create an array with as many elements as there are in model[0]
      // for every word in docVocab, find the probability from model
      // add that probability to the value in the corresponding position in the array
      docVocab.forEach((term) => {
        const row = words.indexOf(term);
        model.data[row].forEach((probab, idx) => {
          probabilities[idx] += probab;
        });
      });
      const scores = probabilities.map((sumScores, idx) => sumScores / tokenScores[idx]);
      const maxIndex = scores.indexOf(Math.max(...scores));
      return model.classes[maxIndex];
    },
    predictProbability: (doc) => {
      const $doc = doc.toLowerCase();
      const docTokens = Object.keys(utils.tokenize($doc));
      const docVocab = _.intersection(docTokens, words);
      const probabilities = Array(model.data[0].length).fill(0);
      const tokenScores = utils.getTokenCounts(model.data);
      // create an array with as many elements as there are in model[0]
      // for every word in docVocab, find the probability from model
      // add that probability to the value in the corresponding position in the array
      docVocab.forEach((term) => {
        const row = words.indexOf(term);
        model.data[row].forEach((probab, idx) => {
          probabilities[idx] += probab;
        });
      });
      return probabilities.map((sumScores, idx) => {
        return sumScores / tokenScores[idx];
      });
    },
  });
  return {fit};
};

module.exports = MultinomialNB;
