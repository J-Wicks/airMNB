import numpy as np
import pandas as pd
import sys

from sklearn.feature_extraction.text import CountVectorizer;
from sklearn.feature_extraction.text import TfidfTransformer;
from sklearn.naive_bayes import MultinomialNB;
import pythonSource;

authorVectorizer = CountVectorizer()
tfidf = TfidfTransformer()


data = pythonSource.writings
dataset = pd.DataFrame(data)

#print(dataset.writings)

### GENDER

# Buckets are 'Man', 'Woman', 'Other'

# writerVectorizer = CountVectorizer()

# Set variables to bucket alike-categories
# man = ['Cis_Man']
# woman = ['Cis_Woman']

# Regex for everything not caught by the defined buckets
# regex = '^((?!(^Man$|^Woman$|^Other$)).).+$'

# Removes 'unspecified' since they are unknowable features
# and buckets all others into 'Man', 'Woman', and 'Other'
# for model fitting
# genderData = dataset[dataset.gender != 'unspecified']
# genderData['gender'] = genderData['gender'].replace(man, 'Man')
# genderData['gender'] = genderData['gender'].replace(woman, 'Woman')
# genderData['gender'] = genderData['gender'].replace(
#    to_replace=regex,
#    value='Other',
#    regex=True
#)
# Set variables to train the genderModel and predict
XAuthor = tfidf.fit_transform(authorVectorizer.fit_transform(dataset.writing))
yAuthor = dataset.author

authorTest = tfidf.transform(authorVectorizer.transform([sys.argv[1]]))

# Train the genderModel and predict the submitted string
# from sklearn.naive_bayes import MultinomialNB

authorModel = MultinomialNB().fit(XAuthor, yAuthor)
authorPrediction = authorModel.predict(authorTest)
authorProbs = authorModel.predict_proba(authorTest)

print([authorPrediction, authorProbs]);

