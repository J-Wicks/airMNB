import numpy as np
import pandas as pd
import sys

from sklearn.feature_extraction.text import CountVectorizer;
from sklearn.feature_extraction.text import TfidfTransformer
import pythonSource;

genderVectorizer = CountVectorizer()
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
XGender = tfidf.fit_transform(genderVectorizer.fit_transform(dataset.writing))
print(XGender)
#print(XGender)
# yGender = gdf.gender
# print(XGender, yGender)
# genderTest = tfidf.transform(genderVectorizer.transform(['im a big baby']))

# Train the genderModel and predict the submitted string
# from sklearn.naive_bayes import MultinomialNB

# genderModel = MultinomialNB().fit(XGender, yGender)
# genderPrediction = genderModel.predict(genderTest)
# genderProbs = genderModel.predict_proba(genderTest)

# print('is this working')
