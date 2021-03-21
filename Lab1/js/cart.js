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

let elSayhi = document.querySelector('#greeting');
if((localStorage.getItem('localUserName') !== null) && (localStorage.getItem('localUserName') !== 'null')){
    elSayhi.textContent = (greeting + ', ' + localStorage.getItem('localUserName') + '!');
}else{
    elSayhi.textContent = 'Welcome!';
}

//Get list of items in basket
let elCartList = document.querySelector('#cartList');
let listContents = '';

let listNames = ['Charvel Pro Mod DK24 HSH (Orange Satin Crush)',
                'Charvel Pro Mod DK24 HSS (Shell Pink)',
                'Charvel Pro Mod DK24 HH (Matte Blue Frost)',
                'Fender Player Series Stratocaster (Polar White)',
                'Fender Performer Series Stratocaster (Black)',
                'Fender Performer Series Telecaster (Red)',
                'Fender Player Series Telecaster (Yellow)',
                'Ibanez RGA42HP (Seafoam Green)',
                'Ibanez RG Prestige (Blue)',
                'Ibanez RG420HPFM (Autumn Leaf Gradation'];

let prices = [localStorage.getItem('HSH price'),
                localStorage.getItem('HSS price'),
                localStorage.getItem('HH price'),
                localStorage.getItem('SW price'),
                localStorage.getItem('SB price'),
                localStorage.getItem('TR price'),
                localStorage.getItem('TY price'),
                localStorage.getItem('RGA price'),
                localStorage.getItem('RGP price'),
                localStorage.getItem('RG price')];

for (let i = 0; i < 10; i++){
    if ((prices[i] !== '0') && ((prices[i] !== null) && prices[i] !== 'null')) {
        listContents = listContents + listNames[i] + ' ' + prices[i] + '\n';
    }
}

/*prices.forEach(function(item,index,array) {
    if((item !== null && item !== 'null') && (item !== '0'))
    listContents = listContents + ' ' + item;
})*/
elCartList.textContent = listContents;

let totalBill = 0;
prices.forEach(function(item,index,array){
    totalBill += parseInt(item);
})



//Ensure localStorage figures for each item are not NULL (or else cart total will not work)
if ((localStorage.getItem('HSH price') === null) || localStorage.getItem('HSH price') === 'null'){
    localStorage.setItem('HSH price','0');
}
console.log(localStorage.getItem('HSH price'))

if ((localStorage.getItem('HSS price') === null) || localStorage.getItem('HSS price') === 'null'){
    localStorage.setItem('HSS price','0');
}
console.log(localStorage.getItem('HSS price'))

if ((localStorage.getItem('HH price') === null) || localStorage.getItem('HH price') === 'null'){
    localStorage.setItem('HH price','0');
}
console.log(localStorage.getItem('HH price'))

if ((localStorage.getItem('SW price') === null) || localStorage.getItem('SW price') === 'null'){
    localStorage.setItem('SW price','0');
}
console.log(localStorage.getItem('SW price'))

if ((localStorage.getItem('SB price') === null) || localStorage.getItem('SB price') === 'null'){
    localStorage.setItem('SB price','0');
}
console.log(localStorage.getItem('SB price'))

if ((localStorage.getItem('TR price') === null) || localStorage.getItem('TR price') === 'null'){
    localStorage.setItem('TR price','0');
}
console.log(localStorage.getItem('TR price'))

if ((localStorage.getItem('TY price') === null) || localStorage.getItem('TY price') === 'null'){
    localStorage.setItem('TY price','0');
}
console.log(localStorage.getItem('TY price'))

if ((localStorage.getItem('RGA price') === null) || localStorage.getItem('RGA price') === 'null'){
    localStorage.setItem('RGA price','0');
}
console.log(localStorage.getItem('RGA price'))

if ((localStorage.getItem('RGP price') === null) || localStorage.getItem('RGP price') === 'null'){
    localStorage.setItem('RGP price','0');
}
console.log(localStorage.getItem('RGP price'))

if ((localStorage.getItem('RG price') === null) || localStorage.getItem('RG price') === 'null'){
    localStorage.setItem('RG price','0');
}
console.log(localStorage.getItem('RG price'))

//Calculate total cost
let elTotalCost = document.querySelector('#totalCost');


    let totalCost = (parseInt(localStorage.getItem('HSH price'))
                + (parseInt(localStorage.getItem('HSS price')))
                + (parseInt(localStorage.getItem('HH price')))
                + (parseInt(localStorage.getItem('SW price')))
                + (parseInt(localStorage.getItem('SB price')))
                + (parseInt(localStorage.getItem('TR price')))
                + (parseInt(localStorage.getItem('TY price')))
                + (parseInt(localStorage.getItem('RGA price')))
                + (parseInt(localStorage.getItem('RGP price')))
                + (parseInt(localStorage.getItem('RG price'))));

console.log(totalCost);
elTotalCost.textContent = 'SEK: ' + totalCost.toString();