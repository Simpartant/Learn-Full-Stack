const signInButton = document.querySelector('#signInButton');
const signUpButton = document.querySelector('#signUpButton');
const overplay_container = document.querySelector('.container .overplay-container');
const overplay = document.querySelector('.container .overplay-container .overplay');
const signInForm = document.querySelector('.container .sign-in');
const signUpForm = document.querySelector('.container .sign-up');


signInButton.addEventListener('click', ()=>{
    overplay_container.style.transform = 'translateX(100%)';
    overplay.style.transform = 'translate(-50%)';
    signInForm.classList.add('active');
    signUpForm.classList.remove('active');
});

signUpButton.addEventListener('click', ()=>{
    overplay_container.style.transform = 'translateX(0)';
    overplay.style.transform = 'translate(0)';
    signUpForm.classList.add('active');
    signInForm.classList.remove('active');
});

