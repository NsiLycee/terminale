/*
		Auteur : Joël Dendaletche
		Contenu : construction de la liste des items du sommaire
		Date de création : 13 / 10 /2019
  
 */
/* ressources typographique à copier /coller : À Á Â Ä Æ Ç É È Ê Ë Î Ï  Ô Ö Ø  OE Ú Ù Û Ü 
â   Ç maj AltGr R
	â AltGr a
	Ê AltGr D
	© AltGr C
	® AltGr V
	ß AltGr BäÅ¢ÇÞÝüïö`'ëÄØËªÆÐÜÏÖÖºÙ¥<>©<>©‘’Nº×÷”“
*/

// déclarations des variables
var tabItems = new Array();

var tabFichiers = new Array();

var nItems = 10;
// initialisation des listes
tabItems = ["texte animé : les initiales des vers d'un poème changent de couleur ...",
			"exemple de formatage de texte ;",
			"composition RGB des couleurs ",
			"convertisseur unicode (chinois)",
			"div déroulants",
			"convertisseur de nombre de base à base",
			"qu'est ce qu'un cookie ?",
			'stokage local de données : cookies et localstorage',
			"résumé et description des balises usuelles",
			"calculette et échiquier"
			];
tabFichiers = [	'texte anime.html',
				'espacesEntreMots.html',
				'couleursRGB.html',
				'unicode.html',
				"divDeroulant.html",
				"ecriture_entier_positif_en_differentes_bases.html",
				"cookies.html",
				"exempleStorage.html",
				"stylesEnLigne.html",
				"calculette.html"
				];

// fonction appelée par onload dans la balise body ou par init ()
function construireListeSommaire () {
	//alert("debug2");
	
	var listeSommaire = document.getElementById("listeSommaire");
	
	listeSommaire.innerHTML = "<h2>Sommaire :</h2><ul> <li><a href='../index.html' style='font-size:200%;'>Accueil du site</a></li>";
	
	for (var i=0; i < nItems; i++) {
		listeSommaire.innerHTML += "<li><a href='"+tabFichiers [i] + "' target='_blank' >" +tabItems[i]+"</a></li>";
		}
	listeSommaire.innerHTML += "</ul>";
	}
