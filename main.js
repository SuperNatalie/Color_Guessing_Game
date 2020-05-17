let divOne = document.getElementById("one");
let divTwo = document.getElementById("two");
let divThree = document.getElementById("three");
let divFour = document.getElementById("four");
let divFive = document.getElementById("five");
let guess = document.getElementById("rgb");
let rightChoiceHTML = `<div onclick="rightChoice()"></div>`; 
let wrongChoiceHTML = `<div onclick="wrongChoice()"></div>`; 

function randomNumber() {
    return Math.floor(Math.random() * 256);
}

function randomRGB() {
    return `rgb(${randomNumber()}, ${randomNumber()}, ${randomNumber()})`;
}

divOne.style.background = randomRGB();
divTwo.style.background = randomRGB();
divThree.style.background = randomRGB();
divFour.style.background = randomRGB();
divFive.style.background = randomRGB();

const correct = Math.floor(Math.random()* 5+1);
console.log(correct);

divOne.innerHTML = wrongChoiceHTML;
divTwo.innerHTML = wrongChoiceHTML;
divThree.innerHTML = wrongChoiceHTML;
divFour.innerHTML = wrongChoiceHTML;
divFive.innerHTML = wrongChoiceHTML;

function guesswhat() {
    if (correct === 1) {
        guess.innerHTML +=  divOne.style.background + " is.";
        divOne.innerHTML = rightChoiceHTML;
    } else if (correct === 2) {
        guess.innerHTML += divTwo.style.background + " is.";
        divTwo.innerHTML = rightChoiceHTML;
    } else if (correct === 3) {
        guess.innerHTML += divThree.style.background + " is.";
        divThree.innerHTML = rightChoiceHTML;
    } else if (correct === 4) {
        guess.innerHTML += divFour.style.background+ " is.";
        divFour.innerHTML = rightChoiceHTML;
    } else if (correct === 5) {
        guess.innerHTML += divFive.style.background + " is.";
        divFive.innerHTML = rightChoiceHTML;
    }  else {
        guess.innerHTML = "Ups, a little Bug... Please press Reset Me."
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