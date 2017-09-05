// http://scikit-learn.org/stable/modules/generated/sklearn.feature_extraction.text.TfidfTransformer.html#sklearn.feature_extraction.text.TfidfTransformer

/*
The formula that is used to compute the tf-idf of term t is 

tf-idf(d, t) = tf(t) * idf(d, t)

and the idf is computed as 
idf(d, t) = log [ n / df(d, t) ] + 1 (if smooth_idf=False)

where n is the total number of documents and df(d, t) is the document frequency
the document frequency is the number of documents d that contain term t. 
The effect of adding “1” to the idf in the equation above is that terms with zero idf
i.e., terms that occur in all documents in a training set, will not be entirely ignored. 

(Note that the idf formula above differs from the standard textbook notation that defines the idf 
as idf(d, t) = log [ n / (df(d, t) + 1) ]).
*/

// n = length of first array

// tfidf fit_transform should take a transformed (countvectorizer.transform()) matrix
// should return a matrix with a bunch of logarithmic values

const fitTransform = (termDocMatrix) => {
  const numDocs = termDocMatrix.data[0].length;
  const tfIdfMatrix = termDocMatrix.data.map((array) => {
    const docsWithTerm = array.filter(val => val).length;
    return array.map(value => value * (Math.log(numDocs / docsWithTerm)));
  });
  return Object.assign({}, {data: tfIdfMatrix}, {classes: termDocMatrix.classes, labels: termDocMatrix.labels});
};

module.exports = fitTransform;
