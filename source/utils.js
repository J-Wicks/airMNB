const utilFunctions = {};
const _ = require('lodash');

utilFunctions.extractVocab = function (dataset) {
  const newDataset = dataset.map(dataObj => dataObj.writing);
  return newDataset;
};

utilFunctions.countDocs = function (dataset, specClass) {
  let newDataSet = dataset;
  if (specClass) {
    newDataSet = dataset.filter(dataObj => dataObj.type === specClass);
  }
  return newDataSet.length;
};

utilFunctions.collectTexts = function (dataset, specClass) {
  let newDataSet = dataset.filter(dataObj => dataObj.type === specClass);
  newDataSet = newDataSet.map(dataObj => dataObj.writing).join(' ');
  return newDataSet;
};

utilFunctions.tokenize = function (vocab) {
  const countsObj = {};
  const newVocab = vocab.split(' ');
  newVocab.forEach((word) => {
    const newWord = word.replace(/[^a-zA-Z ]/g, '');
    countsObj[newWord] = 0;
  });
  return countsObj;
};

utilFunctions.countToken = function (dataset, token) {
  const countsObj = {};
  const newDataSet = utilFunctions.collectTexts(dataset, token).split(' ');
  newDataSet.forEach((word) => {
    const newWord = word.replace(/[^a-zA-Z ]/g, '');
    if (!countsObj[newWord]) {
      countsObj[newWord] = 1;
    } else countsObj[newWord] += 1;
  });
  delete countsObj[''];
  return [countsObj[token], countsObj];
};

utilFunctions.gatherClasses = function (dataset) {
  const uniqueClasses = _.uniqBy(dataset, object => object.type);
  return uniqueClasses.map(entry => entry.type);
};

module.exports = utilFunctions;
