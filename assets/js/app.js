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

// localStorage.setItem('localScores', JSON.stringify(styleArray));


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


}


var questionOne = document.getElementById("yesAnswer1");
var questionTwo = document.getElementById("yesAnswer2");
var questionThree = document.getElementById("yesAnswer3");
var questionFour = document.getElementById("yesAnswer4");
var questionFive = document.getElementById("yesAnswer5");
var questionSix = document.getElementById("yesAnswer6");
var questionSeven = document.getElementById("yesAnswer7");
var questionEight = document.getElementById("yesAnswer8");
var questionOneNine = document.getElementById("yesAnswer9");

questionFive.addEventListener('click', function(event){
    window.open('http://www.busch.com/')
});


var button = document.getElementById("submitQuiz");

button.addEventListener('click', function(event){

    event.preventDefault();
    
    if (questionOne.checked == true) {
        styleArray[5] += 3;
        styleArray[8] += 2;
        styleArray[7] += 1;
        }

    if (questionTwo.checked == true) {
        styleArray[3] += 3;
        styleArray[4] += 2;
        
    }

    if (questionThree.checked == true) {
        styleArray[3] += 3;
        styleArray[4] += 2;
        
    }

    if (questionFour.checked == true) {
        styleArray[8] += 3;
        styleArray[1] += 2;
        styleArray[6] += 1;
    }

    if (questionSix.checked == true) {
        styleArray[5] += 3;
        styleArray[2] += 2;
        styleArray[0] += 1;
    }

   

    if (questionSeven.checked == true) {
        styleArray[7] += 3;
        styleArray[6] += 2;
        styleArray[0] += 1;
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


