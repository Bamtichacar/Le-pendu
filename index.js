
//LISTING DE TOUTES LES COMPOSANTES :

// 1/ Création Tableau d'images

const Tableau_d_images = new Array();

Tableau_d_images[0] = new Image();
Tableau_d_images[0].src = './images/pendu7.png';

Tableau_d_images[1] = new Image();
Tableau_d_images[1].src = './images/pendu6.png';

Tableau_d_images[2] = new Image();
Tableau_d_images[2].src = './images/pendu5.png';

Tableau_d_images[3] = new Image();
Tableau_d_images[3].src = './images/pendu4.png';

Tableau_d_images[4] = new Image();
Tableau_d_images[4].src = './images/pendu3.png';

Tableau_d_images[5] = new Image();
Tableau_d_images[5].src = './images/pendu2.png';

Tableau_d_images[6] = new Image();
Tableau_d_images[6].src = './images/pendu1.png';

Tableau_d_images[7] = new Image();
Tableau_d_images[7].src = './images/pendu0.png';



// 2/ Choix du mot à faire deviner - Mot à trouver
const mot_a_trouver = wordsArray[Math.floor(Math.random()*(wordsArray.length))];

// 3/ Longueur mot à trouver
const longueur_mot_a_trouver = mot_a_trouver.length;


// 4/ Nb d'erreurs autorisées (pouvant varier d'une potence à l'autre, sa valeur est logée dans la variable) :
let erreurs_autorisees = 7;


// 5/ Nb d'erreurs comises par le joueur (initialisée à zéro) :
let erreurs_commises = 0;

// 6/ Mot trouvé par le joueur
let mot_trouve = [];
for(let i=0; i<longueur_mot_a_trouver; i++){
    mot_trouve.push("_");
}
console.log(mot_trouve.join(" ")); // Pour afficher sur 1 ligne comme un mot et pas comme un tableau avec des virgules
// PLUS SIMPLE AVEC METHODE .FILL
/* let mot_trouve = Array(longueur_mot_a_trouver).fill("_");
console.log(mot_trouve.join(" ")); // Affiche le mot sous forme de tirets
 */


// Construction de la potence : instruction "on trace 1 trait de plus sur la potence"


// 7/ Deroulement du jeu
//   a/ tant que mot trouvé est diff de mot à trouver ET QUE erreurs commises < err autorisees
//     demander au joueur une lettre
//     Dans la boucle tant que, l'une des instructions est on ajoute dans mot_trouve la lettre là où elle apparait
//     pour ce faire il faudra avoir recours a une fct lettres_placees ayant pour parametre un mot mot_complet et 
//     une chaine de caracteres lettres_trouvees : par ex lettres_placees("elevage", "ela") renvoie ele-a-e
//   b/  SI lettre est dans le mot a trouver alors ajouter dans mot trouvé la lettre à sa place
//   c/  SINON erreurs commises +1  ET on trace un trait sur la potence
//   d/  FIN SI on affiche le mot trouve OU si potence affichée
//   e/  FIN TANT QUE :
           //SI mot trouve est egal a mot a trouver
               // ALORS on ecrit Gagné !
               // SINON on ecrit Perdu !
//         FIN SI




//ATTENTION mot_a_trouver EST UNE CHAINE !!!!!!! il va falloir transformer mot_trouve qui est un TABLEAU en chaine pour les comparaisons

console.log(`Mot à trouver : ${mot_a_trouver}`);

// MON CODE REMANIE
while ((mot_trouve.join("") != mot_a_trouver) && (erreurs_commises < erreurs_autorisees)) {
    const lettre = window.prompt("Veuillez saisir une lettre.", "");
    if (mot_a_trouver.includes(lettre)) {
        let index = mot_a_trouver.indexOf(lettre);
        while (index !== -1) {
            mot_trouve[index] = lettre;
            index = mot_a_trouver.indexOf(lettre, index + 1);
        }
        console.log(mot_trouve.join(" ")) // affiche en tant que mot,sans ça l'affichage serait sous forme de tableau
    } else {
        erreurs_commises += 1;
        console.log(`Erreur : ${erreurs_commises}. Il reste ${erreurs_autorisees - erreurs_commises} essais.`);
        console.log(Tableau_d_images[erreurs_commises].src);
        // OU 
        //document.getElementById('imageDuPendu').src = Tableau_d_images[erreurs_commises].src;
    }

}

if (mot_trouve.join("") === mot_a_trouver) {
    console.log("Félicitation vous avez gagné !");
} else if (erreurs_commises === erreurs_autorisees) {
    console.log("Vous avez perdu !")
}


/* 
Cette ligne ne fonctionne pas : 
if (mot_trouve === mot_a_trouver) {
    console.log("Félicitation vous avez gagné !")}
 
    voici pourquoi 

Comparaison entre deux tableaux (mot_trouve et mot_a_trouver) : En JavaScript, comparer deux tableaux 
avec == ou === ne fonctionne pas comme pour les variables simples. Même si les deux tableaux ont les mêmes 
valeurs, ils ne sont pas considérés comme identiques, car JavaScript compare les références, pas les valeurs 
des éléments.

Solution : Pour comparer les deux tableaux, joindre mot_trouve en une chaîne et la comparer avec
 mot_a_trouver. Par exemple :

if (mot_trouve.join('') === mot_a_trouver) {
    console.log("Félicitations, vous avez gagné !");}
 */










































































































































































