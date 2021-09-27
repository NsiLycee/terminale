"""
    Auteur  :   Mathieu Palosse
    Date    :   2020/10/06
    But     :   implémenter de manière récursive l'algorithme d'Euclide
                pour calculer le PGCD

    Sources : http://villemin.gerard.free.fr/ThNbDemo/AlgoEucl.htm

"""

def monPGCD(a:int,b:int) ->int :
    """
    a et b sont des entiers
    # Condition terminale d'arrêt : le pgcd est le dernier reste non nul
    Algorithme d'Euclide en version récursive
    """
    assert type(a) is int and type(b) is int , "les deux paramètres de la fonction doivent être des entiers !"
    if b==0:
        return a

    # Appel récurssif utilisant la propriété mathématique :
    # PGCD (a,b) = PGCD (b,r) où r est le reste de la division euclidienne
    # de a par b
    else:
        return monPGCD(b, a % b)

def PGCD (a:int,b:int, debug = False) ->int :
    """
    a et b sont des entiers
    # Condition terminale d'arrêt : le pgcd est le dernier reste non nul
    Algorithme d'Euclide en version NON récursive
    debug == True permet d'afficher les résultats intermédiaires

A := 8136:
B := 492:
C := 1:
while C != 0 :
         C = A % B
         A = B
         B = C
    """
    c = 1
    while c != 0 :
        c = a % b
        if debug : print("a = ", a, " b = ", b, " reste de ", a, " // ", b, " = ", pgcd)
        a = b
        b = c

    return a

if __name__ == "__main__" :
    """
    Exécuté seulement si ce module n'est pas importé
    """
    print("PGCD de ", 120, " et ", 48, " = monPGCD : ", monPGCD(120,48), " non récursif", PGCD(120,48))
    # Test de la propriété de symétrie PGCD(a,b) = PGCD(b,a)

    assert monPGCD(120,48) == monPGCD(48,120), "Erreur symétrie avec 120 et 48"
    assert monPGCD(120,0)==monPGCD(0,120), "Erreur symétrie avec 120 et 0"

    # Test de la propriété PGCD (a,0) = a :

    assert monPGCD(120,0)== 120, "Erreur valeur avec 120 et 0"

    # Test de valeurs :

    assert monPGCD(120,48) == 24, "Erreur valeur avec 120 et 48"

"""
from lycee import pgcd

assert monPGCD(120,48) == pgcd(120,48), "Erreur valeur avec 120 et 48 et pgcd du module lycee"
"""
