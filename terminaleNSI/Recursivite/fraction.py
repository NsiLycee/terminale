"""
    Auteur  :   Joël Dendaletche
    Date    :   2020/10/06
    But     :   programmer en POO l'objet fraction

    autre solution : https://stackoverflow.com/questions/36539460/implementing-negation-by-overriding-neg-in-python
"""
from PGCDrecur import PGCD

class Fraction :
    """
    Classe qui traite des nombres rationnels de forme :
            numerateur : int
                /
            denominateur : int
    """
    def __init__ (self, numerateur, denominateur) :
        """
        Constructeur de l'objet Fraction à partir de deux valeurs :
            - numerateur : int
            - denominateur : int
        Les deux valeurs doivent être entières ou décimales et réductibles à
        des entiers (0.5 / 1.5 = 1 / 3 par exemple)
        """
        try :
            assert denominateur != 0, "Attention " + str(numerateur) + " / 0 n'est pas permis !"
            if type(numerateur) is float or type(denominateur) is float :
                (n1, d1) = (numerateur*1.0).as_integer_ratio()
                (n2, d2) = (denominateur*1.0).as_integer_ratio()
                n = n1*d2
                d = n2*d1
                pgcd = PGCD(n,d)
                self.numerateur   = n // pgcd
                self.denominateur = d // pgcd
                self._numReduit   = self.numerateur
                self._denomReduit = self.denominateur
                self._pgcd = 1
            else :
                self.numerateur = numerateur
                self.denominateur = denominateur
                self._pgcd = PGCD(numerateur,denominateur)
                self._numReduit   = numerateur   // self._pgcd
                self._denomReduit = denominateur // self._pgcd
        except : print( "division de " + str(numerateur) + " par 0 impossible !")

    def dump (self, reduit = False) -> str :
        """
        dump (self, reduit = False) -> str affiche la fraction
        reduit est par défaut à False
        sinon affiche la forme réduite de la fraction
        """
        if reduit :
            return " " + str(self._numReduit) + " / " + str( self._denomReduit) + " "
        else :
            return " " +str( self.numerateur)+ " / " + str( self.denominateur)+ " "

    def __str__ (self) :
        """
        écriture de l'objet Fraction sous la forme :
            numerateur / denominateur
        """
        if self.denominateur == 1 : return " " +  str(self.numerateur)+ " "
        return " " +  str(self.numerateur)+ " / " + str( self.denominateur)+ " "

    def __gt__ (self, autreF) -> bool :
        """
        comparaison : self est-il strictement plus grand que autreF ?
        réduction au même dénominateur puis comparaison des numérateurs
        gt : greater than
        """
        return self._numReduit*autreF._denomReduit > autreF._numReduit*self._denomReduit

    def __lt__ (self, autreF) -> bool : # less than
        """
        comparaison : self est-il strictement moins grand que autreF ?
        réduction au même dénominateur puis comparaison des numérateurs
        lt : lesser than
        """
        return autreF > self

    def __eq__ (self, autreF) -> bool : # equl
        """
        comparaison : self est-il égal à autreF ?
        réduction au même dénominateur puis comparaison des numérateurs
        eq : equal
        """
        return self._numReduit == autreF._numReduit and self._denomReduit == autreF._denomReduit

    def __le__(self, autreF) : # less equal
        """
        comparaison : self est-il moins grand ou égal à autreF ?
        réduction au même dénominateur puis comparaison des numérateurs
        le : lesser equal
        """
        return self < autreF or self == autreF

    def __ge__(self, autreF) : # great equal
        """ comparaison : self est-il plus grand ou égal à autreF ?
        réduction au même dénominateur puis comparaison des numérateurs
        ge : greater equal
        """
        return self > autreF or self == autreF

    def __ne__(self, autreF) : # not equal
        """ comparaison : self est-il différent de autreF ?
        réduction au même dénominateur puis comparaison des numérateurs
        ne : non equal
        """
        return not(self == autreF)

    def __add__(self, autreF): # +
        """ surcharge de l'addition
        Réduction au même dénominateur puis addition des numérateurs
        Le résultat est la forme réduite
        """
        num = self._numReduit*autreF._denomReduit + self._denomReduit*autreF._numReduit
        den = self._denomReduit * autreF._denomReduit
        p = PGCD(num, den)
        if p != 1 :
            num /= p
            den /= p
        return Fraction(num, den)

    def __neg__(self): # opposé
        """ surcharge de l'opposé d'un nombre
        Le résultat est l'opposé
        """
        if self._denomReduit < 0 :
            self._denomReduit = -self._denomReduit
        else : self._numReduit =  -self._numReduit
        return Fraction(self._numReduit, self._denomReduit)

    """def __sub__(self, autreF):
        num = self._numReduit*autreF._denomReduit - self._denomReduit*autreF._numReduit
        den = self._denomReduit * autreF._denomReduit
        p = PGCD(num, den)
        if p != 1 :
            num /= p
            den /= p
        return Fraction(num, den)"""
    def __sub__(self, autreF): # - : addition de l'opposé du second membre
        """ surcharge de la soustraction
        La soustraction est l'addition de self à l'opposé de autreF
        """
        return self + (-autreF)

    def inv(self) : # get
        """
        méthode qui renvoie l'inverse de la Fraction
        """
        return Fraction(self._denomReduit, self._numReduit)

    def __mul__(self, autreF):
        """ surcharge de la multiplication
        Le résultat est la forme réduite du produit des numérateurs par le
        produit des dénominateurs
        """
        num = self._numReduit*autreF._numReduit
        den = self._denomReduit * autreF._denomReduit
        p = PGCD(num, den)
        if p != 1 :
            num /= p
            den /= p
        return Fraction(num, den)

    def __rmul__(self, autreF): # commutativité
        """
        Opération commutative de la multiplication
        """
        return(self.__mul__(autreF, self))

    def __truediv__(self, autreF):
        """
        Surcharge de la division
        Le résultat est la forme réduite
        """
        num = self._numReduit   * autreF._denomReduit
        den = self._denomReduit * autreF._numReduit
        p = PGCD(num, den)
        if p != 1 :
            num /= p
            den /= p
        return Fraction(int(num), int(den))

    __rtruediv__ = __truediv__
    """
        Opération commutative de la multiplication
    """

    def __pow__ (self, exposant : int) : #https://www.programcreek.com/python/example/84548/operator.__pow__
        """ Surcharge de la puissance entière
        """
        assert type(self._numReduit**exposant) is int, "Un rationnel doit le rester"
        assert type(self._denomReduit**exposant) is int, "Un rationnel doit le rester"
        if self.isInt() : return Fraction (self._numReduit**exposant, 1)
        return Fraction(self._numReduit**exposant, self._denomReduit**exposant)

    def isInt (self) :
        """
        Teste si la fraction est réductible à un entier non rationnel
        """
        return self._denomReduit == 1

