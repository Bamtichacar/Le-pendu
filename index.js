
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




console.log(`Mot à trouver : ${mot_a_trouver}`);     // console.log à commenter qd fini de verifier si tout est ok


//ATTENTION mot_a_trouver EST UNE CHAINE !!!!!!! il va falloir transformer mot_trouve qui est un TABLEAU 
//en chaine pour les comparaisons


let doublon = []; // pour stocker les doublons des lettres proposées

while ((mot_trouve.join("") != mot_a_trouver) && (erreurs_commises < erreurs_autorisees)) {
    let lettre = window.prompt("Veuillez saisir une lettre.", "").toLowerCase(); // pour que tout soit en minuscules

    // on invite a rejouer quand la lettre a déjà été proposée
    if (doublon.indexOf(lettre) !== -1) {
        lettre = window.prompt("Vous avez déjà saisi cette lettre, merci d'en saisir une autre", "").toLowerCase();
        } else {
            doublon.push(lettre);
        }

// mise en place des lettres trouvees
    if (mot_a_trouver.includes(lettre)) {
        let index = mot_a_trouver.indexOf(lettre);
        while (index !== -1) {
            mot_trouve[index] = lettre;
            index = mot_a_trouver.indexOf(lettre, index + 1);
        }
        console.log(mot_trouve.join(" ")) // affiche en tant que mot,sans ça l'affichage serait sous forme de tableau
// affichage, decompte, et images du pendu suite aux erreurs     
    } else {
        erreurs_commises += 1;
        console.log(`Erreur : ${erreurs_commises}. Il reste ${erreurs_autorisees - erreurs_commises} essais.`);
        console.log(Tableau_d_images[erreurs_commises].src);
        // OU en modifiant html :
        //document.getElementById('imageDuPendu').src = Tableau_d_images[erreurs_commises].src;
    }
}
// affichage des resultats perdu ou gagné
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


































































