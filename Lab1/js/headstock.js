//Greeting for login and registration
let today = new Date();
let hourNow = today.getHours();
let greeting;
if (hourNow > 18) {
    greeting = 'Good evening';
} else if (hourNow > 12) {
    greeting = 'Good afternoon';
} else if (hourNow > 0) {
    greeting = 'Good morning';
} else greeting = 'Welcome'
//document.write('<p>' + greeting + '</p>');







//Upon loading a page, check what's in localStorage and remove either login or logout elements respectively
window.onload = (event) => {
        showLocalUser();
        console.log('Onload working')
}
console.log('page is fully loaded');
let loginDiv = document.getElementById('loginDiv');
let logoutDiv = document.getElementById('logoutDiv');
const cartDiv = document.getElementById('cartIcon');
const cartDivC = document.getElementById('cartIconC');
const cartDivF = document.getElementById('cartIconF');
const cartDivI = document.getElementById('cartIconI');
if((localStorage.getItem('localUserName') !== null) && (localStorage.getItem('localUserName') !== 'null')){
    loginDiv && loginDiv.remove();
} else {
    logoutDiv && logoutDiv.remove();
}
if((localStorage.getItem('localUserName') === null) || (localStorage.getItem('localUserName') === 'null')){
    cartDiv && cartDiv.remove();
    cartDivC && cartDivC.remove();
    cartDivF && cartDivF.remove();
    cartDivI && cartDivI.remove();
}



//fetch Json data
function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
    if(parent) {
        return parent.appendChild(el);
    }
}

const userData = document.querySelector('#users');
const productData = document.querySelector('#products');
const urlUser = 'data/specialstock.json';
const urlProduct = 'data/guitars.json';

//USERDATA
fetch('data/users.json')
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data);
    });

//Can be printed out
let users = fetch(urlUser)
    .then((resp) => resp.json())
    .then(function(data) {
        console.log(data.users);
        console.log("First user object in Json file: " + data.users[0].name);
        let users = data.users;

        //return json to create an array with map()
        return users.map(function(user) {
            let li = createNode('li');
            li.innerHTML = user.name + "<br>" + " " + user.email + "<br>" + user.password + "<br>" + user.newsletter;
            append(userData, li);
        })
    })

//PRODUCTDATA
fetch('data/guitars.json')
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data);
    });

let products = fetch(urlProduct)
    .then((resp) => resp.json())
    .then(function (data) {
        console.log(data.guitars);
        console.log("First guitar object in Json file: " + data.guitars[0].name);
        let products = data.guitars;
        return products.map(function (guitar) {
            let li = createNode('li');
            li.innerHTML = guitar.brand + "<br>" + guitar.name + "<br>" + guitar.colour + "<br>" + guitar.price;
            append(productData, li);
        })
    })




//Login validation
const elLogin = document.querySelector('#logIn');
const elUsername = document.querySelector('#username');
const elExistingPassword = document.querySelector('#password');


function logIn(event) {
    let name = elUsername.value;
    let password = elExistingPassword.value;

    console.log("Username entered is: " + name);
    console.log("Password entered is: " + password);

    if((name.value !== null) && (name.value !== 'null')){
        localStorage.setItem('localUserName', name);
        localStorage.setItem('localUserPassword', password);
    }
    console.log("Username in localStorage: " + localStorage.getItem('localUserName'));
    console.log("Password in localStorage: " + localStorage.getItem('localUserPassword'));

    event.preventDefault();
    setTimeout(() => {window.location = 'index.html'}, 1000);
}
elLogin && elLogin.addEventListener('submit', logIn, false);





//Registration AND adding user input to local storage
const elForm = document.querySelector('#register');
const elName = document.querySelector('#createName');
const elEmail = document.querySelector('#createEmail')
const elPassword = document.querySelector('#createPassword')
const elNews = document.getElementById('newsBool');
const elOutput = document.querySelector('#output');
let elLocalUser = document.querySelector('#localUser');


function registerNewUser(event) {
    let newName = elName.value;
    let newEmail = elEmail.value;
    let newPassword = elPassword.value;
    let newsletter = elNews.value;

   //trying to request json file data to be able to verify if new name/email already exist in the 'database'


    if((newName.length < 1) || (newEmail.length < 1) || (newPassword.length < 5)) {
        elOutput.textContent = 'Please enter a name, email and password of more than 5 characters';
    } else {
        elOutput.textContent = (greeting + ', ' + newName + '!');   //confirms input with message
        localStorage.setItem('localUserName', newName);             //adding new data to localStorage
        localStorage.setItem('localUserEmail', newEmail);
        localStorage.setItem('localUserPassword',newPassword);
        if (elNews.checked){
            localStorage.setItem('localUserNews', 'true');
        }else {
            localStorage.setItem('localUserNews', 'false')
        }
    }

    console.log("Name entered is: " + newName);
    console.log("Email entered is: " + newEmail);
    console.log("password entered is: " + newPassword);
    console.log("Newsletter value is: " + (elNews.checked));
    console.log("greeting is: " + greeting);

    event.preventDefault();
    setTimeout(() => {window.location = 'index.html'},1500);
    showLocalUser();
}
elForm && elForm.addEventListener('submit', registerNewUser, false);



//test to see that localStorage has accepted the input
function showLocalUser() {
    elLocalUser.textContent = '';
    console.log(elLocalUser.textContent);
    console.log(localStorage.getItem('localUserName'));

    if(localStorage.getItem('localUserName') !== null && (localStorage.getItem('localUserName') !== 'null')){
        elLocalUser.textContent = 'You are logged in as ' + (document.querySelector('#localUser').innerHTML
            = localStorage.getItem('localUserName') + ' with email address ' + localStorage.getItem('localUserEmail')
        + ' you are now being redirected.');
    }
    console.log(elLocalUser.textContent);
}
const elShowLocalUser = document.querySelector('#registerButton');
//elShowLocalUser.addEventListener("click", showLocalUser);





function logOut() {
    /*localStorage.setItem('localUserName', null);
    localStorage.setItem('localUserEmail', null);
    localStorage.setItem('localUserPassword', null);
    localStorage.setItem('localUserNews', null);*/
    localStorage.clear();
    console.log('USER LOGGED OUT');
    window.location.reload();
}
const elLogOut = document.querySelector('.logOut');
elLogOut && elLogOut.addEventListener("click", logOut);


console.log("localstorage name: " + (localStorage.getItem('localUserName')));
console.log("localstorage email: " + (localStorage.getItem('localUserEmail')));
console.log("localstorage password: " + (localStorage.getItem('localUserPassword')));
console.log("localstorage newsletter: " + (localStorage.getItem('localUserNews')));

let elSayhi = document.querySelector('#greeting');
if((localStorage.getItem('localUserName') !== null) && (localStorage.getItem('localUserName') !== 'null')){
    elSayhi.textContent = (greeting + ', ' + localStorage.getItem('localUserName') + '!');
}else{
    elSayhi.textContent = 'Welcome!';
}




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

