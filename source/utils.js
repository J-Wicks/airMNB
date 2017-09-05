const utilFunctions = {};
const _ = require('lodash');

utilFunctions.extractVocab = (dataset) => {
  const newDataset = dataset.map(dataObj => dataObj.writing);
  return newDataset;
};

utilFunctions.countDocs = (dataset, specClass) => {
  let newDataSet = dataset;
  if (specClass) {
    newDataSet = dataset.filter(dataObj => dataObj.type === specClass);
  }
  return newDataSet.length;
};

utilFunctions.collectTexts = (dataset, specClass) => {
  let newDataSet = dataset;
  if (specClass) {
    newDataSet = dataset.filter(dataObj => dataObj.type === specClass);
  }

  newDataSet = newDataSet.map(dataObj => dataObj.writing).join(' ');
  return newDataSet;
};

utilFunctions.tokenize = (vocab) => {
  const countsObj = {};
  const newVocab = vocab.split(' ');
  newVocab.forEach((word) => {
    const newWord = word.replace(/[^a-zA-Z ]/g, '');
    countsObj[newWord] = 0;
  });
  delete countsObj[''];
  return countsObj;
};

utilFunctions.tokenCounts = (dataset) => {
  const countsObj = {};
  const newData = dataset.split(' ');
  // const newDataSet = utilFunctions.collectTexts(dataset, token).split(' ');
  newData.forEach((word) => {
    const newWord = word.replace(/[^a-zA-Z ]/g, '');
    if (!countsObj[newWord]) {
      countsObj[newWord] = 1;
    } else countsObj[newWord] += 1;
  });

  delete countsObj[''];
  return countsObj;
};

utilFunctions.gatherClasses = (dataset) => {
  const uniqueClasses = _.uniqBy(dataset, object => object.type);
  return uniqueClasses.map(entry => entry.type);
};

utilFunctions.getTokenCounts = (model) => {
  const tokenScores = [0, 0, 0];
  for (let i = 0; i < model[0].length; i += 1) {
    model.forEach((token) => {
      tokenScores[i] += token[i];
    });
  }
  return tokenScores;
};

module.exports = utilFunctions;
