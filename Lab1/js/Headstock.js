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

}
console.log('page is fully loaded');
let loginDiv = document.getElementById('loginDiv');
let logoutDiv = document.getElementById('logoutDiv');
if((localStorage.getItem('localUserName') !== null) && (localStorage.getItem('localUserName') !== 'null')){
    loginDiv && loginDiv.remove();
} else {
    logoutDiv && logoutDiv.remove();
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
const urlUser = 'data/users.json';
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
            = localStorage.getItem('localUserName') + ' with email address ' + localStorage.getItem('localUserEmail'));
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






