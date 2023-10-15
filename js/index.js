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

let list = document.querySelector('.list');
let listCookie = document.querySelector('.listCookie');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');
let quantityCookie = document.querySelector('.quantityCookie');

let productsCoffee = [
    {
        id: 1,
        name: 'Matcha Coffee',
        image: 'https://s3-alpha-sig.figma.com/img/1c59/38a8/f392780c67a307e33f502397b884c024?Expires=1698019200&Signature=ZkisdMGvo-wTyyJcJlNMrdIAzaZFRWd-dJsBuGGd-EyYubKYcHgtSaUx9HD1E5gqHD8PRIsdLhA86ltHyV75STcPQN~hCXhzM2jA77wXGhvk1Dh9yQMXfesS2cjpZVwbn2lL-YWx24hGftZ3xeegDH92CEukQYyYnYO7mCugO~AK99uobsS1jkohI4PkWPp3PX-NwgJe~xOrQVDxaBPmoO1iuTcWYLg9KnWAotagrvP0br5FsV9W~Jdpjkqw-p7HQPk0mxuR6ji1VFP7qB0707hMtqiQqHhR1YTyAf-vpTovkzBKRjcjqe1LDLV2JStLg7outj8KgsM4I6o4P4sosw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
        des :'This coffee is made using real coffee beans with a macha mixture.',
        price: 22000
    },
    {
        id: 2,
        name: 'Coffee Beans Original',
        image: 'https://s3-alpha-sig.figma.com/img/6d53/9090/eb8b45fd71f9e4853e34e6f5f472568f?Expires=1698019200&Signature=YNuu9CQsywQBjUtPf7SQn6zNoOCgaUgO4lIT3Yx9TPzoWj7l8N5MZUm4~6Tn24MKjPBf6FbdLYC748kRk7h-AjgCHys1ITiKkO6IBguOHShNnSNwbvb0QJwEOYKXvZ7H5MXEYZGZj2Aokm~mTh-MsoMbVvfEyYdOmP4SLaap9srs00pML~uMdBcN9ZieRdrs7Dm75ZQPRgAO7ov0nBtGtmmJ7f0RiuM1mpfqLGa-pbdnxLC5ut1FRjkmjr3ppgUAg4fx4seLR5ZHeA5bShkyHzycJP0qp~B5-I3RNjZ616aTEn5MvP9bUnuMlW7KOSP6rEf4WA0R4eGTzeWag75VCw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
        des :'This coffee is made using real coffee beans.<br><br>',
        price: 10000
    },
    {
        id: 3,
        name: 'Coffee Beans Special',
        image: 'https://s3-alpha-sig.figma.com/img/9aee/0692/faa9d4327ca88c1d0c3a421794c82813?Expires=1698019200&Signature=kzPhUc0qgduXeNt4BdTB0mrzQy4BriMyjDYH5uLHCcpQ8bcXX2Tcv-tL-5fDZXTHCYJ48WnWM1-XECyvQDW-Yp7GI7NXpN4wdKfcWUhHeWIgdDpzBYsLW26zViE7mQ73dJdFJGtjmTJnmzLJvW6ipIJHzqhc2X4Foav3BzJarUCoCtJCxXJV4NJPacuos2Mm4ErPW9H1MZp5A32oSa52ojVZ-vqZQnnjt5r-UkULR-Iq5kQ~webMLwWJH0Cpw0M7lIMrUFK0YyjBxVWnUWwNOEFzDCnb~SCH44BzZlRF2t~6euwoL0J2kwgWYrd1Rw2QTTx54qsCoEbm3UKH0lXmTg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
        des :'This coffee is made using real coffee beans <br><br>',
        price: 15000
    },
    {
        id: 4,
        name: 'Expresso Coffee',
        image: 'https://s3-alpha-sig.figma.com/img/a0fe/5ed2/ac9b891747618c6a7c3616cec47f554e?Expires=1698019200&Signature=izoq0j59jOvP7S54faIbrjt5hbA8ytdZ~OX5~ureiZOqbJvQ4JyzXcURShA~wDPf6yjp1XPKr3abZMfbspB5BkSrCv~JTOhcg5hVWRiVP7czK1GJl6ti~HWAxPzYHQXYPF7ZxmeTkQIsFwH0T4WfjDvrbKOOTSY4Xdl79l10QQPoDRx5sLNw1qcaFaOysEidkd9PMWQaOCig9R9pr~tVSZPOLIxvl4hIL5mt45mOF7WT5MKt0BazrVjaeVY2BZyD5liQBqKt5BcWMKVaXZQ~gz0nbssaT1XTgaXqnloNWL0rQ-tJdxkPxJyuMOsQEbYECi8fKMEk4Mreiah0iOWYtw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
        des :'This coffee is made using real coffee beans with expresso<br><br>',
        price: 24000
    },
    {
        id: 5,
        name: 'Coffee Tea',
        image: 'https://s3-alpha-sig.figma.com/img/cd95/7b7b/ef56b0bc809b0483fcdd5ec27697fc2d?Expires=1698019200&Signature=HNc5S3Zg6UoOzSHb86Ta5J5-I7eRzo9WSlc8OMgXd9FVZ2hUzJ2sseednob7utRItn3I7KvRXpNQ-OgCpMpIHVYtvU6d~Gw8XVoKjSfLXkgCgyg658IUDqept4lM7e13OU-mUE6wqveJMl5HqqRBTFSbsbfsTXuyNOI4FqHxN7Qsyhou0tWB0q0aXszfcyr3w3eIy67hkuuZUsPtYxfT-RzegK0Hjoe1oi54AoChXsgNCgO1NewNw8A9NH~I0-4ixDUI6o9q4dS5D5BuABf4KmIh4YW79gyLTaQ4pxIPUPp89xdY8XL9aIyg6uF6qIz51exNdBHcBp3BuJtjYUjFbw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
        des :'This coffee is made using real coffee beans blend with special tea.<br>',
        price: 20000
    },
    {
        id: 6,
        name: 'Black Coffee',
        image: 'https://www.figma.com/file/ck6wKL0g8Wz8rumBJEY86j/image/39fb3d84d5a64054e2de4bfc034ebdb9a71ec91d',
        des :'This coffee is made using real pure coffee beans .<br><br>',
        price: 17000
    },
];
let listCards  = [];
function initApp(){
    productsCoffee.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <div class='menu-item'>
                <img src="${value.image}">
                <div class='des'>
                    <h3 class="title"> ${value.name}</h3>
                    <p>${value.des}</p>
                    <p class="price">Rp.${value.price.toLocaleString()}</p>
                    <div class='buy' onclick="addToCard(${key})">
                        Add to cart
                    </div>    
                </div>    
            </div>`;
        list.appendChild(newDiv);
    })
}
initApp();
function addToCard(key){
    if(listCards[key] == null){
        // copy product form list to list card
        listCards[key] = JSON.parse(JSON.stringify(productsCoffee[key]));
        listCards[key].quantity = 1;
    }
    reloadCard();
}
function reloadCard(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key)=>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div class='Order'>
                    <img src="${value.image}"/>
                    <div class='des'>
                        <h3>${value.name}</h3>
                        <p>${value.des}</p>
                        <div class='price'>
                        <p>Rp.${value.price.toLocaleString()}</p>
                        </div>
                    </div>
                    <div class='addQ'>
                        <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                        <div class="count">${value.quantity}</div>
                        <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                    </div>
                </div>`;
                listCard.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}
function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCards[key];
    }else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * productsCoffee[key].price;
    }
    reloadCard();
}