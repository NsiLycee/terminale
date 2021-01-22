//*********************************************************************/
/*                                                                     *
*              Auteur : Joël Dendaletche                               *
*              Projet : quelques animations de SVG et canvas           *
*                                                                      *
***********************************************************************/
/*var canvas = document.getElementById("exempleCanvas");
var ctx = canvas.getContext("2d");*/

var tabColor = new Array();
tabColor = ["green", "yellow", "orange", "red", "purple", "cyan", 
            "black", "darkgrey", "lightgrey", "blue", "lightblue",
            "darkblue", "brown","lime","white" ];
var nCol = 15;
// cooordonnées de Mickey
var tabX = new Array();
tabX = ["311","322","334","331","319","308","302","293","296","303",
"312","300","272","243","217","189","165","152","146","157","144","137",
"145","164","165","175","201","214","225","238","216","198","179","165",
"154","153","154","130","113","109","121","142","161","175","170","176",
"194","207","228","244","250","261","267","258","279","298","279","258",
"252","252","258","233","243","242","233","225","226","229","234","259",
"254","240","220","201","180","200","207","204","182","148","128","106",
"96","103","118","137","124","113","104","83","57","32","15","17","32",
"44","69","88","100","104","123"];
var tabY = new Array();
tabY = ["220","208","191","175","173","183","196","209","216","221",
"218","242","258","263","261","251","235","216","199","200","196","204",
"199","238","266","281","283","275","265","262","286","292","292","284",
"265","254","265","253","226","208","174","165","172","182","149","123",
"107","103","112","134","122","139","169","201","192","195","192","201",
"178","156","140","143","164","188","208","188","165","148","142","139",
"125","111","102","98","97","77","57","33","17","17","26","47","78",
"98","107","110","120","135","115","101","104","116","143","173","194",
"204","205","197","187","215","246"];

function roundDecimal(nombre, precision){
	var precision = precision || 2;
	var tmp = Math.pow(10, precision);
	return Math.round( nombre*tmp )/tmp;
}
 
function changeSVG(curseur) {
	var tabStrokeColor = new Array();
	tabStrokeColor = ["green","red","yellow","blue"];
	var tabFillColor = new Array();
	tabFillColor = ["yellow","green","red","orange"];
	 
	 
	var svg = document.getElementById("exemple2SVG");
	var position = curseur.value;
	var innerH = "";
	let i;
	for (i = 4; i>0; i-- ) {
		innerH += "<circle cx='"+position+"' cy='50' r='"+eval(5*i+10)+
		"' stroke='"+tabStrokeColor[eval(i-1)]+
		"' stroke-width='4' fill='"+tabFillColor[eval(i-1)]+"' />";
		}
	svg.innerHTML = innerH + sauvSVG1;
}
function tracer(obj) {
	let svg = document.getElementById("exemple1SVG");
	let x, y, l1, l2, coul1, coul2, epaisseur, R, G, B;
	let inner = "";
	
	// tirage aléatoire des valeurs de paramètres
	x 		= Math.floor(Math.random() * 590+10)			;
	y 		= Math.floor(Math.random() * 280+10)			;
	l1 		= Math.floor(Math.random() * 60+10)				;
	l2 		= Math.floor(Math.random() * 60+10)				;
	
	coul1 	= tabColor[Math.floor(Math.random() * nCol+1)]	;
	coul2 	= tabColor[Math.floor(Math.random() * nCol+1)]	;
	epaisseur = Math.floor(Math.random() * nCol+1)			;
	R 		= Math.floor(Math.random() * 255)				;
	G 		= Math.floor(Math.random() * 255)				;
	B 		= Math.floor(Math.random() * 255)				;
	//alert("debug coul1 = " + tabColor[Math.floor(Math.random() * nCol+1)] + "  ep " + epaisseur);
	
	switch(obj.id) {
		case "inpCarre":
			inner = "<rect x='"+x+"' y='"+y+"' width='"+l1+
			"' height='" + l1 + 
			"' stroke='"+coul1+
			"' stroke-width='"+ epaisseur +
			"' fill='"+coul2+"' />";
		break; 
		case "inpRond":
			inner = "<circle cx='"+x+"' cy='"+y+"' r='"+l1+
			        "' stroke='"+coul1+
			        "' stroke-width='"+ epaisseur +
			        "' fill='"+coul2+"' />";
		break;
//<polygon points="100,10 40,198 190,78"  style="fill:lime;stroke:purple;stroke-width:5;fill-rule:evenodd;" />
		case "inpTriangle": 
			inner = "<polygon points='"+x+ ","+y+" "+
			eval(x+Math.floor(Math.random() * 50-100))+","+
			eval(y+Math.floor(Math.random() * 100-200))+" "+
			eval(x+Math.floor(Math.random() * 100-100))+","+
			eval(y+Math.floor(Math.random() * 200+200))+
			"'  style='fill:"+ coul1 +
			";stroke:rgb("+R+","+G+","+ B+");stroke-width:"+
			epaisseur+";fill-rule:evenodd;' />";
		break;
		case "inpOvale":
			inner = "<ellipse cx='"+x+"' cy='"+y+
			        "' rx='"+l1+ "' ry='"+l2+
			        "' stroke='"+coul1 + "' stroke-width='"+ epaisseur +
			        "' fill='"+coul2+"' />";
		break;
		case "inpMickey":
			inner = traceMickey(x,y,coul1, coul2);
		break;
		
		default:;
	} 
	
	svg.innerHTML += inner;
	inner = inner.replace("<","&lt;").replace(">","&gt;");
	document.getElementById("codeSVG1").innerHTML = inner;
}
function ecrireSVG(obj) {
	var svg = document.getElementById("exemple1SVG");
	var x, y, l1;
	var inner = "";
	
	x = Math.floor(Math.random() * 590+10);
	y = Math.floor(Math.random() * 280+10);
	inner =	"<text x='"+x+"' y='"+y+"' fill='"+
			tabColor[Math.floor(Math.random() * nCol+1)]
			+"' style='font-size:"+Math.floor(Math.random() * 200 + 50)+
			"%;opacity:"+Math.random()+";'>"+obj.value+"</text>";
	// remplace les < > encadrant les balises par leur code ... 
	svg.innerHTML += inner;
	inner = inner.replace("<","&lt;").replace(">","&gt;");
	document.getElementById("codeSVG1").innerHTML = inner;
}
	
