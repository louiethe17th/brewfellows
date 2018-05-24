'Use strict'

//index 0
var ale = 0;
//index 1
var sour = 0;
//index 2
var redAle = 0;
//index 3
var stout = 0;
//index 4
var porter = 0;
//index 5
var ipa = 0;
//index 6
var saison = 0;
//index 7
var pilsner = 0;
//index 8
var cider = 0;
//index 9
var impIpa = 0;


var styleArray = [ale, sour, redAle, stout, porter, ipa, saison, pilsner, cider, impIpa];

var numberArray = [];

var selectionIndex;

// localStorage.setItem('localScores', JSON.stringify(styleArray));
var renderBeerSelection = function () {
    newBeerQuiz.innerHTML = '';
    var ulEl = document.getElementById('selection-results');
    var imgEl = document.createElement('img');
    var styleEl = document.createElement('li');
    var brewEl = document.createElement('h4');
    var nameEl = document.createElement('p');
    var urlEl = document.createElement('a');
    var restartEl = document.createElement('a');
    brewEl.textContent = beerArray[selectionIndex].brewer;
    nameEl.textContent = beerArray[selectionIndex].name;
    styleEl.textContent = beerArray[selectionIndex].style;
    urlEl.setAttribute('href', beerArray[selectionIndex].url)
    urlEl.setAttribute('target', '_blank');
    restartEl.setAttribute('href', 'app.html');
    imgEl.src = beerArray[selectionIndex].img;
    imgEl.className = 'beerImg';
    urlEl.innerHTML = 'Beer Advocates Review';
    restartEl.innerHTML = 'Restart Quiz';
    ulEl.appendChild(imgEl);
    ulEl.appendChild(styleEl);
    ulEl.appendChild(brewEl);
    ulEl.appendChild(nameEl);
    ulEl.appendChild(urlEl);
    ulEl.appendChild(restartEl);
}

//Check to see if beer list is already populated in local Storage
if (localStorage.localBeerList) {
    beerArray = JSON.parse(localStorage.getItem('localBeerList'));
    console.log('pulled from LS');
} else {
    console.log('Building list to store in LS');
    populateList();
    localStorage.setItem('localBeerList', JSON.stringify(beerArray));
};

function getMaxOfArray(styleArray) {
    return Math.max.apply(null, styleArray);
}


var recommendBeer = function () {
    console.log(styleArray);

    for (i in styleArray) {
        numberArray.push(styleArray[i]);
        console.log(numberArray);
    }

    var maxNumber = Math.max(...numberArray);
    var indexOfMaxNumber = numberArray.indexOf(maxNumber);
    console.log(maxNumber);
    console.log(indexOfMaxNumber);
    console.log(beerArray[indexOfMaxNumber]);
    numberArray = [];
    selectionIndex = indexOfMaxNumber;

    renderBeerSelection();
}


var questionOneA = document.getElementById("answer1A");
var questionOneB = document.getElementById("answer1B")
var questionTwoA = document.getElementById("answer2A");
var questionTwoB = document.getElementById("answer2B");
var questionThreeA = document.getElementById("answer3A");
var questionThreeB = document.getElementById("answer3B");
var questionFourA = document.getElementById("answer4A");
var questionFourB = document.getElementById("answer4B");
var questionFourC = document.getElementById("answer4C");
var questionFive = document.getElementById("yesAnswer5");
var questionSixA = document.getElementById("answer6A");
var questionSixB = document.getElementById("answer6B");
var questionSixC = document.getElementById("answer6C");
var questionSevenA = document.getElementById("answer7A");
var questionSevenB = document.getElementById("answer7B");
var questionEight = document.getElementById("yesAnswer8");
var questionOneNine = document.getElementById("yesAnswer9");

questionFive.addEventListener('click', function (event) {
    window.open('http://www.busch.com/')
});

questionSevenB.addEventListener('click', function (event) {
    window.open('http://www.smirnoff.com/en-us/ice/smirnoff-ice/')
});


var button = document.getElementById("submitQuiz");

button.addEventListener('click', function (event) {

    event.preventDefault();

    if (questionOneA.checked == true) {
        styleArray[1] += 3;
        styleArray[8] += 2;
        
    }

    if (questionOneB.checked == true) {
        styleArray[5] += 3;
       
    }

    if (questionTwoA.checked == true) {
        styleArray[3] += 3;
        styleArray[4] += 2;

    }

    if (questionTwoB.checked == true) {
        styleArray[6] += 3;
        styleArray[8] += 2;

    }

    if (questionThreeA.checked == true) {
        styleArray[1] += 3;
        styleArray[5] += 2;

    }

    if (questionThreeA.checked == true) {
        styleArray[3] += 3;
        styleArray[4] += 2;

    }

    if (questionFourA.checked == true) {
        styleArray[1] += 3;
       
    }

    if (questionFourB.checked == true) {
        styleArray[5] += 3;
        
    }

    if (questionFourC.checked == true) {
        styleArray[9] += 3;
        
    }

    if (questionSixA.checked == true) {
        styleArray[5] += 3;
       
    }

    if (questionSixB.checked == true) {
        styleArray[0] += 3;
       
    }

    if (questionSixC.checked == true) {
        styleArray[4] += 3;
       
    }



    if (questionSevenA.checked == true) {
        styleArray[4] += 3;
        styleArray[9] += 2;
        styleArray[3] += 1;
    }

    if (questionEight.checked == true) {
        styleArray[2] += 3;
        styleArray[7] += 2;
        styleArray[8] += 1;
    }

    if (questionTwo.checked == true) {
        styleArray[2] += 3;
        styleArray[7] += 2;
        styleArray[5] += 1;
    }

    recommendBeer();
});


