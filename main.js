

let divOne = document.getElementById("one");
let divTwo = document.getElementById("two");
let divThree = document.getElementById("three");
let divFour = document.getElementById("four");
let divFive = document.getElementById("five");
let guess = document.getElementById("rgb");
let rightChoiceHTML = `<div id="one" onclick="rightChoice()"></div>`; 


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


console.log(divOne.style.background)


const correct = Math.floor(Math.random()*5);
console.log(correct);


function guesswhat() {
    if (correct === 1) {
        guess.innerHTML += divOne.style.background + " is.";
        divOne.innerHTML = rightChoiceHTML;
    } else if (correct === 2) {
        guess.innerHTML += divTwo.style.background + " is.";
        divTwo.innerHTML = rightChoiceHTML;
    } else if (correct === 3) {
        guess.innerHTML += divThree.style.background + " is.";
        divThree.innerHTML = rightChoiceHTML;
    } else if (correct === 4) {
        guess.innerHTML += divFour.style.background + " is.";
        divFour.innerHTML = rightChoiceHTML;
    } else if (correct === 5) {
        guess.innerHTML += divFive.style.background + " is.";
        divFive.innerHTML = rightChoiceHTML;
    } 
}

console.log(divOne.innerHTML);



guesswhat();




function rightChoice() {
    ergebnis.innerHTML = "Richtig!";
}

function wrongChoice() {
    ergebnis.innerHTML = "Leider Falsch.";
}





function reset() {
    location.reload();
   
}
