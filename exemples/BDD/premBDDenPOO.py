"""
        Auteur : J. Dendaletche
        But : étudier un SGBD avec le module sqlite3
        Sources :
        1) https://docs.python.org/3/library/sqlite3.html
        2) https://stackoverflow.com/questions/2440147/how-to-check-the-existence-of-a-row-in-sqlite-with-python
        3) https://datatofish.com/create-database-python-using-sqlite3/
        4) https://www.sqlitetutorial.net/sqlite-python/creating-database/
        5) https://stackoverflow.com/questions/2887878/importing-a-csv-file-into-a-sqlite3-database-table-using-python

"""
# importation des fonctions de SGBD
import sqlite3

class BDD :
    def __init__(self, nomFichBDD : str = "", verbose : bool = False):
        """
        initialisation de l'objet BDD
        :param nomFichBDD: nom du fifhier .db s'il existe ou s'il faut le créer
        :param verbose: option à False par défaut. Si True chaque action est
        commentée ...

        """
        if nomFichBDD == "" :
            self._connexion = sqlite3.connect(":memory:")
            if verbose :
                print("La base de données est stockée en RAM (mémoire vive")
        else :
            self._connexion = sqlite3.connect(nomFichBDD)
        # le curseur est créé
        self._curseur = self._connexion.cursor()
        self.commentaires = verbose


    def end(self) :
        """
            méthode appelée pour terminer le travail sur la base de donnée
        """
        if self.commentaires :
            print("Les changements seront enregistrés puis la base fermée.")
        self._connexion.commit()
        self._connexion.close()

    def createTable (self, nomTable : str, *attributs : list) :
        """
        """
        requete ="CREATE TABLE " + nomTable + " ( "
        for att in  attributs :
            requete += att + ","
        # enlever la dernière virgule du tuple
        tailleRequete = len(requete)
        requete = requete[0:tailleRequete-1]
        #terminer l'écriture de la requete
        requete += " )"
        # exécuter la requète
        if self.commentaires : print(requete)
        self._curseur.execute(requete)



#con.row_factory = sqlite3.Row



def connexionBDD(nomFichier : str) :
    """
    Connexion non sécurisée à la base de données
    :param nomFichier:
    :return:
    """
    # si le fichier example.db n'existe pas, alors il est créé au même endroit
    # que le module qui le crée
    N = len(nomFichier)
    if nomFichier[N-3:] == '.db' :
        conn = sqlite3.connect(nomFichier)
        cursor = conn.cursor()
        return  cursor, conn
    else :
        print("erreur ! le nom du fichier ",nomFichier," doit finir par l'extension .db")
        return False, None

def convertCSVintoDBfile(tabCSV, nomFichierBDD, nomTable, debug = True) :
    # création du curseur (objet qui peut accéder aux éléments de la BDD
    cursor, conn = connexionBDD(nomFichierBDD)

    tabCSV.to_sql(nomTable, conn, if_exists='append', index=False)  # Insert the values from the csv file into the table

    if cursor != False :
        #get the count of tables with the name
        requete = " SELECT count(name) FROM sqlite_master WHERE type='table' AND name= '" + nomTable + "'"
        cursor.execute(requete)

        #if the count is 1, then table exists
        if cursor.fetchone()[0]==1 : {
            print('La table ',nomFichierBDD,' existe déjà.')
        }
        else :
        # créer la table
            requete = "CREATE TABLE '" + nomTable + "' ("
            if debug :
                print("listeAttributs = ", listeAttributs)
            for nomAttribut in listeAttributs :
                requete += nomAttribut + " text,"        # toutes les données sont du texte (pour simplifier)
            requete = requete[0:len(requete)-1] + ')'   # enlève la dernière virgule en trop et ajoute )
            if debug: print(requete)
            cursor.execute(requete)

        # Insert a row of data  : curseur.execute("Insert into students (nom,email,age) values (?,?,?)",(nom, email, age))
        degre = len(listeAttributs) # pas utilisé

        for enregistrement in BDD :
            valeurs = ''
            for val in enregistrement.values() :
                valeurs += '"' + val + '" ,'
            valeurs = valeurs[0:len(valeurs) - 1]   # enlève la dernière virgule en trop
            requete = 'INSERT INTO ' + nomTable + ' VALUES (' + valeurs + ')'
            if debug : print(requete)
            cursor.execute(requete)
    return conn

if __name__ == '__main__' :
    #tabCSV = lireCSV("BDD.csv") est remplacé par l'utilisation le l'objet pd (du module panda)
    maBDD = BDD(verbose=True)
    maBDD.createTable("classe","nom char(30)", "clef int", "sexe char(1)")
    maBDD.end()
