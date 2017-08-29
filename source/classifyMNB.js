const data = require('../test/countVectorizerData');
const utils = require('./utils');
// const allClasses = utils.gatherClasses(data);
// const classifyMNB = require('./trainMNB')(allClasses, data);
const CountVectorizer = require('./CountVectorizer');
const tfidfFitTransform = require('./tfidfTransformer');
// const text = `He had decided long ago that no Situation had any objective reality: it only existed in the minds of those who happened to be in on it at any specific moment. Since these several minds tended to form a sum total or complex more mongrel than homogeneous, The Situation must necessarily appear to a single observer much like a diagram in four dimensions to an eye conditioned to seeing the world in only three. Hence the success or failure of any diplomatic issue must vary directly with the degree of rapport achieved by the team confronting it. …it was a neat theory, and he was in love with it. The only consolation he drew from the present chaos was that his theory managed to explain it.`


const fittedData = (CountVectorizer().fit(data));

// what should this return
//   "learn a vocabulary dictionary of all tokens in the raw documents"
//   that sounds like what it's doing...

// what does this return:
// object with properties (tokens) and the counts of these tokens in each sample {className: count}
// also returns classes
// // fine for now
// console.log(fittedData);

// // // what should this return?
// // // term-document matrix (Does this, see below)

// // // what does it return now?
// // // returns a matrix (2D array) of tokens
// // // also returns in-order labels
// // // console.log(CountVectorizer().fit_transform(data));
// console.log(CountVectorizer().transform(fittedData).data);

// // // what should this be?
// // // List of tokens, in same order as fit_transform
// // // what does it return?
// // // exactly that.
// console.log(CountVectorizer().transform(fittedData).labels);
const fitTransformed = CountVectorizer().transform(fittedData);

console.log(tfidfFitTransform(fitTransformed.data));
// console.log(trainMNB(C, data));
