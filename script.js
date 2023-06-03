const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopUp = document.querySelector('.btnregi-popup');
const PopUpClose = document.querySelector('.icon-close');


loginLink.addEventListener('click', ()=> {
    wrapper.classList.remove('active');
});

btnPopUp.addEventListener('click', ()=> {
    wrapper.classList.add('active-popup');
});

PopUpClose.addEventListener('click', ()=> {
    wrapper.classList.remove('active-popup');
});
