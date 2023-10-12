const burgerButton = document.querySelector('.burger input');
const burgerBody = document.querySelector('nav ul');

burgerButton.addEventListener('click', function(){
    burgerBody.classList.toggle('active')
})