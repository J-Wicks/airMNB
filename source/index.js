const data = require('../test/data');
const utils = require('./utils');

// Data = array of objects {class, writing}
// console.log(utils.gatherClasses(data));

const C = utils.gatherClasses(data)

const trainMultiDB = (classes, dataset) =>{
  const prior = {};
  const V = utils.tokenize(utils.extractVocab(dataset).join(' '));
  const N = utils.countDocs(dataset);

  // console.log(V)

  classes.forEach(_class =>{
    const classDocsN = utils.countDocs(dataset,_class);
    const textsOfClass = utils.collectTexts(dataset, _class);
    // this should be an object with all of the tokens in this text and their counts;
    const tokensCountsOfClass = utils.tokenCounts(textsOfClass)

    prior[_class] = classDocsN/N;

    console.log(tokensCountsOfClass)
  })

}


trainMultiDB(C, data)