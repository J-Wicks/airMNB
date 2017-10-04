// Options to add
// strip_accents
// analyzer (word, char(ngrams))
// stop_words (take array of words to ignore)
// lowercase
// max_df
// min_df
// binary (set all non-zer counts to one)

// Methods to add
// get_feature_names
// get_stop_words
// fit_transform

const CountVectorizer = () => {
  const fitter = () => ({
    fit: (iterableSamples) => {
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
    transform: (fitted) => {
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
      return {data: transformed, labels: tokens, classes: fitted.classes};
    },
  });

  return Object.assign({}, fitter(), transformer());
};

module.exports = CountVectorizer;
