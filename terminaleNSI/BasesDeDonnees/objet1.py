class OBJET1 :
    def __init__(self):
        self._O2 = OBJET2()

class OBJET2 :
    def __init__(self):
        self._O1 = OBJET1()

if __name__ == '__main__' :
    """
    produit une erreur de recursion
     File "C:/Users/Violette/SitesWeb/terminaleNSI/BasesDeDonnees/objet1.py", line 7, in __init__
    self._O1 = OBJET1()
  File "C:/Users/Violette/SitesWeb/terminaleNSI/BasesDeDonnees/objet1.py", line 3, in __init__
    self._O2 = OBJET2()
RecursionError: maximum recursion depth exceeded
    """
    O = OBJET1()

