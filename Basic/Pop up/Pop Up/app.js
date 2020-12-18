const openModalButtons = document.querySelectorAll('[data-modal-target]');
const closeModalButtons = document.querySelectorAll('[data-close-button]');
const overplay = document.getElementById('overplay');

openModalButtons.forEach(button =>{
    button.addEventListener('click', ()=>{
        const modal = document.querySelector(button.dataset.modalTarget)
        openModal(modal)
    })
})

overplay.addEventListener('click', ()=>{
    const modals = document.querySelectorAll('.modal.active')
    modals.forEach(modal => {
        closeModal(modal)
    })  
})

closeModalButtons.forEach(button =>{
    button.addEventListener('click', ()=>{
        const modal = button.closest('.modal')
        closeModal(modal)
    })
})


function openModal(modal){
    if (modal == null)return 
    modal.classList.add('active')
    overplay.classList.add('active')      
}

function closeModal(modal){
    if (modal == null)return 
    modal.classList.remove('active')
    overplay.classList.remove('active')      
}