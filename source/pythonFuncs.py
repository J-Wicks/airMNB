import numpy as np
import pandas as pd
import sys

from sklearn.feature_extraction.text import CountVectorizer;
from sklearn.feature_extraction.text import TfidfTransformer
import pythonSource;

genderVectorizer = CountVectorizer()
tfidf = TfidfTransformer()

url = 'http://localhost:8080/api/allData'
dataset = pd.read_json(url)
genderData = dataset[dataset.gender != 'unspecified']
man = ['Cis_Man']
woman = ['Cis_Woman']
genderData['gender'] = genderData['gender'].replace(man, 'Man')
genderData['gender'] = genderData['gender'].replace(woman, 'Woman')
gdf = genderData.drop(['orientation', 'race'], 1)
# dataset is a matrix like thing of class info and writing sample
# print (genderVectorizer.fit(gdf.writing))
# print(gdf.writing)

XGender = tfidf.fit_transform(genderVectorizer.fit_transform([2, 3]))
print(XGender)
# gdf['gender'] represents the class name, in order
# this is passed to the MultiNomialNB().fit learner as the 2nd argument (y-axis)
# the x-axis is the tfidf fit of the countvectorizer fit_transform of the samples
# these apparently must be in the same order as the y-axis argument
# print(gdf['gender'])