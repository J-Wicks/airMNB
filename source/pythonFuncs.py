import numpy as np
import pandas as pd
import sys

from sklearn.feature_extraction.text import CountVectorizer;
import pythonSource;

print(CountVectorizer().fit_transform(pythonSource.writings).toarray())