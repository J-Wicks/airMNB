const data = require('../test/countVectorizerData');
const utils = require('./utils');
// const allClasses = utils.gatherClasses(data);
const classifyMNB = require('./trainMNB');
const CountVectorizer = require('./CountVectorizer');
const tfidfFitTransform = require('./tfidfTransformer');
// const text = `He had decided long ago that no Situation had any objective reality: it only existed in the minds of those who happened to be in on it at any specific moment. Since these several minds tended to form a sum total or complex more mongrel than homogeneous, The Situation must necessarily appear to a single observer much like a diagram in four dimensions to an eye conditioned to seeing the world in only three. Hence the success or failure of any diplomatic issue must vary directly with the degree of rapport achieved by the team confronting it. …it was a neat theory, and he was in love with it. The only consolation he drew from the present chaos was that his theory managed to explain it.`


const fittedData = (CountVectorizer().fit(data));


// fittedData
// object with properties (tokens) and the counts of these tokens in each sample {className: count}
// also returns classes
// // fine for now
// console.log(fittedData);


//CountVectorizer().fit_transform(data) -- Not yet defined
// // // returns a term-document matrix
// console.log(CountVectorizer().transform(fittedData).data);

// fittedData.labels = inorder list of tokens to be used as Y axis for classifyMNB
// fittedData.data = document matrix

const fitTransformed = CountVectorizer().transform(fittedData);
// transform takes a fitted data model and turns it into a matrix of token counts as .data
// also returns an array of token names in the same order as the matrix as .labels

// console.log(tfidfFitTransform(fitTransformed.data));
// console.log(fitTransformed);
console.log(classifyMNB(tfidfFitTransform(fitTransformed.data), fitTransformed.labels)('Microbe Mistake Died'));

//tfidfFitTransform returns a matrix of term frequency inverse document frequency weights
// in same order as cv().transform

