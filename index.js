const countVectorizer = require('./source/CountVectorizer');
const classifyMNB = require('./source/trainMNB');
const tfidfFitTransform = require('./source/tfidfTransformer');


module.exports = {
  countVectorizer,
  classifyMNB,
  tfidfFitTransform,
}