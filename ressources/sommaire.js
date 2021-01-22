/*
		Auteur : Joël Dendaletche
		Contenu : construction de la liste des items du sommaire
		Date de création : 18 / 09 /2019
  
 */
// ressources typographique à copier /coller : À Á Â Ä Æ Ç É È Ê Ë Î Ï  Ô Ö Ø  OE Ú Ù Û Ü 



// déclarations des variables
var tabItems = new Array();

var baseURL = "ressource";

var nItems = 3;
// initialisation des listes
tabItems = ["Bonnes pratiques",
			"Premiers pas en python",
			"Les conditions : if else elif "];


// fonction appelée par onload dans la balise body 
function construireListeSommaire () {
	//alert("debug1");
	
	var listeSommaire = document.getElementById("listeSommaire");
	
	listeSommaire.innerHTML = "<h2>Sommaire :</h2><ul> <li><a href='../../index.html' style='font-size:200%;'>Accueil du site</a></li>";
	for (var i=0; i < nItems; i++) {
		listeSommaire.innerHTML += "<li><a href='"+baseURL+"_"+i+ ".html' target='_blank' >" +tabItems[i]+"</a></li>";
		}
	listeSommaire.innerHTML += "</ul>";
	}
