'Use strict'

var questionOne = document.getElementById("questionOne");
console.log(questionOne);


//Check to see if beer list is already populated in local Storage
if (localStorage.localBeerList){
    beerArray = JSON.parse(localStorage.getItem('localBeerList'));
    console.log('pulled from LS');
} else {
    console.log('Building list to store in LS');
    populateList();
    localStorage.setItem('localBeerList', JSON.stringify(beerArray));
};


questionOne.addEventListener('click', testClick);

function testClick(){
    console.log('clickyBoi');
}
