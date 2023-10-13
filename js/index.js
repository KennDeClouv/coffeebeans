// ? AVE HAMBURGER MENU //
const burgerButton = document.querySelector('#burgerClick');
const burgerBody = document.querySelector('nav ul');
const bur1 = document.querySelector('#span1');
const bur2 = document.querySelector('#span2');
const bur3 = document.querySelector('#span3');


burgerButton.addEventListener('click', function(){
    burgerBody.classList.toggle('active')
})
burgerButton.addEventListener('click', function(){
    bur1.classList.toggle('ac1')
})
burgerButton.addEventListener('click', function(){
    bur2.classList.toggle('ac2')
})
burgerButton.addEventListener('click', function(){
    bur3.classList.toggle('ac3')
})

document.addEventListener('click',function (e){
    if(!burgerBody.contains(e.target) && !burgerButton.contains(e.target)){
        burgerBody.classList.remove('active');
        bur1.classList.remove('ac1');
        bur2.classList.remove('ac2');
        bur3.classList.remove('ac3');
    }
})
