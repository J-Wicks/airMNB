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
const testString = `“The question,” old Castel cut in almost rudely, “is to know whether it's a plague or not.”

Two or three of the doctors present protested. The others seemed to hesitate. The Prefect gave a start and hurriedly glanced toward the door to make sure it had prevented this outrageous remark from being overheard in the corridor. Richard said that in his opinion the great thing was not to take an alarmist view. All that could be said at present was that we had to deal with a special type of fever, with inguinal complications; in medical science, as in daily life, it was unwise to jump to conclusions.

Rieux, who had said nothing so far, was asked for his opinion. “We are dealing,” he said, “with a fever of typhoidal nature, accompanied by vomiting and buboes. I have incised these buboes and had the pus analyzed; our laboratory analyst believes he has identified the plague bacillus. But I am bound to add that there are specific modifications that don't quite tally with the classical description of the plague bacillus.”
`;

console.log(classifyMNB().fit(tfidfTransformed, labels).predict(testString));

console.log(classifyMNB().fit(tfidfTransformed, labels).predictProbability(testString));
// tfidfFitTransform returns a matrix of term frequency inverse document frequency weights
// in same order as cv().transform
 