var arret = false;
var posX, posY;
var addToX, addToY;

posX = posY = 50;
addToX = 1;
addToY = -1;

function initSVGMove (delayTime) {
	var id = setInterval(frame, delayTime);

	function frame() {
		if ( arret ) {
			clearInterval(id);
		} 
		else {
		/* code to change the element style */ 
		}
	}
}
// //<polygon points="100,10 40,198 190,78 10,78 160,198"  style="fill:lime;stroke:purple;stroke-width:5;fill-rule:evenodd;" />
function traceMickey (x, y, coul1, coul2) { 
	let innerSVG = "<polygon points='";
	let echelle = Math.random() * 2 +0.1;
	nbP = tabX.length;
	let i;
	for (i = 0; i < nbP ; i++ ) {
		innerSVG += Math.floor((x+parseInt(tabX[i])-50)*echelle) + "," + Math.floor((y+parseInt(tabY[i])-50)*echelle)+ " ";
	}
	innerSVG += "' style='fill:"+coul1+";stroke:"+coul2+";stroke-width:"
			+ Math.floor(Math.random() * 5+1);
	return innerSVG + ";fill-rule:evenodd;opacity:"+roundDecimal(Math.random(),2)+
			";' />";
}

/* *********************************************************************/
var sauvSVG1 ="<rect x='10' y='20' width='90' height='60'>"+
		"<animate id='a1' "+
		"attributeName='fill' from='red' to='blue' dur='3s' fill='freeze'"+
		" /><animate id='a4' attributeName='width' from='90' to='120' dur='1s' fill='freeze' />"+
		"</rect>+"
		"<rect x='10' y='120' width='90' height='60'>"+
			"<animate id='a2' attributeName='fill' from='blue' to='yellow' begin='a1.end' dur='1s' fill='freeze' />"+
		"</rect>"+
		"<rect x='10' y='220' width='90' height='60'>"+
			"<animate id='a3' attributeName='x' from='10' to='100' begin='a2.end' dur='1s' fill='freeze' />"+
			"<animate id='a5' attributeName='y' from='220' to='50' begin='a3.end' dur='1s' fill='freeze' />"+
			"<animate id='a6' attributeName='x' from='100' to='10' begin='a5.end' dur='1s' fill='freeze' />"+
			"<animate id='a7' attributeName='y' from='50' to='220' begin='a6.end' dur='1s' fill='freeze' />"+
		"</rect>";
		

