const data = require('../test/data');
const utils = require('./utils');

// Data = array of objects {class, writing}
// console.log(utils.gatherClasses(data));

const C = utils.gatherClasses(data);

const trainMultiDB = (classes, dataset) => {
  const conditionalProbabilities = {};
  const prior = {};
  const vocab = Object.keys(utils.tokenize(utils.extractVocab(dataset).join(' ')));
  const N = utils.countDocs(dataset);

  // console.log(V)

  classes.forEach((currClass) => {
    // console.log(currClass)
    const classDocsN = utils.countDocs(dataset, currClass);
    const textsOfClass = utils.collectTexts(dataset, currClass);
    // this should be an object with all of the tokens in this text and their counts;
    const tokensCountsOfClass = utils.tokenCounts(textsOfClass);
    prior[currClass] = classDocsN / N;

    vocab.forEach((word) => {
      conditionalProbabilities[word] = conditionalProbabilities[word] || [];
      conditionalProbabilities[word].push({class: currClass, probability: 0});
    });

  });
  // console.log(conditionalProbabilities.the);
};

trainMultiDB(C, data);
