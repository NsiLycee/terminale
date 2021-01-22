/***********************************************************************
*																	   *
*			Auteur	: 	Joël Dendaletche							   *
*			Date 	:	28/09/2019									   *
*			Sources : w3school ; 									   *
* 																	   *
* *********************************************************************/
var visible = false;
function init () {
	var listePopup = ["rappelsListes", "manipulerDesFichiers",
	 "rappelsSurLesDictionnaires", "exercicesApplication"];
	var nPopup = 4;
	visible = false;
	//alert("init, visible = " + visible );
}
function visible() { visible = !visible ;}
function afficheTailleEcran () {
	
	let env = document.getElementById("environnement");
	let texte = ""; // déclaration et initialisation du texte à afficher

	texte += "<p>innerWidth: " + window.innerWidth + "</p>";
	texte += "<p>innerHeight: " + window.innerHeight + "</p>";
	texte += "<p>outerWidth: " + window.outerWidth + "</p>";
	texte += "<p>outerHeight: " + window.outerHeight + "</p>";
	env.innerHTML = texte;
	if (visible) {
		env.style.display = "none"; }
	else {
		env.style.display = "block"; }
	visible(); // inversion
}

document.getElementById("btn1").addEventListener("click", function(){
  voir("rappelsListes");
}); 


/* Permettre de démasquer ou masquer un élément d'id = ident          */


function voir(ident)
{
	let popup = document.getElementById(ident);
	
	if (visible) { // masque
		popup.style.display = 'none';
		//alert("popup.style.display = " + popup.style.display);
	}
	else { // démasque
		popup.style.display = 'block';
		//alert("popup.style.display = " + popup.style.display);
	}
	visible = !visible; // inversion
	//alert("visible à la fin = " + visible);
}
function revoir(ident) {
	visible();
	voir(ident);
}






