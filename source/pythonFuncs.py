import numpy as np
import pandas as pd
import sys

from sklearn.feature_extraction.text import CountVectorizer;
import pythonSource;

print(CountVectorizer().get_feature_names(pythonSource.writings))