/*
		Auteur : Joël Dendaletche
		Contenu : construction de la liste des items du sommaire
		Date de création : 18 / 09 /2019
  
 */
// ressources typographique à copier /coller : À Á Â Ä Æ Ç É È Ê Ë Î Ï  Ô Ö Ø  OE Ú Ù Û Ü 



// déclarations des variables
var tabItems = new Array();
var PREM = 0;
var TERM = 1;

var baseURL = ["programmeNSIpremier", "programmeNSITerm"];

var nomNiveaux = ["première", "terminale" ];

var nItems = [10,8];
// initialisation des listes
tabItems = [["Introduction",
			"La démarche de projet",
			"Histoire de l'informatique",
			"Représentation des données : types et valeurs de base",
			"Représentation des données : types construits",
			"Traitement de données en tables",
			"Interactions entre l’homme et la machine sur le Web",
			"Architectures matérielles et systèmes d’exploitation",
			"Langages et programmation",
			"Algorithmique"],
			["préambule",
			"Démarche de projet et Modalités de mise en œuvre",
			"Histoire de l’informatique",
			"Structures de données : types de données abstraites : TAD",
			"Bases de données",
			"Architectures matérielles, systèmes d’exploitation et réseaux",
			"Langages et programmation", "Algorithmique"
			
			]];


// fonction appelée par onload dans la balise body 
function construireListeSommaire ( niveau, division ) {
	//alert("debug1");
	
	var listeSommaire = document.getElementById("listeSommaire");
	
	listeSommaire.innerHTML = "<h2>Sommaire :</h2><ul> <li><a href='../index.html' style='font-size:200%;'>Accueil du site</a></li>";
	for (var i=0; i < nItems[niveau]; i++) {
		listeSommaire.innerHTML += "<li><a href='"+baseURL[niveau]+"_"+i+ ".html' target='_blank' >" +tabItems[niveau][i]+"</a></li>";
		}
	listeSommaire.innerHTML += "<li><a href='"+baseURL[1-niveau]+"_0.html' target='_blank' >vers le programme de " +nomNiveaux[1-niveau]+"</a></li></ul>";

	document.getElementById("titre1").innerHTML = tabItems[niveau][division];
	document.getElementById("spNiveau").innerHTML = nomNiveaux[niveau];
	document.getElementById("tmp").innerHTML = "";
	}
