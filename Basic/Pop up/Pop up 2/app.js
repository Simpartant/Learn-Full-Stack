const open_btn = document.querySelector('.open-popup');
const close_btn = document.querySelector('.close-popup');
const popup = document.querySelector('.popup');
const main_popup = document.querySelector('.main-popup')

open_btn.addEventListener('click', ()=> {
    popup.style.visibility = 'visible';
    main_popup.classList.add('animation')
});

close_btn.addEventListener('click', ()=> {
    popup.style.visibility = 'hidden';
    main_popup.classList.remove('animation');
    
});

window.addEventListener('click', (e) =>{
    if(e.target == document.querySelector('.popup-overplay'))
    {
        popup.style.visibility = 'hidden';
        main_popup.classList.remove('animation');
    }
});