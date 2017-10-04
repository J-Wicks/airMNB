# Creating your model

  ## countVectorizer()
  Returns two functions, fit and transform. 
  
  ### fit()
    Takes an array of objects with a type and writing property. Type will correspond to the class name associated with the writing, while writing will be the text itself. Returns an object with properties for each word in the corpus. Punctuation is removed and words are transformed into lower case. Each property contains an object with properties corresponding to class names and values indicating how many times this word appears in the class vocabulary.
  ### transform()
    Transform takes a fitted model and returns an object with 3 properties
      - data: A matrix with word count by class
      - labels: inorder labels for the words in the matrix (y-axis)
      - classes: inorder labels for hte classes in the matrix (x-axis)
  
  ## tfidfTransformer()
    Returns one function
  ### tfidfFitTransform()
    Takes a count vectorizer fit-transformed model as an argument. Flattens the impact that a token appearing very frequenly in a corpus will have on the weighing of a given sample, as these words are less informative than those that appear less frequently.
  
# Testing your sample

  ## classifyMNB()
    Returns the fit function. This function takes a tfidf transformed model and the y-axis labels for that model (the tokens). It returns two functions:

  ### predict()
    Takes a string as an argument. Predict will return the class that the string has the highest % match rate. 
  ### predictProbability()
    Takes a string as an argument. predictProbability will return an array of the match rates for each class. This array will be in the same order as the "classes" from the transform function.
