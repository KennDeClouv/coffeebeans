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
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

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



let listCookie = document.querySelector('.listCookie');
let quantityCookie = document.querySelector('.quantityCookie');
let listCardCookie = document.querySelector('.listCardCookie');


let productsCookie = [
    {
        id: 7,
        name: 'Donuts Squad',
        image: 'https://s3-alpha-sig.figma.com/img/b397/d755/7ec6da514cb64381633776237aa9c1e2?Expires=1698624000&Signature=Hgb~2U~-0BGXwQrtAEZUrxTz63LxLgVDYtRH2HiPoP5qyzGXMKmCmY1EueDlgDl5g0sE6-013nqjrk~~J0u1RDfB09uXSp9VVy~F7aQ57eg9xROMOSlnYhrsjW3eT-e0aZOKAlIrsgx9F6sjeuIPU2Xzv7stGSTVjUKqkB63T~3NNFFwumwuSAwLFAV8X37eXFaR22UeiUPfevY3wtmmz9XWKHOSguRGUv7h2RrX1ScmeT9zLvAWgpuOp5POor8UO0F~IlexhTITKnQd-pNlxOChkPuLAkUZL0DH6sawSnQ-BkZl45lOAGsApQre8EzgslzB1D~QaDjPFNFrOl8aoA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
        des :'This is the best donuts dessert with custom variant and low price. <br><br>',
        price: 30000
    },
    {
        id: 8,
        name: 'Coffee Beans Original',
        image: 'https://s3-alpha-sig.figma.com/img/d282/dd1f/3a9e4be74c452905efb765c147a64c92?Expires=1698624000&Signature=gYJOHj-xVxIYgkA2iTMBprrXP9Wtat8PuDVzxEOpHwQeBFHEM2hyVAFmSYNH-QIEUEyetzZExZTkUrqbUi~5kxi322JH-6KbcKtZPfQka~z08xgNXDkN7Wic9GOfH6Crg16BAFF5tfoet5A6PXJvOSfAx4N-lkpD9GdWLUs13ekpFZQvfJOvOIZF7mPVmHWzKUd3kfNI83CfBkUyPZtgh359AN47-LTrrVrB9HRPnFBC8Mjos3QlvhDfDgqe0o4F-RF9syDaKHmNMaGbrsYqRGvGr1pFe~jBqd2LuZPb6FhNWLP~BUdw04FPtySX5HDULCPT3CHgqsjmm~MhLwDCiw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
        des :'This coffee is made using real coffee beans.<br><br>',
        price: 10000
    },
    {
        id: 9,
        name: 'Coffee Beans Special',
        image: 'https://s3-alpha-sig.figma.com/img/b57b/26cb/74b2517baf120f03a123a42cb026cbbe?Expires=1698624000&Signature=Ah5DvRISpLH4GylKT-xQpPV9FwS8rdlGe7hMM4Xw7XuPaqp6a4euvK9eslB3F~FetXVfWL4wuljBb0WH9uNkX4R3h2ZSnGadRQ4f9k~bNN0LFbLEY-jNcqkskhrkWPCcI5GMeDUg-aKILUeVGxi5cUV~MVu5XtZQUtKqnUTfqVbIPYPt6cbw6hNHJdP7Lgbo7H4IekQpJuOy1YaIuUV1jCNHJHEdE9iBshXDvqhLcdILgi4qm3XjuWLpHRF0ilnZhdkVqWle0BjuejxMBOaO7N-dZFgo-XVI3ciCwN7w-ygTQNAY2HjX9cDh0pXqQvo7TcMeFtJnuli5JA2fXWBUWw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
        des :'This coffee is made using real coffee beans <br><br>',
        price: 15000
    },
    {
        id: 10,
        name: 'Expresso Coffee',
        image: 'https://s3-alpha-sig.figma.com/img/b27a/e763/ec2c78eb6de00c0c027eb88168078f87?Expires=1698624000&Signature=FDIZTn8CEHs2zWkQ970IDgSQmWb7bodKPbzm9KBQN0S7JumpMks9vGZGKJwtPpkF-TcZKpGF16Ra1hBtmN84Dw7~nXKN5w8tho2sqVeeP4bGDybOexFwTwpL4ntYxRFp3xVyzIQLXFu9MNh7lVBYDNvK8RyJp1XdkT9hPmYn2ozMvrWKj847RERv-kOcCytBUq4K~10nokjqiy6p4oE4XaWw3nCKWy7CWJN-CX3lVarS4H1zPszj0Q0efdEbqks28OIFPVcCdwVbZemi3fSb5ZH52ZY0ZIsqVmnA2qsn-MfT~8T6C7u6Ze1nJMXhaVjdFdOAZ-zSmGk4ViJXurXJzw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
        des :'This coffee is made using real coffee beans with expresso<br><br>',
        price: 24000
    },
    {
        id: 11,
        name: 'Coffee Tea',
        image: 'https://s3-alpha-sig.figma.com/img/cd95/7b7b/ef56b0bc809b0483fcdd5ec27697fc2d?Expires=1698019200&Signature=HNc5S3Zg6UoOzSHb86Ta5J5-I7eRzo9WSlc8OMgXd9FVZ2hUzJ2sseednob7utRItn3I7KvRXpNQ-OgCpMpIHVYtvU6d~Gw8XVoKjSfLXkgCgyg658IUDqept4lM7e13OU-mUE6wqveJMl5HqqRBTFSbsbfsTXuyNOI4FqHxN7Qsyhou0tWB0q0aXszfcyr3w3eIy67hkuuZUsPtYxfT-RzegK0Hjoe1oi54AoChXsgNCgO1NewNw8A9NH~I0-4ixDUI6o9q4dS5D5BuABf4KmIh4YW79gyLTaQ4pxIPUPp89xdY8XL9aIyg6uF6qIz51exNdBHcBp3BuJtjYUjFbw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
        des :'This coffee is made using real coffee beans blend with special tea.<br>',
        price: 20000
    },
    {
        id: 12,
        name: 'Black Coffee',
        image: 'https://www.figma.com/file/ck6wKL0g8Wz8rumBJEY86j/image/39fb3d84d5a64054e2de4bfc034ebdb9a71ec91d',
        des :'This coffee is made using real pure coffee beans .<br><br>',
        price: 17000
    },
];

