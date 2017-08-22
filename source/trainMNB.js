const utils = require('./utils');
const _ = require('lodash');

// should return a function "Fit"
// "Fit"
const trainMNB = (classes, dataset) => {
  const conditionalProbabilities = {};
  const prior = {};
  const vocab = Object.keys(utils.tokenize(utils.extractVocab(dataset).join(' ')));
  const N = utils.countDocs(dataset);

  classes.forEach((currClass) => {
    // console.log(currClass)
    const classDocsN = utils.countDocs(dataset, currClass);
    const textsOfClass = utils.collectTexts(dataset, currClass);
    // this should be an object with all of the tokens in this text and their counts;
    const tokensCountsOfClass = utils.tokenCounts(textsOfClass);
    prior[currClass] = classDocsN / N;

    vocab.forEach((word) => {
      conditionalProbabilities[word] = conditionalProbabilities[word] || [];
      conditionalProbabilities[word][currClass] = (tokensCountsOfClass[word] || 0 + 1) / (vocab.length || 0 + 1);
    });
  });
  // should return the classification function'
  const classifier = (doc) => {
    const docTokens = Object.keys(utils.tokenize(doc));
    const docVocab = _.intersection(docTokens, vocab);
    const score = {};
    classes.forEach((currClass) => {
      score[currClass] = Math.log(prior[currClass]);
      docVocab.forEach((vocabItem) => {
        score[currClass] += conditionalProbabilities[vocabItem][currClass];
      });
    });
    const predictedClass = _.max(Object.keys(score), o => score[o]);
    return [predictedClass, score[predictedClass]];
  };

  return classifier;
};

// trainMultiDB(C, data);

module.exports = trainMNB;
