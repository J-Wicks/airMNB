const data = require('../test/countVectorizerData');
const utils = require('./utils');
const classifyMNB = require('./trainMNB');
const CountVectorizer = require('./CountVectorizer');
const tfidfFitTransform = require('./tfidfTransformer');

const fittedData = (CountVectorizer().fit(data));


// fittedData
// object with properties (tokens) and the counts of these tokens in each sample {className: count}
// also returns classes
// // fine for now
// console.log(fittedData);


// CountVectorizer().fit_transform(data) -- Not yet defined
// // // returns a term-document matrix
// console.log(CountVectorizer().transform(fittedData).data);

// fittedData.labels = inorder list of tokens to be used as Y axis for classifyMNB
// fittedData.data = document matrix

const fitTransformed = CountVectorizer().transform(fittedData);
// transform takes a fitted data model and turns it into a matrix of token counts as .data
// also returns an array of token names in the same order as the matrix as .labels

// console.log(tfidfFitTransform(fitTransformed.data));
// console.log(fitTransformed);
const tfidfTransformed = tfidfFitTransform(fitTransformed);
const labels = fitTransformed.labels;

console.log(classifyMNB().fit(tfidfTransformed, labels).predict('does this work'));

// tfidfFitTransform returns a matrix of term frequency inverse document frequency weights
// in same order as cv().transform