let listCardsCookie = [];
function initAppCookie(){
    productsCookie.forEach((value, key) =>{
        let newDivCookie = document.createElement('div');
        newDivCookie.classList.add('itemCookie');
        newDivCookie.innerHTML = `
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
        listCookie.appendChild(newDivCookie);
    })
}
initAppCookie();
function addToCardCookie(key){
    if(listCardsCookie[key] == null){
        // copy product form list to list card
        listCardsCookie[key] = JSON.parse(JSON.stringify(productsCookie[key]));
        listCardsCookie[key].quantityCookie = 1;
    }
    reloadCardCookie();
}
function reloadCardCookie(){
    listCardCookie.innerHTML = '';
    let countCookie = 0;
    let totalPriceCookie = 0;
    listCardsCookie.forEach((value, key)=>{
        totalPriceCookie = totalPriceCookie + value.priceCookie;
        countCookie = countCookie + value.quantityCookie;
        if(valueCookie != null){
            let newDivCookie = document.createElement('li');
            newDivCookie.innerHTML = `
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
                        <button onclick="changeQuantity(${key}, ${value.quantityCookie - 1})">-</button>
                        <div class="count">${value.quantityCookie}</div>
                        <button onclick="changeQuantity(${key}, ${value.quantityCookie + 1})">+</button>
                    </div>
                </div>`;
                listCardCookie.appendChild(newDivCookie);
        }
    })
    totalCookie.innerText = totalPriceCookie.toLocaleString();
    quantityCookie.innerText = countCookie;
}
function changeQuantityCookie(key, quantityCookie){
    if(quantityCookie == 0){
        delete listCardsCookie[key];
    }else{
        listCardsCookie[key].quantityCookie = quantityCookie;
        listCardsCookie[key].priceCookie = quantityCookie * productsCookie[key].priceCookie;
    }
    reloadCardCookie();
}