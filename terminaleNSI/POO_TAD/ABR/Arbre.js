/*
 * 
 * 
 * 
 *                Définition de l'objet Arbre
 * 					
 * 				   arbre binaire de recherche
 * 
 * 				Auteur : Joël Dendaletche
 * 
 * 
 * */

function Arbre() 	// même chose que 
// var Arbre = {racine : '', sag : '', sad : '' ,indice : ''};	
{
	this.racine = '';
	this.sag = '';
	this.sad = '';
	this.indice = '';
	this.parent = '';
	this.ajouter = function (a) 
	{ 
		if (this.racine == "" || this.racine == a) { this.racine = a; }
		else { 
				if (a > this.racine) 
				{ 
					if( this.sad == '') 
					{ this.sad = new Arbre(); 
					  this.sad.racine = a;
					  this.sad.indice = this.indice + "1";
					} 
					else 
					{ this.sad.ajouter(a);
					} 
				} 
				else 
				{
					if( this.sag == '') 
					{ this.sag = new Arbre(); 
					  this.sag.racine = a;
					  this.sag.indice = this.indice + "0";
					} 
					else 
					{ this.sag.ajouter(a);
					} 
				} 
			 }
	}
	this.print = function () 
	{
		var rac, sag, sad;
		  
		rac = this.racine	!= '' ? this.racine	+ ": " + 
									this.indice	 : "Null "; 
		sag = this.sag 		!= '' ? this.sag.print() : "Null "; 
		sad = this.sad 		!= '' ? this.sad.print() : "Null "; 
		
		return "("+ sag +"<-"+ rac + "->" + sad + ")";
	}
	this.parcourPrefixe = function () {		
		var liste = [], rien;
		rien = this.racine != '' ? 
				liste.push(this.racine) 				: 0 ;
		rien = this.sag    != '' ? 
				liste.push(this.sag.parcourPrefixe()) 	: 0 ; 
		rien = this.sad    != '' ? 
				liste.push(this.sad.parcourPrefixe()) 	: 0 ;
		return liste; 
	}
	this.parcourInfixe = function () {		
		var liste = [], rien;
		rien = this.sag    != '' ? 
				liste.push(this.sag.parcourInfixe()) 	: 0 ; 
		rien = this.racine != '' ? 
				liste.push(this.racine) 				: 0 ;
		rien = this.sad    != '' ? 
				liste.push(this.sad.parcourInfixe()) 	: 0 ;
		return liste; 
	}
	this.parcourPostfixe = function () {		
		var liste = [], rien;
		rien = this.sag    != '' ? 
				liste.push(this.sag.parcourPostfixe()) 	: 0 ; 
		rien = this.sad    != '' ? 
				liste.push(this.sad.parcourPostfixe()) 	: 0 ;
		rien = this.racine != '' ? 
				liste.push(this.racine) 				: 0 ;
		return liste; 
	}
	this.estVide = function () {
	// retourne si l'arbre est vide 
		return this.racine == "";
	}
	// trace l'arbre dans un cadre SVG
	this.tracer = function () 
	{	
		let x, y,
		rayon = 40, largeur, hauteur;
		
		x = parseInt(100);
		y = parseInt(200);
		this.afficheTexte(this.racine, x, y, rayon, false ) ;

	}
	this.taille = function () 
	{ // parcour l'arbre pour compter le nombre de ses noeuds
		if (this.racine == '') 
		{
			return 0;
		}
		else
		{
		   return  1 + 
				   (this.sag == '' ? 0 : this.sag.taille()) + 
				   (this.sad == '' ? 0 : this.sad.taille());
		}
	}
	this.hauteur = function () 
	{ // parcour l'arbre pour renvoyer la plus grande profondeur
		if (this.racine == '') 
		{
			return 0;
		}
		else
		{
			let sag, sad;
			sag = (this.sag == '' ? 0 : this.sag.hauteur());
			sad = (this.sad == '' ? 0 : this.sad.hauteur());
			return  1 + (sag > sad ? sag : sad );
		}
	}
	this.max = function () 
	{ // renvoie de la valeur max
		return this.sad == '' ? this.racine : this.sad.max();
	}
	this.min = function () 
	{ // renvoie de la valeur minà_
		return this.sag == '' ? this.racine : this.sag.min();
	}
	this.equilibrer = function () 
	{ // réparti les valeurs pour minimiser la hauteur
		
	}
	this.afficheTexte = function (texte, x, y, rayon, debug ) 
	{
		// affiche texte au centre d'un cercle de rayon passé en argument 
		var x, y, //SVG = document.getElementById('svg'),
		info = document.getElementById('info'), taillePolice = 10;
		
		if (debug) { 
			info.innerHTML += "<br/>aller à (" + x + " , " + y + ")"; 
			}

		SVG.innerHTML += "<circle cx='"+ x +"' cy='"+ y +"' r='"+
			rayon+"' stroke='black' stroke-width='2' fill='darkblue' />";
			
		SVG.innerHTML += '<text x="0" y="15" fill="red" transform="rotate(30 20,40)">'+texte+'</text>';
		
		y = y -rayon + taillePolice / 2 ;
		if (debug) 
	   { info.innerHTML += "<br/>aller à (" + x + " , " + y + ")"; 
		 info.innerHTML += "<br/> svg = " + SVG.innerHTML; }
		 
		SVG.innerHTML += "<text x='"+x+"' y='"+y+
	   "' fill='red' transform='rotate(30 20,40)'>"+texte+"</text>";
	}
	this.convertirEnTableau = function () 
	{
		var rien;
	}
	this.parcourLargeur = function () 
	{ 
		let listeDeListe = [];
		let niv;
		for ( niv = 0; niv < this.hauteur() ; niv++) 
			{
				listeDeListe.push([]);
                /*document.getElementById("info").innerHTML += "<br/> " + 
                "listeDeListeVide["+niv+"] = " +  listeDeListe[niv]
                + " ;" ;*/
			}
		
		return this._parcourLargeur( listeDeListe, 0 );
	}
	this._parcourLargeur = function ( listeDeListe, niveau ) 
	{ // parcour l'arbre en largeur pour renvoyer la liste de ses éléments 
		if (this.racine == '') 
		{
			return listeDeListe;
		}
		else
		{
			listeDeListe = this.sag ? this.sag._parcourLargeur( listeDeListe, niveau + 1 ) : listeDeListe;
			listeDeListe[niveau].push(this.racine)
			/*document.getElementById("info").innerHTML += "<br/> " + 
                "listeDeListeVide["+niveau+"] = " +  listeDeListe[niveau]
                + " ;" ;*/
			listeDeListe = this.sad ? this.sad._parcourLargeur( listeDeListe, niveau + 1 ) : listeDeListe;
			return listeDeListe;
		}
	}
	this.convertirEnTableau = function () 
	{ // retourne une liste contenant tous les éléments vides ou pas sur la hauteur de l'arbre
		var liste = [], niv;
		for ( niv = 0; niv < this.hauteur() ; niv++) 
			{
				
			}
	}
	/*
		def convertirEnTableau(self, debug = False) -> list :
	''' retourne une liste contenant tous les éléments vides ou pas sur la
	hauteur de l'arbre '''
	# initialisation du tableau
	liste = (2**self.hauteur())*[None]
	if debug : print("liste = {} de longueur : {}".format(liste, len(liste)))
	parcour = self.parcoursInf()
	if debug : print("longueur du parcour {} = {}".format(parcour, len(parcour)))
	for val in parcour :
		indice = self.chercheIndice(val)
		i = self._convertIndice(indice)
		if debug : print("Indice {} -> i = {} : val = {}".format(indice, i, val))
		liste[i] = val
	return liste*/
	this.chercheIndice = function ( val ) 
	{ // retourne l'indice du noeud contenant la valeur val
		info.innerHTML += "<br/> cherche indice à droite de = " + this.racine;
		if (this.racine == val) 
		{ 
			return this.indice; 
			info.innerHTML += "<br/> indice = " + this.indice +" pour val = " + val;
		} 
		else 
		{
			if (    this.racine < val && this.sad != '') 
			{
					info.innerHTML += "<br/> cherche indice à droite de = " + this.racine;
					this.sad.chercheIndice (val);
			} 
			else 
			{
				if (this.racine > val && this.sag != '') 
				{
					info.innerHTML += "<br/> cherche indice à gauche de = " + this.racine;
					this.sag.chercheIndice (val);
				} 
				else 
				{
					return '';
				}
			}
		}
	}
}
/*-----------fin de la définition de l'objet Arbre ---------------*/	
