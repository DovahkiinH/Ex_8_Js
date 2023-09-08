/* Script prénom */

var i = 0

do{

    i++;
    var prenom = window.prompt("Saisissez le prénom N°" + i + " " + "ou Clic sur Annuler pour arrêter la saisie.");

}while (prenom != null);

/* Script entier inférieurs à N */

var N = window.prompt("Choisissez la valeur de N");

do{

    N--;
    alert(N);

}while (N > 0)

/* Script Moyenne */

m = 3;
var entier1 = window.prompt("Choisissez un nombre :");
var entier2 = window.prompt("Choisissez le second nombre");
var somme = +entier1 + +entier2;
do {

var entiersup = window.prompt("Choisissez un nombre suplémentaire");
var somme = +somme + +entiersup;
var moyenne = somme / m;
alert("la somme de ces nombres est :" + " " + somme + " " + " et la moyenne est :" + " " + moyenne);
m++;



}while ((entier1 = 0) || (entier2 = 0) || (entiersup = 0))
