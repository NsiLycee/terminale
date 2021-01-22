/***********************************************************************
 *  																   *
 * 					Base de donnée des questions 					   *
 * 					pour simuler un Quiz E 3 C de N S I				   *
 * 																	   *
 * ********************************************************************/

// Il y a sept thèmes (A à G) donc 7 groupes de 6 séries de questions
var A = 0; 
var B = 1;
var C = 2;
var D = 3;
var E = 4;
var F = 5;
var G = 6;
// Dans chacun des sept thèmes il y a 6 séries de questions
var S1 = 0; 
var S2 = 1;
var S3 = 2;
var S4 = 3;
var S5 = 4;
var S6 = 5; 

var Q1 = [ //essai de tableau 3D
			[    //BALALAL
				[
					1, 
					2, 
					3
				],
				[
					4, 
					5, 
					6
				],
				[
					7, 
					8, 
					9
				],
				
			],
			[
				[
					10,
					11
				],
				[
					12
				],
				[
				]
			],
			[
				[
					13
				],
				[
					14,
					15,
					16,
					17,
					18,
					19
				],
				[
					20
				]
			]
		];
		
var Q = 
[ 
	[ 	// Thème A // 6 séries
		[  // début série 1 de A
	{
	Num:1, Question:"En hexadécimal (base 16), quelle est la \
	valeur de la différence : \
	<pre style='font-size:200%;'>  CBD<br/>- <u>BA8</u><br/>  ... ?", 
	linkImage : "",
	nb_rep:4,
	bareme : 1,	propositions :[
	"0AB", 
	"0T5",
	"0FF",
	"115"],
	correction : [
	"C'est faux car C - B = B - A = D - C = 9 - 8 = 5 - 4 = 1 et D - 8\
	 = 5 ! <br/> la soustraction se pose comme en décimal",
	"C'est faux car C - B = B - A = D - C = 9 - 8 = 5 - 4 = 1 et D - 8\
	 = 5 ! <br/> la soustraction se pose comme en décimal",
	"C'est faux car C - B = B - A = D - C = 9 - 8 = 5 - 4 = 1 et D - 8\
	 = 5 ! <br/> la soustraction se pose comme en décimal",
	"C'est juste car C - B = B - A = D - C = 9 - 8 = 5 - 4 = 1  et D-8\
	 = 5 ! <br/> la soustraction se pose comme en décimal" ],
	justesse : [0,0,0,1]
	},
			{
	Num:2, Question:"Sur quel(s) bit(s) est codé le signe dans la \
représentation en binaire signé ?", 
	linkImage : "",
	nb_rep:4,
	bareme : 1,	propositions :[
	"Le premier bit à gauche.", 
	"Le premier bit à droite.",
	"Le deux premiers bits à droite.",
	"Le deux premiers bits à gauche."],
	correction : [
	"C'est juste, 1 à gauche signe un nombre négatif, et 0 un positif",
	"C'est faux, 1 à gauche signe un nombre négatif, et 0 un positif",	
	"C'est faux, 1 à gauche signe un nombre négatif, et 0 un positif",	
	"C'est faux, 1 à gauche signe un nombre négatif, et 0 un positif"
				],
	justesse : [1,-0.5,-1,-1]
			},
			{
	Num:3, Question:"Sur quel(s) bit(s) est (sont) codé(s) le signe\
dans la représentation en complément à deux ?", 
	linkImage : "",
	nb_rep:4,
	bareme : 1,	propositions :[
	"Le premier bit à gauche.", 
	"Le premier bit à droite.",
	"Le deux premiers bits à droite.",
	"Le deux premiers bits à gauche."],
	correction : [
	"C'est juste, 1 à gauche signe un nombre négatif, et 0 un positif",
	"C'est faux, 1 à gauche signe un nombre négatif, et 0 un positif",	
	"C'est faux, 1 à gauche signe un nombre négatif, et 0 un positif",	
	"C'est faux, 1 à gauche signe un nombre négatif, et 0 un positif"
				],
	justesse : [1,-0.5,-1,-1]
			} 
				], 
		[  // début série 2 de A
	{
	Num:1, Question:"Deux entiers positifs ont pour écriture en \
base 16 : <br/><pre style='font-size:200%;'>A7 + 84 = ? .</pre>\
Quelle est l'écriture en base 16 de leur somme ?", 
	linkImage : "",
	nb_rep:4, 
	bareme : 1,	propositions :[
	"1811", 
	"12B",
	"13A",
	"A784"],
	correction : [
	"Faux ! on pose l'addition comme en décimal : <br/> 0x7 + 0x4 = 0xB\
	 et 0x8 + 0xA = en décimal 8 + 10 soit 16 + 2 = 0x10 + 2 = 0x12<br/\
	 >Ce qui fait au total 0x12 x 0x10 + 0xB = 0x12B ",
	"Vrai ! 0x7 + 0x4 = 0xB et 0x8 + 0xA = en décimal 8 + 10 soit 16 + \
	2 = 0x10 + 2 = 0x12<br/>Ce qui fait au total 0x12 x 0x10 + 0xB = \
	0x12B",
	"Faux ! on pose l'addition comme en décimal : <br/> 0x7 + 0x4 = 0xB\
	 et 0x8 + 0xA = en décimal 8 + 10 soit 16 + 2 = 0x10 + 2 = 0x12<br/\
	 >Ce qui fait au total 0x12 x 0x10 + 0xB = 0x12B ",
	"Faux ! on pose l'addition comme en décimal : <br/> 0x7 + 0x4 = 0xB\
	 et 0x8 + 0xA = en décimal 8 + 10 soit 16 + 2 = 0x10 + 2 = 0x12<br/\
	 >Ce qui fait au total 0x12 x 0x10 + 0xB = 0x12B ",
	],
	justesse : [0,1,0,0]}				
			], 
		[  // début série 3 de A
 {
	Num:1, Question:"Quelle est l'écriture <b><u>binaire</u></b>, en\
	<mark>complément\
	 à deux</mark> sur <b><u>8 bits</u></b>, de l'entier négatif –7 ?", 
	linkImage : "",
	nb_rep:4, 
	bareme : 1,	propositions :[
	"-0000 0111", 
	"1000 0111",
	"1111 1000",
	"1111 1001"],
	correction : [
	"faux car 7 s'écrit 0000 0111, son complément à 1 (inversion de bits) s'écrit 1111 1000 ; on ajoute 1 pour avoir son complément à 2, cela donne : <br/> 1111 1001",
	"faux car 7 s'écrit 0000 0111, son complément à 1 (inversion de bits) s'écrit 1111 1000 ; on ajoute 1 pour avoir son complément à 2, cela donne : <br/> 1111 1001",
	"faux car 7 s'écrit 0000 0111, son complément à 1 (inversion de bits) s'écrit 1111 1000 ; on ajoute 1 pour avoir son complément à 2, cela donne : <br/> 1111 1001",
	"vrai car 7 s'écrit 0000 0111, son complément à 1 (inversion de bits) s'écrit 1111 1000 ; on ajoute 1 pour avoir son complément à 2, cela donne : <br/> 1111 1001",
	],
	justesse : [0,0,0,1]}				
			], 
		[  // début série 4 de A
	{
	Num:1, Question:"Quel est le plus grand entier positif (non \
	signé) représentable en <b><u>binaire</u></b> sur <b><u>2 octets\
	</u></b> (c'est-à-dire 16 bits) ?", 
	linkImage : "",
	nb_rep:4, 
	bareme : 1,	propositions :[
	"2<sup>15</sup>−1", 
	"2<sup>15</sup>",
	"2<sup>16</sup>−1",
	"2<sup>15</sup>"],
	correction : [
	"faux ; essayer par analogie avec un exemple simple<br/>sur 2 bits \
	cela ferait 0b11 soit 3 soit 2<sup>2</sup>-1",
	"faux ; essayer par analogie avec un exemple simple<br/>sur 2 bits \
	cela ferait 0b11 soit 3 soit 2<sup>2</sup>-1",
	"vrai, sur 2 bits cela ferait 0b11 soit 3 soit 2<sup>2</sup>-1",
	"faux ; essayer par analogie avec un exemple simple<br/>sur 2 bits \
	cela ferait 0b11 soit 3 soit 2<sup>2</sup>-1"
 ],
	justesse : [0,0,1,0]
	},
	{
	Num:2, Question:"Quel est le plus grand entier positif (non \
	signé) représentable en <b><u>binaire</u></b> sur <b><u>un octet\
	</u></b> (c'est-à-dire 8 bits) ?", 
	linkImage : "",
	nb_rep:4, 
	bareme : 1,	propositions :[
	"2<sup>7</sup>−1", 
	"2<sup>7</sup>",
	"2<sup>8</sup>−1",
	"2<sup>8</sup>"],
	correction : [
	"faux ; essayer par analogie avec un exemple simple<br/>sur 2 bits \
	cela ferait 0b11 soit 3 soit 2<sup>2</sup>-1",
	"faux ; essayer par analogie avec un exemple simple<br/>sur 2 bits \
	cela ferait 0b11 soit 3 soit 2<sup>2</sup>-1",
	"vrai, sur 2 bits cela ferait 0b11 soit 3 soit 2<sup>2</sup>-1",
	"faux ; essayer par analogie avec un exemple simple<br/>sur 2 bits \
	cela ferait 0b11 soit 3 soit 2<sup>2</sup>-1"
 ],
	justesse : [-0.5,-0.5,1,-0.5]
	}				
				
			], 
		[  // début série 5 de A
	{
	Num:1, Question:"Quel est le nombre maximal de bits du \
	produit de deux entiers positifs codés sur 8 bits ?", 
	linkImage : "",
	nb_rep:4, 
	bareme : 1,	propositions :[
	"8", 
	"16",
	"32",
	"64"],
	correction : [
	"faux, , faites une analogie avec les décimaux : 9 x 9 = 81 ; \
	50 x 50 = 2500",
	"vrai, faites une analogie avec les décimaux : 9 x 9 = 81 ; \
	50 x 50 = 2500",
	"faux, , faites une analogie avec les décimaux : 9 x 9 = 81 ; \
	50 x 50 = 2500",
	"faux, , faites une analogie avec les décimaux : 9 x 9 = 81 ; \
	50 x 50 = 2500" ],
	justesse : [0,1,0,0]
	},
	{
	Num:2, Question:"Quel est le nombre maximal de bits du \
	produit de deux entiers positifs codés sur 16 bits ?", 
	linkImage : "",
	nb_rep:4, 
	bareme : 1,	propositions :[
	"8", 
	"16",
	"32",
	"64"],
	correction : [
	"faux, , faites une analogie avec les décimaux : 9 x 9 = 81 ; \
	50 x 50 = 2500",
	"faux, faites une analogie avec les décimaux : 9 x 9 = 81 ; \
	50 x 50 = 2500",
	"vrai, faites une analogie avec les décimaux : 9 x 9 = 81 ; \
	50 x 50 = 2500",
	"faux, faites une analogie avec les décimaux : 9 x 9 = 81 ; \
	50 x 50 = 2500" ],
	justesse : [0,0,1,0]
	},
	{
	Num:3, Question:"Quel est le nombre maximal de bits du \
	produit de deux entiers positifs codés sur 32 bits ?", 
	linkImage : "",
	nb_rep:4, 
	bareme : 1,	propositions :[
	"8", 
	"16",
	"32",
	"64"],
	correction : [
	"faux, , faites une analogie avec les décimaux : 9 x 9 = 81 ; \
	50 x 50 = 2500",
	"faux, faites une analogie avec les décimaux : 9 x 9 = 81 ; \
	50 x 50 = 2500",
	"faux, , faites une analogie avec les décimaux : 9 x 9 = 81 ; \
	50 x 50 = 2500",
	"rai, , faites une analogie avec les décimaux : 9 x 9 = 81 ; \
	50 x 50 = 2500" ],
	justesse : [0,0,0,1]}				
			], 
		[  // début série 6 de A
  {
	Num:1, Question:"En ajoutant trois chiffres 0 à droite de \
	l'écriture binaire d'un entier N strictement positif, on obtient \
	l'écriture binaire de :", 
	linkImage : "",
	nb_rep:4, 
	bareme : 1,	propositions :[
	"6 x N", 
	"8 x N",
	"1000 x N",
	"aucune des réponses précédentes"],
	correction : [
	"Faux, un décalage vers la gauche des chiffres d'un nombre \
multiplie ce nombre par 2<br/>car les unités deviennent des multiple \
de 2<sup>1</sup>, les multiple de 2<sup>1</sup> deviennent des multiple\
 de 2<sup>2</sup> et ainsi de suite<br/> donc un décalage de trois \
 chiffre vers la droite revient à multiplier par 2<sup>3</sup> = 8",
	"Vrai, un décalage vers la gauche des chiffres d'un nombre \
multiplie ce nombre par 2<br/>car les unités deviennent des multiple \
de 2<sup>1</sup>, les multiple de 2<sup>1</sup> deviennent des multiple\
 de 2<sup>2</sup> et ainsi de suite<br/> donc un décalage de trois \
 chiffre vers la droite revient à multiplier par 2<sup>3</sup> = 8",
	"Faux, un décalage vers la gauche des chiffres d'un nombre \
multiplie ce nombre par 2<br/>car les unités deviennent des multiple \
de 2<sup>1</sup>, les multiple de 2<sup>1</sup> deviennent des multiple\
 de 2<sup>2</sup> et ainsi de suite<br/> donc un décalage de trois \
 chiffre vers la droite revient à multiplier par 2<sup>3</sup> = 8",
	"Faux, un décalage vers la gauche des chiffres d'un nombre \
multiplie ce nombre par 2<br/>car les unités deviennent des multiple \
de 2<sup>1</sup>, les multiple de 2<sup>1</sup> deviennent des multiple\
 de 2<sup>2</sup> et ainsi de suite<br/> donc un décalage de trois \
 chiffre vers la droite revient à multiplier par 2<sup>3</sup> = 8" ],
	justesse : [0,1,0,0]
	},
	{
	Num:2, Question:"En ajoutant deux chiffres 0 à droite de \
	l'écriture binaire d'un entier N strictement positif, on obtient \
	l'écriture binaire de :", 
	linkImage : "",
	nb_rep:4, 
	bareme : 1,	propositions :[
	"6 x N", 
	"4 x N",
	"8 x N",
	"16 x N"],
	correction : [
	"Faux, un décalage vers la gauche des chiffres d'un nombre \
multiplie ce nombre par 2<br/>car les unités deviennent des multiple \
de 2<sup>1</sup>, les multiple de 2<sup>1</sup> deviennent des multiple\
 de 2<sup>2</sup> et ainsi de suite<br/> donc un décalage de trois \
 chiffre vers la droite revient à multiplier par 2<sup>3</sup> = 8",
	"Vrai, un décalage vers la gauche des chiffres d'un nombre \
multiplie ce nombre par 2<br/>car les unités deviennent des multiple \
de 2<sup>1</sup>, les multiple de 2<sup>1</sup> deviennent des multiple\
 de 2<sup>2</sup> et ainsi de suite<br/> donc un décalage de trois \
 chiffre vers la droite revient à multiplier par 2<sup>3</sup> = 8",
	"Faux, un décalage vers la gauche des chiffres d'un nombre \
multiplie ce nombre par 2<br/>car les unités deviennent des multiple \
de 2<sup>1</sup>, les multiple de 2<sup>1</sup> deviennent des multiple\
 de 2<sup>2</sup> et ainsi de suite<br/> donc un décalage de trois \
 chiffre vers la droite revient à multiplier par 2<sup>3</sup> = 8",
	"Faux, un décalage vers la gauche des chiffres d'un nombre \
multiplie ce nombre par 2<br/>car les unités deviennent des multiple \
de 2<sup>1</sup>, les multiple de 2<sup>1</sup> deviennent des multiple\
 de 2<sup>2</sup> et ainsi de suite<br/> donc un décalage de trois \
 chiffre vers la droite revient à multiplier par 2<sup>3</sup> = 8" ],
	justesse : [0,1,0,0]
	}				
			] 
	],
	[	// Thème B // 6 séries
		[ // série 1 de B
	{
	Partie : "B",
	Num:1, Question:"On veut affecter à t la valeur [[0,1,2], [3,4,5], [6,7,8], [9,10,11],\
 [12,13,14]] .<br/>Pour cela on utilise le code suivant. Par quoi doit-\
 on remplacer les \pointillés  ?<br/> ",
	linkImage : "img/comprehensionListeImbriquee.png",
	nb_rep:4, 
	bareme : 1,	propositions :[
	"i*j + j",
	"p*i + j",
	"p*j + i",
	"i*(j+1)"
	],
	correction : [
		"faux, la première valeur de chaque sous liste est un multiple de \
	3 = p fois un nombre de 0 à 4 (i)<br/la deuxième un multiple de 3 +\
	 1<br/la deuxième un multiple de 3 + 2 (0, 1, 2 c'est j)<br/>soit \
	 p*i + j",
	"juste ! , la première valeur de chaque sous liste est un multiple de \
	3 = p fois un nombre de 0 à 4 (i)<br/la deuxième un multiple de 3 +\
	 1<br/la deuxième un multiple de 3 + 2 (0, 1, 2 c'est j)",
	"faux, la première valeur de chaque sous liste est un multiple de \
	3 = p fois un nombre de 0 à 4 (i)<br/la deuxième un multiple de 3 +\
	 1<br/la deuxième un multiple de 3 + 2 (0, 1, 2 c'est j)<br/>soit \
	 p*i + j",
	"faux, la première valeur de chaque sous liste est un multiple de \
	3 = p fois un nombre de 0 à 4 (i)<br/la deuxième un multiple de 3 +\
	 1<br/la deuxième un multiple de 3 + 2 (0, 1, 2 c'est j)<br/>soit \
	 p*i + j",
	],
	justesse : [0,1,0,0]
	},
	{
	Partie : "B",
	Num:2, Question:"On veut affecter à t la valeur [[0,1,2], [3,4,5], [6,7,8], [9,10,11],\
 [12,13,14]] .<br/>Pour cela on utilise le code suivant. Par quoi doit-\
 on remplacer les \pointillés ...... ?<br/>n = 5<br/>\
p = 3<br/>t = [ [ ...... for j in range(p) ] for i in range(n) ]<br/>",
	linkImage : "img/comprehensionListeImbriquee.png",
	nb_rep:4, 
	bareme : 1,	propositions :[
	"i*j + j",
	"p*i + j",
	"p*j + i",
	"i*(j+1)"
	],
	correction : [
		"faux, la première valeur de chaque sous liste est un multiple de \
	3 = p fois un nombre de 0 à 4 (i)<br/la deuxième un multiple de 3 +\
	 1<br/la deuxième un multiple de 3 + 2 (0, 1, 2 c'est j)<br/>soit \
	 p*i + j",
	"juste !",
	"faux, la première valeur de chaque sous liste est un multiple de \
	3 = p fois un nombre de 0 à 4 (i)<br/la deuxième un multiple de 3 +\
	 1<br/la deuxième un multiple de 3 + 2 (0, 1, 2 c'est j)<br/>soit \
	 p*i + j",
	"faux, la première valeur de chaque sous liste est un multiple de \
	3 = p fois un nombre de 0 à 4 (i)<br/la deuxième un multiple de 3 +\
	 1<br/la deuxième un multiple de 3 + 2 (0, 1, 2 c'est j)<br/>soit \
	 p*i + j",
	],
	justesse : [0,1,0,0]
	}
		],
		[	// début série 2 de B
	{
	Partie : "B",
	Num:2, 
	Question:"Quelle est la valeur de t à la fin de \
	 l'exécution du script suivant ?",
	linkImage : "img/reaffectationElementListe.png",
	nb_rep:4, 
	bareme : 1,	propositions :[
	"[2, 13, 9, 2]",
	"[2, 8, 14, 2]",
	"[7, 13, 14, 7]",
	"[7, 13, 9, 2]"
	],
	correction : [	
	"faux, t[2] est le troisième élément de la liste (c'est 9) et on \
lui ajoute 5",
	"vrai, t[2] est le troisième élément de la liste (c'est 9) et on \
lui ajoute 5, cequi fait 14 ; les autres éléments ne change pas.",
	"faux, t[2] est le troisième élément de la liste (c'est 9) et on \
lui ajoute 5",
	"faux, t[2] est le troisième élément de la liste (c'est 9) et on \
lui ajoute 5"
	],
	justesse : [0,1,0,0]
	}			
		], // fin série 2 de B
		[  // début série 3 de B
	{
	Partie : "B",
	Num:1, Question: "On dispose dans le tableau annee2019 les \
températures mensuelles moyennes d'une région française.<br/>On exécute\
 le script suivant :<br/>\
Qu'affiche le programme à la fin de cette exécution ?",
	linkImage : "img/progM.png",
	nb_rep:4, 
	bareme : 1,	propositions :[
	"le mois le plus froid",
	"le mois le plus chaud",
	"la température moyenne la plus basse",
	"la température moyenne la plus haute"
	],
	correction : [	
	"faux, m est le deuxième élément du tuple, c'est une température ! ",
	"faux, m est le deuxième élément du tuple, c'est une température ! ",
	"vrai, m = 6",
	"faux, erreur sur le sens de la comparaison   m > 5 : m = 5",
	],
	justesse : [0,0,1,0]
	}
		], // fin série 3 de B
		[  // début série 4 de B
	{
	Partie : "B",
	Num:1, Question : "Quelle est la valeur de la variable r à la fin de l'\
exécution du script suivant ?<br/>t = (10,6,1,12,15)<br/>\
r = t[3] - t[1]<br/>",
	linkImage : "",
	nb_rep:4, 
	bareme : 1,	propositions :[
	"-9",
	"2",
	"3",
	"6"			 ],
	correction : [	
	"faux, pensez que la numérotation des éléments débute à 0 !",
	"faux, pensez que la numérotation des éléments débute à 0 !",
	"faux, pensez que la numérotation des éléments débute à 0 !",
	"vrai"
	],
	justesse : [0,0,0,1]
	}				
		], // fin série 4 de B
		[  // début série 5 de B
	{
	Partie : "B",
	Num:1, Question : "On définit un dictionnaire : <br/>\
d = { 'couleur': 'vert', 'type': 'petit pois', 'prix': 5.6 }<br/>\
Quelle est la valeur de l'expression d.keys() ?<br/>Réponses :",
	linkImage : "",
	nb_rep:4, 
	bareme : 1,	propositions :[
	"['couleur', 'type', 'prix']",
	"[('couleur', 'vert'), ('type', 'petit pois'), ('prix', 5.6 )]",
	"['vert', 'petit pois', 5.6 ]",
	"['couleur': 'vert', 'type': 'petit pois', 'prix': 5.6 ]"
	],
	correction : [	
	"vrai, keys() est une méthode de l'objet dictionnary qui renvoie un itérateur sur la liste des clefs",
	"faux, keys() est une méthode de l'objet dictionnary qui renvoie un itérateur sur la liste des clefs",
	"faux, keys() est une méthode de l'objet dictionnary qui renvoie un itérateur sur la liste des clefs",
	"faux, keys() est une méthode de l'objet dictionnary qui renvoie un itérateur sur la liste des clefs"
	],
	justesse : [1,0,0,0]
	}				
		], // fin série 5 de B
		[  // début série 6 de B
	{
	Partie : "B",
	Num:1, Question : "On définit : <br/> L = [4,25,10,9,7,13] .<br/> Quelle est \
	la valeur de L[2] ? <br/>Réponses :",
	linkImage : "",
	nb_rep:4, 
	bareme : 1,	propositions :[
	"4",
	"25",
	"10",
	"9"
	],
	correction : [	
	"faux, pensez que la numérotation des éléments débute à 0 !",
	"faux, pensez que la numérotation des éléments débute à 0 !",
	"vrai, pensez que la numérotation des éléments débute à 0 !",
	"faux, pensez que la numérotation des éléments débute à 0 !"
	],
	justesse : [0,0,1,0]
	}				
		]
	],
	[   // Thème C // 6 séries
		[	// début série 1 de C
		{
		Partie : "C",	
		Num:1, 
		Question : "Affichage d'un élément de liste",	
		linkImage : "img/affListe2D.png",
		nb_rep:4, 	bareme : 1,	propositions :[	"a","b","c","d"],	correction : ["faux",
	"faux",
	"vrai ! Tab[1] est le deuxième élément de la liste, soit la liste \
[4, 5]",
	"faux"],justesse : [0,0,1,0] },
			{
	Num:2, Question:"On souhaite construire une table de 5 lignes de 3 \
éléments que l’on va remplir de 1. Quelle syntaxe Python \
utilisera-t-on ?", 
	linkImage : "",
	nb_rep:4,
	bareme : 1,	propositions :[
	"[[ 1 ] * 3 for i in range (5) ]", 
	"for i in range (5) [ 1 ] * 3",
	"[ 1 ] * 3 for i in range (5)",
	"[ for i in range (5) [ 1 ] * 3 ]"	],
	correction : [
	"C'est juste, c'est une compréhension de liste ",
	"C'est faux car il manque ':' qui commence le bloc de la boucle for",
	"C'est car la syntaxe est incomplète : il manque les crochets []",
	"C'est car la syntaxe est inversée : [ element for itérateur +- \
		condition]" ],
	justesse : [1,-0.5,-0.5,-0.5]
			}
		],
		[	// début série 2 de C
		{
			Partie : "C",	Num:1, 
			Question : "fsdhsdgh",	
			linkImage : "",
	nb_rep:4, 	bareme : 1,	propositions :[	"4","25","10","9"],	correction : ["xxx",
	"xx","x","xxxx"],justesse : [0,1,0,0] 
		},
		{
			Partie : "C",	Num:2, 
			Question : "On définit :<br/> <code>\
contacts = {'Tati': 'tati@nsi.fr', 'Abra': 'abra@nsi.com', 'Pauline': \
'pauline@nsi.net', 'Clémence': 'clem@nsi.org' }</code><br/> Parmi les \
propositions suivantes, laquelle est exacte ?",
	linkImage : "",
	nb_rep:4, 	bareme : 1,	propositions :[	
	"'Abra' est une valeur de la variable contacts",
	"'Abra' est une clef de la variable contacts",
	"'Abra' est un attribut de la variable contacts",
	"'Abra' est un champs de la variable contacts"],	
	correction : [
	"ce n'est pas ça, ici c'est une clef qui permet d'accéder à son \
courriel",
	"exact",
	"ce terme est réservé au bases de données et pas aux dictionnaires,\
pour un dictionnaire le terme serait valeur (et ce serait juste, ici)",
	"ce terme est réservé au bases de données et pas aux dictionnaires,\
pour un dictionnaire le terme serait clefs (et ce serait faux ici)"],
	justesse : [0,1,0,0] 
		}
		],
		[	// début série 3 de C
		{Partie : "C",	Num:1, 
			Question : "On considère la liste de p-uplets suivante :\
<br/><code>Table = [('Grace','Hopper','F',1906),('Tim', 'Berners-Lee', \
'H', 1955),('Ada', 'Lovelace', 'F', 1815), ('Alan', 'Turing', 'H', \
1912) ] </code><br/> où chaque p-uplet représente un informaticien ou \
une informaticienne célèbre ; le premier élément est son prénom, le \
deuxième élément son nom, le troisième élément son sexe (‘H’ pour un \
homme, ‘F’ pour une femme) et le quatrième élément son année de \
naissance (un nombre entier entre 1000 et 2000). <br/>On définit une \
fonction (cf. image) ; <br/>Que vaut fonctionMystere(table)?",	
	linkImage : "img/c3mystere.png",
	nb_rep:4, 	bareme : 1,	
	propositions :[	
	"[‘Grace’, ‘Ada’]",
	"[('Grace', 'Hopper', 'F', 1906), ('Ada', 'Lovelace', 'F', 1815)]",
	"[‘Hopper’, ’Lovelace’]",
	"[]"],	
	correction : [
	"",
	"",
	"Exact",
	""],
	justesse : [0,0,1,0] 
	}

		],
		[	// début série 4 de C
	{
		Partie : "C",	Num:1, 
		Question : "Soit le tableau défini de la manière suivante : \
<code>tableau = [[1,3,4],[2,7,8],[9,10,6],[12,11,5]]</code><br/>\
On souhaite accéder à la valeur 12, on écrit pour cela :",	
		linkImage : "",
	nb_rep:4, 	bareme : 1,	
	propositions :[	
	"tableau[4][1]",
	"tableau[1][4]",
	"tableau[3][0]",
	"tableau[0][3]"],	
	correction : [
	"faux, la numérotation commence à 0 !",
	"faux, la numérotation commence à 0 ! et tableau[0] contient \
[1,3,4]",
	"exact",
	"faux, tableau[0] contient [1,3,4]"],
	justesse : [-0.5,-0.5,1,-0.5] 
	}

		],
		[	// début série 5 de C
	{
		Partie : "C",	Num:1, 
		Question : "Quelle est la valeur de la variable table à la fin\
 de l'exécution du script suivant :<br/><code>table = [[1, 2, 3], \
 [1, 2, 3], [1, 2, 3], [1, 2, 3]] table [1][2] = 5 </code>",	
		linkImage : "",
	nb_rep:4, 	bareme : 1,	
	propositions :	[	
	"[[1, 5, 3], [1, 2, 3], [1, 2, 3], [1, 2, 3]]",
	"[[1, 2, 3], [5, 2, 3], [1, 2, 3], [1, 2, 3]]",
	"[[1, 2, 3], [1, 2, 5], [1, 2, 3], [1, 2, 3]]",
	"[[1, 2, 3], [1, 2, 3], [1, 2, 3], [1, 5, 3]]"
					],	
	correction : [
	"faux, la numérotation commence à 0 !",
	"faux, la numérotation commence à 0 !",
	"exact",
	"faux, la numérotation commence à 0 !"],
	justesse : [-0.5,-.5,1,-0.5] 
	}

		],
		[	// début série 6 de C
	{
		Partie : "C",	Num:1, 
		Question : "On exécute le code suivant :<br/><code> a = [5, 4, \
3, 4, 7]<br/>a.append(4)</code><br/>Quelle est la valeur de la variable\
 a à la fin de cette exécution ?",	
		linkImage : "",
	nb_rep:4, 	bareme : 1,	
	propositions :[	
	"2",
	"[4, 4]",
	"[5, 4, 3, 4, 7, 4]",
	"True"	
					],	
	correction : [
	"faux , append ajoute un élément en fin de liste",
	"faux , append ajoute un élément en fin de liste",
	"exact, append ajoute un élément en fin de liste",
	"faux , append ajoute un élément en fin de liste"
				],
	justesse : [0,1,0,0] 
	}

		]		// fin série 6 de C		
	],
	[   // Thème D // 6 séries
		[	// début série 1 de D
	{
		Partie : "D",	Num:1, 
		Question : "On exécute le code suivant :<br/><code> pass \
</code><br/>Quelle est l'affichage a à la fin de cette exécution ?",	
		linkImage : "",
	nb_rep:4, 	bareme : 1,	
	propositions :	[	
	"rien",
	"[]",
	"[Null]",
	"none" 
					],	
	correction : 	[
	"pass ne fait rien, n'affiche rien",
	"non, pass ne fait rien, n'affiche rien",
	"non, pass ne fait rien, n'affiche rien",
	"non, pass ne fait rien, n'affiche rien"
					],
	justesse : [1,0,0,0] 
	}

		],
		[	// début série 2 de D
	{
		Partie : "C",	Num:1, 
		Question : "",	
		linkImage : "",
	nb_rep:4, 	bareme : 1,	
	propositions :[	
	"",
	"",
	"",
	""],	
	correction : [
	"",
	"",
	"",
	""],
	justesse : [0,1,0,0] 
	}

		],
		[	// début série 3 de D
	{
		Partie : "C",	Num:1, 
		Question : "",	
		linkImage : "",
	nb_rep:4, 	bareme : 1,	
	propositions :[	
	"",
	"",
	"",
	""],	
	correction : [
	"",
	"",
	"",
	""],
	justesse : [0,1,0,0] 
	}

		],
		[	// début série 4 de D
	{
		Partie : "C",	Num:1, 
		Question : "",	
		linkImage : "",
	nb_rep:4, 	bareme : 1,	
	propositions :[	
	"",
	"",
	"",
	""],	
	correction : [
	"",
	"",
	"",
	""],
	justesse : [0,1,0,0] 
	}

		],
		[	// début série 5 de D
	{
		Partie : "C",	Num:1, 
		Question : "",	
		linkImage : "",
	nb_rep:4, 	bareme : 1,	
	propositions :[	
	"",
	"",
	"",
	""],	
	correction : [
	"",
	"",
	"",
	""],
	justesse : [0,1,0,0] 
	}

		],
		[	// début série 6 de D
	{
		Partie : "C",	Num:1, 
		Question : "",	
		linkImage : "",
	nb_rep:4, 	bareme : 1,	
	propositions :[	
	"",
	"",
	"",
	""],	
	correction : [
	"",
	"",
	"",
	""],
	justesse : [0,1,0,0] 
	}

		]	
	],			
	[   // Thème E // 6 séries
		[	// début série 1 de E
	{
		Partie : "C",	Num:1, 
		Question : "",	
		linkImage : "",
	nb_rep:4, 	bareme : 1,	
	propositions :[	
	"",
	"",
	"",
	""],	
	correction : [
	"",
	"",
	"",
	""],
	justesse : [0,1,0,0] 
	}

		],
		[	// début série 2 de E
	{
		Partie : "C",	Num:1, 
		Question : "",	
		linkImage : "",
	nb_rep:4, 	bareme : 1,	
	propositions :[	
	"",
	"",
	"",
	""],	
	correction : [
	"",
	"",
	"",
	""],
	justesse : [0,1,0,0] 
	}

		],
		[	// début série 3 de E
	{
		Partie : "C",	Num:1, 
		Question : "",	
		linkImage : "",
	nb_rep:4, 	bareme : 1,	
	propositions :[	
	"",
	"",
	"",
	""],	
	correction : [
	"",
	"",
	"",
	""],
	justesse : [0,1,0,0] 
	}

		],
		[	// début série 4 de E		
	{
		Partie : "C",	Num:1, 
		Question : "",	
		linkImage : "",
	nb_rep:4, 	bareme : 1,	
	propositions :[	
	"",
	"",
	"",
	""],	
	correction : [
	"",
	"",
	"",
	""],
	justesse : [0,1,0,0] 
	}

		],
		[	// début série 5 de E		
	{
		Partie : "C",	Num:1, 
		Question : "",	
		linkImage : "",
	nb_rep:4, 	bareme : 1,	
	propositions :[	
	"",
	"",
	"",
	""],	
	correction : [
	"",
	"",
	"",
	""],
	justesse : [0,1,0,0] 
	}
		],
		[	// début série 6 de E		
		{Partie : "C",	Num:1, Question : "fsdhsdgh",	linkImage : "",
	nb_rep:4, 	bareme : 1,	propositions :[	"4","25","10","9"],	correction : ["xxx",
	"xx","x","xxxx"],justesse : [0,1,0,0] }
		]	
	],			
	[   // Thème F // 6 séries
		[	// début série 1 de F		
		{
			Partie : "F",	Num:1, 
			Question : "Qu'affichera le code suivant : <br/><code>\
print('Ninon'.lower() == 'ninon')</code>",	linkImage : "",
	nb_rep:4, 	bareme : 1,	
	propositions :[	"True","true","False","false"],	
	correction : [
	"Vrai = True",
	"erreur syntaxe : Vrai = True avec un T majuscule",
	"erreur logique : Vrai = True",
	"2 erreurs : logique + syntaxe : Vrai = True avec un T majuscule"],
	justesse : [1,0,0,0] 
	}
		],
		[	// début série 2 de F		
		{Partie : "C",	Num:1, Question : "fsdhsdgh",	linkImage : "",
	nb_rep:4, 	bareme : 1,	propositions :[	"4","25","10","9"],	correction : ["xxx",
	"xx","x","xxxx"],justesse : [0,1,0,0] }
		],
		[	// début série 3 de F		
		{Partie : "C",	Num:1, Question : "fsdhsdgh",	linkImage : "",
	nb_rep:4, 	bareme : 1,	propositions :[	"4","25","10","9"],	correction : ["xxx",
	"xx","x","xxxx"],justesse : [0,1,0,0] }
		],
		[	// début série 4 de F		
		{Partie : "C",	Num:1, Question : "fsdhsdgh",	linkImage : "",
	nb_rep:4, 	bareme : 1,	propositions :[	"4","25","10","9"],	correction : ["xxx",
	"xx","x","xxxx"],justesse : [0,1,0,0] }
		],
		[	// début série 5 de F		
		{Partie : "C",	Num:1, Question : "fsdhsdgh",	linkImage : "",
	nb_rep:4, 	bareme : 1,	propositions :[	"4","25","10","9"],	correction : ["xxx",
	"xx","x","xxxx"],justesse : [0,1,0,0] }
		],
		[	// début série 6 de F		
		{Partie : "C",	Num:1, Question : "fsdhsdgh",	linkImage : "",
	nb_rep:4, 	bareme : 1,	propositions :[	"4","25","10","9"],	correction : ["xxx",
	"xx","x","xxxx"],justesse : [0,1,0,0] }
		]	
	],			
	[   // Thème G // 6 séries
		[	// début série 1 de G		
		{Partie : "C",	Num:1, Question : "fsdhsdgh",	linkImage : "",
	nb_rep:4, 	bareme : 1,	propositions :[	"4","25","10","9"],	correction : ["xxx",
	"xx","x","xxxx"],justesse : [0,1,0,0] }
		],
		[	// début série 2 de G		
		{Partie : "C",	Num:1, Question : "fsdhsdgh",	linkImage : "",
	nb_rep:4, 	bareme : 1,	propositions :[	"4","25","10","9"],	correction : ["xxx",
	"xx","x","xxxx"],justesse : [0,1,0,0] }
		],
		[	// début série 3 de G		
		{Partie : "C",	Num:1, Question : "fsdhsdgh",	linkImage : "",
	nb_rep:4, 	bareme : 1,	propositions :[	"4","25","10","9"],	correction : ["xxx",
	"xx","x","xxxx"],justesse : [0,1,0,0] }
		],
		[	// début série 4 de G		
		{Partie : "C",	Num:1, Question : "fsdhsdgh",	linkImage : "",
	nb_rep:4, 	bareme : 1,	propositions :[	"4","25","10","9"],	correction : ["xxx",
	"xx","x","xxxx"],justesse : [0,1,0,0] }
		],
		[	// début série 5 de G		
		{Partie : "C",	Num:1, Question : "fsdhsdgh",	linkImage : "",
	nb_rep:4, 	bareme : 1,	propositions :[	"4","25","10","9"],	correction : ["xxx",
	"xx","x","xxxx"],justesse : [0,1,0,0] }
		],
		[	// début série 6 de G		
		{Partie : "C",	Num:1, Question : "fsdhsdgh",	linkImage : "",
	nb_rep:4, 	bareme : 1,	propositions :[	"4","25","10","9"],	correction : ["xxx",
	"xx","x","xxxx"],justesse : [0,1,0,0] }
		]	
	]
];

/*
	bareme : 1,	propositions
	propositions
		
*/
