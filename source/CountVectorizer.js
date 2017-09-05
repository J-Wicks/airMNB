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
          if (!countsObj[newWord]) {
            countsObj[newWord] = {};
            countsObj[newWord][classifier] = 1;
          } else {
            !countsObj[newWord][classifier] ?
              countsObj[newWord][classifier] = 1
              : countsObj[newWord][classifier] += 1;
          }
        });
      });

      delete countsObj[''];
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
        currClasses.forEach(($class) => {
          countsByClass.push(fitted.fittedModel[token][$class] || 0);
        });
        transformed.push(countsByClass);
      });
      return {data: transformed, labels: tokens};
    },
  });

  return Object.assign({}, fitter(), transformer());
};

module.exports = CountVectorizer;
