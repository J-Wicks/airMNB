const utils = require('./utils');
const _ = require('lodash');

// dry this out

const MultinomialNB = function MultinomialNB (options) {
  const fit = (model, words) => ({
    predictProbability: (doc) => {
      const $doc = doc.toLowerCase();
      const docTokens = Object.keys(utils.tokenize($doc));
      const docVocab = _.intersection(docTokens, words);
      const probabilities = Array(model.data[0].length).fill(0);
      const tokenScores = utils.getTokenCounts(model.data);
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
    predict: (doc) => {
      const $doc = doc.toLowerCase().replace(/[^a-zA-Z ]/g, '');
      const docTokens = Object.keys(utils.tokenize($doc));
      const docVocab = _.intersection(docTokens, words);
      const probabilities = Array(model.data[0].length).fill(0);
      const tokenScores = utils.getTokenCounts(model.data);
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
  });
  return {fit};
};

module.exports = MultinomialNB;
