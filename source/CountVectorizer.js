
const data = require('../test/countVectorizerData');

// should countVectorizer take an optional argument data, so that all functions use this data if it was provided?

const CountVectorizer = () => {

  const fitter = () => ({
    fit: (iterableSamples, options) => {
      const masterArray = Object.keys(iterableSamples);
      let iterableArray = masterArray.filter(word => word.length >= 2 && word !== '');
      iterableArray = iterableArray.map(word => word.toLowerCase());
      const countsObj = {};
      iterableArray.forEach((classifier) => {
        const newVocab = iterableSamples[classifier].split(' ');
        newVocab.forEach((word) => {
          const newWord = word.replace(/[^a-zA-Z ]/g, '').toLowerCase();
          if(!countsObj[newWord]){
            countsObj[newWord] = {};
            countsObj[newWord][classifier] = 1;
          } else { !countsObj[newWord][classifier] ? countsObj[newWord][classifier] = 1 : countsObj[newWord][classifier] += 1};
        });
      });

      delete countsObj[''];
      // figure out how to pull all classes from countsObj, get rid of classes
      // also this probably isn't what fit is supposed to do
      //so this should probably be part of transformer
      return {fittedModel: countsObj, classes: iterableArray};
    },

  });

  const transformer = () => ({
    transform: (fitted, options) => {
      const tokens = Object.keys(fitted.fittedModel);
      const currClasses = fitted.classes;

      const transformed = [];
      tokens.forEach((token) => {
        const countsByClass = [];
        currClasses.forEach((_class) => {
          countsByClass.push(fitted.fittedModel[token][_class] || 0);
        });
        transformed.push(countsByClass);
      });
      return {data: transformed, labels: tokens};
    },
  });

  return Object.assign({}, fitter(), transformer());
};

// const fittedData = CountVectorizer().transform(CountVectorizer().fit(data)).labels;
// console.log(fittedData);

module.exports = CountVectorizer;
