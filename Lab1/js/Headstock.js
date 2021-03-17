//Greeting for Cart page
let today = new Date();
let hourNow = today.getHours();
let greeting;
if (hourNow > 18) {
    greeting = 'Good evening';
} else if (hourNow > 12) {
    greeting = 'Good afternoon!';
} else if (hourNow > 0) {
    greeting = 'Good morning!';
} else greeting = 'Welcome back!'
document.write('<p>' + greeting + '</p>');

//Registration validation

