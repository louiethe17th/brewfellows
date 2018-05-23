'Use strict'


//Array to store beer
var beerArray = [];


//Beer constructor function
var BeerConstructor = function(brewer, name, style, url, img){
    this.brewer = brewer,
    this.name = name, 
    this.style = style,
    this.url = url
    this.img = img

    beerArray.push(this);
};


function populateList(){
//New beer objects
new BeerConstructor('Georgetown brewing', 'Manny\'s pale ale', 'Ale', 'https://www.beeradvocate.com/beer/profile/4378/12645/', 'assets/img/mannys.png')
new BeerConstructor('Old Stove Brewing', 'Blackberry Sour', 'Sour', 'https://www.beeradvocate.com/beer/profile/45210/291795/', 'assets/img/oldstove.png')
new BeerConstructor('Stoup', 'NW Red', 'Red Ale', 'https://www.beeradvocate.com/beer/profile/33525/107905/', 'assets/img/stoup.png')
new BeerConstructor('Elysian', 'Dragons Tooth Stout', 'Stout', 'https://www.beeradvocate.com/beer/profile/700/2023/', 'assets/img/dragonstooth.png')
new BeerConstructor('Wander Brewing', 'Global Mut', 'Porter', 'https://www.beeradvocate.com/beer/profile/34416/118914/', 'assets/img/wander.jpg')
new BeerConstructor('Black Raven', 'Trickster IPA', 'IPA', 'https://www.beeradvocate.com/beer/profile/19765/50512/', 'assets/img/blackraven.png')
new BeerConstructor('Holy Mountain Brewing', 'The Seer', 'Saison', 'https://www.beeradvocate.com/beer/profile/36949/140143/', 'assets/img/holymountain.jpg')
new BeerConstructor('Icicle Brewing', 'Crosscut Pilsner', 'Pilsner', 'https://www.beeradvocate.com/beer/profile/25393/108953/', 'assets/img/crosscut.png')
new BeerConstructor('Seattle Cider Company', 'Basil Mint Cider', 'Cider', 'https://www.seattlecidercompany.com/', 'assets/img/seattlecider.png')
new BeerConstructor('Pyramid Brewing', 'Outburst Imperial IPA', 'Imperial IPA', 'https://www.beeradvocate.com/beer/profile/403/57934/', 'assets/img/pyramid.png')

}

