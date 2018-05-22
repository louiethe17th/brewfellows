'Use strict'

var ale = 0;
var sour = 3;
var redAle = 6;
var stout = 0;
var porter = 0;
var ipa = 5;
var saison = 2;
var pilsner = 0;
var cider = 9;
var impIpa = 0;


// var styleArray = [redAle, stout, porter, ipa, saison, pilsner, cider, impIpa];
  var numberArray = [];
  

  
  
  //Check to see if beer list is already populated in local Storage
  if (localStorage.localBeerList){
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
    
    
    questionOne.addEventListener('click', testClick);
    
    function testClick(){
        console.log('clickyBoi');
        questionOne.removeEventListener('click', testClick)
        sour ++;
        
    }
    
    
    var recommendBeer = function(){
    console.log(styleArray);
    var styleArray = [ale, sour,  redAle, stout, porter, ipa, saison, pilsner, cider, impIpa];

    for(i in styleArray){
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