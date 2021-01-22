/***********************************************************************
 *                                                                     *
 * 				    Auteur : Joël Dendaletche                          *
 * 					Objet : fonctions qui gèrent et affichent 		   *
 * 							des questions de quiz et les corrigés	   *
 * 																	   *
 * ********************************************************************/
// affiche le quiz n° n de la série s du thème t
function afficherQ (tabN, tabS, tabT)
{
	let n, s, i, t;
	n = tabN[0]; //
	var contenuHTML = "<details><summary>"+Q[n-1].Num+ ". "+ 
						Q[n-1].Question+"</summary><table><tbody>";
						
	var k; // nombre de chiffres du numéro de la question
	if (n > 99) { k = 3; }
	else if (n> 9) { k = 2; }
	else { k = 1; }
	
	//alert("k = " + k + " n = " + n);
	// éventuellement une image en titre de tableau
	contenuHTML += "<tr><td colspan='2'><img src='"+
	Q[n-1].linkImage+"'/></td></tr>"; 
	for (i = 1; i < Q[n-1].nb_rep+1; i++) {
		contenuHTML += "<tr><td><input type='radio' id='quest"+n+
		"_"+i+"' onclick='corriger(this,"+Q[n-1].Num+");'  />" + 
		"<label for='quest"+n+"_"+i+"'>"+Q[n-1].propositions[i-1]+
		"</label></td><td class='correction' id='corr"+
		Q[n-1].Num+"_"+i+"'></td></tr>";
		}
	contenuHTML += "</tbody></table></details>";
	
	document.getElementById("dvQ"+n).innerHTML = contenuHTML ;
}
// définition des objets question réponses corrigés

var score = 0;

var precedent = 1;
var numObj = 1;
var couleurRep = ["red", "blue","orange"];
var Faux = 0;
var Vrai = 1;
var Neutre = 2;
var nEssais = 1;

function corriger(obj, numQ) {
		
		var n = obj.id[obj.id.length-1];
		//var numQ = k ; //obj.id.slice(n-k-3,n-2); // prend les k derniers caractères.slice(n-k,n+1); // prend les k derniers caractères;
		var valeurRep = Vrai;
		
		//alert("question n° "+numQ+ " réponse n° ", n);
		// efface la réponse précédente
		var objPrecedent = document.getElementById("corr"+numObj+"_"+precedent);
		
		objPrecedent.style.border = "solid 1px black";
		objPrecedent.innerHTML = "";
		
		var debug = document.getElementById("debug");            
		//debug.innerHTML = "corr"+numQ+"_"+n;
		
		var rep = document.getElementById("corr"+numQ+"_"+n);
		//rep.style.border = "groove 5px " + couleurRep;
		rep.innerHTML = Q[numQ-1].correction[n-1];
		
		// Style d'affichage des réponses
		//rep.style.width = "300%";
		if (Q[numQ-1].justesse[n-1] == 0) {
			valeurRep = Neutre;
			}
		else if (Q[numQ-1].justesse[n-1] == -1) {
			valeurRep = Faux;
			}
		else {
			valeurRep = Vrai;
		}
		rep.style.border = "groove 5px " + couleurRep[valeurRep];
		
		precedent = n;
		numObj = numQ;
		score += parseInt(Q[numQ-1].justesse[n-1]);
		
		// affichage du score
		var affScore = document.getElementById("score");            
		affScore.innerHTML = "votre score actuel est de "+ score + " sur " + nEssais;
		nEssais += 1;

}
