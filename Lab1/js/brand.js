
//ADDING ITEM(S) TO CART
//Create element variable for each product to link to specific HTML form
//Charvel
const elFormPurchaseHSH = document.querySelector('#formPurchaseHSH');
const elOrderOutputHSH = document.querySelector('#orderOutputHSH');
const elFormPurchaseHSS = document.querySelector('#formPurchaseHSS');
const elOrderOutputHSS = document.querySelector('#orderOutputHSS');
const elFormPurchaseHH = document.querySelector('#formPurchaseHH');
const elOrderOutputHH = document.querySelector('#orderOutputHH');
//Fender
const elFormPurchaseSW = document.querySelector('#formPurchaseSW');
const elOrderOutputSW = document.querySelector('#orderOutputSW');
const elFormPurchaseSB = document.querySelector('#formPurchaseSB');
const elOrderOutputSB = document.querySelector('#orderOutputSB');
const elFormPurchaseTR = document.querySelector('#formPurchaseTR');
const elOrderOutputTR = document.querySelector('#orderOutputTR');
const elFormPurchaseTY = document.querySelector('#formPurchaseTY');
const elOrderOutputTY = document.querySelector('#orderOutputTY');
//Ibanez
const elFormPurchaseRGA = document.querySelector('#formPurchaseRGA');
const elOrderOutputRGA = document.querySelector('#orderOutputRGA');
const elFormPurchaseRGP = document.querySelector('#formPurchaseRGP');
const elOrderOutputRGP = document.querySelector('#orderOutputRGP');
const elFormPurchaseRG = document.querySelector('#formPurchaseRG');
const elOrderOutputRG = document.querySelector('#orderOutputRG');

//Set variables to retrieve number ordered and establish price per unit
//Charvel
const elNumberHSH = document.querySelector('#numberHSH');
const priceHSH = 10599;
const elNumberHSS = document.querySelector('#numberHSS');
const priceHSS = 9555;
const elNumberHH = document.querySelector('#numberHH');
const priceHH = 10599;
//Fender
const elNumberSW = document.querySelector('#numberSW');
const priceSw = 7499;
const elNumberSB = document.querySelector('#numberSB');
const priceSB = 14995;
const elNumberTR = document.querySelector('#numberTR');
const priceTR = 7900;
const elNumberTY = document.querySelector('#numberTY');
const priceTY = 5500;

//Ibanez
const elNumberRGA = document.querySelector('#numberRGA');
const priceRGA = 8499;
const elNumberRGP = document.querySelector('#numberRGP');
const priceRGP = 15995;
const elNumberRG = document.querySelector('#numberRG');
const priceRG= 8000;

//Methods to call for eah item when purchase forms are submitted
//CHARVEL
function addHSHToCart(event) {
    let orderHSH = parseInt(elNumberHSH.value) * priceHSH;
    localStorage.setItem('HSH price', orderHSH.toString());

    elOrderOutputHSH.textContent = 'HSH ORDER TOTAL: ' + localStorage.getItem('HSH price');
    console.log(localStorage.getItem('HSH price'));

    setTimeout(() => {window.location = 'charvel.html'}, 1000);
    event.preventDefault();
}
elFormPurchaseHSH && elFormPurchaseHSH.addEventListener('submit', addHSHToCart, false);


function addHSSToCart(event){
    let orderHSS = parseInt(elNumberHSS.value) * priceHSS;
    localStorage.setItem('HSS price', orderHSS.toString());

    elOrderOutputHSS.textContent = 'HSS ORDER TOTAL: ' + localStorage.getItem('HSS price');
    console.log(localStorage.getItem('HSS price'));

    setTimeout(() => {window.location = 'charvel.html'}, 1000);
    event.preventDefault();
}
elFormPurchaseHSS && elFormPurchaseHSS.addEventListener('submit', addHSSToCart, false);


function addHHToCart(event){

    let orderHH = parseInt(elNumberHH.value) * priceHH;
    localStorage.setItem('HH price', orderHH.toString());

    elOrderOutputHH.textContent = 'HH ORDER TOTAL: ' + localStorage.getItem('HH price');
    console.log(localStorage.getItem('HH price'));

    setTimeout(() => {window.location = 'charvel.html'}, 1000);
    event.preventDefault();
}
elFormPurchaseHH && elFormPurchaseHH.addEventListener('submit',addHHToCart,false);


//FENDER
function addSWToCart(event){

    let orderSW = parseInt(elNumberSW.value) * priceSw;
    localStorage.setItem('SW price', orderSW.toString());

    console.log(localStorage.getItem('SW price'));

    setTimeout(() => {window.location = 'fender.html'}, 1000);
    event.preventDefault();
}
elFormPurchaseSW && elFormPurchaseSW.addEventListener('submit',addSWToCart,false);

function addSBToCart(event){

    let orderSB = parseInt(elNumberSB.value) * priceSB;
    localStorage.setItem('SB price', orderSB.toString());

    console.log(localStorage.getItem('SB price'));

    setTimeout(() => {window.location = 'fender.html'}, 1000);
    event.preventDefault();
}
elFormPurchaseSB && elFormPurchaseSB.addEventListener('submit',addSBToCart,false);

function addTRToCart(event){

    let orderTR = parseInt(elNumberTR.value) * priceTR;
    localStorage.setItem('TR price', orderTR.toString());

    console.log(localStorage.getItem('TR price'));

    setTimeout(() => {window.location = 'fender.html'}, 1000);
    event.preventDefault();
}
elFormPurchaseTR && elFormPurchaseTR.addEventListener('submit',addTRToCart,false);

function addTYToCart(event){

    let orderTY = parseInt(elNumberTY.value) * priceTY;
    localStorage.setItem('TY price', orderTY.toString());

    console.log(localStorage.getItem('TY price'));

    setTimeout(() => {window.location = 'fender.html'}, 1000);
    event.preventDefault();
}
elFormPurchaseTY && elFormPurchaseTY.addEventListener('submit',addTYToCart,false);


//IBANEZ
function addRGAToCart(event){

    let orderRGA = parseInt(elNumberRGA.value) * priceRGA;
    localStorage.setItem('RGA price', orderRGA.toString());

    console.log(localStorage.getItem('RGA price'));

    setTimeout(() => {window.location = 'ibanez.html'}, 1000);
    event.preventDefault();
}
elFormPurchaseRGA && elFormPurchaseRGA.addEventListener('submit',addRGAToCart,false);

function addRGPToCart(event){

    let orderRGP = parseInt(elNumberRGP.value) * priceRGP;
    localStorage.setItem('RGP price', orderRGP.toString());

    console.log(localStorage.getItem('RGP price'));

    setTimeout(() => {window.location = 'ibanez.html'}, 1000);
    event.preventDefault();
}
elFormPurchaseRGP && elFormPurchaseRGP.addEventListener('submit',addRGPToCart,false);

function addRGToCart(event){

    let orderRG = parseInt(elNumberRG.value) * priceRG;
    localStorage.setItem('RG price', orderRG.toString());

    console.log(localStorage.getItem('RG price'));

    setTimeout(() => {window.location = 'ibanez.html'}, 1000);
    event.preventDefault();
}
elFormPurchaseRG && elFormPurchaseRG.addEventListener('submit',addRGToCart,false);


