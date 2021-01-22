/*Exemple de code :
  <div id="caract1">
>     Caractéristique 1
</div>
<div id="content_caract_1">
    Le contenue de caract 1</br>
    facilement repliable
</div>

<div style="margin-top:10px" id="caract2">
  >  Caractéristique 2
</div>
<div id="content_caract_2">
    Le contenue de caract 1</br>
facilement repliable</br>
<input type="text" placeholder="du text..."/>
</div>*/




$('#caract1').click( function() { // Au clic sur un élément
$("#content_caract_1").toggle(400);// chache ou affiche a une vitesse constante (400)
		});
$('#caract2').click( function() { // Au clic sur un élément
$("#content_caract_2").toggle(400); // chache ou affiche a une vitesse constante (400)
		})
