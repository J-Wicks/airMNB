const data = require('../test/countVectorizerData');


// This needs to be cleaned up
function fit (iterableSamples, options) {
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
  return countsObj;
}

console.log(fit(data));
