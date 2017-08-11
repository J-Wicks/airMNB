const data = require('../test/data');
const utils = require('./utils');

// Data = array of objects {class, writing}
// console.log(utils.gatherClasses(data));

const C = utils.gatherClasses(data)

const trainMultiDB = (classes, dataset) =>{
  const prior = {};
  const V = utils.extractVocab(dataset).join(' ');
  const N = utils.countDocs(dataset);

  console.log(utils.tokenize(V))
  
  classes.forEach(_class =>{
    const classDocsN = utils.countDocs(dataset,_class);
    prior[_class] = classDocsN/N;

  })
}


trainMultiDB(C, data)