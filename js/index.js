// ? AVE HAMBURGER MENU //
const burgerButton = document.querySelector('#burgerClick');
const burgerBody = document.querySelector('nav ul');
const bur1 = document.querySelector('#span1');
const bur2 = document.querySelector('#span2');
const bur3 = document.querySelector('#span3');
let V = document.querySelector('#pagetitle').innerHTML;
const X1 = document.querySelector('nav ul li:nth-child(1) a');
const X2 = document.querySelector('nav ul li:nth-child(2) a');
const X3 = document.querySelector('nav ul li:nth-child(3) a');
const X4 = document.querySelector('nav ul li:nth-child(4) a');
const cartButtton = document.querySelector('#cartButton');

// burger active
burgerButton.addEventListener('click', function () {
    burgerBody.classList.toggle('active')
})
// burger animation active
burgerButton.addEventListener('click', function () {
    bur1.classList.toggle('ac1')
})
burgerButton.addEventListener('click', function () {
    bur2.classList.toggle('ac2')
})
burgerButton.addEventListener('click', function () {
    bur3.classList.toggle('ac3')
})
// click even burgerBody and burgerButton
document.addEventListener('click', function (e) {
    if (!burgerBody.contains(e.target) && !burgerButton.contains(e.target)) {
        burgerBody.classList.remove('active');
        bur1.classList.remove('ac1');
        bur2.classList.remove('ac2');
        bur3.classList.remove('ac3');
    }
})

// navLink active
if (V == 'CoffeeBeans | Home') {
    X1.classList.add('l-active');
}
else if (V == 'CoffeeBeans | Menu') {
    X2.classList.add('l-active');
}
else if (V == 'CoffeeBeans | News') {
    X3.classList.add('l-active');
}
else {
    X4.classList.add('l-active');
}

cartButtton.addEventListener('click', () => {
    document.querySelector('#main-menu').classList.toggle('main-disactive');
    document.querySelector('#main-menu').classList.toggle('main-active');
    document.querySelector('#main-cart').classList.toggle('main-disactive');
    document.querySelector('#main-cart').classList.toggle('main-active');
})

// Order button
const MCB = document.querySelector('#matchaCoffeeButton');
const OCB = document.querySelector('#originalCoffeeButton');
const SCB = document.querySelector('#specialCoffeeButton');
// Order box
const MCO = document.querySelector('#matchaCoffeeOrder');
const OCO = document.querySelector('#originalCoffeeOrder');
const SCO = document.querySelector('#specialCoffeeOrder');
// Trash
const MCT = document.querySelector('#matchaCoffeeTrash');
const OCT = document.querySelector('#originalCoffeeTrash');
const SCT = document.querySelector('#specialCoffeeTrash');

const GTO = document.querySelector('#gotoorder')



// Matcha coffee
MCB.addEventListener('click', () => {
    MCO.classList.remove('disactive');
    alert("Sucsess to add Matcha Coffee on your cart");
    GTO.classList.add('disactive');
    // MCO.setAttribute("aria-valuenow", "22000");
})
MCT.addEventListener('click', () => {
    MCO.classList.add('disactive');
    alert("Remove Matcha Coffee from your cart");
    // GTO.classList.remove('disactive')
})

// Original coffee
OCB.addEventListener('click', () => {
    OCO.classList.remove('disactive')
    alert("Sucsess to add Original Beans Coffee to your cart");
    GTO.classList.add('disactive')
    // OCO.setAttribute("aria-valuenow", "10000");
})
OCT.addEventListener('click', () => {
    OCO.classList.add('disactive');
    alert("Remove Original Beans Coffee from your cart");
    // GTO.classList.remove('disactive')
})

// Special coffee
SCB.addEventListener('click', () => {
    SCO.classList.remove('disactive')
    alert("Sucsess to add Special Beans Coffee to your cart");
    GTO.classList.add('disactive')
    // SCO.setAttribute("aria-valuenow", "15000");
})
SCT.addEventListener('click', () => {
    SCO.classList.add('disactive');
    alert("Remove Special Beans Coffee from your cart");
    // GTO.classList.remove('disactive')
})

// let MCOP = document.querySelector('#matchaCoffeeOrder').ariaValueNow;
// let OCOP = document.querySelector('#originalCoffeeOrder').ariaValueNow;
// let SCOP = document.querySelector('#specialCoffeeOrder').ariaValueNow;

// console.log(MCB,OCB,SCB,MCO,OCO,SCO,MCOP)

// let price = MCOP.toString;
// console.log(parseInt(MCOP));
// if (MCB.classList.contains(e) && SCB.classList.contains(e) && SCO.classList.contains(e)) {
//     GTO.e.classList.add('disactive');
// console.log('lpo');
// }
// else{
//     GTO.classList.add('active');
// }
// const Menu = document.querySelector('#orderMenu');
// let newDiv = document.createElement('div');
// newDiv.innerHTML = `
// <h1>WOI</h1>
// `;
// Menu.appendChild("newDiv");
// let MCOP =0;
// if(MCB.classList.toggle('active')=="true"){
//     let MCOP= 22000;
// }
// console.log(parseInt(MCOP))

