const meio = document.querySelector('.meio');
const registerLink = document.querySelector('.register-link');
const loginLink = document.querySelector('.login-link');
const btnpopup = document.querySelector('.btnLogin-popup');
const iconclose = document.querySelector('.icon-close');

registerLink.addEventListener('click', ()=> {
    meio.classList.add('active');
});

loginLink.addEventListener('click', ()=> {
    meio.classList.remove('active');
});


btnpopup.addEventListener('click', ()=> {
    meio.classList.add('active-popup');
});


iconclose.addEventListener('click', ()=> {
    meio.classList.remove('active-popup');
});