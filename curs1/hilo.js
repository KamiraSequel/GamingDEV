let cardTypes = ['clubs', 'diamonds', 'hearts', 'spades', ];
let pack = {
    'clubs': [],
    'diamonds': [],
    'hearts': [],
    'spades': [],
};
let score = 0;
let vecheaCarte = 0;
function addCardsPack(nrPacks = 1) {
    for (let i = 0; i < cardTypes.length; i++) {
        
        for (let j = 2; j <= 14; j++) {
            pack[cardTypes[i]].push(j);
        }
    }
    console.log(pack);
}

function incarcare(){

    addCardsPack();
    // Adaugare carte noua
    nouaCarte = schimbaCarte();
    //Comparatie
    // lastCardNumber = nouaCarte;
    // Genereaza pachet
    // Setare scor zero
    afiseazaScor();
    // ...
}

function afiseazaScor() {
    const divScore = document.getElementById('score');
    const spanScore = divScore.getElementsByTagName('span')[0];
    spanScore.textContent = score;
}

function showFace(happy){
    const divIdToShow = 'face-' + (happy ? 'happy' : 'sad'); //shorthand if
    const divIdToHide = 'face-' + (! happy ? 'happy' : 'sad');
    document.getElementById(divIdToShow).style.display = 'block';
    document.getElementById(divIdToHide).style.display = 'none';
}

function schimbaCarte(){
    const indexType = Math.floor(Math.random() * 4);
    const cardNumber = Math.floor(Math.random() * 13 + 2);
    const position = pack[cardTypes[indexType]].indexOf(cardNumber);
    const fileName = 'cards/' + cardTypes[indexType] + "_" + cardNumber + '.svg';
    if (position == -1){
        console.log('Am obtinut' + fileName + 'si nu este in pachet');
        schimbaCarte ();
        return;
    }
    pack[cardTypes[indexType]].splice(position, 1);
    //lastCardNumber = cardNumber;
    console.log(pack);
    console.log(fileName);
    const imgElement = document.querySelector('#card > img');
    imgElement.setAttribute ('src', fileName);
    return cardNumber;
}

function higher() {
    nouaCarte = schimbaCarte();
    if(typeof nouaCarte !== 'number') return;
    if (nouaCarte >= vecheaCarte) {
        score++;
        showFace(true);
        afiseazaScor();
    }
    else {
        score--;
        showFace(false);
        afiseazaScor();
    }
    vecheaCarte = nouaCarte;
}

const lower = function() {
    nouaCarte = schimbaCarte();
    if(typeof nouaCarte !== 'number') return;
    if (nouaCarte <= vecheaCarte) {
        score++;
        showFace(true);
        afiseazaScor();
    }
    else {
        score--;
        showFace(false);
        afiseazaScor();
    }
    vecheaCarte = nouaCarte;
}

document.addEventListener('DOMContentLoaded', incarcare );