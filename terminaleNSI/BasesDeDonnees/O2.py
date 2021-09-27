from O1 import *

class OBJET2 :
    def __init__(self):
        self._O1 = OBJET1()

if __name__ == '__main__' :
    """
    produit une erreur de reference
  File "C:/Users/Violette/SitesWeb/terminaleNSI/BasesDeDonnees/O2.py", line 5, in __init__
    self._O1 = OBJET1()
  File "C:\Users\Violette\SitesWeb\terminaleNSI\BasesDeDonnees\O1.py", line 5, in __init__
    self._O2 = OBJET2()
NameError: name 'OBJET2' is not defined
    """
    O = OBJET2()