if __name__ == "__main__" :

    f0 = Fraction(1024, 0)  # erreur !

    f1 = Fraction(1024,512)
    f1.dump()
    f1.dump(reduit=True)

    f2 = Fraction(2,1)
    print("f1 = ", f1.dump(), " f2 = ", f2.dump())
    print("f1 = ", f1.dump(reduit=True), " f2 = ", f2.dump(reduit=True))

    if f1 == f2 : print("f1 = f2")
    print(f1, " + ", f2, " = ", f1+f2)
    print(f1, " x ", f2, " = ", f1*f2)
    print(f1, " / ", f2, " = ", f1/f2)
    print(f1, " - ", f2, " = ", f1-f2)
    print(f1, " ^ ", 4, " = ", f1**4)
    print("opposé de ", f1, " = ",-f1)

    f3 = Fraction(3,12)
    f4 = Fraction(9,13)
    print(f3, " + ", f4, "^2 = ", f3 + f4**2)

    f5 = Fraction(3,5)
    f6 = Fraction(4,5)
    print("(" , f5 , ")^2 / (", f6, ")^2 = ", f5**2 / f6**2)
    print("(" , f5 , ")^2 + (", f6, ")^2 = ", f5**2 + f6**2," Vive pythagore !")

    print("(" , f5 , ")^2 > (", f6, ")^2 = ", f5**2 > f6**2)
    print("(" , f5 , ")^2 >= (", f6, ")^2 = ", f5**2 >= f6**2)
    print("(" , f5 , ")^2 == (", f6, ")^2 = ", f5**2 == f6**2)
    print("(" , f5 , ")^2 != (", f6, ")^2 = ", f5**2 != f6**2)
    print("(" , f5 , ")^2 < (", f6, ")^2 = ", f5**2 < f6**2)
    print("(" , f5 , ")^2 <= (", f6, ")^2 = ", f5**2 <= f6**2)

    f7 = Fraction(3**(1/3),2**0.5)
    print ("Fraction(3**(1/3),2**0.5) = ",f7)

    dir(Fraction)
    help(Fraction)
    """
    Exécuté seulement si ce module n'est pas importé
    """
