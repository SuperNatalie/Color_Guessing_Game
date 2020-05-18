let divOne = document.getElementById("one");
let divTwo = document.getElementById("two");
let divThree = document.getElementById("three");
let divFour = document.getElementById("four");
let divFive = document.getElementById("five");
let guess = document.getElementById("rgb");
let rightChoiceHTML = `<div class="color" onclick="rightChoice()"></div>`; 
let wrongChoiceHTML = `<div class="color" onclick="wrongChoice()"></div>`; 

function randomNumber() {
    return Math.floor(Math.random() * 256);
}

function randomRGB() {
    return `rgb(${randomNumber()}, ${randomNumber()}, ${randomNumber()})`;
}

divOne.style.backgroundColor = randomRGB();
divTwo.style.backgroundColor = randomRGB();
divThree.style.backgroundColor = randomRGB();
divFour.style.backgroundColor = randomRGB();
divFive.style.backgroundColor = randomRGB();

const correct = Math.floor(Math.random()* 5+1);
console.log(correct);

divOne.innerHTML = wrongChoiceHTML;
divTwo.innerHTML = wrongChoiceHTML;
divThree.innerHTML = wrongChoiceHTML;
divFour.innerHTML = wrongChoiceHTML;
divFive.innerHTML = wrongChoiceHTML;

function guesswhat() {
    if (correct === 1) {
        guess.innerHTML +=  divOne.style.backgroundColor + " is.";
        divOne.innerHTML = rightChoiceHTML;

    } else if (correct === 2) {
        guess.innerHTML += divTwo.style.backgroundColor + " is.";
        divTwo.innerHTML = rightChoiceHTML;
    } else if (correct === 3) {
        guess.innerHTML += divThree.style.backgroundColor + " is.";
        divThree.innerHTML = rightChoiceHTML;
    } else if (correct === 4) {
        guess.innerHTML += divFour.style.backgroundColor+ " is.";
        divFour.innerHTML = rightChoiceHTML;
    } else if (correct === 5) {
        guess.innerHTML += divFive.style.backgroundColor + " is.";
        divFive.innerHTML = rightChoiceHTML;
    }
}
guesswhat();

function rightChoice() {
    ergebnis.innerHTML = "Gut gemacht. Das ist richtig!";
}

function wrongChoice() {
    ergebnis.innerHTML = "Leider falsch. Versuche es noch einmal.";
}

function reset() {
    location.reload();
}