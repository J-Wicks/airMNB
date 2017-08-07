const utilFunctions = {};

utilFunctions.extractVocab = function (dataset) {
  const newDataset = dataset.map(dataObj => dataObj.writing);
  return newDataset;
};

utilFunctions.countDocs = function (dataset) {
  return dataset.length;
};
