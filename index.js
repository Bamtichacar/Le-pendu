//LISTING DE TOUTES LES COMPOSANTES :

// Création Tableau d'images

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



// Choix du mot à faire deviner


// Construction de la potence : instruction "on trace 1 trait de plus sur la potence"



// Nb d'erreurs autorisées (pouvant varier d'une potence à l'autre, sa valeur est logée dans la variable) :
let erreurs_autorisees = 10;

// Mot à trouver
const mot_a_trouver = wordsArray[Math.floor(Math.random()*(wordsArray.length-1))];

// Longueur mot à trouver
const longueur_mot_à_trouver = mot_a_trouver.length;

// Nb d'erreurs comises par le joueur (initialisée à zéro) :
let erreurs_commises = 0;

// Mot trouvé par le joueur
let mot_trouve = [];
for(let i=0; i<longueur_mot_à_trouver; i++){
    mot_trouve += "- ";
}
console.log(mot_trouve);


// Dans la boucle tant que, l'une des instructions est on ajoute dans mot_trouve la lettre là où elle apparait
// il faudra avoir recours a une fct lettres_placees ayant pour parametre un mot mot_complet et une chaine de 
// caracteres lettres_trouvees
// par ex lettres_placees("elevage", "ela") renvoie ele-a-e

// Deroulement du jeu
while ((mot_trouve != mot_a_trouver) && (erreurs_commises < erreurs_autorisees)) {
    const lettre = (window.prompt("Veuillez saisir une lettre.", ""));
    if (mot_a_trouver.includes(lettre)) {
        mot_trouve[lettre] = mot_a_trouver[lettre];
    } else {erreurs_commises += 1


// faire un tableau d'image et associer le compteur des erreurs commises à l'index de l image


        const imagejavascript = document.createElement("img");
        imagejavascript.src = "./pendu6.png"
        document.body.appendChild(imagejavascript)
    }

}




//console.log(typeof wordsArray);


//console.log(wordsArray);


