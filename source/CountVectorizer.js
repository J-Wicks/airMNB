const data = require('../test/countVectorizerData');

const CountVectorizer = () => {

  const fitter = () => ({
    fit: (iterableSamples, options) => {
      const iterableArray = Object.keys(iterableSamples);
      const countsObj = {};
      iterableArray.forEach((classifier) => {
        const newVocab = iterableSamples[classifier].split(' ');
        newVocab.forEach((word) => {
          const newWord = word.replace(/[^a-zA-Z ]/g, '');
          if(!countsObj[newWord]){
            countsObj[newWord] = {};
            countsObj[newWord][classifier] = 1;
          } else { !countsObj[newWord][classifier] ? countsObj[newWord][classifier] = 1 : countsObj[newWord][classifier] += 1};
        });
      });

      delete countsObj[''];
      return {fittedModel: countsObj, classes: iterableArray};
    },

  });

  const transformer = () => ({
    transform: (fitted, options) => {
      const tokens = Object.keys(fitted.fittedModel);
      const classes = fitted.classes;

      const transformed = [];
      tokens.forEach((token) => {
        const countsByClass = [];
        classes.forEach((_class) => {
          countsByClass.push(fitted.fittedModel[token][_class] || 0);
        });
        transformed.push(countsByClass);
      });
      return transformed;
    },
  });

  return Object.assign({}, fitter(), transformer());
};

const fittedData = CountVectorizer().fit(data);
console.log(CountVectorizer().transform(fittedData));
