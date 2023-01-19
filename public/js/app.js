//EXERICE 1

let div = document.getElementById('content');

let h2 = document.createElement('h2');
h2.innerHTML = "Part 6 - Exercice 1";
div.appendChild(h2);


//EXERICE 2

let p = document.createElement('p');
p.innerHTML = "lorem ipsum lorem ipsum";
div.appendChild(p);

//EXERICE 3
let h1 = document.createElement('h1');
h1.innerHTML = "Le DOM - Création de HTML";
div.insertAdjacentElement("afterbegin",h1);

//EXERICE 4
let contenu = div.innerHTML;
let sec = document.getElementById('secondaire');
sec.innerHTML = contenu;

sec.getElementsByTagName('h2')[0].innerHTML = "Exercice2";


//EXERICE 5

let matiere = document.createElement('div');
matiere.id = "matiere";

let liste = document.createElement("ol");
let choses = ["DOM","JS","SCSS"];

for (const iterator of choses) {
    let li = document.createElement('li');
    li.innerText = iterator;
    liste.appendChild(matiere);
}

matiere.appendChild(liste);
document.body.appendChild(matiere);