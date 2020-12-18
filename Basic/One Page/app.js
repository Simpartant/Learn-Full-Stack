const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click',()=>{
    hamburger.classList.toggle('active');
    mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', ()=>{
    var scroll_position = window.scrollY;
    if(scroll_position > 250)
    {
        header.style.backgroundColor = "#29323c";
    } else {
        header.style.backgroundColor = "transparent";
    }
});

menu_item.forEach((item)=>{
    item.addEventListener('click',()=>{
        hamburger.classList.toggle('active');
    mobile_menu.classList.toggle('active');
    })
})


const open_btn = document.querySelector('.open-popup');
const close_btn = document.querySelector('.close-popup');
const popup = document.querySelector('.popup');
const main_popup = document.querySelector('.main-popup');
const notify = document.querySelector('.notify');

open_btn.addEventListener('click', ()=> {
    popup.style.visibility = 'visible';
    main_popup.classList.add('animation')
});

close_btn.addEventListener('click', ()=> {
    popup.style.visibility = 'hidden';
    main_popup.classList.remove('animation');
    
});

notify.addEventListener('click', ()=>{
    alert('Thank You');
})

window.addEventListener('click', (e) =>{
    if(e.target == document.querySelector('.popup-overplay'))
    {
        popup.style.visibility = 'hidden';
        main_popup.classList.remove('animation');
    }
});
